import { test, expect, chromium } from '@playwright/test'




test("Without using the any fixture", async ({ }) => {

    //Launch the browser
    const browser = await chromium.launch()
    //Creat the context like smilar to the incognitno
    const context = await browser.newContext()
    //create a new page
    const page1 = await context.newPage()
    //Luanch the website 
    await page1.goto("/docs/test-fixtures#built-in-fixtures")

    //get the cookies value using context 
    console.log(await context.cookies())

    //await page1.pause()
    //create new 2nd context 
    const context1 = await browser.newContext()
    //create a new page
    const page2 = await context.newPage()
    //Luanch the website 
    await page2.goto("https://playwright.dev/docs/test-fixtures#built-in-fixtures")
    //await page2.pause()

    //Initiate the get request without using fixtures
    const req = await page1.request.get('https://jsonplaceholder.typicode.com/users/1')
    const res = await req.json()
    console.log(res)

    //I want to check in rbowser my tests are running
    console.log(await browser._name)

})


test.only("With using the any fixture", async ({ page, context, browser, request, browserName }) => {
    //Luanch the website 
    await page.goto("https://www.amazon.in/")

    //get the cookies value using context 
    console.log(await context.cookies())

    //await page1.pause()
    //create new 2nd context 
    const context1 = await browser.newContext()
    //create a new page
    const page2 = await context.newPage()
    //Luanch the website 
    await page2.goto("https://playwright.dev/docs/test-fixtures#built-in-fixtures")
    //await page2.pause()

    //Initiate the get request without using fixtures
    const req = await request.get('https://jsonplaceholder.typicode.com/users/1')
    const res = await req.json()
    console.log(res)

    //I want to check in rbowser my tests are running
    console.log(await browserName)

/*
1. Test
2. Page
3. Browser
4. Context
5. request
6. BrowserName
7. Expect
*/


})
