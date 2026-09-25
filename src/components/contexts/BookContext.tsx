"use client";

import IBook from "@/types/book.type";
import React, { createContext, ReactNode, useState } from "react";

interface BookContextType {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlists: IBook[];
  setWishList: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BookContext = createContext<BookContextType | undefined>(
  undefined,
);

const BookProvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlists, setWishList] = useState<IBook[]>([]);

  const sharedData: BookContextType = {
    readBooks,
    setReadBooks,
    wishlists,
    setWishList,
  };

  return (
    <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
  );
};

export default BookProvider;
