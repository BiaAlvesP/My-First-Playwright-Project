# My First Playwright Project

Este é o meu primeiro projeto de automação de testes com Playwright, desenvolvido durante o Bootcamp da QAzando.

## O que aprendi

Neste primeiro contato, aprendi principalmente a:

- Criar e preparar o ambiente de testes com Node.js e Playwright.
- Inicializar um projeto Playwright usando a estrutura padrão.
- Conhecer os comandos iniciais para executar testes e abrir o relatório HTML.
- Configurar o navegador Chromium para os testes.
- Navegar em páginas, preencher campos, clicar em elementos e validar resultados.
- Criar um plano de cobertura para o fluxo de login.
- Configurar o Playwright MCP e os agentes de teste para uso no VS Code.

## Sobre o projeto

Os testes foram criados para o site [QAzando Shop](https://automationpratice.com.br/), com foco no fluxo de autenticação.

A cobertura atual inclui:

- Login com credenciais válidas.
- Tentativa de login sem preencher os campos.
- Tentativa de login com senha vazia.
- Tentativa de login com e-mail em formato inválido.

O plano detalhado está disponível em [specs/README.md](specs/README.md).

## Como executar

Instale as dependências:

```bash
npm install
```

Execute todos os testes:

```bash
npx playwright test
```

Execute os testes em modo visual:

```bash
npx playwright test --headed
```

Abra o relatório HTML:

```bash
npx playwright show-report
```

## Estrutura principal

```text
├── tests/
│   ├── login.spec.js
│   └── login-validation.spec.js
├── specs/
│   └── README.md
├── playwright.config.js
└── package.json
```

## Tecnologias

- JavaScript
- Node.js
- Playwright Test
- Playwright MCP
- Chromium

Este projeto representa o início da minha jornada com automação de testes e foi construído como parte do aprendizado no Bootcamp da QAzando.
