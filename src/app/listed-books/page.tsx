"use client";

import { BookContext } from "@/components/contexts/BookContext";
import BookCard from "@/components/shared/BookCard";
import ListedBookCard from "@/components/shared/ListedBookCard";
import IBook from "@/types/book.type";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlists } = useContext(BookContext);
  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    return sortedBooks;
  };
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishBooks = sortBooks(wishlists);
  return (
    <div className="container mx-auto">
      <div className="container mx-auto py-15">
        <h2 className="bg-amber-200 text-2xl text-center p-15 rounded-2xl ">
          listed books
        </h2>
      </div>
      <div className="text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          defaultValue="Sort By"
          className="select select-success"
        >
          <option disabled={true}>Sort By</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Year of Published</option>
        </select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {readBooks.length > 0
            ? sortedReadBooks.map((book: IBook) => {
                return (
                  <ListedBookCard
                    key={book.bookId}
                    book={book}
                  ></ListedBookCard>
                );
              })
            : "There is no Read Books"}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`WishList Books (${wishlists.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlists.length > 0
            ? sortedWishBooks.map((book: IBook) => {
                return (
                  <ListedBookCard
                    key={book.bookId}
                    book={book}
                  ></ListedBookCard>
                );
              })
            : "There is no Wishlist books"}
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
