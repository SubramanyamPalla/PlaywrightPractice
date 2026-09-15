import { test, expect } from '@playwright/test'

test("Datatables handling", async ({ page }) => {
    //Navigate to url
    await page.goto("https://practice.expandtesting.com/dynamic-table")

    //identify table
    await page.locator("//table[@class='table table-striped']")

    //Get all headers/columns
    let headerNames = await page.locator("//table[@class='table table-striped']/thead/tr/th")
    console.log("The table columns are :" + await headerNames.count())

    //Get all the rows 
    let rowsCount = await page.locator("//table[@class='table table-striped']/tbody/tr")
    console.log("The total rows are :" + await rowsCount.count())

    const rowCount = await rowsCount.count();

    for (let i = 0; i < rowCount; i++) {
        const row = rowsCount.nth(i);
        const values = await row.locator('td').allTextContents();

        console.log(`Row ${i + 1}:`, values);
    }
    const columnCount = await headerNames.count();
    for (let j = 0; j < columnCount; j++) {

        const column = headerNames.nth(j);

        const columnData = await column.textContent();

        console.log(`Column ${j + 1}: ${columnData}`);
    }
})