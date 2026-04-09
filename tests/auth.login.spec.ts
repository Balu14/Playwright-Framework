import { test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';

test('login test', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.load();
  await loginPage.loginAsStandardUser();
  await loginPage.expectInventoryPage();
});