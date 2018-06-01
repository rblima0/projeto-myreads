import React, { Component } from 'react'

// 4.COMPONENTE RESPONSAVEL PELAS OPÇÕES DE MOVER OS LIVROS DE ESTANTE
class BookSelect extends Component {
    render(){
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
export default BookSelect