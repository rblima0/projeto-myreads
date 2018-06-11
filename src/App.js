import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BookSearch from './components/BookSearch';
import BookList from './components/BookList';
import BookDescription from './components/BookDescription';
import './styles/css/App.css';

// Pagina principal responsavel por chamar os componentes e controlar as rotas
class BooksApp extends Component {
	
	state = {
		books: []
	}

	// Responsavel por buscar os dados na API
	componentDidMount() { 
		BooksAPI.getAll()
			.then((books) => {
				this.setState({ books });
			})
	}

	// Responsavel por atualizar a instancia do livro
	alterBook = (book) => {
		const books = this.state.books
		const index = books.findIndex((index) => index.id === book.id);
		

		if (index !== -1) {
			book.shelf === 'none' ? books.splice(index, 1) : books[index] = book;
		} else {
			books.push(book);
		}
		this.setState({ books });
	}

	// Responsavel por alterar o livro de prateleira com a requisição na API
	updateBookCase = (book, shelf) => {
		BooksAPI.update(book, shelf)
			.then(() => {
				book.shelf = shelf;
				this.alterBook(book);
			})
	}

	// Responsavel por selecionar a prateleira atual do livro
	selectBookCase = (id) => {
		let selectBook = this.state.books.find((book) => book.id === id);
		return selectBook ? selectBook : 'none';
	}

	render() {
		return (
			<div className="app">
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					
					<Route exact path="/" render={() => (
						<BookList
							books={this.state.books}
							changeTrigger={this.updateBookCase}
						/>
					)} />

					<Route path="/search/" render={() => (
						<BookSearch 
							selectBookCase={this.selectBookCase}
							changeTrigger={this.updateBookCase}
			  			/>
					)} />

					<Route path="/description/:id" render={(props) => (
						<BookDescription
							id={props.match.params.id}
							changeTrigger={this.updateBookCase}
							selectBookCase={this.selectBookCase}
						/>
					)} />
					
				</div>
			</div>
		)
	}
}

export default BooksApp
