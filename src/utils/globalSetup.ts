import { chromium } from '@playwright/test';
import logger from './logger';

async function globalSetup() {
  logger.info('Global setup started');

  // Any global setup logic here, e.g., database setup, etc.

  logger.info('Global setup completed');
}

export default globalSetup;