import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/index.html#');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('lokesh');
  await page.getByRole('textbox', { name: 'Password:' }).click();
  await page.getByRole('textbox', { name: 'Password:' }).fill('lokesh.64');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).click();
  await page.getByRole('textbox', { name: 'Username:' }).fill('lokesh.64');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('lokesh');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('lokesh.64');
  await page.locator('#loginpassword').press('Enter');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('#loginpassword').dblclick();
  await page.locator('#loginpassword').fill('kije');
  await page.locator('#loginusername').dblclick();
  await page.locator('#loginusername').press('ControlOrMeta+c');
  await page.locator('#loginusername').press('ControlOrMeta+c');
  await page.locator('#loginusername').press('ControlOrMeta+c');
  await page.locator('#loginpassword').dblclick();
  await page.locator('#loginpassword').fill('lokesh.64');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
  await page.getByText('Samsung galaxy s6$360The').click();
  await page.getByRole('link').filter({ hasText: /^$/ }).first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.locator('#imgp img').click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByLabel('New message').getByText('Close').click();
  await page.getByRole('link', { name: 'About us' }).click();
  await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByText('Place order ×').click();
  await page.getByRole('dialog', { name: 'Place order' }).getByLabel('Close').click();
});