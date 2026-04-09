/**
 * Common utility functions for test helpers
 */

export async function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateTimestamp(): string {
  return new Date().getTime().toString();
}
