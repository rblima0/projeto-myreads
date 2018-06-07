import React from 'react';
import Book from './Book';

// 2.COMPONENTE RESPONSAVEL PELAS ESTANTES DE LIVROS
function BookCaseOptions(props) {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.name}</h2>
            <div className="bookshelf-books">

                <ol className="books-grid">
                    {props.books.map((book) => ( 
                        <Book 
                            key={book.id} 
                            book={book}
                            changeTrigger={props.changeTrigger}
                            searchPage={false}
                            /* {...console.log(book)} */
                        />
                    ))}
                </ol>

            </div>
        </div>
    )
}

export default BookCaseOptions