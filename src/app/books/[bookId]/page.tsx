import BookReadBtn from "@/components/bookDetails/BookReadBtn";
import WishListBtn from "@/components/bookDetails/WishListBtn";
import IBook from "@/types/book.type";
import Image from "next/image";
import React from "react";

interface IBookDetailsProps {
  params: Promise<{
    bookId: string;
  }>;
}

const getBooks = async (): Promise<IBook[]> => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();
  return data;
};

const bookDetailsPage = async ({ params }: IBookDetailsProps) => {
  const { bookId } = await params;
  const booksData = await getBooks();

  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(bookId),
  );

  if (!book) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-red-500">Book Not Found</h2>
      </div>
    );
  }

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="max-w-6xl mx-auto my-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch p-6 rounded-2xl bg-white">
      {/* Book Image */}
      <div className="bg-gray-100 flex items-center justify-center p-8 rounded-2xl">
        <div className="relative w-64 h-96 shadow-lg rounded-md overflow-hidden">
          <Image
            src={image}
            alt={bookName}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Book Details */}
      <div className="flex flex-col justify-between space-y-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{bookName}</h1>
          <p className="text-gray-600 font-medium mt-1">By : {author}</p>
        </div>

        <div className="border-t border-b border-gray-200 py-3">
          <span className="text-gray-700 font-medium">{category}</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed">
          <span className="font-bold text-gray-800">Review : </span>
          {review}
        </p>

        {/* Tags */}
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <span className="font-bold text-gray-800 text-sm">Tag</span>
          <div className="flex gap-2">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-green-50 text-green-600 font-medium text-xs px-3 py-1.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Metadata */}
        <div className="space-y-2 text-sm max-w-xs">
          <div className="flex justify-between">
            <span className="text-gray-500">Number of Pages:</span>
            <span className="font-bold text-gray-800">{totalPages}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Publisher:</span>
            <span className="font-bold text-gray-800">{publisher}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Year of Publishing:</span>
            <span className="font-bold text-gray-800">{yearOfPublishing}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Rating:</span>
            <span className="font-bold text-gray-800">{rating}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 pt-2">
          <BookReadBtn book={book}></BookReadBtn>
          <WishListBtn book={book}></WishListBtn>
        </div>
      </div>
    </div>
  );
};

export default bookDetailsPage;
