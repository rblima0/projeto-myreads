import React, { Component } from 'react'
import BookCaseOptions from './BookCaseOptions'

// 1.COMPONENTE PRINCIPAL RESPONSAVEL POR INICIAR OS COMPONENTES EM CADEIA
class BookList extends Component {
	render(){
		return(
			<div>
				<div className="list-books-content">
					<div>
						<BookCaseOptions/>
					</div>
				</div>

				<div className="open-search">
					<a onClick={() => this.setState({ showSearchPage: true })}>Adicionar um Livro</a>
				</div>
			</div>
		)
	}
}

export default BookList