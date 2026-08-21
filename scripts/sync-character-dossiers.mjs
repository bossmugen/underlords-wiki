import fs from "node:fs/promises";
import path from "node:path";

const owner = "bossmugen";
const repo = "underlords";
const ref = "master";
const sourceDir = "src/content/people";
const outputPath = path.resolve("src/data/character-dossiers.generated.json");

const requiredPriorityIds = [
  "mugen",
  "gabu","anayss","ansun","wolfphenix","sye","ren","gilli","oyasumi","snow","anthos","daya",
  "hyaluna","ritha","suzimasu","yumi","illien","key","nelph","kiro",
  "kaede","feli","lan","nemo","rummy",
  "shiki","han","mia","nobu","moon"
];

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function inlineMarkdown(value) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__([^_]+)__/g, "<strong>$1</strong>");
  text = text.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");
  return text;
}

function splitMarkdown(markdown) {
  if (!markdown.startsWith("---")) return { frontmatter: "", body: markdown };
  const second = markdown.indexOf("\n---", 3);
  if (second === -1) return { frontmatter: "", body: markdown };
  const bodyStart = markdown.indexOf("\n", second + 4);
  return {
    frontmatter: markdown.slice(4, second),
    body: bodyStart === -1 ? "" : markdown.slice(bodyStart + 1)
  };
}

function yamlScalar(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return "";
  if (raw.startsWith('"') && raw.endsWith('"')) {
    try { return JSON.parse(raw); } catch { return raw.slice(1, -1).replaceAll('\\"', '"'); }
  }
  if (raw.startsWith("'") && raw.endsWith("'")) return raw.slice(1, -1).replaceAll("''", "'");
  return raw;
}

function parseFrontmatter(frontmatter) {
  const lines = frontmatter.replace(/\r\n/g, "\n").split("\n");
  const claims = [];
  const antiFanon = [];
  const relatedPeople = [];
  let mode = "";
  let claim = null;

  const flushClaim = () => {
    if (claim?.text) claims.push(claim);
    claim = null;
  };

  for (const line of lines) {
    const topLevel = line.match(/^([A-Za-z][A-Za-z0-9_-]*):(?:\s*(.*))?$/);
    if (topLevel) {
      if (mode === "claims") flushClaim();
      mode = topLevel[1];
      continue;
    }

    if (mode === "claims") {
      const newClaim = line.match(/^\s{2}-\s+text:\s*(.*)$/);
      if (newClaim) {
        flushClaim();
        claim = { text: yamlScalar(newClaim[1]) };
        continue;
      }
      const field = line.match(/^\s{4}(evidence|date):\s*(.*)$/);
      if (field && claim) claim[field[1]] = yamlScalar(field[2]);
      continue;
    }

    if (mode === "antiFanon") {
      const item = line.match(/^\s{2}-\s+(.*)$/);
      if (item) antiFanon.push(yamlScalar(item[1]));
      continue;
    }

    if (mode === "relatedPeople") {
      const item = line.match(/^\s{2}-\s+(.*)$/);
      if (item) relatedPeople.push(yamlScalar(item[1]));
    }
  }
  if (mode === "claims") flushClaim();
  return { claims, antiFanon, relatedPeople };
}

function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let paragraph = [];
  let list = [];
  let quote = [];
  let skippedFirstH1 = false;

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${inlineMarkdown(paragraph.join(" ").trim())}</p>`);
    paragraph = [];
  };
  const flushList = () => {
    if (!list.length) return;
    html.push(`<ul>${list.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
    list = [];
  };
  const flushQuote = () => {
    if (!quote.length) return;
    html.push(`<blockquote><p>${inlineMarkdown(quote.join(" ").trim())}</p></blockquote>`);
    quote = [];
  };
  const flushAll = () => { flushParagraph(); flushList(); flushQuote(); };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    if (!line.trim()) { flushAll(); continue; }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      flushAll();
      if (heading[1].length === 1 && !skippedFirstH1) { skippedFirstH1 = true; continue; }
      const level = Math.min(4, Math.max(2, heading[1].length + 1));
      html.push(`<h${level}>${inlineMarkdown(heading[2])}</h${level}>`);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph(); flushQuote();
      list.push(line.replace(/^[-*]\s+/, ""));
      continue;
    }

    if (/^>\s?/.test(line)) {
      flushParagraph(); flushList();
      quote.push(line.replace(/^>\s?/, ""));
      continue;
    }

    paragraph.push(line.trim());
  }
  flushAll();
  return html.join("\n");
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { "User-Agent": "underlords-wiki-dossier-sync", "Accept": "application/vnd.github+json" } });
  if (!response.ok) throw new Error(`GitHub source listing failed: ${response.status} ${response.statusText}`);
  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url, { headers: { "User-Agent": "underlords-wiki-dossier-sync" } });
  if (!response.ok) throw new Error(`Dossier fetch failed: ${response.status} ${response.statusText} · ${url}`);
  return response.text();
}

async function main() {
  const listingUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${sourceDir}?ref=${ref}`;
  const items = await fetchJson(listingUrl);
  const markdownFiles = items.filter((item) => item.type === "file" && item.name.endsWith(".md"));
  const output = {};

  const concurrency = 8;
  let cursor = 0;
  async function worker() {
    while (cursor < markdownFiles.length) {
      const item = markdownFiles[cursor++];
      const id = item.name.replace(/\.md$/i, "");
      const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${ref}/${sourceDir}/${encodeURIComponent(item.name)}`;
      const markdown = await fetchText(rawUrl);
      const { frontmatter, body: rawBody } = splitMarkdown(markdown);
      const body = rawBody.trim();
      const meta = parseFrontmatter(frontmatter);
      if (!body && !meta.claims.length) continue;
      output[id] = {
        html: body ? renderMarkdown(body) : "",
        wordCount: body ? body.split(/\s+/).filter(Boolean).length : 0,
        claims: meta.claims,
        antiFanon: meta.antiFanon,
        relatedPeople: meta.relatedPeople,
        sourcePath: `${sourceDir}/${item.name}`,
        sourceRef: `${owner}/${repo}@${ref}`
      };
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));

  const missingPriority = requiredPriorityIds.filter((id) => !output[id]);
  if (missingPriority.length) {
    throw new Error(`Priority character dossiers missing from source sync: ${missingPriority.join(", ")}`);
  }
  if (Object.keys(output).length < 45) {
    throw new Error(`Only ${Object.keys(output).length} dossiers synced; refusing to build a thin character wiki.`);
  }

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  const totalWords = Object.values(output).reduce((sum, entry) => sum + entry.wordCount, 0);
  const totalClaims = Object.values(output).reduce((sum, entry) => sum + entry.claims.length, 0);
  console.log(`Synced ${Object.keys(output).length} character dossiers (${totalWords.toLocaleString()} narrative words + ${totalClaims.toLocaleString()} receipt claims) from ${owner}/${repo}@${ref}.`);
}

main().catch(async (error) => {
  console.error(error);
  try {
    const cached = JSON.parse(await fs.readFile(outputPath, "utf8"));
    const cachedCount = Object.keys(cached).length;
    const missingPriority = requiredPriorityIds.filter((id) => !cached[id]);
    if (cachedCount >= 45 && !missingPriority.length) {
      console.warn(`Remote sync failed; using committed dossier cache with ${cachedCount} entries.`);
      process.exit(0);
    }
  } catch {}
  process.exit(1);
});
