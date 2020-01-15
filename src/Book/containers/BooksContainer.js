import React from 'react';

import BooksListWidget from "../components/BooksListWidget";

class BooksContainer extends React.Component {

    /**
     * In real life - initial state = null, get data from API etc.
     */
    state = {
        books: ['Book 1', 'Book 2', 'Book 3']
    }

    getBooks() {
        // get data / setState etc.
    }

    render() {
        return (
            <BooksListWidget books={this.state.books}/>
        )
    }
}

export default BooksContainer;