// using filter and reduce
function computeSumOfSquaresOfEvensOnly(numbers) {
    // Use filter to get only even numbers and then use reduce to calculate the sum of their squares
    const sumOfSquaresOfEvens = numbers
        .filter(number => number % 2 === 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue ** 2, 0);

    return sumOfSquaresOfEvens;
}

// using loops 