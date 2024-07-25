import React, { useState } from "react";

interface AddBookFormProps {
  onAdd: (title: string, author: string) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && author) {
      onAdd(title, author);
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book title" />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
