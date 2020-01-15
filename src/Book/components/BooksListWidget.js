import React from 'react';

const BooksListWidget = ({books}) => {
    return (
        <div>
            {books.map((book) => (<div>{book}</div>))}
        </div>
    );
}

export default BooksListWidget;
