const util = require('util');
const fs = require("fs");

const path = process.argv[1].replace("/main.js", "");
const buffer = fs.readFileSync(`${path}/input.txt`);
const rows = buffer.toString().trimEnd().split("\n");

let [totalScore1, totalScore2] = [0, 0];
rows.forEach(row => {
  let [hands, score1, score2] = [row.split(" "), 0, 0];

  score1 += hands[1] === "X" ? 1 : 0; // rock
  score1 += hands[1] === "Y" ? 2 : 0; // paper
  score1 += hands[1] === "Z" ? 3 : 0; // scissors
  score1 += hands[0] === "A" && hands[1] === "X" ||
    hands[0] === "B" && hands[1] === "Y" ||
    hands[0] === "C" && hands[1] === "Z"  ? 3 : 0; // draw
  score1 += hands[0] === "A" && hands[1] === "Y" ||
    hands[0] === "B" && hands[1] === "Z" ||
    hands[0] === "C" && hands[1] === "X" ? 6 : 0; // win
  totalScore1 += score1;

  score2 += hands[0] === "A" && hands[1] === "X" ? 0 + 3 : 0 // lose with scisscors
  score2 += hands[0] === "B" && hands[1] === "X" ? 0 + 1 : 0 // lose with rock
  score2 += hands[0] === "C" && hands[1] === "X" ? 0 + 2 : 0 // lose with paper
  score2 += hands[0] === "A" && hands[1] === "Y" ? 3 + 1 : 0 // draw with rock
  score2 += hands[0] === "B" && hands[1] === "Y" ? 3 + 2 : 0 // draw with paper
  score2 += hands[0] === "C" && hands[1] === "Y" ? 3 + 3 : 0 // draw with scissors
  score2 += hands[0] === "A" && hands[1] === "Z" ? 6 + 2 : 0 // win with paper
  score2 += hands[0] === "B" && hands[1] === "Z" ? 6 + 3 : 0 // win with scissorcs
  score2 += hands[0] === "C" && hands[1] === "Z" ? 6 + 1 : 0 // win with rock
  totalScore2 += score2;
});

console.log(`Total score: ${totalScore1} (part 1)`);
console.log(`Another something: ${totalScore2} (part 2)`);