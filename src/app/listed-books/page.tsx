"use client";

import { BookContext } from "@/components/contexts/BookContext";
import React, { useContext } from "react";

const LinstedBooks = () => {
  const { readBooks, wishlists } = useContext(BookContext);
  console.log(readBooks, wishlists);
  return <div></div>;
};

export default LinstedBooks;
