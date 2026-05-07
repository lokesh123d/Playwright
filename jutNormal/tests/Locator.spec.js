// import { test, expect } from "@playwright/test";

// test("LocatorTest - Login Flow", async ({ page }) => {
//   const BASE_URL = "https://demoblaze.com/index.html";
//   const LOGIN_USERNAME = "lokesh";
//   const LOGIN_PASSWORD = "lokeshdangwal";

//   // Navigate to the application
//   await page.goto(BASE_URL);

//   // Click the login button in navigation
//   await page.click("#login2");

//   // Wait for login modal to fully load
//   await page.locator("#loginusername").waitFor({ state: "visible" });

//   // Fill login form
//   const usernameField = page.locator("#loginusername");
//   const passwordField = page.locator("#loginpassword");
//   const loginButton = page.locator("button:has-text('Log in')");

//   await usernameField.fill(LOGIN_USERNAME);
//   await passwordField.fill(LOGIN_PASSWORD);

//   // Handle any alerts that might appear
//   page.once("dialog", (dialog) => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.accept();
//   });

//   // Click login button
//   await loginButton.click();

//   // Wait a moment for page to respond
//   await page.waitForTimeout(2000);

//   // Verify we're either logged in or got feedback
//   const logoutLink = page.locator("#logout2");
//   const isLoggedIn = await logoutLink.isVisible().catch(() => false);

//   if (isLoggedIn) {
//     await expect(logoutLink).toBeVisible();
//     console.log("✓ Login successful - Logout link is visible");
//   } else {
//     console.log("Login may have failed or logout button is not immediately visible");
//     // Take screenshot for debugging
//     await page.screenshot({ path: "login-result.png" });
//   }
// });
import { test, expect } from "@playwright/test";
test("MultipleSelectLocator", async ({ page }) => {
  await page.goto("https://demoblaze.com/index.html");
  //   const links = await page.$$("a");
  // for(let link of links){
  //     let linkcontent =  await link.textContent();
  //     console.log(linkcontent);
  // }
  const productName = await page.$$("//div[@id='tbodyid']//div//h4/a");
  for (let pname of productName) {
   const text = await (productName.textContent());
  console.log(text)}
});
