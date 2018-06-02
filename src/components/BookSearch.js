import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

// 0.COMPONENTE RESPONSAVEL PELA BUSCA DE LIVROS
class BookSearch extends Component {

    state = {
        query: '',
        searchBooks: []
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        
        BooksAPI.search(query)
            .then((searchBooks) => {
                if (!searchBooks || searchBooks.error){
                    this.setState({searchBooks : []})
                    return searchBooks
                } else {
                    // console.log(searchBooks)
                    searchBooks.map((book) => {
                        book.shelf = this.props.selectBookCase(book.id)
                        return book
                    })
                    this.setState({ searchBooks })
                }
            })
    }

    clearQuery = () => {
        this.setState({ query: ''})
    }



    render(){

        const { query, searchBooks } = this.state
        const { changeTrigger } = this.props

        return(
            <div className="search-books">
                <div className="search-books-bar">

                    <Link className="close-search" to="/">Fechar</Link>

                    <div className="search-books-input-wrapper">
                        <input type="text" name="query" placeholder="Procurar por título ou autor..." value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>

                <div className="search-books-results">
                    {/*{searchBooks.length !== 0 (
                        <div>
                            <span>Mostrando {searchBooks.length} livros </span>
                            <button onClick={this.clearQuery}>Mostrar todos</button>
                        </div>
                    )} */}
                    <ol className="books-grid">
                        {searchBooks.map((book) => (
                            <Book
                                key={book.id} 
                                book={book}
                                changeTrigger={changeTrigger}
                                /* {...console.log(book)} */
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default BookSearch