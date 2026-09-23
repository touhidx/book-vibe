import Image from "next/image";
import React from "react";
import Img from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="my-6 px-4">
      <div className="container mx-auto bg-linear-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-16 shadow-xl overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content Column */}
          <div className="space-y-6 z-10 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm font-semibold rounded-full border border-emerald-500/20">
              Featured Collection
            </span>

            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Books to freshen up <br className="hidden md:inline" />
              your bookshelf
            </h1>

            <p className="text-slate-300 text-base lg:text-lg max-w-md mx-auto md:mx-0">
              Discover top-rated books, expand your mind, and curate your
              personal library today.
            </p>

            <div className="pt-2">
              <button className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-medium rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-200">
                View the List
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-md aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 group">
              <Image
                src={Img}
                alt="Featured books display"
                priority
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
