import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import BookSearch from './components/BookSearch'
import BookList from './components/BookList'
import './styles/css/App.css'

class BooksApp extends Component {
	state = {
		books: [],
		showSearchPage: false
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
					<Route exact path="/" render={() => (
						<BookList
						books={this.state.books} />
					)} />
				</div>
			</div>
		)
	}
}

export default BooksApp
