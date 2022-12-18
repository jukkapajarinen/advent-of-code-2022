const util = require('util');
const fs = require("fs");

const path = process.argv[1].replace("/main.js", "");
const buffer = fs.readFileSync(`${path}/input.txt`);
const rows = buffer.toString().trimEnd().split("\n");

let [loads, curLoad] = [[], 0];
rows.forEach(row => {
  if (row === "") {
    loads.push(curLoad);
    curLoad = 0;
  } else {
    curLoad += Number(row);
  }
});

bestLoad = loads.sort((a, b) => b - a)[0];
threeBestLoads = loads.sort((a, b) => b - a).slice(0, 3).reduce((a, b) => a + b, 0)

console.log(`Best Elf's Load: ${bestLoad} (part 1)`);
console.log(`Best 3 Elf's loads: ${threeBestLoads} (part 2)`);