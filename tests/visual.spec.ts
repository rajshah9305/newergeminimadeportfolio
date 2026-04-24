import { test, expect } from '@playwright/test';

test('homepage should load and show hero section', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('RAJ');
  await expect(page.locator('h1')).toContainText('SHAH');
  await page.screenshot({ path: `screenshots/desktop-${process.platform}.png`, fullPage: true });
});

test('mobile homepage should load', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'Skip desktop for this test');
  await page.goto('/');
  await expect(page.locator('h1')).toContainText('RAJ');
  await page.screenshot({ path: `screenshots/mobile-${process.platform}.png`, fullPage: true });
});
