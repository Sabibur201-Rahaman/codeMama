function main(input){
const[val1,val2]=input.split(' ').map(Number)
const remain=val1%val2
console.log(remain)
}
console.log(main('30 20'))