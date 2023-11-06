function main(input){
    const numberInput=Number(input)
    console.log(typeof numberInput)
     if(numberInput > 0){
        console.log(`${numberInput} is a positive number.`);
    }
    else if(numberInput < 0){
        console.log(`${numberInput} is a negative number.`);
    }
}

const number=main(-4)



