# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTable.spec.ts >> shift teting 
- Location: tests\WebTable.spec.ts:163:5

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
  65  |   const selectedMonthText = "March";
  66  |   const selectedYear = 2029;
  67  | 
  68  |   const frame = page.frameLocator(".demo-frame").first();
  69  |   const dateInput = frame.locator("#datepicker");
  70  | 
  71  |   await dateInput.click();
  72  |   await frame.locator(".ui-datepicker-calendar").waitFor({ state: "visible" });
  73  | 
  74  |   while (true) {
  75  |     const currentYear = Number(
  76  |       (await frame.locator(".ui-datepicker-year").textContent())?.trim(),
  77  |     );
  78  | 
  79  |     if (currentYear === selectedYear) {
  80  |       break;
  81  |     }
  82  | 
  83  |     if (selectedYear < currentYear) {
  84  |       await frame.locator(".ui-datepicker-prev").click();
  85  |     } else {
  86  |       await frame.locator(".ui-datepicker-next").click();
  87  |     }
  88  | 
  89  |     await page.waitForTimeout(200);
  90  |   }
  91  | 
  92  |   while (true) {
  93  |     const currentMonth = (await frame.locator(".ui-datepicker-month").textContent())?.trim();
  94  | 
  95  |     if (currentMonth === selectedMonthText) {
  96  |       break;
  97  |     }
  98  | 
  99  |     const monthOrder = [
  100 |       "January",
  101 |       "February",
  102 |       "March",
  103 |       "April",
  104 |       "May",
  105 |       "June",
  106 |       "July",
  107 |       "August",
  108 |       "September",
  109 |       "October",
  110 |       "November",
  111 |       "December",
  112 |     ];
  113 | 
  114 |     const currentMonthIndex = monthOrder.indexOf(currentMonth || "");
  115 |     const selectedMonthIndex = monthOrder.indexOf(selectedMonthText);
  116 | 
  117 |     if (currentMonthIndex === -1 || selectedMonthIndex === -1) {
  118 |       throw new Error(`Invalid month value: current='${currentMonth}' target='${selectedMonthText}'`);
  119 |     }
  120 | 
  121 |     if (selectedMonthIndex < currentMonthIndex) {
  122 |       await frame.locator(".ui-datepicker-prev").click();
  123 |               } else {
  124 |       await frame.locator(".ui-datepicker-next").click();
  125 |     }
  126 | 
  127 |     await page.waitForTimeout(200);
  128 |   }
  129 | 
  130 |   await expect(frame.locator(".ui-datepicker-year")).toHaveText(String(selectedYear));
  131 |   await expect(frame.locator(".ui-datepicker-month")).toHaveText(selectedMonthText);
  132 | 
  133 |   await frame.locator(`.ui-datepicker-calendar td a:text-is("${selectedDay}")`).first().click();
  134 |   await expect(dateInput).toHaveValue(/03\/12\/2029/);
  135 | });
  136 |   
  137 | 
  138 | 
  139 |   test.skip('Drag and Drop and scroll and hover and right click',async ({page})=>{
  140 |     await page.goto('//url is here');
  141 | 
  142 | // right click
  143 | await page.locator('').click({button:"right"});
  144 | // or 
  145 | await page.click('locator',{button:'right'});
  146 | 
  147 | // Drag and Drop
  148 | await page.locator('drag start locator the item which i have to drag').dragTo( page.locator('locator'));
  149 | 
  150 | // or
  151 | await page.dragAndDrop('sourceLocator','targetLocator');
  152 | 
  153 | 
  154 | 
  155 | // scroll down 
  156 | 
  157 | await page.mouse.wheel(0,500)
  158 |   })
  159 | 
  160 | 
  161 | 
  162 | 
  163 | test('shift teting ',async({page})=>{
  164 | await page.goto('https://amazon.in');
> 165 | await page.locator('#twotabsearchtextbox').focus();
      |                                            ^ Error: locator.focus: Test timeout of 30000ms exceeded.
  166 | await page.keyboard.down('Shift');
  167 | await page.keyboard.press('a');
  168 | await page.waitForTimeout(3000);
  169 | })  
  170 | 
  171 | 
  172 | 
```