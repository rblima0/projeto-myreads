import React from 'react'
import BookCaseOptions from './BookCaseOptions'

// 1.COMPONENTE PRINCIPAL RESPONSAVEL POR INICIAR OS COMPONENTES EM CADEIA
function BookList (props) {

	const BookCaseOption = [
		{ id: 'currentlyReading', name: 'Lendo Atualmente' },
		{ id: 'wantToRead', name: 'Quero Ler' },
		{ id: 'read', name: 'Lido' }
	];

	let bookCaseSelect = (shelf) => {
		return props.books.filter((book) => book.shelf === shelf)
	};
	
	return(
		<div>
			<div className="list-books-content">
				{BookCaseOption.map((shelf) => (
					<BookCaseOptions 
						key={shelf.id} 
						name={shelf.name} 
						changeTrigger={props.changeTrigger}
						books={bookCaseSelect(shelf.id)}
						{...console.log(shelf)}
					/>
				))}
			</div>

			<div className="open-search">
				<a onClick={() => this.setState({ showSearchPage: true })}>Adicionar um Livro</a>
			</div>
		</div>
	)
}

export default BookList