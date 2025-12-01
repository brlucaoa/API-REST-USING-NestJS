# CRUD com UPDATE por RABBIT

API completa construída com **NestJS**, **Prisma**, **PostgreSQL**,
**RabbitMQ** e **Docker**, implementando um CRUD de **Operadores** e
**Missões**, com suporte a atualização de dados através de outro
microsserviço que envia mensagens pelo **RabbitMQ** (CloudAMQP).

## Visão Geral

Este projeto possui **duas APIs**:

### 1. API CRUD / SUBSCRIBER (porta 3000)

-   Cria, lista, atualiza e remove Operadores e Missões\
-   Conecta ao PostgreSQL via Prisma\
-   Recebe mensagens do RabbitMQ para atualizar dados automaticamente\
-   Documentação Swagger disponível

### 2. API Update / Publisher (porta 3002)

-   Envia mensagens com dados atualizados\
-   Comunica-se com a API CRUD usando RabbitMQ (CloudAMQP)

##  Arquitetura

    +------------------+         +------------------+
    |     CRUD API     | <----> |   PostgreSQL DB  |
    |     (3000)       |        |     (5432)       |
    +------------------+         +------------------+
             ↑                             ^
             | recebe mensagens             |
             |                              |
    +------------------+                    |
    | Update API       |                    |
    | Publisher (3002) | -------------------+
    | via RabbitMQ     |
    +------------------+

##  Tecnologias Utilizadas

-   NestJS
-   Prisma ORM
-   PostgreSQL
-   RabbitMQ (CloudAMQP)
-   Swagger
-   Docker

## Como Rodar com Docker

### 1 Criar arquivos `.env`

### **crud/.env**

    NODE_ENV=production
    PORT=3000
    DATABASE_URL="postgresql://admin:admin@db:5432/crud?schema=public"
    RABBITMQ_URL=amqps://SEU_URL_CLOUDAMQP

### **campo-update/.env**

    NODE_ENV=production
    PORT=3002
    RABBITMQ_URL=amqps://SEU_URL_CLOUDAMQP

## 2 docker-compose.yml

    services:
      crud:
        build: ./crud
        container_name: crud
        env_file: ./crud/.env
        ports:
          - "3000:3000"
        depends_on:
          - db
        networks:
          - app-network

      campo-update:
        build: ./campo-update
        container_name: campo-updater
        env_file: ./campo-update/.env
        ports:
          - "3002:3002"
        networks:
          - app-network

      db:
        image: postgres:15-alpine
        container_name: postgres
        restart: always
        environment:
          POSTGRES_USER: admin
          POSTGRES_PASSWORD: admin
          POSTGRES_DB: crud
        ports:
          - "5432:5432"
        networks:
          - app-network
        volumes:
          - postgres_data:/var/lib/postgresql/data

    networks:
      app-network:

    volumes:
      postgres_data:

## Subir Ambiente (1 command runs all)

    docker compose up -d --build

## Documentação Swagger

-   CRUD API → http://localhost:3000/api\
-   Update API → http://localhost:3002/api

## Fluxo do RabbitMQ

1.  A API Update envia uma mensagem → RabbitMQ\
2.  A API CRUD escuta essa fila\
3.  Ao receber a mensagem, atualiza o banco usando Prisma

##  Scripts úteis

    npm run start:dev
    npm run build
    npm run start:prod

##  Estrutura básica do projeto

    crud/
      ├─ src/
      ├─ prisma/
      ├─ Dockerfile
      └─ .env

    campo-update/
      ├─ src/
      ├─ Dockerfile
      └─ .env

    docker-compose.yml
    README.md
