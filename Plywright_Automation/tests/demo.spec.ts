import {test, expect} from '@playwright/test';


test('demo test', async ({page})=>{
    await page.goto('https://www.amazon.in');
   const continueShopping = page.getByRole('button', { name: 'Continue shopping' });
   if (await continueShopping.isVisible().catch(() => false)) {
       await continueShopping.click();
   }
   await page.locator('#twotabsearchtextbox').type('macbook pro m5');
   await page.keyboard.press('Enter');
    await page.getByRole('listitem');
    console.log(await page.getByRole('listitem').count());
})