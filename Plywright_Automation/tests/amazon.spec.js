import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 200,
    width: 200
  }
});




test('RadioButton Cheching',async({page})=>{
  await page.goto('https://www.tutorialspoint.com/selenium/practice/radio-button.php');
  await expect(page.locator('input[name="inlineRadioOptions"]')).toBeDisabled();
})