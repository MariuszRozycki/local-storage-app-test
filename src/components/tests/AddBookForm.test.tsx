import { render, screen } from "@testing-library/react";
import { describe, vi, test, expect } from "vitest";
import "@testing-library/jest-dom";
import AddBookForm from "../AddBookForm";

describe("AddBookForm component", () => {
  test("is displayed", () => {
    const handleAdd = vi.fn();
    render(<AddBookForm onAdd={handleAdd} />);

    const titleInput = screen.getByPlaceholderText("Book title");
    const authorInput = screen.getByPlaceholderText("Author");
    const addButton = screen.getByText("Add Book");

    expect(titleInput).toBeInTheDocument();
    expect(authorInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
});
