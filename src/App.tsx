// src/App.tsx
import React, { useState, useEffect } from "react";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";
import { Book } from "./types";
import "./App.css";

const App: React.FC = () => {
  const [books, setBooks] = useState<Book[]>(() => {
    const savedBooks = localStorage.getItem("BOOKS");
    if (savedBooks) {
      return JSON.parse(savedBooks);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("BOOKS", JSON.stringify(books));
  }, [books]);

  const addBook = (title: string, author: string) => {
    const newBook: Book = {
      id: Date.now(),
      title,
      author,
    };
    setBooks([...books, newBook]);
  };

  const removeBook = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="App">
      <h1>Book List</h1>
      <AddBookForm onAdd={addBook} />
      <BookList books={books} onRemove={removeBook} />
    </div>
  );
};

export default App;
