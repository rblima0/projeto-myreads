import React, { Component } from 'react'
import BookCaseOptions from './BookCaseOptions'

// 1.COMPONENTE PRINCIPAL RESPONSAVEL POR INICIAR OS COMPONENTES EM CADEIA
function BookList (props) {

	const BookCaseOption = [
		{ id: 'currentlyReading', name: 'Currently Reading' },
		{ id: 'wantToRead', name: 'Want to Read' },
		{ id: 'read', name: 'Read' }
	];

	let bookCaseSelect = (bookCase) => {
		return props.books.filter((book) => book.bookCase === bookCase)
	};
	
	return(
		<div>
			<div className="list-books-content">
				{BookCaseOption.map((bookCase) => (
					<BookCaseOptions key={bookCase.id} name={bookCase.name} books={bookCaseSelect(bookCase.id)} />
				))}
			</div>

			<div className="open-search">
				<a onClick={() => this.setState({ showSearchPage: true })}>Adicionar um Livro</a>
			</div>
		</div>
	)
}

export default BookList