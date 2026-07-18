import {test, expect} from '@playwright/test'

test.skip('MultiTabs', async ({page, context})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const newtab = context.waitForEvent('page');
    await page.getByRole('link', {name: "OrangeHRM, Inc"}).click();
    const newpage = await newtab;
    console.log(await newpage.title());

    await page.bringToFront();
    await page.waitForTimeout(5000);
    console.log(await page.title());
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.waitForTimeout(5000);

    await newpage.bringToFront();
    console.log(await newpage.title());
    console.log(await page.title());
    await page.waitForTimeout(5000);

})



test('HandleNewTab', async({browser})=>{

    const context = await browser.newContext();
    const page1 = await context.newPage();
    
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    const pagepromise = context.waitForEvent('page');

    await page1.getByRole('link', {name: 'OrangeHRM, Inc'}).click();

    const newpage = await pagepromise;

    console.log(await newpage.title());
    await newpage.close();

    await page1.bringToFront();
    console.log(await page1.title());

    await page1.waitForTimeout(6000);



})