import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly signupLoginLink: Locator;
    readonly loggedInAsText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
        this.loggedInAsText = page.getByText('Logged in as');
    }

    async goto() {
        await this.page.goto('https://automationexercise.com/');
    }

    async goToSignupLogin() {
        await this.signupLoginLink.click();
    }

    async expectLoggedInAs(name: string) {
        await expect(this.page.getByText(`Logged in as ${name}`)).toBeVisible();
    }
}

export class SignupLoginPage {
    readonly page: Page;
    readonly newUserSignupHeading: Locator;
    readonly loginHeading: Locator;
    readonly signupNameInput: Locator;
    readonly signupEmailInput: Locator;
    readonly signupButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newUserSignupHeading = page.getByRole('heading', { name: 'New User Signup!' });
        this.loginHeading = page.getByRole('heading', { name: 'Login to your account' });
        const signupForm = page.locator('form').filter({ hasText: 'Signup' });
        this.signupNameInput = signupForm.getByRole('textbox', { name: 'Name' });
        this.signupEmailInput = signupForm.getByPlaceholder('Email Address');
        this.signupButton = page.getByRole('button', { name: 'Signup' });
    }

    async expectSignupAndLoginPanelsVisible() {
        await expect(this.newUserSignupHeading).toBeVisible();
        await expect(this.loginHeading).toBeVisible();
    }

    async signup(name: string, email: string) {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click();
    }
}

export class AccountInformationPage {
    readonly page: Page;
    readonly enterAccountInfoHeading: Locator;
    readonly nameInput: Locator;
    readonly emailInput: Locator;
    readonly titleMrRadio: Locator;
    readonly passwordInput: Locator;
    readonly daysSelect: Locator;
    readonly monthsSelect: Locator;
    readonly yearsSelect: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly companyInput: Locator;
    readonly addressInput: Locator;
    readonly countrySelect: Locator;
    readonly stateInput: Locator;
    readonly cityInput: Locator;
    readonly zipcodeInput: Locator;
    readonly mobileNumberInput: Locator;
    readonly createAccountButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.enterAccountInfoHeading = page.getByRole('heading', { name: 'Enter Account Information' });
        this.nameInput = page.locator('#name');
        this.emailInput = page.locator('#email');
        this.titleMrRadio = page.locator('#id_gender1');
        this.passwordInput = page.locator('#password');
        this.daysSelect = page.locator('#days');
        this.monthsSelect = page.locator('#months');
        this.yearsSelect = page.locator('#years');
        this.firstNameInput = page.locator('#first_name');
        this.lastNameInput = page.locator('#last_name');
        this.companyInput = page.locator('#company');
        this.addressInput = page.locator('#address1');
        this.countrySelect = page.locator('#country');
        this.stateInput = page.locator('#state');
        this.cityInput = page.locator('#city');
        this.zipcodeInput = page.locator('#zipcode');
        this.mobileNumberInput = page.locator('#mobile_number');
        this.createAccountButton = page.locator('button[data-qa="create-account"]');
    }

    async expectPrefilled(name: string, email: string) {
        await expect(this.enterAccountInfoHeading).toBeVisible();
        await expect(this.nameInput).toHaveValue(name);
        await expect(this.emailInput).toHaveValue(email);
    }

    async fillAccountDetails(details: {
        password: string;
        day: string;
        month: string;
        year: string;
        firstName: string;
        lastName: string;
        company: string;
        address: string;
        country: string;
        state: string;
        city: string;
        zipcode: string;
        mobileNumber: string;
    }) {
        await this.titleMrRadio.check();
        await this.passwordInput.fill(details.password);
        await this.daysSelect.selectOption(details.day);
        await this.monthsSelect.selectOption(details.month);
        await this.yearsSelect.selectOption(details.year);
        await this.firstNameInput.fill(details.firstName);
        await this.lastNameInput.fill(details.lastName);
        await this.companyInput.fill(details.company);
        await this.addressInput.fill(details.address);
        await this.countrySelect.selectOption(details.country);
        await this.stateInput.fill(details.state);
        await this.cityInput.fill(details.city);
        await this.zipcodeInput.fill(details.zipcode);
        await this.mobileNumberInput.fill(details.mobileNumber);
    }

    async createAccount() {
        await this.createAccountButton.click();
    }
}

export class AccountCreatedPage {
    readonly page: Page;
    readonly accountCreatedHeading: Locator;
    readonly continueLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountCreatedHeading = page.getByRole('heading', { name: 'Account Created!' });
        this.continueLink = page.getByRole('link', { name: 'Continue' });
    }

    async expectAccountCreated() {
        await expect(this.accountCreatedHeading).toBeVisible();
    }

    async continueToHome() {
        await this.continueLink.click();
    }
}
