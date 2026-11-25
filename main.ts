// One-Line Slogan for a Solana Wallet Agent
// Writes one slogan (max 20 words, 1-140 chars, single line) to /output/entry.txt
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SLOGAN =
  "Your Solana wallet just hired a tiny agent: it watches the chain all night so your coins can sleep easy.";

function wordCount(text: string): number {
  const trimmed = text.trim();
  return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
}

function checkSlogan(text: string): void {
  const words = wordCount(text);
  if (words > 20) {
    throw new Error(`slogan has ${words} words, max 20`);
  }
  if (text.length < 1 || text.length > 140) {
    throw new Error(`slogan is ${text.length} chars, must be 1-140`);
  }
  if (/\r|\n/.test(text)) {
    throw new Error("slogan must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("slogan must not be blank");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
checkSlogan(SLOGAN);
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, SLOGAN, "utf8");
chmodSync(target, 0o644);
console.log(`wrote ${target} (${SLOGAN.length} chars, ${SLOGAN.trim().split(/\s+/).length} words)`);
