# Playwright Complete Reference Guide

---

## 📍 SELECTORS - Types & Usage

| Selector Type | Syntax | Example | Use Case |
|---|---|---|---|
| **ID** | `id=elementId` or `#elementId` | `page.click('id=login2')` or `page.locator('#login2')` | When element has unique ID |
| **Class** | `.className` | `page.locator('.btn-primary')` | Target by CSS class |
| **Name** | `[name="fieldName"]` | `page.locator('[name="username"]')` | Form fields with name attribute |
| **Placeholder** | `[placeholder="text"]` | `page.getByPlaceholder('Username')` | Input fields with placeholder |
| **Text Content** | `:has-text("text")` | `page.locator('button:has-text("Login")')` | Find by visible text |
| **XPath** | `//tagname[@attribute="value"]` | `page.locator('//button[normalize-space()="Log in"]')` | Complex DOM queries |
| **Attribute** | `[attribute="value"]` | `page.locator('[data-testid="submit"]')` | Custom attributes |
| **Combining** | `tag.class#id` | `page.locator('input.form-control#email')` | Multiple selectors |
| **Role** | `getByRole('role')` | `page.getByRole('button', { name: 'Login' })` | Accessibility-based selection |
| **Label** | `getByLabel('text')` | `page.getByLabel('Username')` | Associate with label |
| **Tag Name** | `tagname` | `page.locator('button')` | All elements of type |
| **CSS Selector** | Standard CSS | `page.locator('input[type="password"]')` | Advanced CSS selectors |

---

## ⚙️ MOST USED METHODS

### Navigation & Page Methods
```javascript
// Go to URL
await page.goto('https://example.com');
await page.goto('https://example.com', { waitUntil: 'networkidle' });

// Reload & Navigation
await page.reload();
await page.goBack();
await page.goForward();

// Get current URL
const url = page.url();

// Close page
await page.close();
```

### Locator & Finding Elements
```javascript
// Get locator (doesn't interact yet)
const element = page.locator('id=login');
const element = page.getByPlaceholder('Username');
const element = page.getByRole('button', { name: 'Login' });

// Get all matching elements
const elements = page.locator('.item');
const count = await elements.count();

// Get specific element
const firstItem = page.locator('.item').first();
const lastItem = page.locator('.item').last();
const thirdItem = page.locator('.item').nth(2);
```

### Input & Interaction Methods
```javascript
// Click element
await page.click('id=login2');
await element.click();

// Fill text input
await page.locator('id=username').fill('lokesh');
await element.fill('value');

// Type (slower, character by character)
await page.locator('id=username').type('lokesh', { delay: 100 });

// Clear input
await element.clear();

// Press keys
await element.press('Enter');
await element.press('Tab');
await page.keyboard.press('Escape');

// Select option from dropdown
await page.selectOption('select#country', 'USA');
await page.selectOption('select', { label: 'Canada' });

// Check/Uncheck checkbox
await page.check('input[type="checkbox"]');
await page.uncheck('input[type="checkbox"]');

// Right click
await element.click({ button: 'right' });

// Double click
await element.dblclick();

// Hover over element
await element.hover();

// Drag and drop
await page.dragAndDrop('selector1', 'selector2');
```

### Getting Information
```javascript
// Get text content
const text = await element.textContent();
const innerText = await element.innerText();

// Get attribute value
const value = await element.getAttribute('placeholder');
const href = await element.getAttribute('href');

// Get input value
const inputValue = await page.inputValue('id=username');

// Check if element visible
const isVisible = await element.isVisible();

// Check if element enabled
const isEnabled = await element.isEnabled();

// Count elements
const count = await page.locator('.item').count();

// Get HTML
const html = await element.innerHTML();
const outerHtml = await element.outerHTML();
```

