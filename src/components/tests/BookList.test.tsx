// import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { expect, describe, test, vi } from "vitest";
import BookList from "../BookList";
import { Book } from "../../types";

describe("BookList component", () => {
  const books: Book[] = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
  ];

  test("renders the list of books", () => {
    render(<BookList books={books} onRemove={() => {}} />);

    books.forEach((book) => {
      expect(screen.getByText(`${book.title} by ${book.author}`)).toBeInTheDocument();
    });
  });

  test("calls onRemove when the remove button is clicked", () => {
    const handleRemove = vi.fn();
    render(<BookList books={books} onRemove={handleRemove} />);
    fireEvent.click(screen.getAllByText("Remove")[0]);
    expect(handleRemove).toHaveBeenCalledWith(1);
  });
});
