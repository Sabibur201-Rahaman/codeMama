// function main (input) {
//     const arr=input.split(' ')
//     const numArr=Number(arr)
//     // console.log(numArr)
//     // console.log(arr)
//     // console.log(typeof numArr)
//     console.log(numArr)
//     // const area=1/2*numArr
// }
// console.log(main('85 49'))

function main(input){
const[base,height]=input.split(' ').map(Number)  //base and height are converted into number
const area=(base *height)/2;
return area;
}

console.log(main('85 49'))