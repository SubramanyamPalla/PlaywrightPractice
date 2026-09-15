import { test, expect } from "@playwright/test"

test("css locators", async ({ page }) => {

    await page.goto('https://demoqa.com/automation-practice-form')

    //CSS locator with ID
    await page.locator('#firstName').fill("Test")

    //CSS Locator with other availble properties
    await page.locator('input[placeholder="Last Name"]').fill("user")

    //CSS Locator with class
    await page.locator('.form-control').fill('Hyderabad')
    await page.waitForTimeout(20000)

})