if(true) {
    let message = "Hello";  //console.log(message); //C:\Program Files\nodejs\node.exe .\08_blockCase.js
    const PI = 3.1413;      //Uncaught ReferenceError ReferenceError: message is not defined
}                      //error message logged on console because let and const have block scope not function scope;
                    
if(true) {
    var greet = "Good Morning"; //C:\Program Files\nodejs\node.exe .\08_blockCase.js
                                // Good Morning
                                //output logged on console because var has function scope not block scope;
}
console.log(greet);

function display() {           //C:\Program Files\nodejs\node.exe .\08_blockCase.js
    var message = "Hello";     //Uncaught ReferenceError ReferenceError: message is not defined
}                              //error msg: var has function scope only;
console.log(message);         //display(); function invocation will not provide any output because console.log method is not present in body.
display();
                      