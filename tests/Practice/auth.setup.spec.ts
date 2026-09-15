import { test, expect } from '@playwright/test'

test('Create storage state file', async ({ page }) => {
    //Access the parabank url
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //Enter user name
    await page.locator('[name="username"]').fill('Admin')
    //Enter password
    await page.locator('[name="password"]').fill('admin123')
    //Click on login button
    await page.getByRole('button', { name: 'Login' }).click()

     //await page.locator("//a[@href='activity.htm?id=12345']").click()
    //Create a storage state
    await page.context().storageState({ path: "test_data/auth.json" })

})