import IBook from "@/types/book.type";
import Image from "next/image";
import React from "react";

const ListedBookCard = ({ book }: IBook) => {
  return (
    <div
      key={book.bookId}
      className="flex flex-col md:flex-row gap-6 p-6 border rounded-2xl bg-base-100 shadow-sm"
    >
      {/* Image Section */}
      <div className="bg-base-200 p-8 rounded-xl flex items-center justify-center md:w-1/4">
        <Image
          height={400}
          width={300}
          src={book.image}
          alt={book.bookName}
          className="h-48 object-contain rounded-md"
        />
      </div>

      {/* Details Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{book.bookName}</h3>
          <p className="text-sm text-gray-600 mb-3">By : {book.author}</p>

          {/* Tags & Category */}
          <div className="flex flex-wrap gap-2 items-center mb-4">
            <span className="font-bold text-sm">Tag</span>
            {book.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="badge badge-accent bg-green-50 text-green-600 border-none font-semibold px-3 py-1 text-xs"
              >
                #{tag}
              </span>
            ))}
            <span className="text-xs text-gray-500 ml-auto">
              Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>

          {/* Publisher & Pages */}
          <div className="flex gap-6 text-sm text-gray-500 border-b pb-4 mb-4">
            <span>Publisher: {book.publisher}</span>
            <span>Page {book.totalPages}</span>
          </div>
        </div>

        {/* Badges & Actions */}
        <div className="flex flex-wrap gap-3 items-center">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-medium">
            Category: {book.category}
          </span>
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-xs font-medium">
            Rating: {book.rating}
          </span>
          <button className="btn btn-success text-white rounded-full min-h-0 h-9 px-5 text-xs">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
