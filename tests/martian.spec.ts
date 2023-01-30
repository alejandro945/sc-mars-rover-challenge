import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://sc-mars-rover-challenge-n7m3ndpuq-altagama.vercel.app/');
  //Header Layout Components
  await page.getByRole('heading', { name: 'Mars Rovers Challenge' }).click();
  await page.getByText('NASA API').click();
  //
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByText('Default Filter').click();
  await page.getByRole('combobox', { name: 'Rover' }).selectOption('curiosity');
  await page.getByRole('combobox', { name: 'Date Filter' }).selectOption('sol');
  await page.getByPlaceholder('0').click();
  await page.getByPlaceholder('0').fill('1000');
  await page.getByRole('button', { name: 'Filter' }).click();
  await page.getByRole('heading', { name: 'FHAZ' }).first().click();
});