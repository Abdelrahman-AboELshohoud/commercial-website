import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductList() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className=" mt-12 flex gap-8 gap-y-16 flex-wrap flex-row justify-between">
      {nums.map((num) => (
        <Link
          key={num}
          href="/test"
          className="w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        >
          <div className="relative w-full h-80">
            <Image
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            <Image
              src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
          </div>
          <div className="text-gray-500">My description</div>
          <button className="rounded-2xl ring-1 ring-f text-f w-max py-2 px-4 text-xs hover:bg-f hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
}
