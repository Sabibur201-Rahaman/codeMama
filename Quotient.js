function main(input){
const[val1,val2]=input.split(' ').map(Number)
const division=val1/val2
const pureNo=Math.floor(division)
console.log(pureNo)
}

console.log(main('15 2'))