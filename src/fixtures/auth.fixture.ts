import { test as base, Page } from '@playwright/test';
import { LoginPage } from '@pages/LoginPage';
import logger from '@utils/logger';

type TestFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<TestFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  page: async ({ page }, use) => {
    // Capture network requests and responses
    page.on('request', (request) => {
      logger.debug(`Request: ${request.method()} ${request.url()}`);
    });

    page.on('response', (response) => {
      logger.debug(`Response: ${response.status()} ${response.url()}`);
    });

    // Capture console errors
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        logger.error(`Console error: ${msg.text()}`);
      }
    });

    await use(page);
  },
});

// Hooks with logging
test.beforeEach(async ({ page }, testInfo) => {
  logger.info(`Starting test: ${testInfo.title}`);
  testInfo.annotations.push({ type: 'info', description: `Test started at ${new Date().toISOString()}` });
});

test.afterEach(async ({ page }, testInfo) => {
  logger.info(`Finished test: ${testInfo.title} - Status: ${testInfo.status}`);
  if (testInfo.status === 'failed') {
    logger.error(`Test failed: ${testInfo.error?.message}`);
  }
});

export { expect } from '@playwright/test';
