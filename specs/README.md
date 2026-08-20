# Plano de cobertura do login

## Application Overview

Cobertura inicial do fluxo de autenticação do site https://automationpratice.com.br/, usando o projeto Playwright existente com Chromium e estado limpo por teste. O escopo cobre acesso à tela de login, autenticação com as credenciais fornecidas e validações negativas que não exigem cadastro ou dados externos.

## Test Scenarios

### 1. Autenticação

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login com credenciais válidas

**File:** `tests/login.spec.js`

**Steps:**
  1. Acessar a página inicial do site.
    - expect: A página inicial deve carregar sem erro.
  2. Clicar no link "Login".
    - expect: A URL deve ser /login e o formulário de login deve exibir e-mail, senha e botão de login.
  3. Preencher o e-mail com "qazando@teste.com.br" e a senha com "123456".
    - expect: Os valores devem ser aceitos nos respectivos campos.
  4. Clicar no botão "login".
    - expect: A aplicação deve redirecionar para /my-account.
    - expect: Deve exibir a mensagem "Login realizado".

#### 1.2. Login sem preencher os campos

**File:** `tests/login-validation.spec.js`

**Steps:**
  1. Acessar diretamente /login em um contexto limpo.
    - expect: O formulário deve ser exibido.
  2. Clicar no botão "login" sem preencher e-mail ou senha.
    - expect: A URL deve continuar em /login.
    - expect: Deve exibir a validação "E-mail inválido.".

#### 1.3. Login com senha vazia

**File:** `tests/login-validation.spec.js`

**Steps:**
  1. Acessar diretamente /login em um contexto limpo.
    - expect: O formulário deve ser exibido.
  2. Preencher o e-mail com "qazando@teste.com.br" e deixar a senha vazia.
    - expect: O e-mail deve permanecer preenchido e a senha deve permanecer vazia.
  3. Clicar no botão "login".
    - expect: A URL deve continuar em /login.
    - expect: Deve exibir a validação "Senha inválida.".

#### 1.4. Login com e-mail em formato inválido

**File:** `tests/login-validation.spec.js`

**Steps:**
  1. Acessar diretamente /login em um contexto limpo.
    - expect: O formulário deve ser exibido.
  2. Preencher o e-mail com "email-invalido" e a senha com "123456".
    - expect: Os dados devem ser exibidos nos campos.
  3. Clicar no botão "login".
    - expect: A aplicação deve impedir o avanço ou apresentar a validação de e-mail inválido.
    - expect: O usuário não deve ser considerado autenticado sem um formato de e-mail válido.
