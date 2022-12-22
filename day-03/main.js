const util = require('util');
const fs = require("fs");

const path = process.argv[1].replace("/main.js", "");
const buffer = fs.readFileSync(`${path}/input.txt`);
const rows = buffer.toString().trimEnd().split("\n");

const priorities = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let sum = 0;

rows.forEach(row => {
  let [left, right] = [row.slice(0, row.length / 2), row.slice(row.length / 2)];
  let duplicates = [...new Set(left.split("").filter(x => right.split("").includes(x)))];
  sum += duplicates.map(x => priorities.indexOf(x) + 1).reduce((a, b) => a + b, 0);
});

console.log(`Sum of priorities: ${sum} (part 1)`);
console.log(`Another something: ${2} (part 2)`);