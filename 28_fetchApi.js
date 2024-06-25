const productResponse = await fetch("https://fakestoreapi.com/products");
const products = await productResponse.json();
for (const product of products) {
    console.log(`ID: ${product.id}, Price: ${product.price}, Title: ${product.title}`);
}

console.log(`===== Changing the style of an element =======`);
const addressElement = document.querySelector("#address");
addressElement.style.color= "red";

console.log(`===== Removing element =======`);
const skillElement = document.querySelector("#skills");
const agileElement = document.querySelector("#agile");
skillElement.removeChild(agileElement);