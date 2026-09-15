import { test, expect } from '@playwright/test';
//import { join } from 'path/posix';

test('Web Tables Test', async ({ page }) => {
  // Test implementation here
  await page.goto("https://the-internet.herokuapp.com/tables#edit")

  //Column headers names

  const columnHeaders = await page.locator("//table[@id='table1']/thead/tr/th")
  console.log("columnHeaders count: " + await columnHeaders.count())

  let columnHeadersCount = await columnHeaders.count()

  for (let i = 0; i < columnHeadersCount; i++) {

    let columnHeaderText = await columnHeaders.nth(i).innerText()
    console.log("Column header text :" + columnHeaderText)
  }

  //Get all the rows data from the table

  const tableRows = await page.locator("//table[@id='table1']/tbody/tr/td")
  const tableRowsCount = await tableRows.count()
  console.log("tableRows count: " + tableRowsCount)


  //Iteract through table data

  for (let j = 0; j < tableRowsCount; j++) {
    let rowsdata = await tableRows.nth(j).innerText()
    console.log("Row data: " + rowsdata)
  }


  //Task print the number of rows
  




})