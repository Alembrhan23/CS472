function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  function multiplyArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }