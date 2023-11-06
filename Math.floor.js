function main (input) {
    let numberInput=Number(input)
    console.log('sal'+numberInput)
    const bonus=10;
    const salaryAfterbonus=numberInput*bonus/100
    result=Math.floor(salaryAfterbonus)
    console.log('salary'+result)   
}

console.log(main(2500.75))