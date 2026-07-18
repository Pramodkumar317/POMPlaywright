import { Page, Locator} from '@playwright/test'
import { BasePage } from '../basepage/basepage';

export class ProductListPage extends BasePage
{
    page : Page;
    addtocart : Locator;


    constructor(page:Page)
    {
        super(page);
        this.page= page;
        this.addtocart= page.locator("#add-to-cart-sauce-labs-backpack");
    }


    async addtocartclick()
    {
        await this.addtocart.click();
    }

}

