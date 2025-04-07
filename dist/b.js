"use strict";
// function greet(firstName: string, lastName: string) {
//     console.log("Hello " + firstName+ " " + lastName);
// }
// greet("John", "Doe"); // calling the function with string arguments
//for each arrgument you have to specify the type of the argument
// function greet(firstName: string, lastName: string) {
//     console.log("Hello " + firstName + " " + lastName);
function sum(a, b) {
    return a + b;
}
const value = sum(3, 5);
console.log(value); // 8
// what it return also define after bracket 
// typescript inference so u donot need to tell return number 
