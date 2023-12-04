
// Using the reduce function to calculate the sum of the squares
function computeSumOfSquares(numbers) {
    
    const sumOfSquares = numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue ** 2;
    }, 0);

    return sumOfSquares;
}