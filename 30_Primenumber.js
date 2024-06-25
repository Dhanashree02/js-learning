console.log("===count of prime numbers in array===");
const array = [3,9,7,6,29,19,53];
let newarray =[];
for (let index = 0; index < array.length; index++) {  
    const element = array[index];
    if (element%index!==0) {
        //console.log(`given element is prime:${element}`);
        newarray.push(element);
    }
}
console.log(`count of given array[3,9,7,6,29,19,53] is:${newarray.length}`);

console.log("==== check string is palindrome or not===");

function isPalindrome(str){
let reversestr = str.split("").reverse().join("");
if (str==reversestr) {
    console.log(`given string is palindrome:${str}`); 
}else{
    console.log(`given string is not palindrome:${str}`);
}

}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");