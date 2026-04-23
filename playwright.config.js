// @ts-check
import { defineConfig } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',
  timeout: 30 * 100,
  expect: {
    timeout: 5000
  },

  use: {

    trace: 'on-first-retry',
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',

  },

});

