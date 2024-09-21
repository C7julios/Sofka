// @ts-check
const { test, expect } = require('@playwright/test');

test('Login', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', {name: 'Enter the Store'}).click();
    await page.getByRole('link', {name: 'Sign In'}).click();
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill('c7julios');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('Test1234');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'My Account' }).click();     
    });