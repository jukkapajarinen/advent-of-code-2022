const util = require('util');
const fs = require("fs");

const path = process.argv[1].replace("/main.js", "");
const buffer = fs.readFileSync(`${path}/input.txt`);
const rows = buffer.toString().trimEnd().split("\n");

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
let [fullIntersections, partialIntersections] = [0, 0];

rows.forEach(row => {
  let bounds1 = row.split(",")[0].split("-").map(x => Number(x));
  let bounds2 = row.split(",")[1].split("-").map(x => Number(x));
  let [left, right] = [range(bounds1[0], bounds1[1], 1), range(bounds2[0], bounds2[1], 1)];
  fullIntersections += left.every(l => right.includes(l)) || right.every(r => left.includes(r)) ? 1 : 0;
  partialIntersections += left.some(l => right.includes(l)) || right.some(r => left.includes(r)) ? 1 : 0;
});

console.log(`Full intersecitons: ${fullIntersections} (part 1)`);
console.log(`Partial Intersections: ${partialIntersections} (part 2)`);