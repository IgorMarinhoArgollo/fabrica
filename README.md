# Recipe App Project

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/igormarinhoargollo/fabrica?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/igormarinhoargollo/fabrica">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/igormarinhoargollo/fabrica">
      
  Esse foi um projeto desenvolvido como desafio da Fábrica e tem como finalidade a construção de uma API para um restaurante. Como Stacks básicas têm-se: Typescript, NodeJS, Express, MongoDB(Mongoose). O desafio chegou dia 04/04 com data de entrega para o dia 10/04, contudo, em função de estar participando de um congresso, só pude iniciar o desenvolvimento no dia 06/04 (turno da tarde) e essa redução do tempo influenciou em algumas decisões de projeto, posteriormente explicitadas.<br>
   #### Além das stacks básicas, foram utilizadas outras ferramentas/arquitetura que valem ser apontadas:<br>
  * Arquitetura MSC (Model - Service - Controller);
  * DotEnv (para se trabalhar com variáveis de ambiente);
  * Rate-limit (para se proteger a API de ataques DDoS);
  * Helmet (para a supressão de informações de potencial vulnerabilidades nas respostas das requisições);
  * JsonWebToken - JWT (para trabalhar com tokens e validações de autorização);
  * BCrypt (para a encriptação de senhas no banco de dados);
  * Morgan (para a realização de logs no terminal, durante o desenvlvimento);
  * Conventional Commits (para organização de commits);
  * Swagger-UI (para a disponibilização da documentação de maneira prática e permitir testar a API sem a necessidade de programas externos).

  #### Decisões de projeto: <br>
  Considerando que desenvolvi mais projetos com funções, desenvolver esse projeto também em funções me ofereceria um pequeno ganho de tempo e, considerando o tempo reduzido, essa foi a primeira opção de projeto. Ainda em função do tempo reduzido os testes unitários e de integração da API não foram desenvolvidos. A rota PATCH, que normalmente é utilizada como atualização parcial de uma entrada do banco de dados, foi utilizada como PUT, que deveria ser para atualização completa da entrada, dessa forma, algumas validações seriam dispensadas. Por último, as rotas de criação e atualização de produtos, atualiza no banco, mas não está retornando o objeto criado, apenas o código e a mensagem de sucesso/falha.  

  #### Pontos para futura refatoração: <br>
  * implementação de testes;
  * conversão do projeto de funcional para classes e implementação de POO e SOLID;
  * conversão do PATCH para real atualização parcial da entrada;
  * retorno do objeto criado/atualizado, ao invés de apenas uma mensagem e código.

<br>
 OBS.: No arquivo '/src/model/connection.ts' existem alguns dados pré inseridos para que seja possível testar a aplicação manualmente.
 <br><br>
  
  
  ## Como usas
  ### Requisitos:
    Node
    Internet browser
    MongoDB
   <br>
   
  ### Configurações:
    git clone git@github.com:IgorMarinhoArgollo/fabrica.git
    npm install

   habilitar o seu MongoDB
  
  <br>

  ### Preparar .env
   Existe um arquivo '.env.example' que pode ser renomeado para '.env' e os valores podem ser alterados para atender ao projeto. 
  #### Variáveis de ambiente:
  * PORT (variável que devermina a porta em que a API rodará)
  * MONGO_URI (string de conexão do banco que contêm seu usuário e senha do banco)
  * JWT_SECRET (palavra chave para a geração dos JWT Token)
  
  <br>
  
  ### Rodar projeto
  Agora, após toda a instalação e configuração, para colocar a API rodando basta passar o seguinte comando no terminal:
  
    npm run dev
    
  <br>
  
  ## Testar no Swagger-UI
  Com a API rodando acesse em seu Browser o endereço: 'http://localhost:3001/api-docs' caso esteja utilizando outra porta, basta trocar o 3001 pela porta sendo utilizada.

  para testar as rotas autenticadas (todas exceto a rota de login) basta se acessar a rota de login passando no corpo da requisição:
    {
      "email": "admin@admin.com",
      "password": "admin"
    }

  Com isso sera retornado um token com o formato "Bearer token".
  Com o token em mãos, basta passar a parte do token (sem a palavra "Bearer ") para a autenticação do Swagger e a autenticação estará realizada.

<br>

  ## Rotas:
  * GET /api-docs
  ------------------------
  * POST /auth/login
  * GET /category
  * GET /product
  * GET /product/:id
  * DELETE /product/:id
  * PATCH /product/:id
  * POST /product
  
 <br><br>
  
##  Autores
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/igormarinhoargollo/"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/85767736?s=96&v=4" width="100px;" alt=""/><br /><sub><b>Igor Marinho</b></sub></a></td>
  </tr>
</table>

