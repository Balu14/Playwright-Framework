import { BaseComponent } from './BaseComponent';

export class HeaderComponent extends BaseComponent {
  private burgerMenu = this.locator.locator('[data-test="open-menu"]');
  private cartIcon = this.locator.locator('[data-test="shopping-cart-link"]');
  private cartBadge = this.locator.locator('[data-test="shopping-cart-badge"]');

  async openMenu(): Promise<void> {
    await this.burgerMenu.click();
  }

  async goToCart(): Promise<void> {
    await this.cartIcon.click();
  }

  async getCartItemCount(): Promise<number> {
    const badgeText = await this.cartBadge.textContent();
    return badgeText ? parseInt(badgeText, 10) : 0;
  }
}