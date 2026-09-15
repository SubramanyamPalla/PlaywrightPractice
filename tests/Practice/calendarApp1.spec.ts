import { test, expect } from '@playwright/test'

test("calendar handling approch1", async ({ page }) => {

    //pass the website url
    await page.goto("http://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html")

    //passing the date value

    await page.locator('//input[@id="datepicker"]').fill("10/04/1978")
    await page.waitForTimeout(5000)
})

test.only("Calendar handling Approch2", async ({ page }) => {

    const expectedYear = "2027"
    const expectedMonth = "December"
    const expectedDay = 12

    //pass the website url
    await page.goto("http://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html")

    //Clicking on the calendar field
    await page.locator('//input[@id="datepicker"]').click()

    let actualMonth = await page.locator(".ui-datepicker-month").innerText()
    //August
    console.log(actualMonth)

    let actualYear = await page.locator(".ui-datepicker-year").innerText()
    //2026
    console.log(actualYear)

    while (actualYear !== expectedYear || actualMonth !== expectedMonth) {

        //Clicking on next arrow
        await page.locator("//span[text()='Next']").click()

        actualMonth = await page.locator(".ui-datepicker-month").innerText()

        actualYear = await page.locator(".ui-datepicker-year").innerText()
    }
    //captureing the date value from the calendar
    let xpath = '//td[@data-handler="selectDay"]/a[text()="' + expectedDay + '"]'

    //Clickng on date value
    await page.locator(xpath).click()

    await page.waitForTimeout(10000)

})

