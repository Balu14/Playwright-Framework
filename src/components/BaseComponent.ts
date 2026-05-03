import { Page, Locator } from '@playwright/test';

export class BaseComponent {
  protected page: Page;
  protected locator: Locator;

  constructor(page: Page, locator: Locator) {
    this.page = page;
    this.locator = locator;
  }

  async isVisible(): Promise<boolean> {
    return this.locator.isVisible();
  }

  async waitForVisible(): Promise<void> {
    await this.locator.waitFor({ state: 'visible' });
  }
}