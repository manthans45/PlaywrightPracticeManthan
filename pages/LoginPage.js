class LoginPage {

    constructor(page) {

        this.page = page;

        this.emailInput = page.locator('#userEmail');

        this.passwordInput = page.locator('#userPassword');

        this.loginButton = page.locator('#login');
    }

    async navigateToLoginPage() {

        await this.page.goto('/');

    }

    async enterUsername(username) {

        await this.emailInput.fill(username);

    }

    async enterPassword(password) {

        await this.passwordInput.fill(password);

    }

    async clickLogin() {

        await this.loginButton.click();

    }

    async login(username, password) {

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickLogin();
    }
}

module.exports = {
    LoginPage
};