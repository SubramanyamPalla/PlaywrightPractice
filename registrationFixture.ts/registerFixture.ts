import { test as baseTest, expect } from '@playwright/test'


type userData = {
    registerUser: any;
    loginUser: any
}

//Syntax to declare the custom fixture

export const test = baseTest.extend<userData>({

    //declare the custom fixture implmentatiion
    registerUser: async ({ page }, use) => {

        //Laucnh the website
        await page.goto('https://parabank.parasoft.com/parabank/register.htm')

        //Enter firstname field
        await page.locator("input[id='customer.firstName']").fill('Test')

        //Enter Lastname field
        await page.locator('input[name="customer.lastName"]', 'User')

        //Enter Address
        await page.locator('input[id="customer.address.street"]', 'Hyderabad')

        //Enter City
        await page.locator('[id="customer.address.city"]').fill('Mothi nagar, hyderabad')

        //Enter the state value
        await page.locator("input[id='customer.address.state']").fill('TS')

        await use()

        console.log("After use this message should display")

    }


})

