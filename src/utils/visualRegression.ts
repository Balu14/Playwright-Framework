import { Page, expect } from '@playwright/test';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import fs from 'fs';
import path from 'path';

export class VisualRegression {
  private page: Page;
  private baselineDir: string;
  private diffDir: string;

  constructor(page: Page) {
    this.page = page;
    this.baselineDir = path.join(process.cwd(), 'visual-baselines');
    this.diffDir = path.join(process.cwd(), 'visual-diffs');

    // Ensure directories exist
    if (!fs.existsSync(this.baselineDir)) fs.mkdirSync(this.baselineDir, { recursive: true });
    if (!fs.existsSync(this.diffDir)) fs.mkdirSync(this.diffDir, { recursive: true });
  }

  async compareScreenshot(name: string, options: { threshold?: number } = {}): Promise<boolean> {
    const { threshold = 0.1 } = options;
    const screenshot = await this.page.screenshot({ fullPage: true });
    const baselinePath = path.join(this.baselineDir, `${name}.png`);
    const diffPath = path.join(this.diffDir, `${name}-diff.png`);

    if (!fs.existsSync(baselinePath)) {
      // Create baseline
      fs.writeFileSync(baselinePath, screenshot);
      return true;
    }

    const baseline = PNG.sync.read(fs.readFileSync(baselinePath));
    const current = PNG.sync.read(screenshot);

    const { width, height } = baseline;
    const diff = new PNG({ width, height });

    const mismatchedPixels = pixelmatch(
      baseline.data,
      current.data,
      diff.data,
      width,
      height,
      { threshold }
    );

    if (mismatchedPixels > 0) {
      fs.writeFileSync(diffPath, PNG.sync.write(diff));
      return false;
    }

    return true;
  }

  async assertScreenshot(name: string, options: { threshold?: number } = {}): Promise<void> {
    const matches = await this.compareScreenshot(name, options);
    expect(matches).toBeTruthy();
  }
}