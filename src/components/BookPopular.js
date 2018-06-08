import React from 'react';
import BookSelect from './BookSelect';

// Responsavel pela estrutura de livros populares na pagina de descrição
function BookPopular(props) {

    const book = props.book;

    return(
        <li key={book.id} >
            <div className="book">
                <div className="book-top">

                <a href={book.infoLink} rel="external">
                    <div className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (``) }}>
                    </div>
                </a>

                <BookSelect 
                    book={book}
                    changeTrigger={props.changeTrigger}
                    searchPage={props.searchPage}
                />

                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}
export default BookPopular