const numbers = [1, 2, 3, 4, 5];
numbers.forEach((item, index) => {
  numbers[index] = item * 2;
})

console.log(numbers);