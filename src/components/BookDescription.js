import React, { Component } from "react"
import { Link } from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI'

class BookDescription extends Component {

    state = {
        book: null,
        unknown: false
    }

    componentDidMount() {
        BooksAPI.get(this.props.id)
            .then((book) => {
                this.setState({ book });
            })
            .catch((error) => {
                this.setState({ unknown: true });
            })
    }

    bookPageTime = () => {
        if(this.state.book.pageCount < 200) {
            return <p className="book-info-reading">Tempo de Leitura: 3 a 5hs (aproximadamente)</p>
        } else if(this.state.book.pageCount >= 200 && this.state.book.pageCount <= 300){
            return <p className="book-info-reading">Tempo de Leitura: 2 dias (aproximadamente)</p>
        } else if(this.state.book.pageCount === undefined) {
            return <p className="book-info-reading">Tempo de Leitura: Desconhecido</p>
        } else {
            return <p className="book-info-reading">Tempo de Leitura: 3 dias ou mais (aproximadamente)</p>
        }
    }

    bookRating = () => {
        const rating = this.state.book.averageRating || 0;
        let stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(rating > i);
        }
        return stars;
    }

    render() {

        const { book, unknown} = this.state;

        if (!book) {
            if (!unknown) {
                return null
            }
            return (
                <center><p>Tivemos algum problema, o livro não foi encontrado</p></center>
            )
        }
        
        return(
            <div className="container">
                <Link className="close-search" to="/">Fechar</Link>
                <div className="book-image" 
                    style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (``) }}>
                </div>
                <div className="book-info">
                    <h2>{book.title}</h2>
                    <p className="book-info-subtitle">{book.subtitle || "Subtitulo não informado"}</p>
                    <p className="book-info-authors">{book.authors || "Autor não informado"}</p>
        
                    <div className="book-ratings">
                        {this.bookRating().map((stars, index) => (
                            <span key={index} className={`${stars ? 'book-ratings-star' : 'book-ratings-nonestar'}`}></span>
                        ))}
                    </div>
        
                    <p className="book-info-pages">Numero de páginas: {book.pageCount || "Não Informado"}</p>
                    {this.bookPageTime()}
                    <p className="book-info-language">Linguagem: {book.language}</p>
        
                    <div className="book-categorie">
                        <p>{book.categories || "Desconhecida"}</p>
                    </div>
        
                </div>
        
                <div className="book-description">
                    <p>{book.description || "Nenhuma descrição foi encontrada..."}</p>
                    
                    <div className="book-description-button">
                        <a href={book.previewLink} rel="external">VEJA UMA PRÉVIA</a>
                    </div>
                </div>
                
                <div className="book-related">
                    <h2>Livros Relacionados</h2>
                    <hr/>

                    {/* <div className="book-related-categories">
                        <img src="content.jpg" alt=""></img>
                    </div> */}
                </div>
    
            </div>
        )
    }
}
export default BookDescription