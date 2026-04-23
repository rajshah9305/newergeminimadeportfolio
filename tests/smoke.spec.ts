import { test, expect } from '@playwright/test';

test('homepage smoke test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('text=RAJ')).toBeVisible();
  await expect(page.locator('text=SHAH')).toBeVisible();
  await page.screenshot({ path: 'screenshots/smoke-desktop.png', fullPage: true });
});
