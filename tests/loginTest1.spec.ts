import {test, expect} from '../fixtures/pageobjectfixture'



test('Validate  Cart Page and checkout', async({page,loginpage,cartpage,productlistpage})=>{

    await page.goto("https://www.saucedemo.com/");

    loginpage.doLogin();
    await page.waitForTimeout(3000);

   await productlistpage.addtocartclick()
    await productlistpage.headercomponent.checkBurgerMenu();
    await page.waitForTimeout(2000);

  
    await cartpage.headercomponent.checkBurgerMenu();
    await cartpage.carticonclick();
    await page.waitForTimeout(5000);

});


