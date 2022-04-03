// 1. console.log - info
// 2. console.warn - warning
// 3. console.error - error
// 4. console.debug - user messages
// If the following statement is the only statement in your script or is the last statement in the script, you can omit line terminator (;)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
let stringType = 'Shyam';
let booleanType = false;
let numberType = 25;
let nullType = null;
// console.log(nanType); variable is not defined

// Variables
// let - is block-scoped, cannot redeclare in same block
// var - is not block-scoped, can redeclare in same block

// Constant
// const - block-scoped, cannot redeclare and cannot change in same block

let a = 5;

if (a == 5) {
    a = 6;
    // console.log('Inside if block: ' + a); // 6
}

// console.log('Outside if block: ' + a); // 5

// console.clear();

var b = 5;

if (b == 5) {
    var b = 6;
    // console.log('Inside if block: ' + b); // 6
}

// console.log('Outside if block: ' + b); // 5

// console.clear();

const max = 45;

// max = 60;

// console.log(max); // Assignment to constant variable;

let numberArray = [1, 2, 3, 4, 5];

let randomObject = { 'a': 1, 'b': 2, 'c': 3};

// console.log(...numberArray);

/* for (let i = 0; i < numberArray.length; i++) {
    console.log(numberArray[i]);
} */

function myLoopFunction(value, index, array) {
    console.log(value); // 1
    // console.log(index); // 0
    // console.log(array); // [1, 2, 3, 4, 5]
}

/* numberArray.forEach(function(value, index, array) {
    console.log(value); // 1
    console.log(index); // 0
    console.log(array); // [1, 2, 3, 4, 5]
}); */

// numberArray.forEach(myLoopFunction);

Object.entries(randomObject).forEach(myLoopFunction);

//console.log(randomObject);

// Comparison

let var1 = '1';
let var2 = 1;

console.log(var1 == var2); // true - type coercion - https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
console.log(var1 === var2); // false !==

// fat arrow syntaxes - ES6

numberArray.forEach((value, index, array) => {
    console.log(value); // 1
    console.log(index); // 0
    console.log(array); // [1, 2, 3, 4, 5]
});

// function variable
let myLoopFunction1 = (value, index, array) => console.log(value); // 1

// function variable
let mySumFunction = (var1, var2) => var1 + var2;

numberArray.forEach((value) => console.log(value));