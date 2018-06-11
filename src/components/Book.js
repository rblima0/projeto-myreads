import React from 'react';
import { Link } from 'react-router-dom';
import BookSelect from './BookSelect';

// 3.COMPONENTE RESPONSAVEL PELO LIVRO E SUAS INFORMAÇÕES
function Book({ book, changeTrigger, searchPage }) {

    // Responsavel por diferenciar a pagina de pesquisa e principal e trazer icone do estado do livro
    let iconBook = () => {
        if(book.shelf === "currentlyReading" || book.shelf.shelf === "currentlyReading") {
            return <div className="book-currently-reading"></div>
        } else if(book.shelf === "wantToRead" || book.shelf.shelf === "wantToRead") {
            return <div className="book-want-to-read"></div>
        } else if(book.shelf === "read" || book.shelf.shelf === "read") {
            return <div className="book-read"></div>
        }
	}
    
    return(
        <li key={book.id} >
            <div className="book">
                <div className="book-top">

                <Link to={`/description/${book.id}`}>
                    <div className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (``) }}>
                    </div>
                </Link>
                
                {iconBook()}

                <BookSelect 
                    book={book}
                    changeTrigger={changeTrigger}
                    searchPage={searchPage}
                />
                
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}

export default Book