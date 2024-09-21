// @ts-check
const { test, expect } = require('@playwright/test');

test('AddCart', async ({ page }) => {
  await test.step('Apertura de pagina web', async () =>{
  await page.goto('/');
  });
  await page.locator('.card > a').first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByText('Product added').click();
  await page.waitForTimeout(1000)
});