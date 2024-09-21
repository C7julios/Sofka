// @ts-check
const { test, expect } = require('@playwright/test');

test('Reptiles', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', {name: 'Enter the Store'}).click();
    await page.locator('#QuickLinks').getByRole('link').nth(2).click();
    });