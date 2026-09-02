import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] ?? "dist");
const basePath = (process.env.BASE_PATH ?? "").replace(/\/$/, "");
const errors = [];

if (!fs.existsSync(root)) {
  console.error(`ERROR Built site directory does not exist: ${root}`);
  process.exit(1);
}

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const target = path.join(dir, entry.name);
  return entry.isDirectory() ? walk(target) : [target];
});

const htmlFiles = walk(root).filter((file) => file.endsWith(".html"));
const decode = (value) => {
  try {
    return decodeURIComponent(value
      .replaceAll("&amp;", "&")
      .replaceAll("&#39;", "'")
      .replaceAll("&quot;", '"'));
  } catch {
    return value;
  }
};

const idsByFile = new Map();
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  idsByFile.set(path.resolve(file), new Set([...html.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => decode(match[1]))));
}

const resolveCandidate = (sourceFile, rawUrl) => {
  if (!rawUrl || /^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(rawUrl)) return null;
  const [withoutHash, fragment = ""] = rawUrl.split("#", 2);
  const pathname = decode(withoutHash.split("?", 1)[0]);
  let target;

  if (!pathname) {
    target = sourceFile;
  } else if (pathname.startsWith("/")) {
    let sitePath = pathname;
    if (basePath && (sitePath === basePath || sitePath.startsWith(`${basePath}/`))) {
      sitePath = sitePath.slice(basePath.length) || "/";
    }
    const relative = sitePath.replace(/^\/+/, "");
    target = relative ? path.join(root, relative) : path.join(root, "index.html");
  } else {
    target = path.resolve(path.dirname(sourceFile), pathname);
  }

  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) target = path.join(target, "index.html");
  if (!path.extname(target)) {
    const directoryIndex = path.join(target, "index.html");
    const flatHtml = `${target}.html`;
    if (fs.existsSync(directoryIndex)) target = directoryIndex;
    else if (fs.existsSync(flatHtml)) target = flatHtml;
    else target = directoryIndex;
  }

  return { target: path.resolve(target), fragment: decode(fragment), rawUrl };
};

let checked = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const refs = [
    ...html.matchAll(/<(?:a|link)\b[^>]*?\bhref=["']([^"']+)["'][^>]*>/gi),
    ...html.matchAll(/<(?:script|img|source)\b[^>]*?\bsrc=["']([^"']+)["'][^>]*>/gi),
  ];
  for (const match of refs) {
    const resolved = resolveCandidate(file, match[1]);
    if (!resolved) continue;
    checked += 1;
    if (!fs.existsSync(resolved.target)) {
      errors.push(`${path.relative(root, file)} -> ${resolved.rawUrl} (missing ${path.relative(root, resolved.target)})`);
      continue;
    }
    if (resolved.fragment && resolved.target.endsWith(".html")) {
      const ids = idsByFile.get(resolved.target) ?? new Set();
      if (!ids.has(resolved.fragment)) {
        errors.push(`${path.relative(root, file)} -> ${resolved.rawUrl} (missing #${resolved.fragment})`);
      }
    }
  }
}

if (errors.length) {
  for (const error of errors) console.error(`ERROR Broken built-site reference: ${error}`);
  console.error(`Built-site audit failed: ${errors.length} broken reference(s) across ${checked} internal references.`);
  process.exit(1);
}

console.log(`Built-site audit passed: ${htmlFiles.length} HTML files and ${checked} internal references.`);
