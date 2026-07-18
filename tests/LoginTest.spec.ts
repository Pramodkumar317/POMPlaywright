import {test, expect} from '@playwright/test'
import {LoginPage} from '../pages/loginPage'
import {ProductListPage} from '../pages/productlistPage'
import {CartPage} from '../pages/cartPage'


/*test('ValidateLogin', async ({page })=>{


    await page.goto("https://www.saucedemo.com/");
    const loginapge = new LoginPage(page);
    await loginapge.doLogin();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.waitForTimeout(2000);
});


test('Validate Add To Cart', async ({page})=>{


    await page.goto("https://www.saucedemo.com/");
    const loginpage = new LoginPage(page);
    await loginpage.doLogin();
    await page.waitForTimeout(2000);

    const inventoryPage =new InventoryPage(page);
    inventoryPage.addtocartclick();
    await page.waitForTimeout(10000);
  
});*/


test('Validate  Cart Page and checkout', async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    const loginpage= new LoginPage(page);
    loginpage.doLogin();
    await page.waitForTimeout(3000);

    const productlistpage = new ProductListPage(page);
    await productlistpage.addtocartclick()
    await productlistpage.headercomponent.checkBurgerMenu();
    await page.waitForTimeout(2000);

    const cartpage=new CartPage(page);
    await cartpage.headercomponent.checkBurgerMenu();
    await cartpage.carticonclick();
    await page.waitForTimeout(5000);

});


