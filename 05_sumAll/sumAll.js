// Implement a function that takes 2 positive integers and returns the sum of every integer between (and including) them:

// ```javascript
// sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
// ```


// test('works with larger number first', () => {
//     expect(sumAll(123, 1)).toEqual(7626);
//   });
const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2) ) {
        return "ERROR";
    }
    let total = 0;
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            total += i;
        }
        return total
    } else {
        for (let i = num2; i <= num1; i++) {
            total += i;
        }
        return total
    }
};

// Do not edit below this line
module.exports = sumAll;
