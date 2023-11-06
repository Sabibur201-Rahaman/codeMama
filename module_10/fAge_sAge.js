/*Father and Son Ages

Problem Statement
Write a program to create a function that takes two arguments: a father's current age fAge and his son's current age sAge. Сalculate how many 
years ago the father was twice as old as his son, or in how many years he will be twice as old. */

function main(input) {
  /**
   * Write JavaScript code from here
   */
  const data = input.split(" ");
  const fAge = Number(data[0]);
  const sAge = Number(data[1]);
  const diff = Math.abs(fAge - 2 * sAge);
  console.log(diff);
}

let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input.trim());
});
