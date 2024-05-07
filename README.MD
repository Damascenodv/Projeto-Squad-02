### Configuração do Projeto Spring com JasperSoft Studio

Este documento fornece instruções detalhadas sobre como configurar um projeto Spring que utiliza o JasperSoft Studio 6.20.5, Java 12 ou superior, Postman para testar as requisições e PostgreSQL como banco de dados.

#### Requisitos

Certifique-se de ter instalado:

- JDK 12 ou superior
- PostgreSQL
- Postman
- JasperSoft Studio 6.20.5

#### Configuração do PostgreSQL

1. **Instalação do PostgreSQL:**
   - Faça o download e instale o PostgreSQL em [postgresql.org](https://www.postgresql.org/download/).
   - Siga as instruções de instalação para o seu sistema operacional.

2. **Configuração do Banco de Dados:**
   - Crie um novo banco de dados chamado `meu_banco_de_dados`.

3. **Configuração das Informações de Conexão:**
   - Abra o arquivo `application.properties`, localizado em `API-ProjetoSquad2\Api_Projeto_Squad-02\src\main\resources`.
   - Preencha as informações de conexão com o PostgreSQL:

   ```properties
   spring.profiles.active=prod
   server.port=8082
   notificador.email.porta-servidor=28

   spring.datasource.url=jdbc:postgresql://localhost:5432/meu_banco_de_dados?createDatabaseIfNotExist=true&serverTimezone=UTC
   spring.datasource.username=seu_usuario
   spring.datasource.password=sua_senha
   spring.datasource.driver-class-name=org.postgresql.Driver

   spring.jpa.generate-ddl=true
   spring.jpa.hibernate.ddl-auto=none
   spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
   ```



 ## Configuração do JasperSoft Studio

1. **Instalação do JasperSoft Studio:**
   - Faça o download e instale o JasperSoft 6.20.5 Studio em [www.filehorse.com](https://www.filehorse.com/download-jaspersoft-studio/80534/download/).
   - É importante que esta seja a versão para evitar problemas de compilação encontrados na versão mais recente  
   - Siga as instruções de instalação para o seu sistema operacional.

2. **Configuração do Projeto:**
   - Abra o JasperSoft Studio.
   - Crie um novo projeto ou abra um existente.
   - Configure a conexão com o banco de dados PostgreSQL usando as mesmas informações de conexão fornecidas anteriormente.



