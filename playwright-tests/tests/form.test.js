const { test, expect } = require('@playwright/test');

test('Login to SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Fill in login details
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click login button
  await page.click('#login-button');

  // Verify login success by checking the URL
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
