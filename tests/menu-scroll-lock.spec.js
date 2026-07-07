import { test, expect } from '@playwright/test';

test('page scroll is locked while mobile menu is open and restored on close', async ({ page }) => {
  await page.goto('/');

  // Scroll down (instant to avoid smooth-scroll race)
  await page.evaluate(() => window.scrollTo({ top: 300, behavior: 'instant' }));
  await page.waitForFunction(() => window.scrollY >= 100);
  const scrollBefore = await page.evaluate(() => window.scrollY);

  // Open the hamburger menu
  await page.click('#nav-hamburger');
  await expect(page.locator('#mobile-menu')).toHaveClass(/open/);

  // body overflow must be hidden
  const overflow = await page.evaluate(() => document.body.style.overflow);
  expect(overflow).toBe('hidden');

  // Navbar must be opaque (menu-open class added to prevent see-through)
  await expect(page.locator('#navbar')).toHaveClass(/menu-open/);

  // Close the menu
  await page.click('#nav-hamburger');
  await expect(page.locator('#mobile-menu')).not.toHaveClass(/open/);

  // Scroll lock and navbar class must be cleared
  const overflowAfter = await page.evaluate(() => document.body.style.overflow);
  expect(overflowAfter).toBe('');
  await expect(page.locator('#navbar')).not.toHaveClass(/menu-open/);

  // Scroll position must be unchanged (no page jump)
  const scrollAfter = await page.evaluate(() => window.scrollY);
  expect(Math.abs(scrollAfter - scrollBefore)).toBeLessThan(5);
});
