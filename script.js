// 1.print odd numbers in an Array
// IIFE function

// (function (arr) {
//   arr.forEach((odd) => {
//     if (odd % 2 != 0) {
//       console.log("Odd number:", odd);
//     }
//   });
// })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// anonymous function

// let arr = function (odd) {
//   odd.forEach((key) => {
//     if (key % 2 != 0) {
//       console.log("Odd number:", key);
//     }
//   });
// };
// arr([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// 2.Sum of all numbers in an array

// IIFE Function

// let arrAdd = 0;
// (function (arr) {
//   arr.forEach((odd) => {
//     arrAdd = arrAdd + odd;
//   });
// })([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log("Sum of array:", arrAdd);

// Anonymous Function

// let add = 0;
// let arr = function (odd) {
//   odd.forEach((key) => {
//     add = add + key;
//   });
// };
// arr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log("Sum of array", add);

// prime numbers in an Array  [IIFE]

// (function (primeNum) {
//   for (let i = 0; i < primeNum.length; i++) {
//     let flag = 0;
//     for (let j = 2; j < primeNum[i]; j++) {
//       if (primeNum[i] % j == 0) {
//         flag = 1;
//         break;
//       }
//     }
//     if (flag == 0) {
//       console.log("Prime number =", primeNum[i]);
//     }
//   }
// })([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// anonymous function
// let prime = function () {
//   console.log("hi");
// };
// // console.log(prime);

// prime();

// let prime = function  (primeNum) {
//   for (let i = 0; i < primeNum.length; i++) {
//     let flag = 0;
//     for (let j = 2; j < primeNum[i]; j++) {
//       if (primeNum[i] % j == 0) {
//         flag = 1;
//         break;
//       }
//     }
//     if (flag == 0) {
//       console.log("prime Number:", primeNum[i]);
//     }
//   }
// };
// prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// function addFive(num) {
//   return console.log("params:", num + 5);
// }
// addFive(5);
// addFive(0);
// addFive(-5); //argument

// var num = 10;
// function addFive(value) {
//   return num;
// }
// var result = addFive(num);

// Funcion

// function functionName(parameter) {
//   // function body
// }
// functionName();

// function square(number) {
//   return number * number;
// }
// let number = square(7);
// console.log(number);

// function add(x, y) {
//   return x + y;
// };
// let x = 5;
// let y = 7;
// console.log(x + y);

// function getOpposite(num) {
//   return console.log("Opposite Num", -num);
// }
// getOpposite(5);
// getOpposite(0);
// getOpposite(-5);
// getOpposite("5a");
// getOpposite(5.5);

// function toSeconds(min) {
//   return console.log("To Seconds:", min * 60);
// }
// toSeconds(5); //300
// toSeconds(3); //180
// toSeconds(2); //120

// function toInt(num) {
//   let value = parseInt(num);
//   console.log("integer is :", value);
// }
// toInt("5");
// toInt("1000");
// toInt("hello");

// function increment(number) {
//   return console.log("Next Number:", number + 1);
// }
// increment(5);
// increment(-3);
// increment(105);

// function getFirstElement(array) {
//   return console.log("First Element:", array[0]);
// }
// getFirstElement([1, 2, 3, 4, 5]);
// getFirstElement([58, 5246, 85]);

// function hourToSec(hour) {
//   return console.log("ToSeconds =", hour * 3600);
// }
// hourToSec(5);
// hourToSec(10);
// hourToSec(2);

// function perimeter(height, width) {
//   return console.log("Perimeter of Rectangle:", 2 * (height + width)); //perimeter=2(l+w)
// }
// perimeter(5, 6);
// perimeter(7, 8);

// function value(number1, number2) {
//   if (number1 + number2 < 100) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(value(50, 80));
// console.log(value(20, 30));

// function remainder(number1, number2) {
//   let remainderValue = number1 % number2;
//   return console.log("Remainder:", remainderValue);
// }
// remainder(25, 7);
// remainder(85, 3);
// remainder(58, 8);.

