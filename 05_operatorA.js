var squareOfWordLength = function(num1){

    var result = num1.length;
    console.log(`length of string is:${result}`);

    var squareofnum = result * result;
    console.log(`square of string is:${squareofnum}`);
}
squareOfWordLength("JavaScript"); 


var squareOfWordLength1 = function(num2){

    var result1 = num2.length;
    console.log(`length of string is:${result1}`);

    var squareofnum2 = result1 * result1;
    console.log(`square of string is:${squareofnum2}`);
}
squareOfWordLength1("Google Chrome");

var squareOfWordLength2 = function(num3){

    var result2 = num3.length;
    console.log(`length of string is:${result2}`);

    var squareofnum3 = result2 * result2;
    console.log(`square of string is:${squareofnum3}`);
}
squareOfWordLength2("Developer Smart");

var str = "I am React JS Developer";
function mystring (){
    var strlen = str.length;
    console.log(`string length is:${strlen}`);
    var totalwords = str.split(" ");
    console.log(`total no of words is:${totalwords.length}`);

    var ans = strlen / totalwords.length;
    console.log(`after divide ans is:${ans}`);

    var ans2 = strlen * totalwords.length;
    console.log(`after divide ans is:${ans2}`);
}
mystring();