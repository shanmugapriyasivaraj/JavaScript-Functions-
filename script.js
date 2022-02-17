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

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log("isEven:", isEven(25));
console.log("isEven:", isEven("1h"));
console.log("isEven:", isEven(50));
