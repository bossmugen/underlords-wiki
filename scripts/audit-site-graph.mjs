import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exists = (file) => fs.existsSync(path.join(root, file));
const errors = [];
const warnings = [];

const requiredFiles = [
  "src/pages/index.astro",
  "src/pages/characters/index.astro",
  "src/pages/seasons/index.astro",
  "src/pages/rooms.astro",
  "src/pages/gallery.astro",
  "src/pages/snoop.astro",
  "src/pages/other-crimes.astro",
  "src/pages/start-here.astro",
  "src/pages/speak-engliah.astro",
  "src/pages/404.astro",
  "src/layouts/WikiLayout.astro",
  "src/data/site.ts",
  "src/data/all-content.ts",
  "ops/site-integration-ledger.json",
];

for (const file of requiredFiles) {
  if (!exists(file)) errors.push(`Missing required site file: ${file}`);
}

if (exists("src/layouts/WikiLayout.astro")) {
  const layout = read("src/layouts/WikiLayout.astro");
  for (const label of ["STRIPPERS", "THE FUCK HAPPENED", "ROOMS", "WALL OF SHAME/FAME", "SNOOP", "OTHER CRIMES"]) {
    if (!layout.includes(label) && !read("src/data/site.ts").includes(label)) {
      errors.push(`Primary UL label is missing: ${label}`);
    }
  }
  for (const legacy of ["CHRONICLE & CHARACTER WIKI", "THE DEEP INDEX"]) {
    if (layout.includes(legacy)) errors.push(`Legacy database-first label is still in the layout: ${legacy}`);
  }
}

if (exists("src/data/site.ts")) {
  const language = read("src/data/site.ts");
  if (!language.includes("SPEAK ENGLIAH")) errors.push("Approved SPEAK ENGLIAH label is missing.");
  for (const fakeTypo of ["RECIEPTS", "ASSOSIATES", "INCIDANTS", "EMPLOYMINT"]) {
    if (language.includes(fakeTypo)) errors.push(`Fake bad-spelling label found: ${fakeTypo}`);
  }
}

if (exists("src/data/all-content.ts")) {
  const allContent = read("src/data/all-content.ts");
  if (!allContent.includes("UL Types Too Fast")) errors.push("Fast-typing correction is not applied to public gag data.");
}

if (exists("ops/site-integration-ledger.json")) {
  let ledger = [];
  try {
    ledger = JSON.parse(read("ops/site-integration-ledger.json"));
  } catch (error) {
    errors.push(`Integration ledger is invalid JSON: ${error.message}`);
  }
  for (const entry of ledger) {
    if (!entry.id || !entry.status || !Array.isArray(entry.files)) {
      errors.push("Integration ledger entry is missing id, status, or files.");
      continue;
    }
    for (const file of entry.files) {
      if (!exists(file)) errors.push(`Ledger ${entry.id} points to missing file: ${file}`);
    }
  }
}

const pagesRoot = path.join(root, "src/pages");
if (fs.existsSync(pagesRoot)) {
  const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  });
  const pages = walk(pagesRoot).filter((file) => file.endsWith(".astro"));
  const source = [
    ...pages.map((file) => fs.readFileSync(file, "utf8")),
    ...(exists("src/data/site.ts") ? [read("src/data/site.ts")] : []),
    ...(exists("src/layouts/WikiLayout.astro") ? [read("src/layouts/WikiLayout.astro")] : []),
  ].join("\n");
  for (const page of pages) {
    const rel = path.relative(root, page).replaceAll(path.sep, "/");
    if (/\[(?:id|year)\]\.astro$/.test(rel) || rel.endsWith("index.astro") || rel.endsWith("404.astro")) continue;
    const route = "/" + path.relative(pagesRoot, page).replaceAll(path.sep, "/").replace(/\.astro$/, "");
    if (!source.includes(`\"${route}`) && !source.includes(`'${route}`) && !source.includes(`href: \"${route}`)) {
      warnings.push(`Possible orphan page (no obvious static inbound link): ${route}`);
    }
  }
}

for (const warning of warnings) console.warn(`WARN ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR ${error}`);
  process.exit(1);
}
console.log(`UL site audit passed${warnings.length ? ` with ${warnings.length} warning(s)` : ""}.`);
