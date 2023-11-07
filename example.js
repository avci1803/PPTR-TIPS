const puppeteer = require("puppeteer");
const devices = require("puppeteer/DeviceDescriptors");

(async () => {
  //faking geolocation
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  //Grant rmission for geolocation changes
  const context = browser.defaultBrowserContext();
  await context.overridePermissions("https://pptr.dev", ["geolocation"]);
  await browser.close();
})();
