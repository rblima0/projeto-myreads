# Visão Geral do Projeto

Projeto MyReads, aplicação de estante de livros que permite selecionar e classificar os livros que você já leu, está lendo ou quer ler, projeto desenvolvido com o uso do React e um servidor de API e biblioteca cliente.

## Como funciona ?

Nesta aplicação, a página principal exibe uma lista de "estantes" (ou seja, categorias), cada uma das quais contém uma série de livros.

As três estantes são:
Currently Reading (lendo atualmente)
Want to Read (quer ler)
Read (já leu)

Cada livro possui imagem, titulo e autor, é possível alterar o livro de estante com o botão localizado em cima das imagens ou clicar no livro e ver todas as suas informações.

## Pagina de Pesquisa

A pagina de pesquisa busca na API pelo termo inserido no input e retorna uma grid com os livros disponíveis onde é possível adicionar o livro a uma estante ou clicar no livro e ver todas as suas informações.

## Pagina de Descriçao

Traz todas as informações disponíveis sobre o livro assim como link para uma previa do livro, temos uma seção que traz alguns livros aleatórios no final da pagina de descrição.

## Como rodar esse projeto ?

Para rodar o projeto faça o download em sua maquina e use o NPM ou YARN.

* Navegue pelo seu Terminal até a pasta do projeto
* Instale todas as dependências do projeto com o comando `npm install`
* Para iniciar o servidor de desenvolvimento use o comando `npm start`

## Creditos

* Template Inicial [Clique Aqui](https://github.com/udacity/reactnd-project-myreads-starter)
* Create React App [Clique Aqui](https://github.com/facebook/create-react-app)
* Documentação do React [Clique Aqui](https://reactjs.org/docs/hello-world.html)

Fique a vontade para baixar e alterar o projeto como desejar