import { Page, Locator } from "@playwright/test";
import {TEST_DATA} from '../test-data/testData'

export class LoginPage
{  
    page: Page;
    usernameField: Locator;
    passwordField: Locator;
    loginButton: Locator;

    constructor(page: Page)
    {
       this.page = page;
       this.usernameField = page.locator('#user-name');
       this.passwordField = page.locator('#password');
       this.loginButton = page.locator('#login-button');
    }

async openApplication()
{
    await this.page.goto('https://www.saucedemo.com/')
}

async doLogin()
{
  await this.usernameField.fill(TEST_DATA.user.username);
  await this.passwordField.fill(TEST_DATA.user.password);
  await this.loginButton.click();
}

}

