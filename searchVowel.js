function main(input){
    console.log(input)
    const arr=['a','e','i','o','u']
    for(let i=0;i<input.length;i++){
        if(arr.includes(input[i])){
            
            return true
        }else{
            return false
        }
    }
   
}
console.log(main('y'))


  