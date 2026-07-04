# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DropDown.spec.js >> dynamic search bar
- Location: tests\DropDown.spec.js:17:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.type: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Search Amazon.in')

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
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("dropdown test", async ({ page }) => {
  4  |   await page.goto(
  5  |     "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php",
  6  |   );
  7  |   await page.locator("#state").click();
  8  |   const options1 = await page.locator("#state option").all();
  9  |   for (const element of options1) {
  10 |     const optionText = await element.textContent();
  11 |     if (optionText == "Uttar Pradesh") {
  12 |       await element.click();
  13 |     }
  14 |   }
  15 | });
  16 | 
  17 | test("dynamic search bar", async ({ page }) => {
  18 |   await page.goto("https://www.amazon.in");
> 19 |   await page.getByPlaceholder("Search Amazon.in").type("books", { delay: 100 });
     |                                                   ^ Error: locator.type: Test timeout of 30000ms exceeded.
  20 |   await expect(page.locator(".left-pane-results-container")).toBeVisible();
  21 |   const dynamicResults = await page.locator(".s-heavy").all();
  22 |   await page.locator(".s-heavy").first().click();
  23 |   await page.waitForTimeout(3000);
  24 | });
  25 | 
```