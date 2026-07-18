import {test as base,expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { CartPage } from '../pages/cartPage'
import { ProductListPage } from '../pages/productlistPage'

type MyFixture =
{
 loginpage : LoginPage;
 cartpage : CartPage
 productlistpage:ProductListPage
    
}


export const test = base.extend<MyFixture>({


    loginpage : async ({page}, use)  =>{

        await use(new LoginPage(page));
    },


    cartpage : async({page},use)=>{

        await use(new CartPage(page));
    },


    productlistpage : async({page},use)=>
    {
        await use(new ProductListPage(page));
    }

});

export {expect} from '@playwright/test';

