const { test, expect } = require('@playwright/test');

test('Sign Up', async ({ page }) => {
    await page.goto('/');
    page.on('dialog', async dialog => {
        expect(dialog.message()).toBe('Sign up successful.')
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => { });
    });
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByLabel('Username:').click();
    await page.getByLabel('Username:').fill('CarlosTqa');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill('test12398');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.waitForTimeout(1000)
});