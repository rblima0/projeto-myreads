import React, { Component } from 'react'

// 0.COMPONENTE RESPONSAVEL PELA BUSCA DE LIVROS
class BookSearch extends Component {
    render(){
        return(
            <div>
            {/* {this.state.showSearchPage ? ( */ }
                <div className="search-books">
                    <div className="search-books-bar">
                        <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Fechar</a>
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author"/>
                        </div>
                    </div>
                    <div className="search-books-results">
                            <ol className="books-grid"></ol>
                    </div>
                </div>
            {/* ) */}
            </div>
        )
    }
}
export default BookSearch