// function count(turkey, horse, pigs) {
//   let turkeyLegs = 2;
//   let horseLegs = 4;
//   let piglegs = 4;
//   let animalLegs = turkey * 2 + horse * 4 + pigs * 4;
//   return console.log("Total Animal legs:", animalLegs);
// }
// count(2, 3, 5);
// count(1, 2, 3);
// count(5, 2, 8);

// function div(number) {
//   if (number % 5 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("DivisibleBy Five:", div(50));
// console.log("DivisibleBy Five:", div(72));

// function isEven(number) {
//   if (number % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("isEven:", isEven(25));
// console.log("isEven:", isEven("1h"));
// console.log("isEven:", isEven(50));

// function areBothOdd(number1, number2) {
//   if (number1 % 2 == 0 || number2 % 2 == 0) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log("Are Both Odd:", areBothOdd(7, 5));
// console.log("Are Both Odd:", areBothOdd(10, 20));
// console.log("Are Both Odd:", areBothOdd(7, 6));

// function getFullName(firstName, lastName) {
//   let fullName = firstName + lastName;
//   return console.log("FullName =", fullName);
// }
// getFullName("Priya", "Sivaraj");
// getFullName("Anu", "Pallavi");
// getFullName(" '' ", " '' ");

// function getLengthOfWord(str) {
//   let length = str.length;
//   return console.log("Length of word:", length);
// }
// getLengthOfWord("hello world");
// getLengthOfWord("");
// getLengthOfWord("length");
// getLengthOfWord("9");

// function isSameLength(word1, word2) {
//   if (word1.length === word2.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log("Is Same Length:", isSameLength("hello", "world"));
// console.log("Is Same Length:", isSameLength("priya", "anu"));

// d=√[(x2-x1)^2+(y2-y1)^2]

// function distance(x1, x2, y1, y2) {
//   let distance = Math.sqrt(x2 - x1) + Math.sqrt(y2 - y1);
//   console.log("Distance:", distance);
// }
// distance(100, 200, 300, 400); //20

// function getNthElement(array, int) {
//   return array[int];
// }
// console.log(getNthElement([1, 3, 5], 0));

// function getLastElement(array) {
//   return array[array.length - 1];
// }
// console.log(getLastElement([1, 2, 3]));

// function cars(name) {
//   var carName = name;
//   console.log("car Name:", carName);
// }
// cars("volvo");
// // console.log("Car Name:", carName);

// var obj = {
//   name: "priya",
//   age: 20,
// };
// console.log(obj.hasOwnProperty("name"));

// function Dog(name, sound) {
//   this.name = name;
//   this.sound = sound;

//   this.getSound = function () {
//     console.log(this.name);
//   };
// }
// Dog.prototype.getName = function () {
//   console.log(this.sound);
// };
// var d = new Dog("Fido", "Bark");
// console.log(d);
// d.getName();
// d.getSound();

// class Dog {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }
//   getName() {
//     console.log(this.name);
//   }
//   getSound() {
//     console.log(this.sound);
//   }
// }
// var d = new Dog("Puppy", "bark");
// d.getName();
// d.getSound();

// class rectangle {
//   constructor(value1, value2) {
//     this.value1 = value1;
//     this.value2 = value2;
//   }
//   getvalue() {
//     console.log(this.value1 * this.value2);
//   }
// }
// var area = new rectangle(5, 6);
// area.getvalue();

// class Dog {
//   getName() {
//     //getter
//     console.log(this.name);
//   }
//   setName(name) {
//     //setter
//     this.name = name;
//   }
//   getSound() {
//     console.log(this.sound);
//   }
//   setSound(sound) {
//     this.sound = sound;
//   }
// }
// var dd = new Dog();
// console.log(dd);
// dd.setName("puppy");
// dd.getName();
// dd.setSound("bark");
// dd.getSound();

// class Animal {
//   constructor(legs, tail, gender) {
//     this.legs = legs;
//     this.tail = tail;
//     this.gender = gender;
//   }
//   getLegs() {
//     console.log(this.legs);
//   }
// }
// class Dog extends Animal {
//   constructor(name, sound) {
//     super(4, true, "male");
//     this.name = name;
//     this.sound = sound;
//   }
//   getData() {
//     console.log(this.name, this.sound, this.tail, this.gender);
//     this.getLegs();
//   }
// }
// var dd = new Dog("Doggy", "Bark");
// dd.getData();

