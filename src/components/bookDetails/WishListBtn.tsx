"use client";

import IBook from "@/types/book.type";
import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { Flip, toast } from "react-toastify";

const WishListBtn = ({ book }: { book: IBook }) => {
  const { wishlists, setWishList } = useContext(BookContext);
  const handleWishList = () => {
    setWishList([...wishlists, book]);
    toast.success("Added to Wishlist", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
    });
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
