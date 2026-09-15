// spec: spec/automationexercise.plan.md
// seed: tests/seed.spec.ts

import { test } from '@playwright/test';
import { HomePage, SignupLoginPage, AccountInformationPage, AccountCreatedPage } from '../../pages/AutomationExercisePages';

test.describe('Account Registration and Login', () => {
  test('Successful new user registration', async ({ page }) => {
    const homePage = new HomePage(page);
    const signupLoginPage = new SignupLoginPage(page);
    const accountInformationPage = new AccountInformationPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);

    const name = 'Jordan Blake';
    const uniqueEmail = `jordan.blake.qa.test${Date.now()}@example.com`;

    // 1. Navigate to https://automationexercise.com/
    await homePage.goto();

    // 2. Click 'Signup / Login' in the header
    await homePage.goToSignupLogin();
    await signupLoginPage.expectSignupAndLoginPanelsVisible();

    // 3. Enter a unique name and a unique email address, 4. Click 'Signup'
    await signupLoginPage.signup(name, uniqueEmail);
    await accountInformationPage.expectPrefilled(name, uniqueEmail);

    // 5. Fill in title, password, date of birth, and all address/account detail fields
    await accountInformationPage.fillAccountDetails({
      password: 'SecurePass!2026',
      day: '15',
      month: '5',
      year: '1990',
      firstName: 'Jordan',
      lastName: 'Blake',
      company: 'QA Test Co',
      address: '123 Test Street',
      country: 'United States',
      state: 'California',
      city: 'San Francisco',
      zipcode: '94105',
      mobileNumber: '4155551234',
    });

    // 6. Click 'Create Account'
    await accountInformationPage.createAccount();
    await accountCreatedPage.expectAccountCreated();

    // 7. Click 'Continue'
    await accountCreatedPage.continueToHome();
    await homePage.expectLoggedInAs(name);
  });
});
