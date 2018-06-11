import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BookSearch from './components/BookSearch';
import BookList from './components/BookList';
import Loading from './components/Loading';
import BookDescription from './components/BookDescription';
import './styles/css/App.css';

// Pagina principal responsavel por chamar os componentes e controlar as rotas
class BooksApp extends Component {
	
	state = {
		books: [],
		loading: false
	}

	// Responsavel por buscar os dados na API
	componentDidMount() {
		this.setState({ loading: true });
		BooksAPI.getAll()
			.then((books) => {
				this.setState({ books, loading: false });
			})
	}

	// Responsavel por mudar o estado para mostrar o GIF de loading
	loading = (status) => {
		this.setState({ loading: status });
	};

	// Responsavel por atualizar a instancia do livro
	alterBook = (book) => {
		const index = index => index.id !== book.id;
		const books = this.state.books.filter(index).concat(book)
		this.setState({ books });
	}

	// Responsavel por alterar o livro de prateleira com a requisição na API
	updateBookCase = (book, shelf) => {
		this.loading(true);
		BooksAPI.update(book, shelf)
			.then(() => {
				book.shelf = shelf;
				this.alterBook(book);
				this.loading(false);
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

					<Route path="/search/" render={() => (
						<BookSearch 
							selectBookCase={this.selectBookCase}
							changeTrigger={this.updateBookCase}
							loading={this.loading}
						/>
					)} />

					{this.state.loading && (<Loading />)}

					<Route exact path="/" render={() => (
						<BookList
							books={this.state.books}
							changeTrigger={this.updateBookCase}
						/>
					)} />

					<Route path="/description/:id" render={(props) => (
						<BookDescription
							id={props.match.params.id}
							changeTrigger={this.updateBookCase}
							selectBookCase={this.selectBookCase}
							loading={this.loading}
						/>
					)} />
				</div>
			</div>
		)
	}
}

export default BooksApp
