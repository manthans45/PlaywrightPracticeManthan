const { test, expect } = require('../../fixtures/testFixtures');

const config = require('../../config/env.config');

test.describe('Login Tests', () => {

    test('Verify successful login', async ({
        loginPage,
        dashboardPage
    }) => {

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            config.username,
            config.password
        );

        await dashboardPage.verifyDashboardDisplayed();

    });

});