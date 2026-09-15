//import { test, expect } from '@playwright/test';

import{test} from "../../registrationFixture.ts/registerFixture";

test("Frame handling", async ({ page,registerUser }) => {
    await page.goto("https://vinothqaacademy.com/iframe/");

    //Get total frames count
  const framesCount=  await page.frames()
  console.log("Total frames in the page are : "+framesCount.length)

  const frame1=await page.frameLocator("iframe[title='Web Table']")
  await frame1.locator("//input[@id='nameInput']").fill("Vinoth")
  await page.waitForTimeout(2000)

})