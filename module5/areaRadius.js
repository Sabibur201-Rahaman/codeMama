function main (input) {
    const number=parseInt(input)
    const radius=parseFloat(3.14*number*number)
    const radius1=radius.toFixed(2)
    console.log(`The area of the circle is ${radius1} square units.`)
}
console.log(main(91))