import { test, expect } from '@playwright/test';

test.describe('POST API Tests', () => {
  test('POST /posts', async ({ request }) => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: newPost,
    });
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    expect(data.title).toBe('foo');
    expect(data.body).toBe('bar');
    expect(data.userId).toBe(1);
  });
});