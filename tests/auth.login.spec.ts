import { test } from '@fixtures/auth.fixture';
import { LoginPage } from '@pages/LoginPage';
import { allure } from 'allure-playwright';

test('login test @smoke @regression', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await allure.step('Load login page', async () => {
    console.log('Loading login page');
    await loginPage.load();
  });

  await allure.step('Login as standard user', async () => {
    console.log('Logging in as standard user');
    await loginPage.loginAsStandardUser();
  });

  await allure.step('Verify inventory page', async () => {
    console.log('Verifying inventory page');
    await loginPage.expectInventoryPage();
  });
});