// Creating even() method to the array.prototype
Array.prototype.even = function () {
  return this.filter((num) => num % 2 === 0);
};

// Creating odd() method to the array.prototype
Array.prototype.odd = function () {
  return this.filter((num) => num % 2 === 1);
};
// Testing the methods
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log("Even numbers:", numbers.even()); //outputs-->[2,4,6]
console.log("Odd numbers:", numbers.odd()); // outputs-->[1,3,5,7]
