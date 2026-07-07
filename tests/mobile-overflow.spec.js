import { test, expect } from '@playwright/test';

test('overview cards do not overflow on iPhone 16', async ({ page }) => {
  await page.goto('/');

  const viewportWidth = page.viewportSize().width;

  const cards = page.locator('.overview-card');
  await expect(cards).toHaveCount(2);

  for (const card of await cards.all()) {
    const box = await card.boundingBox();
    expect(box).not.toBeNull();
    // Card right edge must not exceed viewport width
    expect(box.x + box.width).toBeLessThanOrEqual(viewportWidth + 1);
  }
});
