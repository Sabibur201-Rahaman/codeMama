function main (input) {
    /**
     * Write JavaScript code from here
     */
    const num=parseInt(input)
    let isPrime=true;
    if(num==1){
    isPrime=false
    }else{
        for(let i=2;i<num;i++){
        const reminder=num%i
        if(reminder==0){
            isPrime=false
            break;
        }
    }

    }
    
if(isPrime){
console.log(num, 'is a prime number.')
}else{
    console.log(num,'is not a prime number.')
}
}