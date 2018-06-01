import React, { Component } from 'react'
import Book from './Book'

// 2.COMPONENTE RESPONSAVEL PELAS ESTANTES DE LIVROS
class BookCaseOptions extends Component {
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">

                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <li key={book.id}>
                                <Book />
                            </li>
                        ))}
                    </ol>

                </div>
          </div>
        )
    }
}

export default BookCaseOptions