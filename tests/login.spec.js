// @ts-check
import { test, expect } from '@playwright/test';

test('realiza login com credenciais válidas', async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
  await page.getByRole('link', { name: /Login/ }).click();

  await page.locator('#user').fill('qazando@teste.com.br');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();

  await expect(page).toHaveURL('https://automationpratice.com.br/my-account');
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
});

/* test('Teste de Login', async ({ page }) => {
  //abre a pagina de login
  await page.goto('https://automationpratice.com.br/login');
  //preenche o campo de email e senha
  await page.click("#user");
  await page.fill("#user", "teste@gmail.com")
  await page.click("#password");
  await page.fill("#password", "123456")
  //clica no botão de login 
  await page.click("#btnLogin");
  //verifica se o login foi realizado com sucesso
  await page.click(".swal2-confirm.swal2-styled");
}); */
