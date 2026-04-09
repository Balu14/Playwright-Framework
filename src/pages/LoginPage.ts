import { expect, Page } from '@playwright/test';
import { loginLocators } from '@locators/loginLocators';
import { TEST_USERS } from '@data/testData';

export class LoginPage {
  constructor(private page: Page) {}

  async load() {
    await this.page.goto('/');
  }

  async fillUsername(username: string) {
    await this.page.fill(loginLocators.usernameInput, username);
  }

  async fillPassword(password: string) {
    await this.page.fill(loginLocators.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(loginLocators.loginButton);
  }

  async login(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async loginAsStandardUser() {
    await this.login(TEST_USERS.VALID_USER.username, TEST_USERS.VALID_USER.password);
  }

  async loginAsLockedOutUser() {
    await this.login(TEST_USERS.LOCKED_OUT_USER.username, TEST_USERS.LOCKED_OUT_USER.password);
  }

  async expectInventoryPage() {
    await expect(this.page).toHaveURL(/inventory.html/);
  }

  async expectLockedOutError() {
    await expect(this.page.locator(loginLocators.errorMessage)).toHaveText(
      'Epic sadface: Sorry, this user has been locked out.'
    );
  }
}
