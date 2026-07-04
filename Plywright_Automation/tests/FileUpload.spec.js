import { test } from '@playwright/test';
import path from 'path';

test('Single File Upload', async ({ page }) => {
  await page.goto('https://testpages.eviltester.com/pages/files/file-upload/');

  await page.mouse.wheel(0,400);
  const filePath = path.resolve('uploads', 'txt1.txt');
  console.log(filePath);

  await page.setInputFiles('#fileinput', filePath);

  await page.waitForTimeout(4000)
});




test('screensht of full page and otehr thihgs',async ({page})=>{
    await page.goto('https://amazon.in');
    await page.waitForLoadState('load');
    await page.waitForTimeout(5000);
    // await page.screenshot({path:`amazon-full-page-screenshot-${Date.now()}.jpg`,fullPage:true})
    await page.screenshot({path:'uploads/amazon.jpg', fullPage:true});
})



test.describe('Login tests',()=>{
    test('first test',async({page})=>{
        await page.goto('https://amazon.in');
        await page.waitForTimeout(3000);
    })

    test('secodn test',async({page})=>{
        await page.goto('https://amazon.in');
        await page.waitForTimeout(3000);
    })
})



test.describe('Login tests2',()=>{
    test('first test2',async({page})=>{
        await page.goto('https://amazon.in');
        await page.waitForTimeout(3000);
    })

    test('secodn test2',async({page})=>{
        await page.goto('https://amazon.in');
        await page.waitForTimeout(3000);
    })
})


