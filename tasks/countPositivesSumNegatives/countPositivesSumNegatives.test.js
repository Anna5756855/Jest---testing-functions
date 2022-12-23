const countPositivesSumNegatives = require("./countPositivesSumNegatives");

describe("Counting positive integers and summing negatives",
() => {
    const testCases = [
        {
        input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
        expected: [10, -65]
        },
        {
        input: [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14],
        expected: [8, -50]
        }
    ];
    testCases.forEach(test => {
        it(`Input: ${test.input}, output should be: ${test.expected}`,
        () => {
            expect(countPositivesSumNegatives(test.input)).toEqual(test.expected)
        }
        )
    })
})
