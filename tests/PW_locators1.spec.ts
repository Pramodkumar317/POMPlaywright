
import {test, expect} from '@playwright/test'

test('BasicTest', async ({page})=>{

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    const actualpagetitle = await page.title();
    console.log(actualpagetitle);
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');

    const username = await page.locator('#username');
    await expect(username).toBeVisible();

    await page.getByLabel('username').fill('student');
    await page.getByLabel('password').fill('Password123');
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');

    const headtext = await page.getByText('Logged In Successfully');
    await expect(headtext).toBeVisible();

    await page.getByRole('link', {name: 'Log out'}).click();
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
    await page.waitForTimeout(5000);

})

test('BasisTEst2', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.getByPlaceholder('Enter Name').fill('Amit');

    await page.waitForTimeout(5000);


})