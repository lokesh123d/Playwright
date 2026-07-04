import { test, expect } from "@playwright/test";

test("dropdown test", async ({ page }) => {
  await page.goto(
    "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php",
  );
  await page.locator("#state").selectOption({ label: "Uttar Pradesh" });
});

test("dynamic search bar", async ({ page }) => {
  await page.goto("https://www.amazon.in", { waitUntil: "domcontentloaded" });
  const continueShopping = page.getByRole("button", { name: "Continue shopping" });
  if (await continueShopping.isVisible().catch(() => false)) {
    await continueShopping.click();
  }
  const searchBox = page.locator("#twotabsearchtextbox");
  await searchBox.waitFor({ state: "visible", timeout: 60000 });
  await searchBox.fill("books");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/s\?/);
});
