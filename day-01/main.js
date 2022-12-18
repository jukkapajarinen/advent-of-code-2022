const util = require('util');
const fs = require("fs");

const path = process.argv[1].replace("/main.js", "");
const buffer = fs.readFileSync(`${path}/input.txt`);
const rows = buffer.toString().trimEnd().split("\n");

let [bestLoad, curLoad] = [0, 0];
rows.forEach(row => {
  if (row === "") {
    bestLoad = curLoad > bestLoad ? curLoad : bestLoad;
    curLoad = 0;
  } else {
    curLoad += Number(row);
  }
});

console.log(`Best Elf's Load: ${bestLoad} (part 1)`);
console.log(`Another something: ${2} (part 2)`);