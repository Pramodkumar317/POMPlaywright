
//import {test, expect} from '@playwright/test'
import {test,expect} from '../fixtures/pageobjectfixture';


test('LoginTest' , async ({page, loginpage})=>{

    //directl running test cases without login as we are using storage state.
   await page.goto('https://www.saucedemo.com/inventory.html');
   await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
   await page.waitForTimeout(3000);
   
});
