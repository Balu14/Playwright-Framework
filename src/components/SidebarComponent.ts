import { BaseComponent } from './BaseComponent';

export class SidebarComponent extends BaseComponent {
  private closeButton = this.locator.locator('[data-test="close-menu"]');
  private allItemsLink = this.locator.locator('[data-test="inventory-sidebar-link"]');
  private aboutLink = this.locator.locator('[data-test="about-sidebar-link"]');
  private logoutLink = this.locator.locator('[data-test="logout-sidebar-link"]');
  private resetLink = this.locator.locator('[data-test="reset-sidebar-link"]');

  async closeMenu(): Promise<void> {
    await this.closeButton.click();
  }

  async goToAllItems(): Promise<void> {
    await this.allItemsLink.click();
  }

  async goToAbout(): Promise<void> {
    await this.aboutLink.click();
  }

  async logout(): Promise<void> {
    await this.logoutLink.click();
  }

  async resetAppState(): Promise<void> {
    await this.resetLink.click();
  }
}