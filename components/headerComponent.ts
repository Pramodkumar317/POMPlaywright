import {Page, Locator} from '@playwright/test'


export class HeaderComponent
{

    page:Page;
    burgerMenu:Locator;
    burgerMenuClose:Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.burgerMenu=page.locator("#react-burger-menu-btn");
        this.burgerMenuClose=page.locator("#react-burger-cross-btn");
    }


    async checkBurgerMenu()
    {
        await this.burgerMenu.click();
        await this.page.waitForTimeout(3000);
        await this.burgerMenuClose.click();

    }


}