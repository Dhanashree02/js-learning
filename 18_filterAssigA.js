const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log("=== greater than 50 ===");
const newArray = arrayNumbers.filter((element)=>{
    return element>50
    
})
console.log(newArray);

console.log("=== even numbers ===");
const result = arrayNumbers.filter((element)=>{
    return element%2==0   
})
console.log(result);

console.log("=== odd numbers ===");
const resultodd = arrayNumbers.filter((element)=>{
    return element%2!==0   
})
console.log(resultodd);

console.log("=== numbers multiple of 5 ===");
const resmulti = arrayNumbers.filter((element)=>{
    return element%5==0;
})
console.log(resmulti);

console.log("=== numbers between 20 and 50 ===");
const numresult = arrayNumbers.filter((num)=>{
    return num>=20 && num<=50;
})
console.log(numresult);