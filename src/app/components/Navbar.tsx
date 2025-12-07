"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* ===== LOGO LPC ===== */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/lpc/logoRedondo.png"
            alt="Logo LPC"
            width={55}
            height={55}
            className="object-contain"
            priority
          />
        </Link>

        {/* ===== LINKS ===== */}
        <div className="flex items-center gap-8 text-lg font-medium">
          <Link href="#eventos" className="hover:text-yellow-400 transition">Cultos</Link>
          <Link href="#GC" className="hover:text-yellow-400 transition">GC</Link>
          <Link href="#sobre" className="hover:text-yellow-400 transition">Sobre</Link>
        </div>

      </div>
    </nav>
  );
}
