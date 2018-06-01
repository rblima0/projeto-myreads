import React, { Component } from 'react'
import BookSelect from './BookSelect'

// 3.COMPONENTE RESPONSAVEL PELO LIVRO E SUAS INFORMAÇÕES
function Book(props) {

    const { book } = props.book;
    
    return(
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                    </div>
                    
                    <BookSelect book={book} />

                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}

export default Book