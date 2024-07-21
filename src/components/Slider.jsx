"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];
export default function Slider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
      3000
    );
    return () => clearInterval(interval);
  }, [current]);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000 "
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((item, i) => (
          <div
            key={i}
            className={`${item.bg} w-screen h-full flex flex-col gap-16 lg:flex-row`}
          >
            <div className=" lg:w-1/2 lg:h-full h-1/3 flex flex-col items-center justify-center gap-6 2xl:gap-10 text-center mt-3">
              <h2 className="text-lg lg:text-2xl 2xl:text-5xl">
                {item.description}
              </h2>
              <h1 className="text-2xl lg:text-4xl 2xl:text-6xl font-semibold">
                {item.title}
              </h1>
              <Link href={item.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
            <div className="lg:w-1/2 lg:h-full h-2/3 relative">
              <Image
                src={item.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 flex bottom-8 gap-4">
        {slides.map((item, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === i ? "scale-150" : ""
            }`}
            onClick={() => setCurrent(i)}
          >
            {current === i && (
              <div className="w-[8px] h-[8px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
        {/* {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))} */}
      </div>
    </div>
  );
}
