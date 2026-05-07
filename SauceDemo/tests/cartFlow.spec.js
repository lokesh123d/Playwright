import { test, expect } from "@playwright/test";
import Login from "../pages/Login";
import Home from "../pages/HomePage";

test("cartFlowTest", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  //   Login Check Here..........
  const loginFlow = new Login(page);
  await loginFlow.LoginFeature("standard_user", "secret_sauce");
  await loginFlow.VerifyLoginCheck();
  // Home Page Check Here..............

  const hoemPageFunc = new Home(page);
  await hoemPageFunc.checkFilter();
});
