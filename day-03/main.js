const util = require('util');
const fs = require("fs");

const path = process.argv[1].replace("/main.js", "");
const buffer = fs.readFileSync(`${path}/input.txt`);
const rows = buffer.toString().trimEnd().split("\n");

const priorities = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'];
let [sum1, sum2] = [0, 0];

rows.forEach(row => {
  let [left, right] = [row.slice(0, row.length / 2), row.slice(row.length / 2)];
  let duplicates = [...new Set(left.split("").filter(x => right.split("").includes(x)))];
  sum1 += duplicates.map(x => priorities.indexOf(x) + 1).reduce((a, b) => a + b, 0);
});

for (let i = 0; i < rows.length-2; i+=3) {
  rows[i].split("").every(x => {
    if (rows[i+1].includes(x) && rows[i+2].includes(x)) {
      sum2 += priorities.indexOf(x) + 1;
      return false;
    } else {
      return true;
    }
  })
}

console.log(`Sum of priorities: ${sum1} (part 1)`);
console.log(`Another something: ${sum2} (part 2)`);