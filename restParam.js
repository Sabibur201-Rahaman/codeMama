// using rest parameter,a function can be called any number of arguments

function show(...numbers){
    let sum=0
for(let i of numbers){
     sum +=i
}
console.log(sum) 
}
show(1,2,3)