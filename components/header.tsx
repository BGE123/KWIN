import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/40 backdrop-blur-md border-b border-black/10">
      <div className="max-w-[1440px] mx-auto py-4">
        <div className="flex justify-between items-center text-black">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-black text-black font-serif">
              KWIN
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium font-sans text-black/90">
            <Link href="/" className="hover:text-white transition font-sans">
              HOME
            </Link>
            <Link href="/about" className="hover:text-white transition font-sans">
              ABOUT
            </Link>
            <Link href="/programmes" className="hover:text-white transition font-sans">
              PROGRAMMES
            </Link>
            <Link href="/events" className="hover:text-white transition">
              EVENTS & NEWS
            </Link>
            <Link href="/gallery" className="hover:text-white transition">
              GALLERY
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              CONTACT
            </Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/donate">
              <Button className="bg-[#a8248c] hover:bg-purple-900 text-white rounded-full px-6 py-5 text-xs font-bold transition-colors">
                DONATE NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
