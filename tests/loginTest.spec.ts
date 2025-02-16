const {test, expect} = require('@playwright/test')
import LoginPage from "../pages/loginPage"

test('Sucessful Login with Remember Me', async ({page}) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://example.com/login')

    await loginPage.login('userTest', '1234, true');

    await expect(page).toHaveURL('https://example.com/home');

    console.log("Success!")

})