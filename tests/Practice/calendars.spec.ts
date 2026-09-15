import { test, expect } from '@playwright/test'

test("Calendar handling-method1", async ({ page }) => {

    await page.goto("https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html")

    //find date field 
    await page.locator("//input[@id='datepicker']").fill("10/04/1976")

})

test("Calendar handling approch2", async ({ page }) => {

    const expeectedYear = '2027'
    const expectedMonth = 'November'
    const expectedDay = 13

    await page.goto("https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html")

    await page.locator("//input[@id='datepicker']").click()

    let actualMonth = await page.locator(".ui-datepicker-month").innerText()

    let actualYear = await page.locator(".ui-datepicker-year").innerText()

    while (actualYear !== expeectedYear || actualMonth !== expectedMonth) {
        //clicking on the next icon on the calendar
        await page.locator("//span[text()='Next']").click()

        actualMonth = await page.locator(".ui-datepicker-month").innerText()
        actualYear = await page.locator(".ui-datepicker-year").innerText()
    }

    let xpath = "//td[@data-handler='selectDay']/a[text()='13']"

    await page.locator(xpath).click()

})


test.only('Select future date when month and year match', async ({ page }) => {

    await page.goto('https://www.redbus.in/');

    // Open calendar
    await page.locator('//div[@aria-label="Select date of journey"]').click();

    const targetMonth = "September";
    const targetYear = "2026";
    const targetDay = "23";

    const monthYearLocator = page.locator("//p[@aria-live='polite']");

    while (true) {

        const displayedMonthYear = (await monthYearLocator.textContent())?.trim();
        console.log(`Current Calendar: ${displayedMonthYear}`);
        //August2026

        if (displayedMonthYear?.includes(targetMonth) && displayedMonthYear?.includes(targetYear)) {
            break;
        }

        // Click Next Month Arrow
        await page.locator("//i[contains(@aria-label,'Next month')]").click();

        // Wait for calendar to refresh
        await page.waitForTimeout(500);

        //await page.locator(`//ul[@role='grid']//li[@role='gridcell' and normalize-space()='${targetDay}']`).click();
    }

    // Select the target day
    await page.locator(`//ul[@role='grid']//li[@role='gridcell' and normalize-space()='${targetDay}']`).click();

    await page.waitForTimeout(5000); // Optional: Wait for any potential UI updates after selecting the date
    console.log(`Selected Date: ${targetDay} ${targetMonth} ${targetYear}`);
});
