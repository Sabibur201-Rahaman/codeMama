function main (input) {
    /**
     * Write JavaScript code from here
     */
    const data=input.split(' ')
    let a=parseInt(data[0])
    let b=parseInt(data[1])
    
    let temp=0;
    if(b>a){
        temp=b;
        b=a;
        a=temp;
    }

    while(b !=0){
    temp=b;
    b=a%b;
    a=temp;
}
console.log(a)
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});