// Problem Statement
// Write a program to implement a function to generate all possible permutations of characters in a given string. For example, if the input is "abc," 
// the output should include "abc," "acb," "bac," "bca," "cab," and "cba." 
// The output answers will be in sorted order.

function main(input) {
  /**
   * Write JavaScript code from here
   */
  const perms = permutation(input);  //1,2,3
  console.log(perms.join(" "));

  function permutation(str) {
    if (str.length <= 1) return [str];
    const result = [];
    for (let i = 0; i < str.length; i++) {
      console.log(i)
      const currentChar = str[i];
      const remainChar = str.slice(0, i) + str.slice(i + 1);
      //firstIteration=2,
      //secondIteration=1,
      //third=3,
      const perms = permutation(remainChar);
      for (j = 0; j < perms.length; j++) {
        result.push(currentChar + perms[j]);
      }
    }
    return result;
  }
}

let input = "";
process.stdin.on("data", (chunk) => {
  input += chunk;
});

process.stdin.on("end", () => {
  main(input.trim());
});
