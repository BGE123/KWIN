"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/40 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto py-4 px-6">
        <div className="flex justify-between items-center text-black">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-black text-[#1a1543] font-serif">
              KWIN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold font-sans text-gray-700">
            <Link href="/" className="hover:text-[#a8248c] transition-colors">
              HOME
            </Link>
            <Link
              href="/about"
              className="hover:text-[#a8248c] transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/programmes"
              className="hover:text-[#a8248c] transition-colors"
            >
              PROGRAMMES
            </Link>
            <Link
              href="/events"
              className="hover:text-[#a8248c] transition-colors"
            >
              EVENTS & NEWS
            </Link>
            <Link
              href="/gallery"
              className="hover:text-[#a8248c] transition-colors"
            >
              GALLERY
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#a8248c] transition-colors"
            >
              CONTACT
            </Link>
          </nav>

          {/* Desktop Donate Button */}
          <div className="hidden md:block">
            <Link href="/donate">
              <Button className="bg-[#a8248c] hover:bg-purple-900 text-white rounded-full px-6 py-5 text-xs font-bold transition-colors">
                DONATE NOW
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/95 backdrop-blur-xl ${
          isMenuOpen
            ? "max-h-[500px] border-b border-gray-200 shadow-xl"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-2">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-bold text-gray-700 hover:text-[#a8248c] py-3 border-b border-black/5"
          >
            HOME
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-bold text-gray-700 hover:text-[#a8248c] py-3 border-b border-black/5"
          >
            ABOUT
          </Link>
          <Link
            href="/programmes"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-bold text-gray-700 hover:text-[#a8248c] py-3 border-b border-black/5"
          >
            PROGRAMMES
          </Link>
          <Link
            href="/events"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-bold text-gray-700 hover:text-[#a8248c] py-3 border-b border-black/5"
          >
            EVENTS & NEWS
          </Link>
          <Link
            href="/gallery"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-bold text-gray-700 hover:text-[#a8248c] py-3 border-b border-black/5"
          >
            GALLERY
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm font-bold text-gray-700 hover:text-[#a8248c] py-3 border-b border-black/5"
          >
            CONTACT
          </Link>

          <Link
            href="/donate"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4"
          >
            <Button className="w-full bg-[#a8248c] hover:bg-purple-900 text-white rounded-full py-6 text-xs font-bold transition-colors">
              DONATE NOW
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