### Waiting Methods
```javascript
// Wait for element to be visible
await page.waitForSelector('id=logout', { state: 'visible' });
await element.waitFor({ state: 'visible' });

// Wait for element to be hidden
await page.waitForSelector('id=loader', { state: 'hidden' });

// Wait for function
await page.waitForFunction(() => {
  return document.querySelectorAll('button').length > 5;
});

// Wait for navigation
await Promise.all([
  page.waitForNavigation(),
  page.click('a#next-page')
]);

// Wait for specific timeout
await page.waitForTimeout(2000); // 2 seconds

// Wait for specific URL
await page.waitForURL(/dashboard/);
```

### Form & Dialog Methods
```javascript
// Handle browser dialogs
page.once('dialog', (dialog) => {
  console.log(dialog.message());
  dialog.accept();
});

// Fill form and submit
await page.fill('id=email', 'test@example.com');
await page.fill('id=password', 'password123');
await page.click('button[type="submit"]');

// Multiple fill
await page.fill('id=firstname', 'John');
await page.fill('id=lastname', 'Doe');
await page.click('button:has-text("Submit")');
```

### Screenshot & Debug
```javascript
// Take screenshot
await page.screenshot({ path: 'screenshot.png' });
await page.screenshot({ path: 'element.png', mask: [element] });

// Get page content
const content = await page.content();

// Evaluate JavaScript
const result = await page.evaluate(() => {
  return document.title;
});

// Print to PDF
await page.pdf({ path: 'page.pdf' });
```

---

## ✅ EXPECT() - Assertions & Methods

### Element Visibility & Existence
```javascript
// Element is visible
await expect(element).toBeVisible();
await expect(page.locator('id=logout')).toBeVisible();

// Element is hidden
await expect(element).toBeHidden();

// Element is in DOM (but may not be visible)
await expect(element).toBeAttached();

// Element doesn't exist in DOM
await expect(element).not.toBeAttached();
```

### Element State
```javascript
// Element is enabled (not disabled)
await expect(element).toBeEnabled();

// Element is disabled
await expect(element).toBeDisabled();

// Checkbox/radio is checked
await expect(checkbox).toBeChecked();

// Checkbox/radio is not checked
await expect(checkbox).not.toBeChecked();

// Element is editable (input/textarea not disabled/readonly)
await expect(input).toBeEditable();

// Element is not editable
await expect(input).not.toBeEditable();

// Element is focused
await expect(element).toBeFocused();

// Element is in viewport
await expect(element).toBeInViewport();
```

### Text Content
```javascript
// Exact text match
await expect(element).toHaveText('Login');

// Partial text match
await expect(element).toContainText('Login');

// Get text and verify
const text = await element.textContent();
expect(text).toBe('Welcome');

// Multiple elements text
await expect(page.locator('li')).toHaveText(['Item 1', 'Item 2', 'Item 3']);
```

### Attributes & Values
```javascript
// Check attribute value
await expect(element).toHaveAttribute('placeholder', 'Username');

// Check input value
await expect(input).toHaveValue('john@example.com');

// Check class
await expect(element).toHaveClass('active');
await expect(element).toHaveClass(/btn-primary/);

// Check CSS property
await expect(element).toHaveCSS('color', 'rgb(255, 0, 0)');

// Check data attribute
await expect(element).toHaveAttribute('data-testid', 'submit-btn');
```

### Page/URL/Title
```javascript
// Check page URL
await expect(page).toHaveURL('https://example.com/dashboard');
await expect(page).toHaveURL(/dashboard/);

// Check page title
await expect(page).toHaveTitle('Dashboard');
await expect(page).toHaveTitle(/Dashboard/);

// Check if page in correct URL
await expect(page).toHaveURL(/auth/);
```

### Count & Lists
```javascript
// Count elements
await expect(page.locator('.item')).toHaveCount(5);

// At least this many elements
const items = page.locator('.item');
expect(await items.count()).toBeGreaterThan(3);

// Check all items have text
const items = page.locator('.item');
for (let i = 0; i < await items.count(); i++) {
  await expect(items.nth(i)).not.toHaveText('');
}
```

