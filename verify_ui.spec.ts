import { test, expect } from '@playwright/test';

test('verify portfolio colors and content', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Wait for the page to load
  await page.waitForSelector('h1');

  // Take a full page screenshot
  await page.screenshot({ path: 'portfolio_full.png', fullPage: true });

  // Take screenshots of key sections
  await page.locator('section#top, section:has-text("Raj")').first().screenshot({ path: 'hero_section.png' });
  await page.locator('section#experience').screenshot({ path: 'experience_section.png' });
  await page.locator('section#contact').screenshot({ path: 'contact_section.png' });

  // Verify some content
  const bio = await page.locator('p').filter({ hasText: 'high-performance digital ecosystems' }).first();
  await expect(bio).toBeVisible();

  const role = await page.locator('text=AI & Full-Stack Systems Architect').first();
  await expect(role).toBeVisible();
});
