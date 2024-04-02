import { readFileSync } from "fs";

const args = process.argv.slice(2);
const filename = args[0];
const searchString = args[1];

const contents = readFileSync(filename, "utf8");

const lines = contents.split("\n");

for (const line of lines) {
  if (line.includes(searchString)) {
    console.log(line);
  }
}
