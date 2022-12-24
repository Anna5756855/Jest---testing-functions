const usdcny = require("./USD_to_CNY");

describe("Dollars to Yuan",
() => {
    const testCases = [
        {
        dollar: 15,
        yuan: "101.25 Chinese Yuan"
        },
        {
        dollar: 465,
        yuan: "3138.75 Chinese Yuan"
        }
    ];
    testCases.forEach(test => {
        it (`Dollar: ${test.dollar}, yuan(string): ${test.yuan}`,
        () => {
            expect(usdcny(test.dollar)).toBe(test.yuan)
        })
    })
})