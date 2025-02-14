const { test, expect } = require('@playwright/test');

test('API Test - Validate JSON Response', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('id', 1);
  expect(responseBody).toHaveProperty('title');
});
