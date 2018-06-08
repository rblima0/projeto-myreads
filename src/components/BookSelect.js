import React from 'react'

// 4.COMPONENTE RESPONSAVEL PELAS OPÇÕES DE MOVER OS LIVROS DE ESTANTE
function BookSelect(props){

    const book = props.book;
    
    // Responsavel por mudar o livro de prateleira
    let handleChange = (event) => {
        const shelf = event.target.value;
        props.changeTrigger(book, shelf);
    }

    return (
        <div className="book-shelf-changer">
            <select value={props.searchPage === true ? book.shelf.shelf || "none" : book.shelf || "none" } onChange={handleChange}>
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want To Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
export default BookSelect