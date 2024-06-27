## Executando o projeto:

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

#### Backend Scripts:

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
