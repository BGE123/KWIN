"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PROGRAMMES", href: "/programmes" },
  { name: "EVENTS & NEWS", href: "/events" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 z-50 bg-white/40 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      {/* Cleaned up the duplicate mx-auto and px-6 classes here */}
      <div className="w-full max-w-[2000px] mx-auto px-6 md:px-[120px] py-4">
        <div className="flex justify-between items-center text-black">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo1.png"
              alt="KWIN Logo"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-sans text-[#1A0E35]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  // Text stays default color, only becomes bold with the underline
                  className={`relative transition-colors hover:text-[#a8248c] pb-1 ${
                    isActive ? "font-bold" : ""
                  }`}
                >
                  {link.name}
                  {/* Underline indicator for active page */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#a8248c] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Donate Button */}
          <div className="hidden md:block">
            <Link href="/donate">
              <Button className="bg-[#a8248c] hover:bg-[#8D288D] text-white rounded-full px-6 py-5 text-xs font-bold transition-colors">
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
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                // Keeps default text color, adds left border on active
                className={`text-sm font-bold py-3 border-b border-black/5 transition-colors text-gray-700 hover:text-[#a8248c] ${
                  isActive ? "pl-2 border-l-4 border-l-[#a8248c]" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/donate"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4"
          >
            <Button className="w-full bg-[#a8248c] hover:bg-[#8D288D] text-white rounded-full py-6 text-xs font-bold transition-colors">
              DONATE NOW
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
