// import { test, expect } from "@playwright/test";

// test.skip("First table test", async ({ page }) => {
//   await page.goto("https://letcode.in/table");
//   await page.waitForSelector("#shopping");
//   await expect(page.locator("#shopping")).toBeVisible();
//   const tableRows = await page.locator("#shopping tbody tr");
//   const rowCount = await tableRows.count();
//   expect(rowCount).toBe(4);
//   const tableHeaders = await page.locator("#shopping thead tr th");
//   await expect(tableHeaders).toHaveCount(2);
//   await expect(tableHeaders.nth(0)).toHaveText("Items");
//   await expect(tableHeaders.nth(1)).toHaveText("Price");
// });

// test("Second table test", async ({ page }) => {
//   await page.goto("https://letcode.in/table");
//   await page.waitForSelector("#simpletable");
//   const tableFirstRow = await page.locator("#simpletable tbody tr").first();
//   const firstRowCells = await tableFirstRow.locator("td");
//   await expect(firstRowCells).toHaveCount(4);

//   await page.waitForTimeout(3000);
// });

// test("Third table test", async ({ page }) => {
//   await page.goto("https://letcode.in/table");
//   await page.waitForSelector("#simpletable");
//   const username = "Yashwanth";
//   const selectedRow = page.locator("#simpletable tbody tr", { hasText: username }).first();
//   await expect(selectedRow).toBeVisible();
//   const selectedRowCheckbox = selectedRow.locator('input[type="checkbox"]');
//   await expect(selectedRowCheckbox).toBeVisible();
//   await selectedRowCheckbox.check();
//   await expect(selectedRowCheckbox).toBeChecked();
//   await page.waitForTimeout(3000);
// });

// // test("Fourth table test", async ({ page }) => {
// // await page.goto("https://letcode.in/table");
// // const table = await page.locator('.w-full.text-sm.text-left.text-slate-600.dark:text-slate-300');
// // await table.locator('thead tr th').nth(1).dblclick();
// // const table
// // })

// test("for testing the table check box using input", async ({ page }) => {
//   await page.goto("https://letcode.in/table");
//   await page.waitForSelector("#simpletable");
//   const userName = "Koushik";
//   const userRow = page.locator("#simpletable tbody tr", { hasText: userName }).first();
//   await expect(userRow).toBeVisible();
//   const userCheckbox = userRow.locator('input[type="checkbox"]');
//   await expect(userCheckbox).toBeVisible();
//   await userCheckbox.check();
//   await expect(userCheckbox).toBeChecked();
//   await page.waitForTimeout(3000);
// });

// test("DatePicker", async ({ page }) => {
//   await page.goto("https://www.globalsqa.com/demo-site/datepicker/");

//   const selectedDay = 12;
//   const selectedMonthText = "March";
//   const selectedYear = 2029;

//   const frame = page.frameLocator(".demo-frame").first();
//   const dateInput = frame.locator("#datepicker");

//   await dateInput.click();
//   await frame.locator(".ui-datepicker-calendar").waitFor({ state: "visible" });

//   while (true) {
//     const currentYear = Number(
//       (await frame.locator(".ui-datepicker-year").textContent())?.trim(),
//     );

//     if (currentYear === selectedYear) {
//       break;
//     }

//     if (selectedYear < currentYear) {
//       await frame.locator(".ui-datepicker-prev").click();
//     } else {
//       await frame.locator(".ui-datepicker-next").click();
//     }

//     await page.waitForTimeout(200);
//   }

//   while (true) {
//     const currentMonth = (await frame.locator(".ui-datepicker-month").textContent())?.trim();

//     if (currentMonth === selectedMonthText) {
//       break;
//     }

//     const monthOrder = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];

//     const currentMonthIndex = monthOrder.indexOf(currentMonth || "");
//     const selectedMonthIndex = monthOrder.indexOf(selectedMonthText);

//     if (currentMonthIndex === -1 || selectedMonthIndex === -1) {
//       throw new Error(`Invalid month value: current='${currentMonth}' target='${selectedMonthText}'`);
//     }

//     if (selectedMonthIndex < currentMonthIndex) {
//       await frame.locator(".ui-datepicker-prev").click();
//               } else {
//       await frame.locator(".ui-datepicker-next").click();
//     }

//     await page.waitForTimeout(200);
//   }

//   await expect(frame.locator(".ui-datepicker-year")).toHaveText(String(selectedYear));
//   await expect(frame.locator(".ui-datepicker-month")).toHaveText(selectedMonthText);

//   await frame.locator(`.ui-datepicker-calendar td a:text-is("${selectedDay}")`).first().click();
//   await expect(dateInput).toHaveValue(/03\/12\/2029/);
// });
  


//   test.skip('Drag and Drop and scroll and hover and right click',async ({page})=>{
//     await page.goto('//url is here');

// // right click
// await page.locator('').click({button:"right"});
// // or 
// await page.click('locator',{button:'right'});

// // Drag and Drop
// await page.locator('drag start locator the item which i have to drag').dragTo( page.locator('locator'));

// // or
// await page.dragAndDrop('sourceLocator','targetLocator');



// // scroll down 

// await page.mouse.wheel(0,500)
//   })




// // test('shift teting ',async({page})=>{
// // await page.goto('https://amazon.in');
// // await page.locator('#twotabsearchtextbox').focus();
// // await page.keyboard.down('Shift');
// // await page.keyboard.press('a');
// // await page.waitForTimeout(3000);
// // })  


