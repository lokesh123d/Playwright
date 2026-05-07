import { test, expect } from "@playwright/test";

test("Home Page", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  const pageTitle = await page.title();
  console.log(pageTitle);
  await expect(page).toHaveTitle("STORE");
//   await page.close();
});
