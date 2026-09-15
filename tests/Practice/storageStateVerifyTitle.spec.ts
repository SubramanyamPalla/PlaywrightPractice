import { test, expect } from '@playwright/test'

test('Create storage state file', async ({ page }) => {
    //Access the orange hrm url
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    await page.locator(`//p[@class='oxd-userdropdown-name']`).click()

    await page.waitForTimeout(2000)

})

test("access the Adimn link ", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    //CLick on admin link
    await page.getByRole('link', { name: 'Admin' }).click()

    const adminlink = await page.getByRole('heading', { name: 'System Users', level: 5 }).isEnabled()
    console.log(adminlink)

    await page.waitForTimeout(2000)
})