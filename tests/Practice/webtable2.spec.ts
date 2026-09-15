import { test, expect } from '@playwright/test'

test("Get the table rows and columns", async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables#edit')

    //Get table columns count
    const tablecColmCount = await page.locator("//table[@id='table1']/thead/tr/th")
    console.log("The totla columns: " + await tablecColmCount.count())

    let tablecColmCount1 = await tablecColmCount.count()

    //Get table coulumn data/names

    for (let i = 0; i < tablecColmCount1; i++) {
        const allColumnNames = await tablecColmCount.nth(i).innerText()
        console.log(allColumnNames)

    }

    //Get table rows count

    const tableRows = await page.locator("//table[@id='table1']/tbody/tr/td")
    console.log("Tables rows: " + await tableRows.count())
    const tableRows1 = await tableRows.count()

    //Get the table all rows data 
    for (let j = 0; j < tableRows1; j++) {
        const rowsData = await tableRows.nth(j).innerText()
        console.log(rowsData)

    }

})