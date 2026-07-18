import {Page, Locator} from '@playwright/test'
import { BasePage } from '../basepage/basepage';

export class CartPage extends BasePage
{
    page:Page; // datatype
    carticon:Locator; //locator data type
    
    constructor(page:Page) // whenevr object is created constructor call automatically.
    {
        super(page);
        this.page=page;
        this.carticon=page.locator(".shopping_cart_link");
    }


    async carticonclick()
    {
        await this.carticon.click()
    }
}