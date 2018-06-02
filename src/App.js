import React, { Component } from 'react'
//import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
//import BookSearch from './components/BookSearch'
import BookList from './components/BookList'
import './styles/css/App.css'

class BooksApp extends Component {
	state = {
		books: []
	}

	alterBook = (book) => {
		const books = this.state.books;
		const index = books.findIndex((index) => index.id === book.id)
		book.shelf === 'none' ? books.splice(index, 1) : books[index] = book
		this.setState({ books })
	};

	updateBookCase = (book, shelf) => {
		BooksAPI.update(book, shelf)
			.then(() => {
				book.shelf = shelf
				this.alterBook(book)
			})
	}

	componentDidMount() { 
		BooksAPI.getAll().then((books) => {
			this.setState({ books })
		})
	}

	render() {
		return (
			<div className="app">
			{/* <BookSearch /> */}
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
						<BookList
							books={this.state.books}
							changeTrigger={this.updateBookCase}
						/>
				</div>
			</div>
		)
	}
}

export default BooksApp
