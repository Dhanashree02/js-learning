const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
arrayNumbers.forEach((currentValue, index)=>{
    console.log(currentValue,index);
})

console.log("=== positive no ===");
arrayNumbers.forEach((element)=>{
    if (element>=0) {
       console.log(`positive no is:${element}`); 
    }

})

console.log("=== negative no ===");
arrayNumbers.forEach((nelement)=>{
    if (nelement<0) {
        console.log(`negative no is:${nelement}`);
        
    }
})

console.log("=== even no ===");
arrayNumbers.forEach((evenelement)=>{
    if (evenelement%2==0) {
        console.log(`${evenelement} is even no`);
        
    }
})

console.log("=== sum of all elements ===");
let sum = 0;
arrayNumbers.forEach( (element) => {
    sum = sum + element;
} );
console.log(sum);

console.log("===even indexed element ===");
arrayNumbers.forEach((currentValue,index,array)=>{
    if (index%2==0) {
        console.log(currentValue);
    }
})
