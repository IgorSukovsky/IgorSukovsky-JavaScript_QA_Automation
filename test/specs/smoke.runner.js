const assert = require("assert");

describe("https://pay-quick-secure.eu page", () => {
  it("should have the right title", async () => {
    await browser.url("https://pay-quick-secure.eu/");
    const continueBtn = $('[href="./deposit-money.html"]');
    await browser.pause(2000);
    await continueBtn.click();
    await browser.pause(2000);
  });
  it("should demonstrate the addValue command", async () => {
    await browser.url("https://pay-quick-secure.eu/deposit-money.html");
    let input = $("#youSend");
    await input.deleteValue("250");
    await input.addValue("3000");
    await browser.pause(2000);
  });
});
