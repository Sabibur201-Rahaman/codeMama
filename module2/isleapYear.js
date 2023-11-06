
function main(input){
    const NumYear=Number(input)
    console.log(typeof NumYear)
    if((NumYear%4==0&&NumYear%100!=0||NumYear%400==0)){
     console.log(`${NumYear} is a leap year`)
    }else{
        console.log(`${NumYear} is not a leap year`)
    }
}
main(1985)