import Link from "next/link";
import React from "react";
import Menu from "../components/Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative ">
      <div className="flex h-full items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide ">SHOPER</div>
        </Link>
        <Menu />
      </div>
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        <div className="w-1/3 lg:w-1/2 flex items-center gap-12 ">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" width={24} height={24} alt="" />
            <div className="text-2xl tracking-wide">SHOPER</div>
          </Link>
          <div className="hidden lg:flex gap-4">
            <Link href="">HomePage</Link>
            <Link href="">Shop</Link>
            <Link href="">Deals</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
          </div>
        </div>
        <div className="w-2/3 lg:w-1/2 flex items-center justify-between  gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}
