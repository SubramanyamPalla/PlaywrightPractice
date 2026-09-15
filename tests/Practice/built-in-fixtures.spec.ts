import { test, expect, chromium } from "@playwright/test";
import { request } from "node:http";


//Without fixtures 
test("without fixtures", async ({ }) => {

    //Launch the chome browser
    const browser = await chromium.launch()
    //create the context (like a incognito mode)
    const context = await browser.newContext()
    //create a page now
    const page = await context.newPage()
    //Launch athe site
    await page.goto('https://www.amazon.co.uk/')

    /*User Context fixtures- to remove the cookies*/

    console.log(await context.cookies())
    // console.log("after clearing the cookies")
    // console.log(await context.clearCookies())


    //Create another browser context
    //await page.pause()

    const context1 = await browser.newContext()
    const page1 = await context1.newPage()
    await page1.goto('https://demoqa.com/automation-practice-form')

    //await page1.pause()

    //  Make a new request
    const req = await page.request.get('https://jsonplaceholder.typicode.com/posts/1')
    const res = await req.json()
    console.log(res)

    //Browser name
    //console.log(await browser._name)

})


test.only("with fixtures", async ({ page,context,browser,request,browserName}) => {

    //Launch athe site
    await page.goto('https://www.amazon.co.uk/')

    /*User Context fixtures- to remove the cookies*/
    console.log(await context.cookies())
    
    //Create another browser context
    //await page.pause()

    const context1 = await browser.newContext({colorScheme:'dark'})
    const page1 = await context1.newPage()
    await page1.goto('https://playwright.dev/')

    //await page1.pause()

    //  Make a new request
    const req = await request.get('https://jsonplaceholder.typicode.com/posts/1')
    const res = await req.json()
    console.log(res)

    //Browser name
    console.log(await browserName)

})