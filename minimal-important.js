// function main(inputs){
//     let arr = inputs.split(' ');
//     console.log(arr)
//     let min = Math.min(...arr);
//     console.log(min);
//   }
//   main('10 20 30');
  
function main(inputs){
    let arr = inputs.split(' ');
    // console.log(arr)
    // const result=arr.filter(value=>value<=10);
    const result=Math.min(...arr)
    console.log(result)
  }
  main('10 20 30');
  