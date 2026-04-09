import { test } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import { TEST_USERS } from '@data/testData';

test('performance glitch user can login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.load();
  await loginPage.login(TEST_USERS.PERFORMANCE_GLITCH_USER.username, TEST_USERS.PERFORMANCE_GLITCH_USER.password);
  await loginPage.expectInventoryPage();
});