import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  workers: 1,
  use: {
    baseURL: 'http://localhost:3000',
  },
  projects: [
    {
      name: 'iPhone 16',
      use: { ...devices['iPhone 16'] },
    },
  ],
  webServer: {
    command: 'npx serve . -p 3000 -s',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
