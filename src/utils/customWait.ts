import { Page, Locator } from '@playwright/test';
import logger from './logger';

export class CustomWait {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForElement(locator: Locator, timeout: number = 10000): Promise<void> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      try {
        await locator.waitFor({ state: 'visible', timeout: 1000 });
        logger.debug(`Element found after ${Date.now() - startTime}ms`);
        return;
      } catch {
        // Continue waiting
      }
    }
    throw new Error(`Element not found within ${timeout}ms`);
  }

  async waitForText(locator: Locator, text: string, timeout: number = 10000): Promise<void> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      try {
        await locator.waitFor({ state: 'visible', timeout: 1000 });
        const actualText = await locator.textContent();
        if (actualText?.includes(text)) {
          logger.debug(`Text "${text}" found after ${Date.now() - startTime}ms`);
          return;
        }
      } catch {
        // Continue waiting
      }
    }
    throw new Error(`Text "${text}" not found within ${timeout}ms`);
  }

  async waitForUrl(url: string | RegExp, timeout: number = 10000): Promise<void> {
    const startTime = Date.now();
    while (Date.now() - startTime < timeout) {
      try {
        await this.page.waitForURL(url, { timeout: 1000 });
        logger.debug(`URL ${url} loaded after ${Date.now() - startTime}ms`);
        return;
      } catch {
        // Continue waiting
      }
    }
    throw new Error(`URL ${url} not loaded within ${timeout}ms`);
  }
}