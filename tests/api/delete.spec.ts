import { test, expect } from '@playwright/test';

test.describe('DELETE API Tests', () => {
  test('DELETE /posts/1', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.ok()).toBeTruthy();
  });
});