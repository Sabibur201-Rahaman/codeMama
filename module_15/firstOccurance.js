function main(input) {
    /**
     * Write JavaScript code from here
     */
    const lines = input.split("\n");
    const n = Number(lines[0]);
    const arr = lines[1].split(" ").map((k) => Number(k));
    const target = Number(lines[2]);
    let start = 0;
    let end = n - 1;
    let mid;
    let res = -1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] > target) {
        end = mid - 1;
      } else if (arr[mid] < target) {
        start = mid + 1;
      } else {
      //   start = mid + 1;
      end = mid - 1;
        res = mid;
      }
    }
    if (res == -1) console.log("Element not found");
    else console.log(res);
  }
  
  let input = "";
  process.stdin.on("data", (chunk) => {
    input += chunk;
  });
  
  process.stdin.on("end", () => {
    main(input.trim());
  });
  