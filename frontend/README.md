## Executando o projeto:

4. Dentro da pasta **frontend** faça:

    4a. Instalação de pacotes:

    ```bash
    npm install
    ```

    4b. Rodar o projeto:

    ```bash
    npm run dev
    ```

#### Frontend scripts:

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
