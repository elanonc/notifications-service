<h1 align="center">
  Ignite Lab Node.js | Notifier
</h1>

<p align="center">
  <a href="#-projeto">🖥️ Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">🚀 Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">📝 License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://respected-patch-b99.notion.site/Ignite-Lab-Node-js-9438dba525b047e6bf17c4e4bf3ce298">📚 Anotações Notion</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://www.notion.so/Ignite-Lab-Node-js-9438dba525b047e6bf17c4e4bf3ce298">📚 Anotações Notion 🔒</a>
</p>


## 💻 Projeto

Serviço de Notificação desenvolvido durante o Ignite Lab da Rocketseat em 2022. 

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

<p align="center">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white">
    <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white">
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
</p>

## Como executar



```bash
## 1. Clone o projeto
git clone git@github.com:omarcolombari/notifications-service.git

## 2. Entre no diretório do projeto
cd notifications-service

## 3. Instale as dependências
npm install

## 4. Inicie o servidor
npm run start:dev

## 5. Execute as migrations
npx prisma migrate dev
```

## Como executar os testes



```bash
## 1. Execute o seguinte comando
  npm run test
```

## Documentação da API

#### Envia uma notificação

```http
  POST /notifications/
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `recipientId` | `string` | **Obrigatório**. O ID do recebedor da notificação. |
| `content` | `string` | **Obrigatório**. O conteúdo da notificação. |
| `category` | `string` | **Obrigatório**. A categoria da notificação. |

#### Marca notificação como lida

```http
  PATCH /notifications/id:/unread
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id` | `string` | **Obrigatório**. O ID da notificação. |

#### Marca uma notificação como não lida

```http
  PATCH /notifications/id:/read
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id` | `string` | **Obrigatório**. O ID da notificação. |

#### Cancela uma notificação enviada

```http
  PATCH /notifications/id:/cancel
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id` | `string` | **Obrigatório**. O ID da notificação. |


#### Retorna as notificações enviadas para um recebedor

```http
  GET /notifications/from/:recipientId
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `recipientId` | `string` | **Obrigatório**. O ID do recebedor da notificação. |

#### Retorna a quantidade de notificações de um único recebedor

```http
  GET /notifications/count/from/:recipientId
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `recipientId` | `string` | **Obrigatório**. O ID do recebedor da notificação. |


## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
