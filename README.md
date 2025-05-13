# 🛠️ Guia de Execução da Aplicação

Este documento orienta a execução da aplicação, com todos os detalhes necessários para configurar o ambiente e rodar o projeto de maneira eficiente.

---

## ⚙️ **Tecnologias e Versões Utilizadas**

- **Angular CLI**: 19.2.11
- **Node.js**: 22.15.0
- **Package Manager**: npm 11.3.0
- **Sistema Operacional**: Linux x64 ou Windows 11
- **Java (OpenJDK)**: 21.0.7

---

## 📧 **Configuração de Envio de E-mails (Gmail)**

A aplicação utiliza o serviço de e-mail do **Gmail** para envio de notificações. Para configurar, siga as instruções abaixo:

1. **Criar uma senha de aplicativo do Gmail**:
   - Acesse [esta página](https://myaccount.google.com/apppasswords) para gerar uma senha de aplicativo para o envio de e-mails.
   - **Importante**: Certifique-se de que a verificação em duas etapas esteja ativada em sua conta Google antes de gerar a senha do aplicativo.

2. **Configuração do remetente e destinatário**:
   - O **remetente** e o **destinatário** devem ser o **mesmo e-mail** para testes, ou seja, você estará enviando um e-mail para si mesmo.

---

## 🔧 **Execução da Aplicação**
** adicione o seu email e sua senha gerada no gmail para inserir na variável de ambiente
```
  SEU_EMAIL=seu-email@gmail.com SENHA_EMAIL=sua-senha-do-app docker-compose up --build -d

```  


### 1. **Configuração com Docker (Recomendado)**

A maneira mais fácil de rodar a aplicação é através do Docker. O Docker Compose irá configurar todos os serviços necessários (backend, frontend e banco de dados) automaticamente.

#### 1.1 **Instalação do Docker**

##### **Windows:**

Se você estiver utilizando o **Windows**, será necessário instalar o **Docker Desktop**. Faça o download e instale a versão mais recente do Docker Desktop a partir do [site oficial](https://www.docker.com/products/docker-desktop).

1. Após a instalação, execute o Docker Desktop antes de rodar a aplicação. Isso garantirá que os containers possam ser criados e executados corretamente.

##### **Linux:**

Se você estiver utilizando **Linux**, certifique-se de ter o Docker e o Docker Compose instalados. Caso não tenha, siga os passos abaixo para instalação:

- **Instalar Docker**:
  ```bash
  sudo apt-get update
  sudo apt-get install docker.io

## 📧 **Credenciais de usuários teste**

A aplicação já possui alguns dados pré-cadastrados para melhor funcionamento dos componentes e experiência do usuário.

** Fique a vontade para criar sua própria credencial na página de login.

### Usuários de Empresas:

- empresaa@gmail.com – Senha: empresa123

- empresab@gmail.com – Senha: empresa123

- empresac@gmail.com – Senha: empresa123

### Usuários Comuns:
- fulano@gmail.com – Senha: usuario123

- sicrano@gmail.com – Senha: usuario123



- beltrano@gmail.com – Senha: usuario123
