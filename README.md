# Estoque Atakado

## 📋 Sumário
Este projeto tem como objetivo controlar o estoque de produtos de uma distribuidora, com funcionalidades completas de CRUD tanto no front-end quanto no back-end.

> 🔗 O foco deste README é o **Front-end**. Para acessar o Back-end, clique [aqui](https://github.com/Bielziinhu/Estoquista).

---

## 🖥️ Funcionalidades

### Tela Inicial
![Home](/src/images/readme/home.png)

### Tela de Cadastro de Produto
![Cadastro](/src/images/readme/home_cadastro.png)

#### Criar Produto
![Cadastrar](/src/images/readme/Cadastrar.png)
- Informar descrição e quantidade.
- Botões para salvar ou cancelar.

#### Editar Produto
![Editar](/src/images/readme/edição.png)
- Carrega dados do produto para edição.
- Botões para salvar alterações ou cancelar.

#### Excluir Produto
![Excluir](/src/images/readme/Excluir.png)

#### Busca de Produtos Salvos
- Ao carregar a página, os produtos são exibidos automaticamente.

---

## 🛠️ Tecnologias Utilizadas

### Front-end
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)  
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  
- [React](https://pt-br.legacy.reactjs.org/docs/getting-started.html)

### Back-end (não abordado neste README)
- [Java](https://docs.oracle.com/en/java/)  
- [Spring Boot](https://docs.spring.io/spring-boot/documentation.html)  
- [MySQL](https://dev.mysql.com/doc/)  
- Postman

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (v22.11.0)
- npm (v10.9.0)
- Git

### Passos

- Primeiramente instale o git no site: https://git-scm.com/downloads
- Tutorial para a instalação:  no [window](https://dicasdeprogramacao.com.br/como-instalar-o-git-no-windows/)<br>
[Linux](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
```bash
# Clonar o repositório
git clone https://github.com/Bielziinhu/Estoquista-Front-End.git

# Acessar o diretório
cd front-end

# Instalar as dependências
npm install

# Iniciar o projeto
npm start
```

## Estrutura do Projeto:
```bash
├── public/ <br>
├── src/
│   ├── assets/
│   ├── components/
│   ├── images/
│   ├── pages/
│   ├── Style/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── global.css
│   ├── index.css
│   └── index.js
├── package.json
├── .gitignore
└── README.md
