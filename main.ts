import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I can summon lightning, but only to charge my phone to 3%.";

// Gate for u-suroto-worst-superpower-461dcdbe: one line, 1-140 characters.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.includes("\n")) {
  throw new Error("entry must be one line of 1-140 characters");
}

function main(): void {
  const target = process.argv[2] ?? "/output";
  // argv[2] may be a file path or a directory; a directory gets entry.txt inside it.
  const file = target.endsWith(".txt") ? target : join(target, "entry.txt");
  const slash = file.lastIndexOf("/");
  const dir = slash > 0 ? file.slice(0, slash) : ".";
  mkdirSync(dir, { recursive: true });
  writeFileSync(file, ENTRY, "utf8");
  console.log(`wrote ${file} (${ENTRY.length} characters)`);
}

main();
