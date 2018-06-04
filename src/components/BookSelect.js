import React from 'react'

// 4.COMPONENTE RESPONSAVEL PELAS OPÇÕES DE MOVER OS LIVROS DE ESTANTE
function BookSelect(props){

    const book = props.book
    
    let handleChange = (event) => {
        alert("Alteração acontecendo !")
        const shelf = event.target.value
        props.changeTrigger(book, shelf)
    }

    return (
        <div className="book-shelf-changer">
            <select value={props.searchPage === true ? book.shelf.shelf || "none" : book.shelf || "none" } onChange={handleChange}>
                {console.log(props.searchPage)}
                <option disabled>Mover para...</option>
                <option value="currentlyReading">Lendo Atualmente</option>
                <option value="wantToRead">Quero Ler</option>
                <option value="read">Lido</option>
                <option value="none">Nenhum</option>
            </select>
        </div>
    )
}
export default BookSelect