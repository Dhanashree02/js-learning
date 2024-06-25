function isEvenorOdd(num){
    if (num % 2 == 0) {
        console.log(`${num} is even value`);
        return "Even"; 
    }
        else{
            console.log(`${num} is odd value`);
            return "Odd";
        }
         
    }

isEvenorOdd(45);
isEvenorOdd(70);
isEvenorOdd(67);
isEvenorOdd(90);

console.log(  `=========Vote for Elegibility========`)

var isEligibility = function(age){
    if (age>=18) {
        console.log(`${age} years completed Person is eligible for vote`);
    }
    else{
        console.log(`${age} years person is not eligible for vote`);
    };
};
isEligibility(18);
isEligibility(20);
isEligibility(17);
isEligibility(40);

console.log(  `=========checking string length========`)

var checkStrLength = function(str1){
    if (str1.length>=10) {
        console.log(`string contains more than 10 characters`);
    }
    else{
        console.log(`string does not contain more than 10 character`);
    }
}
checkStrLength("Javascript-ES6");

console.log(  `=========checking first word og string========`)

var checkFirstWord = function (strcheck){
    if(strcheck.startsWith("Java")){
        console.log(`${strcheck} string starts with Java`);
    }
    else{
        console.log(`${strcheck} string does not starts with Java`);
    }
}
checkFirstWord("JavaScript Language");
checkFirstWord("Programming Language");