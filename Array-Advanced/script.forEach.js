const numbers = [1, 2, 3];
numbers.forEach((item, index) => {
  numbers[index] = item * 2;
})

console.log(numbers); // [2, 4, 6]