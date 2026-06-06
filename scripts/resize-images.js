const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const os = require('os');

const ROOT = path.join(__dirname, '..');
const TMP = path.join(os.tmpdir(), 'portfolio-resize');

if (!fs.existsSync(TMP)) fs.mkdirSync(TMP, { recursive: true });

async function resize(filePath, maxW, maxH, quality = 85) {
  const inputBuf = fs.readFileSync(filePath);
  const meta = await sharp(inputBuf).metadata();
  if (meta.width <= maxW && meta.height <= maxH) {
    console.log(`skip  ${path.basename(filePath)} (${meta.width}x${meta.height})`);
    return;
  }
  const outBuf = await sharp(inputBuf)
    .resize(maxW, maxH, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality })
    .toBuffer();

  const tmpOut = path.join(TMP, path.basename(filePath));
  fs.writeFileSync(tmpOut, outBuf);
  fs.copyFileSync(tmpOut, filePath);
  fs.unlinkSync(tmpOut);

  const newMeta = await sharp(outBuf).metadata();
  console.log(`done  ${path.basename(filePath)} ${meta.width}x${meta.height} → ${newMeta.width}x${newMeta.height} (${Math.round(inputBuf.length/1024)}KB → ${Math.round(outBuf.length/1024)}KB)`);
}

async function main() {
  await resize(path.join(ROOT, 'public/images/ekin-image.webp'), 500, 500, 85);

  const gameDir = path.join(ROOT, 'public/images/game-imgs');
  const files = fs.readdirSync(gameDir).filter(f => f.endsWith('.webp'));
  for (const f of files) {
    await resize(path.join(gameDir, f), 500, 334, 85);
  }

  console.log('\nDone.');
}

main().catch(console.error);
