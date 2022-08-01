const assert = require("assert");

describe("webdriver.io page", () => {
  it("should have the right title", async () => {
    await browser.url("https://v5.webdriver.io");
    const title = await browser.getTitle();
    assert.strictEqual(
      title,
      "WebdriverIO · Next-gen WebDriver test framework for Node.js"
    );
  });
  // ======================================addValue
  it("should demonstrate the addValue command", async () => {
    await browser.url("https://v5.webdriver.io");
    let input = $("#search_input_react");
    await input.addValue("test");
    await browser.pause(2000);
    await input.addValue(123);
    await browser.pause(2000);
  });
  // ======================================setValue
  it("should demonstrate the setValue command", async function () {
    await browser.url("https://v5.webdriver.io");
    const elem = $("#search_input_react");
    await elem.setValue("test123");
    await browser.pause(2000);
  });
  // =====================================click
  it("should demonstrate the click command", async () => {
    await browser.url("https://v5.webdriver.io");
    const blogButton = $('[href="/help.html"]');
    await browser.pause(2000);
    await blogButton.click();
    await browser.pause(2000);
    const guideButton = $(
      '.nav-site.nav-site-internal [href="/docs/gettingstarted.html"]'
    );
    await guideButton.click();
    await browser.pause(2000);
  });
  // =======================================getAttribute
  it("should demonstrate the getAttribute command", async () => {
    await browser.url("https://v5.webdriver.io");
    const input = $("#search_input_react");
    let attr = await input.getAttribute("title");
    console.log("Title attribute is: " + attr);
    await browser.pause(2000);

    await input.setValue("Privet");
    attr = await input.getAttribute("role");
    console.log(attr);
    console.log("Value attribute is:" + attr);
    await browser.pause(2000);
  });
  // ======================================getLocation
  it("should demonstrate the getLocation function", async () => {
    await browser.url("https://v5.webdriver.io");
    const logo = $("#search_input_react");
    const location = await logo.getLocation();
    console.log(location);
    await browser.pause(2000);

    const xLocation = await logo.getLocation("x");
    console.log("xLocation" + xLocation);
    await browser.pause(2000);
  });
  // ========================================getText
  it("should demonstrate the getText function", async () => {
    await browser.url("https://v5.webdriver.io");
    const blogButton = $('[href="/help.html"]');
    console.log("Text for element:" + (await blogButton.getText()));
    await browser.pause(2000);
  });
});
