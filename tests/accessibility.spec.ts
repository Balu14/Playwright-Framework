import { test } from '@fixtures/auth.fixture';
import { injectAxe, checkA11y } from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('login page accessibility @accessibility', async ({ page }) => {
    await page.goto('/');

    // Inject axe-core
    await injectAxe(page);

    // Run accessibility checks
    await checkA11y(page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });

  test('inventory page accessibility @accessibility', async ({ loginPage }) => {
    await loginPage.load();
    await loginPage.loginAsStandardUser();

    // Inject axe-core
    await injectAxe(loginPage.page);

    // Run accessibility checks
    await checkA11y(loginPage.page, null, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });
});