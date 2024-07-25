import React from "react";
import { Book } from "../types";

interface BookListProps {
  books: Book[];
  onRemove: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onRemove }) => {
  return (
    <div>
      <div>--------------------------------------------------</div>
      <ol>
        {books.map((book, index) => (
          <li key={book.id}>
            {index + 1}.
            <span>
              {book.title} by {book.author}
            </span>
            <button onClick={() => onRemove(book.id)}>Remove</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default BookList;
