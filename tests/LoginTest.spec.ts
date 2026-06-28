import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/loginpage'


test('ValidateLogin', async ({page })=>{


    await page.goto("https://www.saucedemo.com/");

    const loginapge = new LoginPage(page);
    await loginapge.doLogin();
    await page.waitForTimeout(2000);
})