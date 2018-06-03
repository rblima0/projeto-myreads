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
        this.setState({ query })
        query = query.trim()
        
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

    render(){

        const { query, searchBooks } = this.state

        return(
            <div className="search-books">
                <div className="search-books-bar">

                    <Link className="close-search" to="/">Fechar</Link>

                    <div className="search-books-input-wrapper">
                        <input type="text" name="query" placeholder="Faça sua pesquisa aqui..." value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>

                <div className="search-books-results">
                    {query && (searchBooks.length !== 0
                        ? (<span>Mostrando {searchBooks.length} livros de <em>"{query}"</em></span>)
                        : (<span>Nenhum resultado encontrado para <em>"{query}"</em></span>)
                    )}
                    <ol className="books-grid">
                        {searchBooks.map((book) => (
                            <Book
                                key={book.id} 
                                book={book}
                                changeTrigger={this.props.changeTrigger}
                                searchPage={true}
                                /* {...console.log(book.shelf)} */
                            />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default BookSearch