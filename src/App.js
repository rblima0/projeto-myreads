import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import BookSearch from './components/BookSearch';
import BookList from './components/BookList';
import BookDescription from './components/BookDescription';
import './styles/css/App.css';

class BooksApp extends Component {
	
	state = {
		books: []
	}

	alterBook = (book) => {
		const books = this.state.books;
		const index = books.findIndex((index) => index.id === book.id);

		if (index !== -1) {
			book.shelf === 'none' ? books.splice(index, 1) : books[index] = book;
		} else {
			books.push(book);
		}
		this.setState({ books });
	}

	updateBookCase = (book, shelf) => {
		BooksAPI.update(book, shelf)
			.then(() => {
				book.shelf = shelf;
				this.alterBook(book);
			})
	}

	selectBookCase = (id) => {
		let selectBook = this.state.books.find((book) => book.id === id);
		return selectBook ? selectBook : 'none';
	}

	componentDidMount() { 
		BooksAPI.getAll()
			.then((books) => {
				this.setState({ books });
			})
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
						/>
					)} />
					
				</div>
			</div>
		)
	}
}

export default BooksApp
