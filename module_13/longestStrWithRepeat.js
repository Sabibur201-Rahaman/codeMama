function main (input) {
    /**
     * Write JavaScript code from here
     */
    const k=lengthOfNonRepeat(input)
     console.log(k)
    function lengthOfNonRepeat(str){
       
if(str.length==0) return 0
if(str.length==1) return 1
let slices=[]
for(let i=0;i<str.length;i++){
for(j=i+1;j<=str.length;j++){
    const temp=str.slice(i,j)
    if(!hasRepeat(temp))slices.push(temp)
}
}
let maxLength=0;
 slices.forEach(item=>{
    if(maxLength>item.length) maxLength= item.length
 })
 return maxLength
 }
 

    
    function hasRepeat(str){
        const counts={}
        for(let i=0;i<str.length;i++){
            if(counts[str[i]]) return true
           counts[str[i]]= true
        }
        return false
    }
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});