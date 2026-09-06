const { defineConfig, devices } = require('@playwright/test');
const config = require('./config/env.config');

module.exports = defineConfig({

    testDir: './tests',

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 1 : undefined,

    timeout: 30 * 1000,

    expect: {
        timeout: 5000
    },

    reporter: [
        ['html', {
            outputFolder: 'playwright-report',
            open: 'never'
        }],
        ['list']
    ],

    use: {
        baseURL: config.baseUrl,

        headless: true,

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'retain-on-failure',

        actionTimeout: 15000,

        navigationTimeout: 30000
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome']
            }
        }
    ]
});