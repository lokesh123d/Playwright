# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTable.spec.ts >> DatePicker
- Location: tests\WebTable.spec.ts:59:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.demo-frame').first().contentFrame().locator('.ui-datepicker-next')
    - locator resolved to <a title="Next" data-event="click" data-handler="next" class="ui-datepicker-next ui-corner-all ui-state-hover ui-datepicker-next-hover">…</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e7]:
        - generic:
          - generic:
            - generic:
              - button [ref=e8] [cursor=pointer]
              - textbox "Search..." [ref=e9]
          - link "pinterest" [ref=e10] [cursor=pointer]:
            - /url: https://in.pinterest.com/globalsqa/
          - link "twitter" [ref=e11] [cursor=pointer]:
            - /url: https://twitter.com/Global_SQA
          - link "linkedin" [ref=e12] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/globalsqa
          - link "google" [ref=e13] [cursor=pointer]:
            - /url: https://plus.google.com/103761557396023531439/posts
          - link "facebook" [ref=e14] [cursor=pointer]:
            - /url: https://facebook.com/globalsqa
          - generic [ref=e16]: contact@globalsqa.com
      - generic [ref=e19]:
        - link "GlobalSQA" [ref=e22] [cursor=pointer]:
          - /url: https://www.globalsqa.com/
          - img "GlobalSQA" [ref=e23]
        - generic [ref=e24]:
          - list:
            - listitem [ref=e25]:
              - link "About" [ref=e26] [cursor=pointer]:
                - /url: https://www.globalsqa.com/about/
            - listitem [ref=e27]:
              - link "CheatSheets" [ref=e28] [cursor=pointer]:
                - /url: https://www.globalsqa.com/cheatsheets/
            - listitem [ref=e29]:
              - link "Free Ebooks" [ref=e30] [cursor=pointer]:
                - /url: https://www.globalsqa.com/free-ebooks/
                - text: Free Ebooks
            - listitem [ref=e32]:
              - link "Tester’s Hub" [ref=e33] [cursor=pointer]:
                - /url: https://www.globalsqa.com/testers-hub/
                - text: Tester’s Hub
              - text:  
            - listitem [ref=e35]:
              - link "Contact Us" [ref=e36] [cursor=pointer]:
                - /url: https://www.globalsqa.com/contact-us/
      - text:    
    - generic [ref=e37]:
      - generic [ref=e41]:
        - generic [ref=e42]:
          - link "Home" [ref=e43] [cursor=pointer]:
            - /url: https://www.globalsqa.com/
            - generic [ref=e44]: Home
          - link "Demo Testing Site" [ref=e45] [cursor=pointer]:
            - /url: https://www.globalsqa.com/demo-site/
            - generic [ref=e46]: Demo Testing Site
          - link "DatePicker" [ref=e47] [cursor=pointer]:
            - /url: https://www.globalsqa.com/demo-site/datepicker/
            - generic [ref=e48]: DatePicker
        - heading "DatePicker" [level=1] [ref=e50]
      - generic [ref=e53]:
        - generic [ref=e54]:
          - generic [ref=e55]:
            - heading "Interaction" [level=4] [ref=e56]
            - list [ref=e58]:
              - listitem [ref=e59]:
                - link "Sortable" [ref=e60] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/sorting/
                  - generic [ref=e61]: Sortable
              - listitem [ref=e62]:
                - link "Drag And Drop" [ref=e63] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/draganddrop/
                  - generic [ref=e64]: Drag And Drop
              - listitem [ref=e65]:
                - link "Select Elements" [ref=e66] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/select-elements/
                  - generic [ref=e67]: Select Elements
              - listitem [ref=e68]:
                - link "Draggable Boxes" [ref=e69] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/draggableboxes/
                  - generic [ref=e70]: Draggable Boxes
              - listitem [ref=e71]:
                - link "DropDown Menu" [ref=e72] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/select-dropdown-menu/
                  - generic [ref=e73]: DropDown Menu
          - generic [ref=e74]:
            - heading "Widgets" [level=4] [ref=e75]
            - list [ref=e77]:
              - listitem [ref=e78]:
                - link "Tooltip" [ref=e79] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/tooltip/
                  - generic [ref=e80]: Tooltip
              - listitem [ref=e81]:
                - link "Sliders" [ref=e82] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/sliders/
                  - generic [ref=e83]: Sliders
              - listitem [ref=e84]:
                - link "Spinner" [ref=e85] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/spinner/
                  - generic [ref=e86]: Spinner
              - listitem [ref=e87]:
                - link "DatePicker" [ref=e88] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/datepicker/
                  - generic [ref=e89]: DatePicker
              - listitem [ref=e90]:
                - link "Progress Bar" [ref=e91] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/progress-bar/
                  - generic [ref=e92]: Progress Bar
              - listitem [ref=e93]:
                - link "Dialog Boxes" [ref=e94] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/dialog-boxes/
                  - generic [ref=e95]: Dialog Boxes
              - listitem [ref=e96]:
                - link "Auto Complete" [ref=e97] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/auto-complete/
                  - generic [ref=e98]: Auto Complete
              - listitem [ref=e99]:
                - link "Accordion And Tabs" [ref=e100] [cursor=pointer]:
                  - /url: https://www.globalsqa.com/demo-site/accordion-and-tabs/
                  - generic [ref=e101]: Accordion And Tabs
          - iframe [ref=e103]:
            
          - generic [ref=e106]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e108]: Discover more
            - link "Development Tools" [ref=e109] [cursor=pointer]:
              - generic "Development Tools" [ref=e110]
              - img [ref=e112]
            - link "Software" [ref=e114] [cursor=pointer]:
              - generic "Software" [ref=e115]
              - img [ref=e117]
            - link "Programming" [ref=e119] [cursor=pointer]:
              - generic "Programming" [ref=e120]
              - img [ref=e122]
            - link "software" [ref=e124] [cursor=pointer]:
              - generic "software" [ref=e125]
              - img [ref=e127]
            - link "Software Development" [ref=e129] [cursor=pointer]:
              - generic "Software Development" [ref=e130]
              - img [ref=e132]
            - link "Data Analytics" [ref=e134] [cursor=pointer]:
              - generic "Data Analytics" [ref=e135]
              - img [ref=e137]
            - link "Business Process" [ref=e139] [cursor=pointer]:
              - generic "Business Process" [ref=e140]
              - img [ref=e142]
            - link "data analysis" [ref=e144] [cursor=pointer]:
              - generic "data analysis" [ref=e145]
              - img [ref=e147]
          - iframe [ref=e150]:
            
        - generic [ref=e152]:
          - list [ref=e153]:
            - tab "Simple Date Picker" [ref=e154] [cursor=pointer]
            - tab "DropDown DatePicker" [ref=e155] [cursor=pointer]
            - tab "Icon Trigger" [ref=e156] [cursor=pointer]
          - generic [ref=e158]:
            - generic [ref=e159]: Pick a date by clicking on the text box.
            - paragraph [ref=e161]:
              - iframe [active] [ref=e162]:
                - generic [ref=f1e1]:
                  - paragraph [ref=f1e2]:
                    - text: "Date:"
                    - textbox [active] [ref=f1e3]
                  - generic [ref=f1e4]:
                    - generic [ref=f1e5]:
                      - generic "Prev" [ref=f1e6]:
                        - generic [ref=f1e7]: Prev
                      - generic "Next" [ref=f1e8]:
                        - generic [ref=f1e9]: Next
                      - generic [ref=f1e10]: June 2027
                    - table [ref=f1e11]:
                      - rowgroup [ref=f1e12]:
                        - row "Su Mo Tu We Th Fr Sa" [ref=f1e13]:
                          - columnheader "Su" [ref=f1e14]
                          - columnheader "Mo" [ref=f1e15]
                          - columnheader "Tu" [ref=f1e16]
                          - columnheader "We" [ref=f1e17]
                          - columnheader "Th" [ref=f1e18]
                          - columnheader "Fr" [ref=f1e19]
                          - columnheader "Sa" [ref=f1e20]
                      - rowgroup [ref=f1e21]:
                        - row "1 2 3 4 5" [ref=f1e22]:
                          - cell
                          - cell
                          - cell "1" [ref=f1e23]:
                            - link "1" [ref=f1e24] [cursor=pointer]:
                              - /url: "#"
                          - cell "2" [ref=f1e25]:
                            - link "2" [ref=f1e26] [cursor=pointer]:
                              - /url: "#"
                          - cell "3" [ref=f1e27]:
                            - link "3" [ref=f1e28] [cursor=pointer]:
                              - /url: "#"
                          - cell "4" [ref=f1e29]:
                            - link "4" [ref=f1e30] [cursor=pointer]:
                              - /url: "#"
                          - cell "5" [ref=f1e31]:
                            - link "5" [ref=f1e32] [cursor=pointer]:
                              - /url: "#"
                        - row "6 7 8 9 10 11 12" [ref=f1e33]:
                          - cell "6" [ref=f1e34]:
                            - link "6" [ref=f1e35] [cursor=pointer]:
                              - /url: "#"
                          - cell "7" [ref=f1e36]:
                            - link "7" [ref=f1e37] [cursor=pointer]:
                              - /url: "#"
                          - cell "8" [ref=f1e38]:
                            - link "8" [ref=f1e39] [cursor=pointer]:
                              - /url: "#"
                          - cell "9" [ref=f1e40]:
                            - link "9" [ref=f1e41] [cursor=pointer]:
                              - /url: "#"
                          - cell "10" [ref=f1e42]:
                            - link "10" [ref=f1e43] [cursor=pointer]:
                              - /url: "#"
                          - cell "11" [ref=f1e44]:
                            - link "11" [ref=f1e45] [cursor=pointer]:
                              - /url: "#"
                          - cell "12" [ref=f1e46]:
                            - link "12" [ref=f1e47] [cursor=pointer]:
                              - /url: "#"
                        - row "13 14 15 16 17 18 19" [ref=f1e48]:
                          - cell "13" [ref=f1e49]:
                            - link "13" [ref=f1e50] [cursor=pointer]:
                              - /url: "#"
                          - cell "14" [ref=f1e51]:
                            - link "14" [ref=f1e52] [cursor=pointer]:
                              - /url: "#"
                          - cell "15" [ref=f1e53]:
                            - link "15" [ref=f1e54] [cursor=pointer]:
                              - /url: "#"
                          - cell "16" [ref=f1e55]:
                            - link "16" [ref=f1e56] [cursor=pointer]:
                              - /url: "#"
                          - cell "17" [ref=f1e57]:
                            - link "17" [ref=f1e58] [cursor=pointer]:
                              - /url: "#"
                          - cell "18" [ref=f1e59]:
                            - link "18" [ref=f1e60] [cursor=pointer]:
                              - /url: "#"
                          - cell "19" [ref=f1e61]:
                            - link "19" [ref=f1e62] [cursor=pointer]:
                              - /url: "#"
                        - row "20 21 22 23 24 25 26" [ref=f1e63]:
                          - cell "20" [ref=f1e64]:
                            - link "20" [ref=f1e65] [cursor=pointer]:
                              - /url: "#"
                          - cell "21" [ref=f1e66]:
                            - link "21" [ref=f1e67] [cursor=pointer]:
                              - /url: "#"
                          - cell "22" [ref=f1e68]:
                            - link "22" [ref=f1e69] [cursor=pointer]:
                              - /url: "#"
                          - cell "23" [ref=f1e70]:
                            - link "23" [ref=f1e71] [cursor=pointer]:
                              - /url: "#"
                          - cell "24" [ref=f1e72]:
                            - link "24" [ref=f1e73] [cursor=pointer]:
                              - /url: "#"
                          - cell "25" [ref=f1e74]:
                            - link "25" [ref=f1e75] [cursor=pointer]:
                              - /url: "#"
                          - cell "26" [ref=f1e76]:
                            - link "26" [ref=f1e77] [cursor=pointer]:
                              - /url: "#"
                        - row "27 28 29 30" [ref=f1e78]:
                          - cell "27" [ref=f1e79]:
                            - link "27" [ref=f1e80] [cursor=pointer]:
                              - /url: "#"
                          - cell "28" [ref=f1e81]:
                            - link "28" [ref=f1e82] [cursor=pointer]:
                              - /url: "#"
                          - cell "29" [ref=f1e83]:
                            - link "29" [ref=f1e84] [cursor=pointer]:
                              - /url: "#"
                          - cell "30" [ref=f1e85]:
                            - link "30" [ref=f1e86] [cursor=pointer]:
                              - /url: "#"
                          - cell
                          - cell
                          - cell
              - insertion [ref=e163]
    - generic [ref=e164]:
      - generic [ref=e166]:
        - generic [ref=e167]:
          - heading "Footer Widget Area 1" [level=3] [ref=e168]
          - paragraph [ref=e169]:
            - link "Assign a widget to this area now." [ref=e170] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
            - link "Software" [ref=e171] [cursor=pointer]:
              - generic [ref=e172]:
                - img [ref=e174]
                - text: Software
        - generic [ref=e176]:
          - heading "Footer Widget Area 2" [level=3] [ref=e177]
          - paragraph [ref=e178]:
            - link "Assign a widget to this area now." [ref=e179] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
        - generic [ref=e180]:
          - heading "Footer Widget Area 3" [level=3] [ref=e181]
          - paragraph [ref=e182]:
            - link "Assign a widget to this area now." [ref=e183] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
        - generic [ref=e184]:
          - heading "Footer Widget Area 4" [level=3] [ref=e185]
          - paragraph [ref=e186]:
            - link "Assign a widget to this area now." [ref=e187] [cursor=pointer]:
              - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e192]:
        - link "pinterest" [ref=e193] [cursor=pointer]:
          - /url: https://in.pinterest.com/globalsqa/
        - link "twitter" [ref=e194] [cursor=pointer]:
          - /url: https://twitter.com/Global_SQA
        - link "linkedin" [ref=e195] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/globalsqa
        - link "google" [ref=e196] [cursor=pointer]:
          - /url: https://plus.google.com/103761557396023531439/posts
        - link "facebook" [ref=e197] [cursor=pointer]:
          - /url: https://facebook.com/globalsqa
        - generic [ref=e198]:
          - text: "Website Designed & Developed by :"
          - link "GlobalSQA" [ref=e199] [cursor=pointer]:
            - /url: https://www.globalsqa.com
  - generic [ref=e202]:
    - generic [ref=e203] [cursor=pointer]:
      - img [ref=e205]
      - link "Go to shopping options for Software" [ref=e207]: Software
    - button "Close shopping anchor" [ref=e208]
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test.skip("First table test", async ({ page }) => {
  4   |   await page.goto("https://letcode.in/table");
  5   |   await page.waitForSelector("#shopping");
  6   |   await expect(page.locator("#shopping")).toBeVisible();
  7   |   const tableRows = await page.locator("#shopping tbody tr");
  8   |   const rowCount = await tableRows.count();
  9   |   expect(rowCount).toBe(4);
  10  |   const tableHeaders = await page.locator("#shopping thead tr th");
  11  |   await expect(tableHeaders).toHaveCount(2);
  12  |   await expect(tableHeaders.nth(0)).toHaveText("Items");
  13  |   await expect(tableHeaders.nth(1)).toHaveText("Price");
  14  | });
  15  | 
  16  | test("Second table test", async ({ page }) => {
  17  |   await page.goto("https://letcode.in/table");
  18  |   await page.waitForSelector("#simpletable");
  19  |   const tableFirstRow = await page.locator("#simpletable tbody tr").first();
  20  |   const firstRowCells = await tableFirstRow.locator("td");
  21  |   await expect(firstRowCells).toHaveCount(4);
  22  | 
  23  |   await page.waitForTimeout(3000);
  24  | });
  25  | 
  26  | test("Third table test", async ({ page }) => {
  27  |   await page.goto("https://letcode.in/table");
  28  |   await page.waitForSelector("#simpletable");
  29  |   const username = "Yashwanth";
  30  |   const selectedRow = page.locator("#simpletable tbody tr", { hasText: username }).first();
  31  |   await expect(selectedRow).toBeVisible();
  32  |   const selectedRowCheckbox = selectedRow.locator('input[type="checkbox"]');
  33  |   await expect(selectedRowCheckbox).toBeVisible();
  34  |   await selectedRowCheckbox.check();
  35  |   await expect(selectedRowCheckbox).toBeChecked();
  36  |   await page.waitForTimeout(3000);
  37  | });
  38  | 
  39  | // test("Fourth table test", async ({ page }) => {
  40  | // await page.goto("https://letcode.in/table");
  41  | // const table = await page.locator('.w-full.text-sm.text-left.text-slate-600.dark:text-slate-300');
  42  | // await table.locator('thead tr th').nth(1).dblclick();
  43  | // const table
  44  | // })
  45  | 
  46  | test("for testing the table check box using input", async ({ page }) => {
  47  |   await page.goto("https://letcode.in/table");
  48  |   await page.waitForSelector("#simpletable");
  49  |   const userName = "Koushik";
  50  |   const userRow = page.locator("#simpletable tbody tr", { hasText: userName }).first();
  51  |   await expect(userRow).toBeVisible();
  52  |   const userCheckbox = userRow.locator('input[type="checkbox"]');
  53  |   await expect(userCheckbox).toBeVisible();
  54  |   await userCheckbox.check();
  55  |   await expect(userCheckbox).toBeChecked();
  56  |   await page.waitForTimeout(3000);
  57  | });
  58  | 
  59  | test("DatePicker", async ({ page }) => {
  60  |   await page.goto("https://www.globalsqa.com/demo-site/datepicker/");
  61  | 
  62  |   const selectedDay = 12;
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
> 84  |       await frame.locator(".ui-datepicker-next").click();
      |                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  163 | await page.locator('#twotabsearchtextbox').focus();
  164 | await page.keyboard.down('Shift');
  165 | await page.keyboard.press('a');
  166 | await page.waitForTimeout(3000);
  167 | })  
  168 | 
  169 | 
  170 | 
```