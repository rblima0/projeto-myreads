import React, { Component } from "react"
import { Link } from 'react-router-dom'
import { terms } from '../utils/Terms';
import BookPopular from './BookPopular';
import * as BooksAPI from '../utils/BooksAPI'

class BookDescription extends Component {

    state = {
        book: null,
        unknown: false,
        searchBooks: []
    }
    
    // Responsavel por buscar informações do livro atual na API
    componentDidMount() {
        BooksAPI.get(this.props.id)
            .then((book) => {
                this.setState({ book });
            })
            .catch((error) => {
                this.setState({ unknown: true });
            })

    // Responsavel por buscar livros aleatorios para pagina de descricao
        const query = terms[Math.floor(terms.length * Math.random())]
        let currentBook = []

        BooksAPI.search(query)
            .then((searchBooks) => {
                searchBooks.map((book) => {
                    if (currentBook.length < 4) {
                        currentBook.push(book)
                      }
                      return currentBook
                })
                this.setState({ searchBooks: currentBook })
            })
    }

    // Função para presumir um tempo para finalizar o livro
    bookPageTime = () => {
        if(this.state.book.pageCount < 200) {
            return <p className="book-info-reading">Reading Time: 3 to 5 hours (approx.)</p>
        } else if(this.state.book.pageCount >= 200 && this.state.book.pageCount <= 300){
            return <p className="book-info-reading">Reading Time: 2 days (approx.)</p>
        } else if(this.state.book.pageCount === undefined) {
            return <p className="book-info-reading">Reading Time: Unknown</p>
        } else {
            return <p className="book-info-reading">Reading Time: 3 days or more (approx.)</p>
        }
    }

    // Função para preencher as estrelas da classificação de livros
    bookRating = () => {
        const rating = this.state.book.averageRating || 0;
        let stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(rating > i);
        }
        return stars;
    }

    render() {

        const { book, unknown, searchBooks} = this.state;
        
        if (!book) {
            if (!unknown) {
                return null
            }
            return (
                <center><p>We did not find the page, we had some problem</p></center>
            )
        }

        return(
            <div className="container">
                <Link className="close-search" to="/">Close</Link>
                <div className="book-image" 
                    style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (``) }}>
                </div>
                <div className="book-info">
                    <h2>{book.title}</h2>
                    <p className="book-info-subtitle">{book.subtitle || "Subtitle was not informed"}</p>
                    <p className="book-info-authors">{book.authors || "Author was not informed"}</p>
        
                    <div className="book-ratings">
                        {this.bookRating().map((stars, index) => (
                            <span key={index} className={`${stars ? 'book-ratings-star' : 'book-ratings-nonestar'}`}></span>
                        ))}
                    </div>
        
                    <p className="book-info-pages">Number of pages: {book.pageCount || "Not informed"}</p>
                    {this.bookPageTime()}
                    <p className="book-info-language">Language: {book.language}</p>
        
                    <div className="book-categorie">
                        <p>{book.categories || "Unknown"}</p>
                    </div>
        
                </div>
        
                <div className="book-description">
                    <p>{book.description || "No description found..."}</p>
                    
                    <div className="book-description-button">
                        <a href={book.previewLink} rel="external">SEE A PRIOR</a>
                    </div>
                </div>
                
                <div className="book-related">
                    <h2>Popular Books</h2>
                    <hr/>

                    <ol className="books-grid">
                        {searchBooks.map((book) => (
                            <BookPopular 
                                key={book.id} 
                                book={book}
                                changeTrigger={this.props.changeTrigger}
                                searchPage={false}
                            />
                        ))}
                    </ol>
                </div>
    
            </div>
        )
    }
}
export default BookDescription