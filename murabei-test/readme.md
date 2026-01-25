# Murabei Test - Teste para Desenvolvedor FullStack Jr

Este é o teste para Desenvolvedor FullStack Jr na Murabei Data Science, utilizando Docker, Python, Next.js e sqlite3.

## Descrição

O objetivo deste teste é avaliar a capacidade do desenvolvedor em criar uma aplicação Frontend e integrá-la a uma API Python. Toda a aplicação é mantida em containers Docker e roda usando `docker-compose`. Esta é a mesma arquitetura usada em todos os projetos internos da Murabei.

## Estrutura do Projeto

O repositório é dividido em 3 pastas principais:

### 1. `_docker-compose`
Contém os arquivos responsáveis pela orquestração dos containers Docker.
- `docker-compose.yml`: Define os serviços, containers e imagens.
- `docker-up.bash`: Script para subir os containers baseado no arquivo `docker-compose.yml`.
- `docker.log`: Armazena todos os logs da aplicação.

### 2. `backend`
Contém a API de livros desenvolvida em Python Flask.
- Funcionalidades: Listagem, criação e busca de livros (por autor e título).
- `build.bash`: Script para realizar o build da imagem Docker do backend.
- A API já está pré-pronta, mas pode ser alterada conforme a necessidade.

### 3. `frontend`
Local para o desenvolvimento do Frontend.
- Stack: Next.js (versão 14.2.25 requerida).
- Framework UI: `shadcn/ui` (obrigatório).

## Inicialização

Siga os passos abaixo para rodar o projeto:

1.  **Clone o repositório**.
2.  **Build do Backend**:
    - Navegue até a pasta `backend`.
    - Execute o script de build:
      ```bash
      ./build.bash
      ```
      *Isso criará uma imagem docker local para o backend.*
3.  **Build do Frontend**:
    - Navegue até a pasta `frontend`.
    - Execute o script de build:
      ```bash
      ./build.bash
      ```
      *Isso criará uma imagem docker local para o frontend.*
4.  **Subir os Serviços**:
    - Navegue até a pasta `_docker-compose`.
    - Execute o script de inicialização:
      ```bash
      ./docker-up.bash
      ```
      *Isso subirá todos os serviços definidos no docker-compose.*

## Estrutura do Projeto

```
.
├── _docker-compose
│   ├── docker-compose.yml
│   └── docker-up.bash
├── backend
│   ├── Dockerfile
│   ├── app.py
│   ├── books.json
│   ├── build.bash
│   ├── db.sqlite
│   └── requirements.txt
└── frontend
    ├── app
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   ├── books
    │   │   ├── BookCard.tsx
    │   │   └── BookList.tsx
    │   ├── ui
    │   │   ├── button.tsx
    │   │   ├── card.tsx
    │   │   ├── dialog.tsx
    │   │   ├── input.tsx
    │   │   ├── label.tsx
    │   │   ├── textarea.tsx
    │   │   ├── toggle-group.tsx
    │   │   └── toggle.tsx
    │   ├── CreateBookDialog.tsx
    │   ├── Pagination.tsx
    │   ├── SearchInput.tsx
    │   └── ThemeToggle.tsx
    ├── lib
    │   └── utils.ts
    ├── services
    │   ├── authors.ts
    │   ├── books.ts
    │   ├── config.ts
    │   └── index.ts
    ├── types
    │   ├── authors.ts
    │   └── book.ts
    ├── .dockerignore
    ├── .env.local
    ├── .gitignore
    ├── Dockerfile
    ├── README.md
    ├── build.bash
    ├── components.json
    ├── eslint.config.mjs
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    └── tsconfig.json
```

## Sugestões de Melhorias

### Funcionalidades
- **Exclusão de Livros (Delete)**: Implementar um botão de exclusão em cada card de livro, com um modal de confirmação (AlertDialog) para evitar remoções acidentais e feedback visual de sucesso/erro.
- **Edição de Livros (Edit)**: Adicionar a capacidade de atualizar as informações de um livro. Isso pode ser feito reutilizando o diálogo de criação preenchido com os dados atuais do livro.
- **Melhorias na Busca**: Implementar *debounce* nos campos de busca para reduzir o número de requisições desnecessárias à API.
- **Paginação e Filtros**: Persistir o estado da paginação e filtros na URL para permitir o compartilhamento de links de resultados específicos.

### Qualidade de Código e Infraestrutura
- **Testes**: Adicionar testes unitários (Jest/React Testing Library) e testes E2E (Playwright/Cypress) para garantir a estabilidade do sistema.
- **Tratamento de Erros**: Implementar um sistema robusto de notificações (Toasts) para informar o usuário sobre o status das requisições (sucesso, erro de rede, validação).
- **Acessibilidade**: Garantir que todos os componentes interativos sejam totalmente navegáveis por teclado e compatíveis com leitores de tela.
