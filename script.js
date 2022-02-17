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
// -function add(x, y) {
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

function toInt(num) {
  let value = parseInt(num);
  console.log("integer is :", value);
}
toInt("5");
toInt("1000");
toInt("hello");
