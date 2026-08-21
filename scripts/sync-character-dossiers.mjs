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

const escapeHtml = (value) => value
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

function bodyFromMarkdown(markdown) {
  if (!markdown.startsWith("---")) return markdown;
  const second = markdown.indexOf("\n---", 3);
  if (second === -1) return markdown;
  const bodyStart = markdown.indexOf("\n", second + 4);
  return bodyStart === -1 ? "" : markdown.slice(bodyStart + 1);
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
      const body = bodyFromMarkdown(markdown).trim();
      if (!body) continue;
      output[id] = {
        html: renderMarkdown(body),
        wordCount: body.split(/\s+/).filter(Boolean).length,
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
  console.log(`Synced ${Object.keys(output).length} character dossiers (${totalWords.toLocaleString()} words) from ${owner}/${repo}@${ref}.`);
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
