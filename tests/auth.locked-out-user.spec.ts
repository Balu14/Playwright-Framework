import { test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';

test('locked out user cannot login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.load();
  await loginPage.loginAsLockedOutUser();
  await loginPage.expectLockedOutError();
});