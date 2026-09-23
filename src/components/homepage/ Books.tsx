import React from "react";
// import Image from "next/image";
import BookCard from "../shared/BookCard";
import IBook from "@/types/book.type";
// TypeScript Interface for safety (optional in pure JS)

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json", {
    cache: "no-store", // Ensures fresh data fetching in Next.js App Router
  });
  if (!res.ok) throw new Error("Failed to fetch books");
  return res.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {booksData.map((book: IBook) => (
          <BookCard key={book.bookId} book={book}></BookCard>
        ))}
      </div>
    </section>
  );
};

export default Books;
