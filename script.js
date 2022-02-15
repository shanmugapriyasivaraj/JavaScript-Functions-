// 1.print odd numbers in an Array
// IIFE function

(function (arr) {
  arr.forEach((odd) => {
    if (odd % 2 != 0) {
      console.log("Odd number:", odd);
    }
  });
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// anonymous function

let arr = function (odd) {
  odd.forEach((key) => {
    if (key % 2 != 0) {
      console.log("Odd number:", key);
    }
  });
};
arr([1, 2, 3, 4, 5, 6, 7, 8, 9]);
