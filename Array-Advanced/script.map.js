const numbers = [1, 2, 3];
const newNum = numbers.map((item) => {
  return item * 10;
})

console.log(numbers); // [1, 2, 3]
console.log(newNum); // [10, 20, 30]