import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky bg-zinc-800/40 backdrop-blur-lg m-5 py-3 px-10 border border-white/20 rounded-md ">
      <span className="flex items-center gap-20">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" width={80} height={80} alt="logo" />
          <span className="text-xl font-bold hidden lg:block">Countryz</span>
        </Link>
        <div className="flex gap-8 nav-items">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
      </span>
    </nav>
  );
};

export default Navbar;
