import sharp from "sharp";
import { readdirSync, statSync, unlinkSync } from "fs";
import { join, extname, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesDir = join(__dirname, "../public/images");

const QUALITY = {
  "bg-imgs": 75,
  "game-imgs": 80,
  icons: 85,
  root: 85,
};

function getQuality(filePath) {
  if (filePath.includes("bg-imgs")) return QUALITY["bg-imgs"];
  if (filePath.includes("game-imgs")) return QUALITY["game-imgs"];
  if (filePath.includes("icons")) return QUALITY["icons"];
  return QUALITY["root"];
}

async function convertDir(dir) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      await convertDir(fullPath);
      continue;
    }
    const ext = extname(entry).toLowerCase();
    if (![".png", ".jpg", ".jpeg"].includes(ext)) continue;

    const webpPath = join(dir, basename(entry, ext) + ".webp");
    const quality = getQuality(fullPath);
    const before = stat.size;

    await sharp(fullPath).webp({ quality }).toFile(webpPath);

    const after = statSync(webpPath).size;
    const saved = (((before - after) / before) * 100).toFixed(1);
    console.log(`✓ ${entry.padEnd(40)} ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${saved}%)`);

    unlinkSync(fullPath);
  }
}

console.log("Converting images to WebP...\n");
await convertDir(imagesDir);
console.log("\nDone!");
