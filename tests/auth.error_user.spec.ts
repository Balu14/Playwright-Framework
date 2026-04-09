import { test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { TEST_USERS } from '@data/testData';

test('error user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.load();
  await loginPage.login(TEST_USERS.ERROR_USER.username, TEST_USERS.ERROR_USER.password);
  await loginPage.expectInventoryPage();
});