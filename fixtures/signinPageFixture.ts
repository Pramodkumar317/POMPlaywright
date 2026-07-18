
import {test as base, Page} from '@playwright/test'


type signInPage={

 signinpage : Page;

}


export const test = base.extend<signInPage>({

signinpage : async ({page}, use)=>{
    await page.goto('/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    await use(page);
}
})
