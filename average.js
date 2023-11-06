// function average(...input){
//     const[val1,val2,val3]=input
// console.log(val1,val2,val3)
// const devider=3
// const averageNumber=((val1+val2+val3)/devider)
// const result=averageNumber.toFixed('3')
// console.log(result)
// }
// console.log(average(35,40,74))



function main (input) {
    const[val1,val2,val3]=input.split(' ').map(Number)
 console.log(val1,val2,val3)
 const devider=3
 const averageNumber=((val1+val2+val3)/devider)
 const result=averageNumber.toFixed('4')
 console.log(result)
 }

 function main (input) {
    const[val1,val2,val3]=input.split(' ').map(Number)
 const devider=3
 const averageNumber=((val1+val2+val3)/devider)
 const result=averageNumber
 console.log(parseFloat(result.toFixed(4)))
 }