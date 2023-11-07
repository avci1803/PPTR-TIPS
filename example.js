const puppeteer = require("puppeteer");
const devices = require("puppeteer/DeviceDescriptors");

(async () => {
  //emulate devices
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.emulate(devices["iPhone X"]);
  await page.goto("https://www.pptr.dev");
  await page.waitFor(5000);
  await browser.close();
})();
