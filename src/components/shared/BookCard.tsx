import IBook from "@/types/book.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface IBookProps {
  book: IBook;
}

const BookCard = ({ book }: IBookProps) => {
  return (
    <article
      key={book.bookId}
      className="group flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div>
        {/* Image Container */}
        <div className="relative w-full h-72 bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden mb-6 flex items-center justify-center p-4">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-4 drop-shadow-md group-hover:scale-105 transition-transform duration-300 ease-out"
          />

          <span className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {book.category}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {book.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-md border border-emerald-200/50 dark:border-emerald-800/50"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title & Author */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-emerald-600 transition-colors">
          {book.bookName}
        </h3>
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4">
          By{" "}
          <span className="text-slate-700 dark:text-slate-300">
            {book.author}
          </span>
        </p>

        {/* Metadata Details */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-4 border-t border-slate-100 dark:border-slate-800">
          <span>{book.publisher}</span>
          <span>•</span>
          <span>{book.yearOfPublishing}</span>
          <span>•</span>
          <span>{book.totalPages} Pages</span>
        </div>
      </div>

      {/* Bottom Row: Rating & Action */}
      <div className="flex items-center justify-between pt-6 mt-4 border-t border-dashed border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-1.5">
          <svg
            className="w-5 h-5 text-amber-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
            {book.rating.toFixed(1)}
          </span>
        </div>

        <Link href={`/books/${book.bookId}`}>
          <button className="text-xs font-semibold px-4 py-2 bg-slate-900 hover:bg-emerald-600 dark:bg-slate-800 dark:hover:bg-emerald-500 text-white rounded-lg transition-colors duration-200">
            View Details
          </button>
        </Link>
      </div>
    </article>
  );
};

export default BookCard;
