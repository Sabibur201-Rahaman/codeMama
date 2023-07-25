function main(input){
console.log(input)
const[num1,num2]=input.split(' ').map(Number)
console.log(num1,num2)
const subs=(num1-num2)
console.log(subs)
}
console.log(main('50 30'))