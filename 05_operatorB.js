function greaterNumber(num1, num2){
    console.log (( num1 > num2 ) ? `${num1} is greter than ${num2}`: `${num2} is greter than ${num1}`)

}
greaterNumber(10, -10);
greaterNumber(800,899);

function isEvenorOdd(firstnum){
    var result = firstnum % 2 == 0 ? true : false;
    return result;

}
var returnvalue = isEvenorOdd(29);
console.log(`given number 29 is even:${returnvalue}`);
var returnvalue2 = isEvenorOdd(44);
console.log(`given number 44 is even:${returnvalue2}`);
var returnvalue3 = isEvenorOdd(0);
console.log(`given number 0 is even:${returnvalue3}`);
var returnvalue4 = isEvenorOdd(101);
console.log(`given number 101 is even:${returnvalue4}`);

function wordLength(str1){
    var res = str1.length; 
    var newres= res % 2 == 0 ? `even`: `odd`;
    return newres;

}
var finalreturn = wordLength("Javascript");
console.log(`Javascript string is:${finalreturn}`);
var finalreturn1 = wordLength("developer");
console.log(`Developer string is:${finalreturn1}`);
var finalreturn2 = wordLength("google");
console.log(`Google string is:${finalreturn2}`);
