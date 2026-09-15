import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { MyInfoFnameUpdate } from '../pages/MyInfoFnameUpdate'
import { loginData } from '../testData/loginData'


for (const data of loginData) {
    test(`Login with multipletest data '${data.username}'`, async ({ page }) => {

        //Object creation for the class
        const loginPage = new LoginPage(page)
        const myinfomodule = new MyInfoFnameUpdate(page)

        //Test block implementation
        await loginPage.loginFlow(data.username, data.password)
        await myinfomodule.navigateToMyInfoLink()
    })
}