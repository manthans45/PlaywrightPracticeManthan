class DashboardPage {

    constructor(page) {

        this.page = page;

        this.productsTitle = page.getByText('Products');

        this.logoutButton = page.getByRole('button', {
            name: 'Sign Out'
        });
    }

    async verifyDashboardDisplayed() {

        await this.productsTitle.waitFor({
            state: 'visible'
        });

    }

    async logout() {

        await this.logoutButton.click();

    }
}

module.exports = { DashboardPage };