import { test, expect } from '@playwright/test';

test.describe('Google Search Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://google.com');
        await page.locator('[title="Search"]').focus();
    });

    test('First Test', async ({ page }) => {
        await page.keyboard.type('Lokesh Dangwal');
        await page.keyboard.press('Enter');
await page.waitForTimeout(3000)
// await expect(page).toHaveTitle(/Lokesh Dangwal/);
});

test('Second Test', async ({ page }) => {
    await page.waitForTimeout(5000)
    await page.keyboard.type('Hey I am here');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(7000)

        // await expect(page).toHaveTitle(/Hey I am here/);
    });

});