import { test, expect } from '@playwright/test';

test('tapping the menu backdrop closes the menu', async ({ page }) => {
  await page.goto('/');

  await page.click('#nav-hamburger');
  await expect(page.locator('#mobile-menu')).toHaveClass(/open/);

  // Tap the backdrop: click the menu element at a spot with no child content
  // (bottom-center of the overlay, away from the nav links)
  await page.locator('#mobile-menu').click({ position: { x: 195, y: 500 } });

  await expect(page.locator('#mobile-menu')).not.toHaveClass(/open/);
  const overflow = await page.evaluate(() => document.body.style.overflow);
  expect(overflow).toBe('');
});
