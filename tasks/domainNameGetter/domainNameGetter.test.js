const domainName = require("./domainNameGetter");

describe("Getting domain name",
() => {
  const testCase = [
    {
      link: "http://github.com/carbonfive/raygun",
      expectedOutput: "github"
    },
    {
      link: "http://www.zombie-bites.com",
      expectedOutput: "zombie-bites"
    },
    {
      link: "https://www.cnet.com",
      expectedOutput: "cnet"
    },
    {
      link: "google.com",
      expectedOutput: "google"
    },
    {
      link: "www.yandex.ru",
      expectedOutput: "yandex"
    }
  ];
  testCase.forEach(test => {
    it (`Input: ${test.link}, expecting: ${test.expectedOutput}`,
    () => {
      expect(domainName(test.link)).toBe(test.expectedOutput)
    })
  } )
})
