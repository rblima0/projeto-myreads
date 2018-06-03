import React from 'react'
import BookSelect from './BookSelect'

// 3.COMPONENTE RESPONSAVEL PELO LIVRO E SUAS INFORMAÇÕES
function Book(props) {

    const book = props.book
    
    return(
        <li key={book.id} >
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (``) }}>
                    </div>
                    
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

export default Book