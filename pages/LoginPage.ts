import { Locator, Page } from '@playwright/test'

export class LoginPage {

    //Page objects
    readonly page: Page

    //Locators
    readonly username: Locator
    readonly password: Locator
    readonly loginButton: Locator



    constructor(page: Page) {
        this.page = page
        this.username = page.locator('[name="username"]')
        this.password = page.locator('[name="password"]')
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    /* Createing the methods*/
    // async navigateToLoginPage() {
    //     await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // }

    // async enterUsername() {
    //     await this.username.fill('Admin')

    // }

    // async enterPassword() {
    //     await this.password.fill('admin123')

    // }

    // async clickLoginButton() {
    //     await this.loginButton.click()
    //     //await this.page.waitForTimeout(20000)

    // }


    //Creating single method to handle the login flow

    async loginFlow(username:string, password:string) {

        //Navigatge to the url
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await this.page.waitForLoadState('networkidle')
        //Enter the username
        await this.username.fill(username)
        //Enter the password
        await this.password.fill(password)
        //Cick on login button
        await this.loginButton.click()

        await this.page.waitForTimeout(5000)

    }
}