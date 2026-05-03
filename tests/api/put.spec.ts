import { test, expect } from '@playwright/test';

test.describe('PUT API Tests', () => {
  test('PUT /posts/1', async ({ request }) => {
    const updatedPost = {
      id: 1,
      title: 'foo updated',
      body: 'bar updated',
      userId: 1,
    };
    const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
      data: updatedPost,
    });
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.title).toBe('foo updated');
  });
});