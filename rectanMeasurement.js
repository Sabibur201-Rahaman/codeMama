function main(input){
    const[length,breath]=input.split(' ').map(Number);
    console.log(length,breath);
    const area=(length*breath);
    // console.log(area)
    return area;
}
console.log(main('5 2'))