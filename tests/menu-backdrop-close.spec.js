import { test, expect } from '@playwright/test';

test('tapping the menu backdrop closes the menu', async ({ page }) => {
  await page.goto('/');

  await page.click('#nav-hamburger');
  await expect(page.locator('#mobile-menu')).toHaveClass(/open/);

  // Tap empty backdrop below the nav links / action buttons
  const box = await page.locator('#mobile-menu').boundingBox();
  expect(box).toBeTruthy();
  await page.locator('#mobile-menu').click({
    position: { x: box.width / 2, y: box.height - 24 },
  });

  await expect(page.locator('#mobile-menu')).not.toHaveClass(/open/);
  const overflow = await page.evaluate(() => document.body.style.overflow);
  expect(overflow).toBe('');
});
