import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Categories() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        {nums.map((num) => (
          <Link
            key={num}
            href="/list?cat=test"
            className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 "
          >
            <div className="relative bg-slate-100 w-full h-96">
              <Image
                src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt=""
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 font-light text-clip tracking-wide">
              Categories Name
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
