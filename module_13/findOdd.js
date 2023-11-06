/* findOddNumber
Problem Statement
Write a program to create a function that takes an array and finds the integer which appears an odd number of times.*/

function main(input) {
  /**
   * Write JavaScript code from here
   */
  const data = input.split(" ");
  const counts = {};
  data.forEach((item) => {
    if (!counts[item]) counts[item] = 0;
    counts[item]++;
  });
  for (const number in counts) {
    // console.log(`${number}:${counts[number]}`)
    if (counts[number] % 2 == 1) {
      console.log(number);
      break;
    }
  }
}

let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input.trim());
});
