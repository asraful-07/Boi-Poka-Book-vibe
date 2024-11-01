import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("BooksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">Books</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {books.map((book, idx) => (
          <Book key={idx} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
