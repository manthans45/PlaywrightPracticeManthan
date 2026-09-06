const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../../pages/LoginPage');
const { DashboardPage } = require('../../pages/DashboardPage');

const config = require('../../config/env.config');

test.describe('Login Tests', () => {

    test('Verify user can login successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);

        const dashboardPage = new DashboardPage(page);

        // Navigate to application
        await loginPage.navigateToLoginPage();

        // Login using credentials from environment
        await loginPage.login(
            config.username,
            config.password
        );

        // Verify successful login
        await dashboardPage.verifyDashboardDisplayed();

    });

});