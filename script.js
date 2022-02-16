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

let prime = function (primeNum) {
  for (let i = 0; i < primeNum.length; i++) {
    let flag = 0;
    for (let j = 2; j < primeNum[i]; j++) {
      if (primeNum[i] % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      console.log("prime Number:", primeNum[i]);
    }
  }
};
prime([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
