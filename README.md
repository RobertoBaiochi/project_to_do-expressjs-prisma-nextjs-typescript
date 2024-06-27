# 🏷️ Bee Done - Kanban

## 🧠 Sobre o projeto:

A ideia do projeto surgiu porque utilizo diariamente um software organizador de tarefas e por curiosidade comecei a pensar em como funcionaria ou como desenvolveria algo desse estilo.
Então aproveitei para fazer um produto da forma mais completa que conseguiria em um prazo de 1 mês, tendo uma **_Landing Page_** de apresentação, um página e como sistema de **_Criação de Conta e Login_** e o _**Dashboard**_ onde funcionaria o Kanban com _**Drag and Drop**_.
Com isso, veio a ideia do nome **Bee Done**.

_O Logotipo e os textos foram criado a partir de IA_.

## 📖 Descrição:

O Bee Done é uma organizador de tarefas no estilo **Kanban**, onde você cria sua conta e pode personalizar seu perfil com **Foto de Avatar** e seu **Nome**.

O projeto foi idealizado para desenvolvimento **Full-stack**.

-   WebAPI Rest utilizando **Nodejs com Typescript e ExpressJs**, para interação com o banco de dados foi utilizado o [Prisma](https://www.prisma.io/), para criação de token foi utilizado [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken), na criptografia de senha foi utilizado [Bcrypt](https://www.npmjs.com/package/bcrypt) e para receber as imagens para o avatar foi utilizado o [Multer](https://www.npmjs.com/package/multer). Foi criado sobre arquitetura de N-layer.

-   No Frontend foi utilizado **Nextjs** com Typescript, para validação dos e criação dos _schemas_ de formulários, foi utilizado [Zod](https://zod.dev/) e no gerenciamento de estados dos formulários [React Hook Forms](https://react-hook-form.com/), para integração da WebAPI foi utilizado o [Axios](https://axios-http.com/ptbr/docs/intro), para a busca do token em _client component_ foi utilizada a biblioteca [js-cookie](https://www.npmjs.com/package/js-cookie) e também foi utilizado uma barra de progresso para interação de carregamento/redirecionamento de páginas que é o [next-nprogress-bar](https://next-nprogress-bar.vercel.app/). Para estilização foi utilizado CSS modules.

-   Para persistência dos dados foi utilizado o postegreSQL, pelo único motivo de familiaridade.

## 💻 Executando o projeto:

⚠️ **Necessário ter instalado PostegreSQL**

1. Clone esse repositório:

```bash
https://github.com/RobertoBaiochi/project_to_do-expressjs-prisma-nextjs-typescript.git
```

#### Backend:

2. Dentro das pasta **backend** faça os passos:

    2a. Instalação dos pacotes:

    ```bash
    npm install
    ```

    2b. Crie um arquivo _.env_ com as variáveis:

    ```.env
    SERVER_PORT=3333

    #É o número da porta que vai rodar o servidor, por exemplo 3333.

    DATABASE_URL=postgresql://SEU_USER:SUA_SENHA@localhost:5432/SEU_NOMEDOBANCODEDADOS?schema=public

    #Substitua os textos: SEU_USER, SUA_SENHA e SEU_NOMEDOBANCODEDADO

    JWT_SECRET=OsCaracteresQueVocêDesejar

    #É uma chave secreta utilizada para assinar e verificar a autenticidade dos tokens JWT.

    ```

3. Feito os passos a cima, agora é possível rodar o servidor:

```bash
npm run start:watch
```

#### Frontend:

4. Dentro da pasta **frontend** faça:

    4a. Instalação de pacotes:

    ```bash
    npm install
    ```

    4b. Rodar o projeto:

    ```bash
    npm run dev
    ```

5. Com o servidor **Backend** rodando e o projeto **Frontend** também rodando, agora basta acessar a url: http://localhost:3000/ e você poderá interagir com todo o projeto.

## ⚡ Scripts:

#### Backend:

-   **dist**: Este script utiliza o tsup para compilar o código TypeScript localizado na pasta src, gerando os arquivos de saída prontos para produção.

```json
"dist": "tsup src"
```

```bash
npm run dist
```

-   **start:dev**: Este script executa o servidor em modo de desenvolvimento utilizando o tsx, carregando as variáveis de ambiente a partir do arquivo .env e executando o arquivo server.ts localizado na pasta src.

```json
"start:dev": "tsx --env-file=.env src/server.ts"
```

```bash
npm run start:dev
```

-   **start:watch**: Similar ao start:dev, este script executa o servidor em modo de desenvolvimento, mas com a funcionalidade adicional de "watch" (observação). Isso significa que o servidor será reiniciado automaticamente sempre que houver alterações nos arquivos. Ele também utiliza o tsx e carrega as variáveis de ambiente do arquivo .env.

```json
"start:watch": "tsx watch --env-file=.env src/server.ts"
```

```bash
npm run start:watch
```

-   **start:dist**: Este script primeiro executa o script dist para compilar o código TypeScript e, em seguida, executa o arquivo de saída gerado (index.js) localizado na pasta dist/src utilizando o Node.js.

```json
"start:dist": "npm run dist && node dist/src/index.js"
```

```bash
npm run start:dist
```

#### Frontend:

-   **next dev**: Executa a aplicação em modo de desenvolvimento, habilitando funcionalidades como recarregamento automático (hot-reloading) e exibição de erros detalhados no navegador. Isso facilita a iteração rápida durante o desenvolvimento.

```json
"dev": "next dev"
```

```bash
npm run dev
```

-   **next build**: Gera uma versão otimizada da aplicação, criando arquivos estáticos e otimizados para desempenho. Isso inclui a minificação de código, separação de código (code splitting) e outras otimizações específicas para produção.

```json
"build": "next build"
```

```bash
npm run build
```

-   **next start**: Executa a aplicação utilizando os arquivos gerados pelo comando build. É usado para servir a aplicação em um ambiente de produção.

```json
"start": "next start"
```

```bash
npm run start
```

-   **next lint**: Executa a ferramenta de linting (normalmente ESLint) para analisar o código e identificar problemas de estilo e erros de sintaxe. Isso ajuda a manter a consistência do código e a prevenir bugs.

```json
"lint": "next lint"
```

```bash
npm run lint
```

## 📸 Imagens

-   Landing Page
    ![Landing Page](/imgs/landing_page.png)

-   Página de Cadastro e Login:

![Cadastro](/imgs/cadastrar.png)
![Login](/imgs/login.png)

-   Dashboard Kanban:

![Dashboard vazio](/imgs/dashboard-login.png)
![Dashboard com Tarefas](/imgs/dashboard1.png)
![Drag and Drop](/imgs/drag_and_drop.png)
![Perfil de Usuário](/imgs//atualizar_perfil.png)
![Atualização da Tarefa](/imgs/atualizar_tarefa.png)
![Descrição da Tarefa](/imgs/descricao_tarefa.png)
