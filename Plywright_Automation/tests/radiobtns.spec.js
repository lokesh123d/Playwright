import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/radio-button.php');
  await page.locator('label').filter({ hasText: 'Impressive' }).click();
  await page.getByRole('radio').nth(1).check();
  await expect(page.locator('#check1')).toContainText('You have checked Impressive');
  await expect(page.getByText('You have checked Impressive')).toBeVisible();
  await expect(page.locator('form div').filter({ hasText: 'No (Disable)' })).toBeVisible();
  await page.locator('div').filter({ hasText: 'Yes' }).nth(3).click();
  await expect(page.getByRole('radio').first()).toBeVisible();
  await expect(page.locator('form')).toMatchAriaSnapshot(`
    - radio
    - text: "Yes"
    `);
  await page.getByRole('radio').first().check();
  await expect(page.getByText('You have checked Yes')).toBeVisible();
});