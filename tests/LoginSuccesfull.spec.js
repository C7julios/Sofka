// @ts-check
const { test, expect } = require('@playwright/test');

test('Login Succesful', async ({ page }) => {
    await page.goto('/');   
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Welcome cj8')
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('cj8');
    await page.locator('#loginpassword').click();
    await page.locator('#loginpassword').fill('cC@iPN6jsMmxr@3');
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.getByRole('link', { name: 'Welcome cj8' }).click();
    await page.waitForTimeout(1000)
});