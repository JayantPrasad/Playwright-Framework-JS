// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  reporter: [
    ["line"],
    ["allure-playwright", { resultsDir: "allure-results" }]
  ],
  testDir: './tests',

  workers: 1,

  fullyParallel: false,

  forbidOnly: !!process.env.CI,

  retries: 2,

  // workers: process.env.CI ? 1 : 1,

  //reporter: 'html',
  timeout: 60 * 100,
  expect: {
    timeout: 1000
  },

  use: {

    trace: 'on-first-retry',
    //browserName: 'chromium',
    headless: false,
    screenshot: 'on',

  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ]
}
);
