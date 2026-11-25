import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I summarised our chat to free up context. The summary kept the deadline, the scope and the urgency \u2014 everything except the date.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back and verify: 1-200 UTF-8 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
const chars = [...back].length;
if (chars < 1 || chars > 200 || back.trim().length === 0) {
  throw new Error(`entry.txt failed verification: ${chars} characters`);
}
if (back !== LINE) {
  throw new Error("entry.txt does not match the intended line");
}
console.log(`entry.txt verified: ${chars} characters`);
