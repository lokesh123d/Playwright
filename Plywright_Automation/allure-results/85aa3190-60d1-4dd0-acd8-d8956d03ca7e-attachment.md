# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTable.spec.ts >> DatePicker
- Location: tests\WebTable.spec.ts:61:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator: locator('.demo-frame').first().contentFrame().locator('#datepicker')
Expected pattern: /03\/12\/2025/
Received string:  "03/12/2029"
Timeout: 5000ms

Call log:
  - Expect "toHaveValue" with timeout 5000ms
  - waiting for locator('.demo-frame').first().contentFrame().locator('#datepicker')
    13 × locator resolved to <input type="text" id="datepicker" class="hasDatepicker"/>
       - unexpected value "03/12/2029"

```

```yaml
- textbox: 03/12/2029
```

# Test source

```ts
  34  |     hasText: username,
  35  |   });
  36  |   const selectedRowCells = await selectedRow.locator("td input");
  37  |   await selectedRowCells.check();
  38  |   await expect(selectedRowCells).toBeChecked();
  39  |   await page.waitForTimeout(3000);
  40  | });
  41  | 
  42  | // test("Fourth table test", async ({ page }) => {
  43  | // await page.goto("https://letcode.in/table");
  44  | // const table = await page.locator('.w-full.text-sm.text-left.text-slate-600.dark:text-slate-300');
  45  | // await table.locator('thead tr th').nth(1).dblclick();
  46  | // const table
  47  | // })
  48  | 
  49  | test("for testing the table check box using input", async ({ page }) => {
  50  |   await page.goto("https://letcode.in/table");
  51  |   await page.waitForSelector("table");
  52  |   const secondTable = await page.locator("table").nth(1);
  53  |   const userName = "Koushik";
  54  |   const userRow = await secondTable
  55  |     .locator("tbody tr")
  56  |     .filter({ hasText: userName });
  57  |   await userRow.locator('//input[@type="checkbox"]').click();
  58  |   await page.waitForTimeout(3000);
  59  | });
  60  | 
  61  | test("DatePicker", async ({ page }) => {
  62  |   await page.goto("https://www.globalsqa.com/demo-site/datepicker/");
  63  | 
  64  |   const selectedDay = 12;
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
> 134 |   await expect(dateInput).toHaveValue(/03\/12\/2025/);
      |                           ^ Error: expect(locator).toHaveValue(expected) failed
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
  165 | await page.locator('#twotabsearchtextbox').focus();
  166 | await page.keyboard.down('Shift');
  167 | await page.keyboard.press('a');
  168 | await page.waitForTimeout(3000);
  169 | })  
  170 | 
  171 | 
  172 | 
```