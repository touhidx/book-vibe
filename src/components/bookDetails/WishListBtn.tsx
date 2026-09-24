"use client";

import IBook from "@/types/book.type";
import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const WishListBtn = ({ book }: { book: IBook }) => {
  const { wishlists, setWishList } = useContext(BookContext);
  const handleWishList = () => {
    setWishList([...wishlists, book]);
  };
  return (
    <button
      onClick={() => handleWishList()}
      className="px-6 py-2.5 rounded-lg bg-[#50B1C9] font-bold text-white hover:bg-[#3f98ae] transition-colors"
    >
      Wishlist
    </button>
  );
};

export default WishListBtn;
