//const puppeteer = require("puppeteer");
import puppeteer from "puppeteer";
import Homepage from "./homepage";
import { step } from "mocha-steps";

describe("Loads URL", () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.setDefaultTimeout(5000);
  });

  after(async () => {
    await browser.close();
  });

  step("should load homepage", async () => {
    const homepage = new Homepage(page);
    await homepage.visit();
  });
  step("step 2", async () => {
    await page.waitForSelector("#Fail");
  });
  step("astep 3", async () => {
    await page.waitForSelector("#Fail");
  });
  step("step 4", async () => {
    await page.waitForSelector("#Fail");
  });
});
