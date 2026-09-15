import { Locator, Page } from '@playwright/test'

export class MyInfoFnameUpdate {

    //Page object
    readonly page: Page;

    //Locators Declaration or capturing
    readonly myInfoLink: Locator
    readonly firstName: Locator

    //Constructor to udset se in the test block
    constructor(page: Page) {
        this.page = page;
        this.myInfoLink = page.getByText('My Info', { exact: true })
        this.firstName = page.getByPlaceholder('First Name')
    }

    //Methods declaration

    // async clickOnGetMyInfoLink() {
    //     await this.myInfoLink.click()
    // }

    // async renameTheEmpFullName() {
    //     await this.firstName.clear()
    //     await this.firstName.fill('Sandeep Test')
    // }

  async navigateToMyInfoLink(){

    //Click on my info link
    await this.myInfoLink.click()
    
    //Rename the emp full name
    await this.firstName.clear()
    await this.firstName.fill('Sandeep Test')

  }
}