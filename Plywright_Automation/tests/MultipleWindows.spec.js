
import { test, expect, chromium } from "@playwright/test";

test("New Window and Pages", async ({ page }) => {

    await page.goto(
        "https://demoqa.com/browser-windows"
    );

    const [newTab] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("#tabButton").click()
    ]);

    await expect(newTab).toHaveURL(
        /sample/
    );

    console.log(await newTab.title());

    await page.waitForTimeout(3000)

});

test("New Window", async ({ page }) => {

    await page.goto(
        "https://demoqa.com/browser-windows"
    );

    const [newTab] = await Promise.all([
        page.waitForEvent("popup"),
        page.locator("#tabButton").click()
    ]);

    await expect(newTab).toHaveURL(
        /sample/
    );

    console.log(await newTab.title());

    await page.waitForTimeout(3000)

});