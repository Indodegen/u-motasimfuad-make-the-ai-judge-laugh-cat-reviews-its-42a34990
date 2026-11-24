// One-star review from a house cat about its human (94 chars, one line).
// Writes the entry to the grading output folder. No output is printed.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star. He moved my bowl two inches to the left. Two inches. I have not eaten since Tuesday.";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// Guard: the entry must stay a single line (1-200 chars, no stray whitespace).
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY !== ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error("Invalid entry");
}
mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), ENTRY);
