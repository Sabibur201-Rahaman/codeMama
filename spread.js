// const poorCountry=['Bangladesh','Srilanka']
// const richCountry=['America','Canada','England']
// const developCountry=[...poorCountry,...richCountry]
// console.log(developCountry)
// console.log('hello')



function rest(...numbers){  // rest parameter
    
console.log(numbers)
const spreadVal=[...numbers]
console.log(spreadVal)
console.log(numbers)
let sum=0;
for(i=0;i<numbers.length;i++){
sum=sum+numbers[i]
}
console.log(sum)
}
console.log(rest(1,2,34,7,85,))