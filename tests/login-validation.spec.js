// @ts-check
import { test, expect } from '@playwright/test';

const loginUrl = 'https://automationpratice.com.br/login';

test.describe('Validações do login', () => {
  test('impede login sem preencher os campos', async ({ page }) => {
    await page.goto(loginUrl);
    await page.getByRole('button', { name: 'login' }).click();

    await expect(page).toHaveURL(loginUrl);
    await expect(page.getByText('E-mail inválido.')).toBeVisible();
  });

  test('impede login com senha vazia', async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator('#user').fill('qazando@teste.com.br');
    await page.getByRole('button', { name: 'login' }).click();

    await expect(page).toHaveURL(loginUrl);
    await expect(page.getByText('Senha inválida.')).toBeVisible();
  });

  test('impede login com e-mail em formato inválido', async ({ page }) => {
    await page.goto(loginUrl);
    await page.locator('#user').fill('email-invalido');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();

    await expect(page).toHaveURL(loginUrl);
    await expect(page.getByText('E-mail inválido.')).toBeVisible();
  });
});
