//import {test} from '@playwright/test'
import {test} from '../fixtures/signinPageFixture'
//import {test} from '../fixtures/pageobjectfixture'



test('ClickProduct', async({signinpage})=>{      
      
      await signinpage.locator('#item_4_title_link').click();
      await signinpage.waitForTimeout(5000);

})

test('ClickAddToCart', async({signinpage})=>{
                 
      await signinpage.locator('#add-to-cart-sauce-labs-backpack').click();
      await signinpage.locator('.shopping_cart_link').click();
      await signinpage.waitForTimeout(5000);

})
