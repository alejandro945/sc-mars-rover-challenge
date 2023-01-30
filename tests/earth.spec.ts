import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sc-mars-rover-challenge-n7m3ndpuq-altagama.vercel.app/');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('combobox', { name: 'Rover' }).selectOption('curiosity');
  await page.getByRole('combobox', { name: 'Date Filter' }).selectOption('earth_date');
  await page.getByLabel('Earth date').fill('2015-06-03');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('heading', { name: 'FHAZ' }).first().click();
});