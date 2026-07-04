import { test, expect } from "@playwright/test";

test("Locators test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await page.getByText("Search").click();
  await page.getByPlaceholder("Search docs").type("locator",{delay:1000});
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { name: "Locators", exact: true })).toBeVisible(); 
  await page.waitForTimeout(4000);
});
