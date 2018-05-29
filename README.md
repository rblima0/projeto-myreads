# Projeto MyReads

Este é o modelo inicial para o projeto de avaliação final do curso Fundamentos de Reação da Udacity. O objetivo desse modelo é economizar tempo fornecendo um exemplo estático da marcação CSS e HTML que pode ser usada, mas sem o código React necessário para concluir o projeto. Se você optar por começar com este modelo, seu trabalho será adicionar interatividade ao aplicativo refatorando o código estático neste modelo.

Claro, você é livre para iniciar este projeto do zero, se desejar! Só não se esqueça de usar [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## TL;DR

Para começar a desenvolver imediatamente:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Lembre-se de que a boa prática de design do React é criar novos arquivos JS para cada componente e usar instruções de importação / solicitação para incluí-los onde forem necessários.

## Backend Server

Para simplificar seu processo de desenvolvimento, fornecemos um servidor de backend para você desenvolver. O arquivo fornecido [`BooksAPI.js`](src/BooksAPI.js) contém os métodos necessários para executar as operações necessárias no backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Retorna um Promise que resolve para um objeto JSON contendo uma coleção de objetos de livro.
* Esta coleção representa os livros atualmente nas estantes do seu aplicativo.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` contendo no mínimo um `id` atributo
* shelf: `<String>` contém um dos ["wantToRead", "currentlyReading", "read"]  
* Retorna um Promise que resolve um objeto JSON contendo os dados de resposta da solicitação POST

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Retorna um Promise que resolve para um objeto JSON que contém uma coleção de no máximo 20 objetos de livro.
* Esses livros não sabem em que prateleira estão. Eles são apenas resultados crus. Você precisará garantir que os livros tenham o estado correto na página de pesquisa.

## Importante

A API de back-end usa um conjunto fixo de resultados de pesquisa em cache e é limitada a um conjunto específico de termos de pesquisa, que podem ser encontrados em [SEARCH_TERMS.md](SEARCH_TERMS.md). Essa lista de termos são os únicos termos que funcionarão com o back-end, por isso não se surpreenda se suas pesquisas por Basket Weaving ou Bubble Wrap não retornarem nenhum resultado.

## Create React App

Este projeto foi bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Você pode encontrar mais informações sobre como executar tarefas comuns [aqui](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

Este repositório é o código inicial para estudantes _all_ Udacity. Portanto, provavelmente não aceitaremos solicitações de recebimento.

Para detalhes, confira [CONTRIBUTING.md](CONTRIBUTING.md).
