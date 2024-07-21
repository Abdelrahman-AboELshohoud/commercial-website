"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        alt=""
        width={20}
        height={20}
        className="cursor-pointer"
        onClick={() => setOpen((state) => !state)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col justify-center items-center gap-8 text-xl z-10 ">
          <Link href="">HomePage</Link>
          <Link href="">Shop</Link>
          <Link href="">Deals</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </div>
      )}
    </div>
  );
}
