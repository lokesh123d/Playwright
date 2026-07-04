import { test, expect } from "@playwright/test";

test.skip("Login Instagram Account", async ({ page }) => {
  await page.goto("https://www.instagram.com");
  await page.locator('input[name="email"]').fill("lokesh642025");
  await page.locator('input[name="pass"]').fill("hello password write here ");
  await page.getByRole("button", { name: "Log In", exact: true }).click();
  await page.waitForTimeout(10000);
});

test("XPath Selector Practice", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('//input[@placeholder="Username"]').fill("standard_user");
  await page.locator('//input[@type="password"]').fill("secret_sauce");
  await page.getByRole("button", { type: "submit" }).click();
  await expect(page.getByText("Swag Labs")).toBeVisible();
  await expect(page.url()).toBe("https://www.saucedemo.com/inventory.html");
  const outerProductContainer = await page.locator(".inventory_item").all();
//   await expect(await outerProductContainer.count()).toBe(6);
  console.log(outerProductContainer);
});
