import Image from "next/image";
import React from "react";
import Img from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className=" my-3">
      <div className="grid grid-cols-2 gap-4 items-center container mx-auto bg-slate-200 rounded-2xl px-12  py-20">
        <div className="space-y-4">
          <h1 className="font-bold text-3xl">
            Books to freshen up <br />
            your bookshelf
          </h1>
          <button className="btn btn-success">View the Task</button>
        </div>
        <div>
          <Image src={Img} alt="hero-img"></Image>
        </div>
      </div>
    </section>
  );
};

export default Banner;