### Negation & Custom
```javascript
// NOT assertions (negate any assertion)
await expect(element).not.toBeVisible();
await expect(element).not.toHaveText('Error');
await expect(page).not.toHaveURL('login');

// Custom message
await expect(element, 'Login button should be visible').toBeVisible();

// Soft assertions (don't fail test immediately)
await expect.soft(element).toBeVisible();
await expect.soft(element).toHaveText('Submit');

// With timeout
await expect(element).toBeVisible({ timeout: 5000 });
```

### Common Assertion Patterns
```javascript
// Login success verification
await expect(page).toHaveURL(/dashboard/);
await expect(page.locator('a#logout2')).toBeVisible();

// Error message check
await expect(page.locator('.error')).toHaveText('Invalid credentials');

// Form validation
await expect(page.locator('input[type="email"]')).toHaveAttribute('required');

// Loading state
await expect(page.locator('.loader')).toBeHidden();

// Success notification
await expect(page.locator('.success-msg')).toContainText('Successfully logged in');
```

---

## 📋 COMPLETE EXAMPLE TEST

```javascript
import { test, expect } from "@playwright/test";

test("Complete Login Flow Example", async ({ page }) => {
  // NAVIGATE
  await page.goto("https://demoblaze.com/index.html");
  
  // INTERACT - Click and Fill
  await page.click("id=login2");
  await page.locator("id=loginusername").fill("lokesh");
  await page.getByPlaceholder("Password").fill("lokeshdangwal");
  
  // WAIT & ASSERT
  await expect(page.locator("id=loginusername")).toHaveValue("lokesh");
  await expect(page.getByRole("button", { name: "Log in" })).toBeEnabled();
  
  // SUBMIT & HANDLE DIALOGS
  page.once("dialog", (dialog) => dialog.accept());
  await page.click("//button[normalize-space()='Log in']");
  
  // WAIT FOR RESULT
  await page.waitForTimeout(1000);
  
  // VERIFY SUCCESS
  await expect(page.locator("a#logout2")).toBeVisible({ timeout: 10000 });
  await expect(page).toHaveURL(/demoblaze.com/);
  
  // GET INFO & ASSERT
  const logoutText = await page.locator("a#logout2").textContent();
  expect(logoutText).toBe("Log out");
  
  // LOGOUT
  await page.click("a#logout2");
  await expect(page.locator("a#login2")).toBeVisible();
});
```

---

## 🎯 QUICK REFERENCE CHEAT SHEET

```javascript
// SELECTORS
page.locator('id=id')                           // By ID
page.locator('.class')                          // By class
page.getByPlaceholder('text')                   // By placeholder
page.getByRole('button')                        // By role
page.locator('//xpath')                         // By XPath
page.locator('[attr="value"]')                  // By attribute

// ACTIONS
await page.goto('url')                          // Navigate
await element.click()                           // Click
await element.fill('text')                      // Fill input
await element.press('Enter')                    // Press key
await page.waitForSelector('sel')               // Wait

// ASSERTIONS
await expect(element).toBeVisible()              // Is visible
await expect(element).toHaveText('text')        // Has text
await expect(page).toHaveURL('url')             // Current URL
await expect(input).toHaveValue('value')        // Input value
await expect(element).toBeEnabled()             // Is enabled
```

---

## 📚 Common Use Cases

### Login Test
```javascript
await page.goto('https://example.com/login');
await page.getByPlaceholder('Username').fill('user');
await page.getByPlaceholder('Password').fill('pass');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL(/dashboard/);
```

### Form Submission
```javascript
await page.fill('input[name="email"]', 'test@example.com');
await page.selectOption('select#country', 'USA');
await page.check('input[name="agree"]');
await page.click('button[type="submit"]');
await expect(page).toHaveURL(/success/);
```

### Table Data Verification
```javascript
const rows = page.locator('table tbody tr');
const count = await rows.count();
expect(count).toBeGreaterThan(0);
for (let i = 0; i < count; i++) {
  await expect(rows.nth(i)).toContainText('Expected Text');
}
```

### Dropdown Selection
```javascript
await page.selectOption('select#dropdown', { label: 'Option 1' });
await expect(page.locator('select#dropdown')).toHaveValue('opt1');
```

---

**Created:** May 1, 2026 | **Playwright Version:** 1.59.1+
