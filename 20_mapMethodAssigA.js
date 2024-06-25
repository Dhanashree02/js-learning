const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log("=== add 10 in each array numbers ===");
const arraynewNumbers = arrayNumbers.map((element)=>{
    return element + 10;
})
console.log(arraynewNumbers);

console.log("=== cube of array element ===");
const result = arrayNumbers.map((num)=>{
    return num*num*num;
})
console.log(result);

console.log("=== add index value into its corresponding each array element ===");
const newArray = arrayNumbers.map((element,index)=>{
    return element + index;
})
console.log(newArray);