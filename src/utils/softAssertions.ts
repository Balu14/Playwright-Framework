import { expect } from '@playwright/test';
import logger from './logger';

export class SoftAssertions {
  private errors: string[] = [];

  async assert(condition: boolean, message: string): Promise<void> {
    if (!condition) {
      this.errors.push(message);
      logger.warn(`Soft assertion failed: ${message}`);
    }
  }

  async assertEqual<T>(actual: T, expected: T, message: string): Promise<void> {
    try {
      expect(actual).toEqual(expected);
    } catch (error) {
      this.errors.push(`${message}: ${error.message}`);
      logger.warn(`Soft assertion failed: ${message}`);
    }
  }

  async assertVisible(locator: any, message: string): Promise<void> {
    try {
      await expect(locator).toBeVisible();
    } catch (error) {
      this.errors.push(`${message}: ${error.message}`);
      logger.warn(`Soft assertion failed: ${message}`);
    }
  }

  throwIfErrors(): void {
    if (this.errors.length > 0) {
      const errorMessage = `Soft assertions failed:\n${this.errors.join('\n')}`;
      throw new Error(errorMessage);
    }
  }

  getErrors(): string[] {
    return [...this.errors];
  }
}