import {test,expect} from '../fixtures/pageobjectfixture'

test('Authentication storage state', async({page,loginpage})=>{

console.log("******** GLOBAL SETUP STARTED ********");
await loginpage.openApplication();
await loginpage.doLogin();
await page.context().storageState({path:'auth.user.json'})
console.log("******** GLOBAL SETUP STARTED ********");
})