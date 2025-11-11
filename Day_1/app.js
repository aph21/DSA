const prompt = require("prompt-sync")()
// // print "Hello world" without using console.log

// //Method 1: using alert()
// alert("Hello World!");

// //Mathod 2: using document.write()
// document.write("Hello World");

// //Method 3: using process.stdout.write()
// process.stdout.write("Hello World");

// //Method 4: using function

// function sayHello() {
//     return "Hello world!";
// }

// const msg = sayHello();
// console.log(msg);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//2 Swap two numbers without using a third variable

//method 1: using arithmetic operators

// let a = Number(prompt("Enter a:"));
// let b = Number(prompt("Enter b:"))
// console.log("a and b before swapping: ", a, b);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a and b after swapping: ", a, b)


//Method 2: using bitwise XOR operator

let a = Number(prompt("Enter a:"));
let b = Number(prompt("Enter b:"))
console.log("a and b before swapping: ", a, b);
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("a and b after swapping: ", a, b);