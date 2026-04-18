import { test, expect } from '@playwright/test';

test('logo should not contain "RAJ SHAH"', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // The logo link has aria-label="Back to top"
  const logo = page.getByLabel('Back to top');
  await expect(logo).toBeVisible();

  // Check that the text "Raj Shah" is NOT in the logo
  // Based on the code, it was inside a span with PERSONAL_INFO.name
  const logoText = await logo.textContent();
  console.log('Logo text content:', logoText);

  expect(logoText).not.toContain('Raj Shah');
  expect(logoText?.trim()).toBe('RS');
});
