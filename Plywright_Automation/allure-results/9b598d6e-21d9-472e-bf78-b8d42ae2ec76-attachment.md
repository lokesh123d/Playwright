# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.ts >> demo test
- Location: tests\demo.spec.ts:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.type: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#twotabsearchtextbox')

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
  1  | import {test, expect} from '@playwright/test';
  2  | 
  3  | 
  4  | test('demo test', async ({page})=>{
  5  |     await page.goto('https://www.amazon.in');
> 6  |    await page.locator('#twotabsearchtextbox').type('macbook pro m5');
     |                                               ^ Error: locator.type: Test timeout of 30000ms exceeded.
  7  |    await page.keyboard.press('Enter');
  8  |     await page.getByRole('listitem');
  9  |     console.log(await page.getByRole('listitem').count());
  10 | })
```