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

// Practice 2

console.log(typeof ("0" + 1));

console.log("2" * 3);
let n = "4";
console.log("2" * 3 + parseInt("10"));


console.log("2" * 3 + Number("10"));

let n_number = +n;
console.log(typeof(n_number))
console.log(typeof(n));

let c = 'c'
console.log(typeof(c));

console.log(Number("26"))

// 1.
console.log("31" + 2 + "4"); // 3124
console.log("3" * 4 + "100"); // 12100

//



let accumulation = 0;
const nums = [23, 56, 100, 14];
for(const item of nums) {
    accumulation = accumulation + item;
}


console.log(Math.max(2, 100));

let resultReduce = nums.reduce((acc, item)=> item > acc ? item : acc, -Infinity); // -Infinity is the initial value
console.log("Result with reduce: " + resultReduce);

let resultReduce2 = nums.reduce((max, curr)=> Math.max(max, curr), -Infinity); // -Infinity is the initial value
console.log(resultReduce2)


const car = {
    brand: "Honda",
    year: 2020,
    color: "black"
}

console.log(car)

const cars = [];

cars.push(car);
cars.push({
    brand: "Tesla",
    year: 2024,
    color: "white"
})


console.log(cars)
console.log(cars.length)

const brands = cars.map((car) => car.brand);
console.log(brands)

const after2022 = cars.filter((car) => car.year > 2022); /* [{
    brand: "Tesla",
    year: 2024,
    color: "white"
}]*/
console.log(`There are ${after2022.length} cars produced after 2022.`);

/*

3 .pop() -> 3

.push(4)
4
2
1
_
*/