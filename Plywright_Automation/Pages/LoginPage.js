export class LoginPage {

    constructor(page) {

        this.page = page;

        this.userNameInput =
            page.locator('#user-name');

        this.passwordInput =
            page.locator('#password');

        this.loginBtn =
            page.locator('#login-button');
    }

    async validCredentials(
        userName,
        password
    ) {

        await this.page.goto(
            'https://www.saucedemo.com/'
        );

        await this.userNameInput.fill(
            userName
        );

        await this.passwordInput.fill(
            password
        );

        await this.loginBtn.click();
        await this.page.waitForTimeout(3000);
    }
}