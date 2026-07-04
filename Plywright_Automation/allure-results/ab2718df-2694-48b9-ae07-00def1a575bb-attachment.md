# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FileUpload.spec.js >> screensht of full page and otehr thihgs
- Location: tests\FileUpload.spec.js:19:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.screenshot: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#nav-logo-sprites')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - heading "Click the button below to continue shopping" [level=4] [ref=e9]
    - button "Continue shopping" [ref=e18] [cursor=pointer]
  - generic [ref=e21]:
    - link "Conditions of Use & Sale" [ref=e22] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=200545940
    - link "Privacy Notice" [ref=e23] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=200534380
  - generic [ref=e24]: © 1996-2025, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | import { test } from '@playwright/test';
  2  | import path from 'path';
  3  | 
  4  | test('Single File Upload', async ({ page }) => {
  5  |   await page.goto('https://testpages.eviltester.com/pages/files/file-upload/');
  6  | 
  7  |   await page.mouse.wheel(0,400);
  8  |   const filePath = path.resolve('uploads', 'txt1.txt');
  9  |   console.log(filePath);
  10 | 
  11 |   await page.setInputFiles('#fileinput', filePath);
  12 | 
  13 |   await page.waitForTimeout(4000)
  14 | });
  15 | 
  16 | 
  17 | 
  18 | 
  19 | test('screensht of full page and otehr thihgs',async ({page})=>{
  20 |     await page.goto('https://amazon.in');
  21 |     await page.waitForLoadState('load');
  22 |     await page.waitForTimeout(5000);
  23 |     // await page.screenshot({path:`amazon-full-page-screenshot-${Date.now()}.jpg`,fullPage:true})
  24 |     const ele = await page.locator('#nav-logo-sprites');
> 25 |     await ele.screenshot({path:'uploads/amazon.jpg'});
     |               ^ Error: locator.screenshot: Test timeout of 30000ms exceeded.
  26 | })
  27 | 
  28 | 
  29 | 
  30 | test.describe('Login tests',()=>{
  31 |     test('first test',async({page})=>{
  32 |         await page.goto('https://amazon.in');
  33 |         await page.waitForTimeout(3000);
  34 |     })
  35 | 
  36 |     test('secodn test',async({page})=>{
  37 |         await page.goto('https://amazon.in');
  38 |         await page.waitForTimeout(3000);
  39 |     })
  40 | })
  41 | 
  42 | 
  43 | 
  44 | test.describe('Login tests2',()=>{
  45 |     test('first test2',async({page})=>{
  46 |         await page.goto('https://amazon.in');
  47 |         await page.waitForTimeout(3000);
  48 |     })
  49 | 
  50 |     test('secodn test2',async({page})=>{
  51 |         await page.goto('https://amazon.in');
  52 |         await page.waitForTimeout(3000);
  53 |     })
  54 | })
  55 | 
  56 | 
  57 | 
```