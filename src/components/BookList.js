import React from 'react';
import { Link } from 'react-router-dom';
import BookCaseOptions from './BookCaseOptions';

// 1.COMPONENTE PRINCIPAL RESPONSAVEL POR INICIAR OS COMPONENTES EM CADEIA
function BookList (props) {

	const BookCaseOption = [
		{ id: 'currentlyReading', name: 'Currently Reading' },
		{ id: 'wantToRead', name: 'Want to Read' },
		{ id: 'read', name: 'Read' }
	]

	// Responsavel por selecionar os livros da prateleira
	let bookCaseSelect = (shelf) => {
		return props.books.filter((book) => book.shelf === shelf);
	}
	
	return(
		<div>
			<div className="list-books-content">
				{BookCaseOption.map((shelf) => (
					<BookCaseOptions 
						key={shelf.id} 
						name={shelf.name} 
						changeTrigger={props.changeTrigger}
						books={bookCaseSelect(shelf.id)}
					/>
				))}
			</div>

			<div className="open-search">
				<Link to="/search">Add Book</Link>
			</div>
		</div>
	)
}

export default BookList