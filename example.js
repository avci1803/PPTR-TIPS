const puppeteer = require("puppeteer");

(async () => {
  //convert page to PDF file
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("http://example.com/", { waitUntil: "networkidle0" });
  await page.pdf({ path: "example.pdf", format: "A4" });
  await browser.close();
})();