// class Add {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   getAdd() {
//     console.log(this.a + this.b);
//   }
// }
// class addition extends Add {
//   constructor(a, b, c, d) {
//     super(a, b);
//   }
//   getValue() {
//     this.getAdd();
//   }
// }
// var add = new addition(5, 6);
// add.getValue();

// var add = new addition(7, 5);
// add.getValue();

// class sub {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   getSub() {
//     console.log(this.a - this.b);
//   }
// }
// class subtraction extends sub {
//   constructor(a, b, c, d) {
//     super(a, b);
//   }
//   getValue() {
//     this.getSub();
//   }
// }
// var Sub = new subtraction(8, 5);
// Sub.getValue();

// var Sub = new subtraction(7, 5);
// Sub.getValue();

// class Mul {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   getMulti() {
//     console.log(this.a * this.b);
//   }
// }
// class multiplication extends Mul {
//   constructor(a, b, c, d) {
//     super(a, b);
//   }
//   getValue() {
//     this.getMulti();
//   }
// }
// var mul = new multiplication(5, 6);
// mul.getValue();

// var mul = new multiplication(7, 5);
// mul.getValue();

// Square of a number

// let a = 5;
// let b = Math.pow(a, 2);

// console.log(b);

// Swapping two numbers

// let a = 5;
// let b = 6;
// let temporary;

// // Swapping variables
// temporary = a;
// a = b;
// b = temporary;

// console.log("The value of a after swapping:", a);
// console.log("The value of b after swapping:", b);

// additon of three numbers

// let a = 5;
// let b = 20;
// let c = 25;

// let add = a + b + c;

// console.log("Additon of three numbers:", add);

// Celsius to Fahrenhiet    (15°C × 9/5) + 32 = 59°F

// let Celsius = 15;
// let Fahrenhiet = (9 / 5) * Celsius + 32;

// console.log("Fahrenhiet:", Fahrenhiet);

// Meter to Miles  //0.000621

// let meter = 185;
// let miles = meter * 0.000621;

// console.log("Miles:", miles);

// Pounds to kG   0.4536

// let pounds = 2.204;
// let kg = pounds * 0.4536;

// console.log(kg);

// class myClass {
//   static myStaticMethod() {
//     return "hi";
//   }
//   static myStaticProperty() {
//     return "hello";
//   }
// }
// console.log(myClass.myStaticMethod());
// console.log(myClass.myStaticProperty());

// const classInstance = new (class {
//   set prop(value) {
//     console.log(value);
//   }
// })();
// classInstance.prop = 10;

// const classInstance = new (class {
//   get prop() {
//     return 100;
//   }
// })();
// classInstance.prop = 10;
// console.log(classInstance.prop);

// const PI = 3.141593;

// console.log(PI > 3.0);

// var a = 1;
// var b = 2;

// for (let i = 0; i < a.length; i++) {
//   let x = a[i];
// }
// for (let i = 0; i < b.length; i++) {
//   let y = b[i];
// }
// let callbacks = [];
// for (let i = 0; i <= 2; i++) {
//   callbacks[i] = function () {
//     return i * 2;
//   };
// }

// console.log(callbacks[0]());
// console.log(callbacks[1]());
// console.log(callbacks[2]());

// {
//   function foo() {
//     return 1;
//   }
//   foo === 1;
//   {
//     function foo() {
//       return 2;
//     }
//     foo === 2;
//   }
// }
// console.log(foo(1));

// Slice

let fruits = "Apple,Mango,Banana";
let part = fruits.slice(6);
console.log(part);

let part1 = fruits.slice(6, 11);
console.log(part1);
let part2 = fruits.slice(-6);
console.log(part2);
let part3 = fruits.slice(-12, -1);
console.log(part3);

// replace

let msg = "Please visit Microsoft";
let newMsg = msg.replace("Microsoft", "Website");

console.log(newMsg);

// To uppercase

let str = "this is string";
let str1 = str.toUpperCase();
console.log(str1);

//To lower case
let lwrCase = "THIS IS STRING";
let lwrCase1 = lwrCase.toLowerCase();

console.log(lwrCase1);
