const util = require('util');
const fs = require("fs");

const path = process.argv[1].replace("/main.js", "");
const buffer = fs.readFileSync(`${path}/input.txt`);
const rows = buffer.toString().trimEnd().split("\n");

let totalScore = 0;
rows.forEach(row => {
  let [hands, score] = [row.split(" "), 0];
  score += hands[1] === "X" ? 1 : 0; // rock
  score += hands[1] === "Y" ? 2 : 0; // paper
  score += hands[1] === "Z" ? 3 : 0; // scissors

  score += hands[0] === "A" && hands[1] === "X" ||
    hands[0] === "B" && hands[1] === "Y" ||
    hands[0] === "C" && hands[1] === "Z"  ? 3 : 0; // draw

  score += hands[0] === "A" && hands[1] === "Y" ||
    hands[0] === "B" && hands[1] === "Z" ||
    hands[0] === "C" && hands[1] === "X" ? 6 : 0; // win

  console.log(hands, score)
  totalScore += score;
});

console.log(`Total score: ${totalScore} (part 1)`);
console.log(`Another something: ${2} (part 2)`);