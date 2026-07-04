# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTable.spec.ts >> shift teting 
- Location: tests\WebTable.spec.ts:161:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.focus: Test timeout of 30000ms exceeded.
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
  63  |   const selectedMonthText = "March";
  64  |   const selectedYear = 2029;
  65  | 
  66  |   const frame = page.frameLocator(".demo-frame").first();
  67  |   const dateInput = frame.locator("#datepicker");
  68  | 
  69  |   await dateInput.click();
  70  |   await frame.locator(".ui-datepicker-calendar").waitFor({ state: "visible" });
  71  | 
  72  |   while (true) {
  73  |     const currentYear = Number(
  74  |       (await frame.locator(".ui-datepicker-year").textContent())?.trim(),
  75  |     );
  76  | 
  77  |     if (currentYear === selectedYear) {
  78  |       break;
  79  |     }
  80  | 
  81  |     if (selectedYear < currentYear) {
  82  |       await frame.locator(".ui-datepicker-prev").click();
  83  |     } else {
  84  |       await frame.locator(".ui-datepicker-next").click();
  85  |     }
  86  | 
  87  |     await page.waitForTimeout(200);
  88  |   }
  89  | 
  90  |   while (true) {
  91  |     const currentMonth = (await frame.locator(".ui-datepicker-month").textContent())?.trim();
  92  | 
  93  |     if (currentMonth === selectedMonthText) {
  94  |       break;
  95  |     }
  96  | 
  97  |     const monthOrder = [
  98  |       "January",
  99  |       "February",
  100 |       "March",
  101 |       "April",
  102 |       "May",
  103 |       "June",
  104 |       "July",
  105 |       "August",
  106 |       "September",
  107 |       "October",
  108 |       "November",
  109 |       "December",
  110 |     ];
  111 | 
  112 |     const currentMonthIndex = monthOrder.indexOf(currentMonth || "");
  113 |     const selectedMonthIndex = monthOrder.indexOf(selectedMonthText);
  114 | 
  115 |     if (currentMonthIndex === -1 || selectedMonthIndex === -1) {
  116 |       throw new Error(`Invalid month value: current='${currentMonth}' target='${selectedMonthText}'`);
  117 |     }
  118 | 
  119 |     if (selectedMonthIndex < currentMonthIndex) {
  120 |       await frame.locator(".ui-datepicker-prev").click();
  121 |               } else {
  122 |       await frame.locator(".ui-datepicker-next").click();
  123 |     }
  124 | 
  125 |     await page.waitForTimeout(200);
  126 |   }
  127 | 
  128 |   await expect(frame.locator(".ui-datepicker-year")).toHaveText(String(selectedYear));
  129 |   await expect(frame.locator(".ui-datepicker-month")).toHaveText(selectedMonthText);
  130 | 
  131 |   await frame.locator(`.ui-datepicker-calendar td a:text-is("${selectedDay}")`).first().click();
  132 |   await expect(dateInput).toHaveValue(/03\/12\/2029/);
  133 | });
  134 |   
  135 | 
  136 | 
  137 |   test.skip('Drag and Drop and scroll and hover and right click',async ({page})=>{
  138 |     await page.goto('//url is here');
  139 | 
  140 | // right click
  141 | await page.locator('').click({button:"right"});
  142 | // or 
  143 | await page.click('locator',{button:'right'});
  144 | 
  145 | // Drag and Drop
  146 | await page.locator('drag start locator the item which i have to drag').dragTo( page.locator('locator'));
  147 | 
  148 | // or
  149 | await page.dragAndDrop('sourceLocator','targetLocator');
  150 | 
  151 | 
  152 | 
  153 | // scroll down 
  154 | 
  155 | await page.mouse.wheel(0,500)
  156 |   })
  157 | 
  158 | 
  159 | 
  160 | 
  161 | test('shift teting ',async({page})=>{
  162 | await page.goto('https://amazon.in');
> 163 | await page.locator('#twotabsearchtextbox').focus();
      |                                            ^ Error: locator.focus: Test timeout of 30000ms exceeded.
  164 | await page.keyboard.down('Shift');
  165 | await page.keyboard.press('a');
  166 | await page.waitForTimeout(3000);
  167 | })  
  168 | 
  169 | 
  170 | 
```