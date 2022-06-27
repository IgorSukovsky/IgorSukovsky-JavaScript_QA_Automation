// const assert = require("assert");

// describe("webdriver.io page", () => {
//   it("should have the right title", async () => {
//     await browser.url("https://v5.webdriver.io");
//     const title = await browser.getTitle();
//     assert.strictEqual(
//       title,
//       "WebdriverIO · Next-gen WebDriver test framework for Node.js"
//     );
//   });

//   it("should demonstrate the addValue command", async () => {
//     await browser.url("https://v5.webdriver.io");

//     let input = $("#search_input_react");
//     await input.addValue("test");
//     await browser.pause(2000);
//     await input.addValue(123);
//     await browser.pause(2000);
//   });

//   it("should demonstrate the setValue command", async function () {
//     await browser.url("https://v5.webdriver.io");
//     const elem = $("#search_input_react");
//     await elem.setValue("test123");
//     await browser.pause(2000);
//   });
//   it("should demonstrate the click command", async () => {
//     await browser.url("https://v5.webdriver.io");
//     const blogButton = $('[href="/help.html"]');
//     await browser.pause(2000);
//     await blogButton.click();
//     await browser.pause(2000);
//     const guideButton = $(
//       '.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]'
//     );
//     await guideButton.click();
//     await browser.pause(2000);
//   });
// });
