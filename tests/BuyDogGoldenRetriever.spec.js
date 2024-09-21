// @ts-check
const { test, expect } = require('@playwright/test');

test('BuyDogGoldenRetriever', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', {name: 'Enter the Store'}).click();
    await page.getByRole('link', {name: 'Sign In'}).click();
    await page.locator('input[name="username"]').click();
    await page.locator('input[name="username"]').fill('c7julios');
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill('Test1234');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('#SidebarContent').getByRole('link').nth(1).click();
    await page.getByRole('link', { name: 'K9-RT-01' }).click();
    await page.getByRole('link', { name: 'Add to Cart' }).click();
    await page.getByRole('link', { name: 'Proceed to Checkout' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('link', { name: 'Confirm' }).click();
    await page.getByText('Thank you, your order has').click();
    });