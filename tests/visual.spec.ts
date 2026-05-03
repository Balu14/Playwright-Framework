import { test } from '@fixtures/auth.fixture';
import { VisualRegression } from '@utils/visualRegression';

test.describe('Visual Regression Tests', () => {
  test('login page visual @visual', async ({ page }) => {
    await page.goto('/');
    const visual = new VisualRegression(page);
    await visual.assertScreenshot('login-page');
  });

  test('inventory page visual @visual', async ({ loginPage }) => {
    await loginPage.load();
    await loginPage.loginAsStandardUser();
    const visual = new VisualRegression(loginPage.page);
    await visual.assertScreenshot('inventory-page');
  });
});