
console.log("==== 1. no arguments no return value ====");

let msgres = () => {
    console.log("Good Morning, Today is Friday");
}
msgres();

console.log("=== with 3 args and no return value ===");
let value = (n1, n2, n3=1) => {
    let result = n1*n2*n3;
    console.log(result);
}
value(5,5,2);
value(10, 4)

console.log("=== 3 Question ===");
let add = (a1, a2, a3, a4, a5) => {
    const newresult = a1+a2+a3+a4+a5;
    console.log(newresult);
}
add(100, 100, 200, 349, 756);
add("I am"," learning"," ES6"," Features"," In depth");