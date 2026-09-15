import { test, expect } from '@playwright/test';

test("Entering data without handiling Frames", async ({ page }) => {
    //Access the URL
    //await page.goto("https://vinothqaacademy.com/iframe/");

    await page.goto("https://letcode.in/frame");
    //We will use the 2 approches
    //By using the Frame method
    //By using the iFrameLocator-90%


    //By using the Frame method-By passing the name property

    // const parentFrame=await page.frame({name:'employeetable'})
    // await parentFrame?.locator('//input[@id="nameInput"]').fill('Subbu')
    // await page.waitForTimeout(3000)

    // //By using the Frame method-By passing the name url
    const parentFrame1 = page.frame({ url: 'https://letcode.in/frameui' })
    console.log(parentFrame1)
    await parentFrame1?.locator('//input[@name="fname"]').fill('Subbu')
    await page.waitForTimeout(5000)


    //Approch2- By using the iFrameLocator
    const framesCount = await page.frames()
    console.log(framesCount.length)

    const parent2 = page.frameLocator('#firstFr')
    await parent2.locator('//input[@placeholder="Enter email"]').first().fill('Palla')
    await page.waitForTimeout(5000)

    //Nested frames handling
    //const nestedParent=page.frameLocator('//iframe[@title="Inner Frame"]')
    // await nestedParent.locator('//input[@name="email"]').fill('test@gmail.com')
    // await page.waitForTimeout(5000)

    await parent2.frameLocator('//iframe[@title="Inner Frame"]')
        .locator('//input[@name="email"]')
        .fill('test@gmail.com')
    await page.waitForTimeout(5000)

    await page
        .frameLocator('#parent')
        .frameLocator('#child')
        .locator('@test[name=122')
        .fill('test')
})

test("Frame handling", async ({ page }) => {

    await page.goto("https://ui.vision/demo/iframes")

    const parentFrame = page.frame({ url: 'https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true' })
    console.log(parentFrame)
})

test.only('Select dropdown value in Google Form', async ({ page }) => {

    await page.goto('https://ui.vision/demo/iframes');

    //const frame = page.frameLocator('iframe[src*="docs.google.com"]');

    //await page.waitForTimeout(20000)

    // Open dropdown
    // await frame.getByRole('listbox').click();

    // const allOptions = frame.getByRole('option');

    // console.log(await allOptions.count());

    // for (let i = 0; i < await allOptions.count(); i++) {
    //     console.log(
    //         i,
    //         await allOptions.nth(i).textContent(),
    //         await allOptions.nth(i).isVisible()
    //     );
    // }

    const frame = page.frameLocator('iframe[src*="docs.google.com"]');

    // await frame.getByText('Choose', { exact: true }).click();

    // await frame.locator('[data-value="Yes"]').click();

    const dropdown = frame.getByRole('listbox');

    await dropdown.click();
    await dropdown.press('ArrowDown');
    await dropdown.press('Enter');

    await page.waitForTimeout(20000)

    // Wait for option to become visible
    //await frame.getByRole('option', { name: 'Yes' }).click({ force: true });

    // const option = frame.getByRole('option', { name: 'Yes' });

    // console.log(await option.count());
    // console.log(await option.isVisible());

});