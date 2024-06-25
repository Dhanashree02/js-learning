var arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Total number of array length:${arrayNumbers.length}`);

var firstnum = arrayNumbers.shift(0);
console.log(`first number of array is:${firstnum}`);

var lastnum = arrayNumbers.pop();
 console.log(`last number of array is:${lastnum}`);

 // var newArray = [20,31,40,25,23,11,29,9,60,2,11];

 // var thirdLast = newArray.pop(newArray.length-3);
 // console.log(`third last array number is:${thirdLast}`);
console.log("third last element of array is:",arrayNumbers[arrayNumbers.length-2]);

var sm = " ";
var sumEven = 0;
for(var i = 0; i<=arrayNumbers.length; i++){

    var element = arrayNumbers[i];
    if(element%2==0){
        sm = sm + element + " ";
        sumEven = sumEven + element;
        //console.log(element);
    }
}
console.log("Even elements are:",sm);
console.log("sum of even elements is:",sumEven);

var smOdd = " ";
var sum = 0;
for(var i = 0; i<=arrayNumbers.length; i++){

    var element = arrayNumbers[i];
    if(element%2==1){
        smOdd = smOdd + element + " ";
        sum = sum + element;
        //console.log(element);
    }
    }
 console.log("Odd elements are:",smOdd);
 console.log("sum of odd elements is:",sum);

var sumArray = 0;
for(var index=0; index < arrayNumbers.length; index++){
    var arrayElements = arrayNumbers[index];
    sumArray = sumArray + arrayElements;
}
console.log("sum of all array numbers is:",sumArray);

msum = " ";
multism = 0;
for(var index=0; index<=arrayNumbers.length; index++){
    var arrElement = arrayNumbers[index];
    if(arrElement%5==0){
        msum = msum + arrElement + " ";
        //multism = multism + arrElement;
        //console.log("multiple of 5 numbers are:",arrElement);
    }
}
console.log("multiple of 5 numbers are:" ,msum);

console.log("is number 115 available in array:",arrayNumbers.includes(115));
console.log("is number 23 available in array:",arrayNumbers.includes(23));
//console.log(arrayNumbers);
arrayNumbers.splice(3,0,55,66);
console.log(`new array after inserting number: ${arrayNumbers}`);

arrayNumbers.splice(4,3);
console.log(`after deleting elements:${arrayNumbers}`);

