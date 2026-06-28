# Aplicação de Finanças 
## Objetivo
Criar uma aplicação web de finanças pessoais, onde o usuário irá criar e visualizar transações financeiras, para isso irei dividir a estrutura dessa aplicação em 2 partes: Back-end e Front-end. Onde:
### Back-end
O back-end será composto pelo banco de dados + API, onde essa api será responsavel por escrever os dados no banco e fazer a autênticação de usuário.
### Front-end
O front-end será a interface gráfica que o usuario terá acesso, onde ele irá de fato acessar a aplicação e inserir suas movimentações financeiras

Para atingir os meus objetivos terei que fazer:
- Back-end
    - Banco de dados
        - Diagrama do banco
        - Schema
    - Rotas da API
        - Rota que cria movimentação
        - CRUD basico


# Iniciando o Projeto

- O Node.js precisa está instalado
- Crie a pasta do projeto
- Rodei o comando `npm init`, após informar os dados, foi criado um arquivo com os dados da aplicação, o `./package.json`
- Criei uma pasta `./src` com o arquivo `server.js` la vou usar pra executar meu servidor, no arquivo `./package.json` em scripts vou deixar:
    - ```
        "scripts":{
            "dev":"npm --watch src/server.ts"
        }
      ```
    - Agora basta rodar `npm run dev` e ele ficará assistindo as mudanças no arquivo `src/server.js`