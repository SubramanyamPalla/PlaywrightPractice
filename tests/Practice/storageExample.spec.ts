
import { test, expect } from '@playwright/test'

test('Orange HRM storage state demo-login', async ({ page }) => {
    //Access the parabank url
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await page.waitForTimeout(2000)
    
})

// test("access admin module", async ({ page }) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

// })

// test("access1 admin module", async ({ page }) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

// })

// test("access2 admin module", async ({ page }) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

// })

// test("access3 admin module", async ({ page }) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

// })