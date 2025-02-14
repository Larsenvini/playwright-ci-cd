const { test, expect } = require('@playwright/test');

test('Test Playwright Docs Search', async ({ page }) => {
  // Open Playwright website
  await page.goto('https://playwright.dev/');

  // Click on the search icon
  await page.click('button.DocSearch-Button');

  // Type into the search box
  await page.fill('input[type="search"]', 'test');

  // Wait for the specific search result containing "Writing tests"
  const writingTestsResult = page.locator('.DocSearch-Hit-title', { hasText: 'Writing tests' });
  await expect(writingTestsResult).toBeVisible();

  // Click on the correct search result
  await writingTestsResult.click();

  // Wait for the page to load and verify the correct content
  await expect(page.locator('h1')).toHaveText('Writing tests');
});
