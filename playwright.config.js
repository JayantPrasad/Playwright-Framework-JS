// @ts-check
import { defineConfig } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 1 : 1,

  reporter: 'html',
  timeout: 60 * 100,
  expect: {
    timeout: 1000
  },

  use: {

    trace: 'on-first-retry',
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',

  },

});

