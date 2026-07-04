import {test,expect} from '@playwright/test';
import {chromium} from 'playwright';


test('Test 1 : Search First @First',async({page})=>{
    await page.goto('https://google.com');
    await page.getByRole('combobox').fill('First Test')
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
})

test('Test 2 : Search First @Second',async({page})=>{
    await page.goto('https://google.com');
    await page.getByRole('combobox').fill('Second Test')
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
})

test('Test 3 : Search First @First',async({page})=>{
    await page.goto('https://google.com');
    await page.getByRole('combobox').fill('First Test')
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
})

test('Test 4 : Search First @Lokesh',async({page})=>{
    await page.goto('https://google.com');
    await page.getByRole('combobox').fill('Lokesh Test')
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
})

test('Test 5 : Search First @Lokesh',async({page})=>{
    await page.goto('https://google.com');
    await page.getByRole('combobox').fill('Lokesh Test')
    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000);
})