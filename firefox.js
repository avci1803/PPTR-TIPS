const puppeteer = require("puppeteer");

(async () => {
  const browser = puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("http://zero.webappsecurity.com/index.html");
  await page.waitForSelector("#signin_button");
  await browser.close();
})();
