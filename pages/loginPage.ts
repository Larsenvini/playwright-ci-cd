class LoginPage {
    page: any;
    usernameInput: any;
    passwordInput: any;
    rememberMeCheckbox: any;
    loginButton: any;
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Remember Me' });
        this.loginButton = page.getByRole('button', { name: 'Log In' }); // 🔥 FIXED: 'button' instead of 'input'
    }

    async login(username, password, rememberMe = false) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        
        if (rememberMe) {
            await this.rememberMeCheckbox.check();
        }

        await this.loginButton.click();
    }
}

export default LoginPage;
