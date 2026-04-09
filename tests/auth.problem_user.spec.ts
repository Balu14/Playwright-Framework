import { test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { TEST_USERS } from '@data/testData';

test('problem user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.load();
  await loginPage.login(TEST_USERS.PROBLEM_USER.username, TEST_USERS.PROBLEM_USER.password);
  await loginPage.expectInventoryPage();
});