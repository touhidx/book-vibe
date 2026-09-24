"use client";

import IBook from "@/types/book.type";
import { createContext } from "react";
import React, { ReactNode, useState } from "react";
export const BookContext = createContext({});

const BookPorvider = ({ children }: { children: ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlists, setWishList] = useState<IBook[]>([]);
  const sharedData = {
    readBooks,
    setReadBooks,
    wishlists,
    setWishList,
  };
  return (
    <BookContext.Provider value={sharedData}>{children}</BookContext.Provider>
  );
};

export default BookPorvider;
