const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];

    console.log(fruits_seasonal);

    console.log(`first fruit is:`,fruits_seasonal[0]);

    console.log(`last fruit is:`,fruits_seasonal[4]);

    fruits_seasonal.unshift('Papaya');
    console.log(fruits_seasonal);

    fruits_seasonal.splice( 4, 1);
    console.log(fruits_seasonal);

    fruits_seasonal.splice(4, 0 , 'Dragon Fruit');
    console.log(fruits_seasonal);

fruits_seasonal.splice(2, 1, 'kiwi')
console.log(fruits_seasonal);

fruits_seasonal.push('Pinapple');
console.log(fruits_seasonal);
console.log("=== first 4 elements====");

var fruits = fruits_seasonal.slice(1, 5);
console.log(fruits);

console.log("==== last 3 elements===");
var lastfruits = fruits_seasonal.slice(4);
console.log(lastfruits);
