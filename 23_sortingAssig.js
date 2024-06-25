const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45]
console.log("=== original array ===");
console.log(arrayRollNumbers);

console.log("=== array after sort method ===");
arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log("=== sort array with custom logic ===");
arrayRollNumbers.sort((n1, n2) => {
    return n1 > n2 ? 1 :-1;
});
console.log(arrayRollNumbers);

console.log("=== greatest roll numbers in array ===");
const newArray = arrayRollNumbers.pop();
console.log(newArray);

console.log("=== smallest roll number in array ===");
console.log(arrayRollNumbers[0]);

console.log("=== remove duplicate element ===");
    const arrayRolllNumbers = [113,45,56,11,32,45,109,799,56,45]
    const dupArray = [...new Set(arrayRolllNumbers)];
    console.log(dupArray);
