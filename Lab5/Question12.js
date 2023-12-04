function printFibo(a, b, n) {
    if (n <= 0) {
      console.log("Invalid length!");
      return;
    }
  
    // first two fibo numbers
    let fibonacciSequence = [a, b];
  
    for (let i = 2; i < n; i++) {
      let nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextNumber);
    }
  
    // Print then fibo sequence
    console.log(fibonacciSequence.join(', '));
  }