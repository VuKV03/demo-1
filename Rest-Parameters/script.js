const number = (num1, num2, ...numOther) => {
  console.log("num1: ", num1) // 1
  console.log("num2: ", num2) // 2
  console.log("Other: ", numOther) // [3, 4, 5, 6]
}

number(1, 2, 3, 4, 5, 6);