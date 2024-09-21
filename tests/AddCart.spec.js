// @ts-check
const { test, expect } = require('@playwright/test');

test('Cart Shopping', async ({ page }) => {
  await test.step('Apertura de pagina web', async () =>{
  await page.goto('/');
  });
  await page.pause();
  await expect(page.getByRole('heading', { name: 'PRODUCT STORE' })).toBeVisible();
  await page.locator('.card > a').first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByLabel('Total:').click();
  await page.getByLabel('Total:').fill('car');
  await page.getByLabel('Credit card:').click();
  await page.getByLabel('Credit card:').fill('789');
  await page.getByRole('button', { name: 'Purchase' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});