"use client";

import IBook from "@/types/book.type";
import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookReadBtn = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BookContext);
  const handleReadBtn = () => {
    setReadBooks([...readBooks, book]);
    console.log("book readed");
  };
  return (
    <button
      onClick={() => handleReadBtn()}
      className="px-6 py-2.5 rounded-lg border border-gray-300 font-bold text-gray-800 hover:bg-gray-50 transition-colors"
    >
      Read
    </button>
  );
};

export default BookReadBtn;
