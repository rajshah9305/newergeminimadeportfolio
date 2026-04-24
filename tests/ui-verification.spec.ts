import { test, expect } from '@playwright/test';

test.describe('UI Refinement Verification', () => {
  test('Hero Section - Desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    // Check Hero Name
    const raj = page.locator('text=RAJ');
    const shah = page.locator('text=SHAH');
    await expect(raj).toBeVisible();
    await expect(shah).toBeVisible();

    // Hover RAJ to check interaction
    await raj.hover();
    await page.waitForTimeout(500);

    // Check Terminal
    await expect(page.locator('.border-2.border-accent.bg-\\[\\#FAFAFA\\]')).toBeVisible();

    await page.screenshot({ path: 'screenshots/hero-desktop.png' });
  });

  test('Hero Section - Ultra Wide', async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });
    await page.goto('/');

    // Check container max-width
    const container = page.locator('.max-w-\\[1920px\\]');
    await expect(container).toBeVisible();

    await page.screenshot({ path: 'screenshots/hero-ultrawide.png' });
  });

  test('Projects Section - Hover Interaction', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/#work');

    const firstProject = page.locator('article').first();
    await expect(firstProject).toBeVisible();

    // Hover first project
    await firstProject.hover();
    await page.waitForTimeout(500);

    await page.screenshot({ path: 'screenshots/project-hover.png' });
  });

  test('Skills Section - Mobile Grid', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/#expertise');

    const skillsGrid = page.locator('#expertise .grid');
    await expect(skillsGrid).toBeVisible();

    await page.screenshot({ path: 'screenshots/skills-mobile.png' });
  });
});
