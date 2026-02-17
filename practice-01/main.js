let name = "Krisz";

let name2; // undefined
console.log(name);

name = "Someone";
console.log(name)

const age = 23
console.log(age)

// age = 24 | const cannot be changed

{
   //var a = 1
    let b = 1
}
a = 2

b = 1                                                                               

let numbers = [2,3,4]; // numbers[0] = 2, numbers[1] = 3, numbers[4]
let sum = 0;
for(let i = 0; i < numbers.length; i++ ) {
    sum = sum + numbers[i]; // numbers.at(i)
}
console.log("The sum of numbers is: " + sum);

// Task 1: Use a for loop to iterate through the items of array "numbers", and sum the EVEN (use operator % to check if its even) elements to sumEven,
// Tip: a number is even if it can be divided by 2 and the remainder is 0
let sumEven = 0

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 === 0) {
        sumEven = sumEven + numbers[i];
    }
}

console.log("Sum of even numbers: "+ sumEven)

let x = "1";
// x = true 
// x = 20
let y = 1;
console.log(x == y) // true
console.log(x === y) // false (cares about types!)

console.log(true === 1) // false but true == 1 is true with 2 equals

let sum2 = 0
for (const item of numbers) { // For currentItem of collection
    if(item % 2 === 0) {
        sum2 = sum2 + item;
    }
}

console.log("Sum2 with for of: ", sum2)

// [2,3,4] -> [Magic happens here] -> [4, 6, 8]
let result = numbers.map((item) => item * 2);
result = numbers.map((item) => {
    return item*2;
});

console.log("Array function map (multiply the elements by 2): ", result);



function myFunction() {
    console.log("I am myFunction");
}

myFunction();

const myFunction2 = function () {
    console.log("I'm myFn 2");
}

myFunction2();

const myFunction3 = () => {

}

const sumNumbers = (a, b) => a+b;

const sumNumbers2 = (a, b) => {
    return a + b;
}

function isEven(number) {
    return number % 2 === 0;
}

/*
let sum2 = 0
for (const item of numbers) { // For currentItem of collection
    if(item % 2 === 0) {
        sum2 = sum2 + item;
    }
}

console.log("Sum2 with for of: ", sum2)

// [2,3,4] -> [Magic happens here] -> [4, 6, 8]
let result = numbers.map((item) => item * 2);*/

//let evens = numbers.filter((item) => item % 2 === 0); 
let evens = numbers.filter((item) => isEven(item));
console.log(evens);

// Take the 'evens' use map to raise each number to the three x ** 3

let raisedToThirdNumbers = evens.map((item) => item ** 3);
console.log(raisedToThirdNumbers)