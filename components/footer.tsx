import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#2D0A2E] text-white">
      {/* Stay Connected banner - overlaps top edge */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -translate-y-1/2 bg-[#9B2185] px-8 py-10 md:px-14 md:py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight">
              Stay Connected
            </h2>
            <p className="mt-2 text-white/80 text-sm md:text-base">
              Get updates on the girls and women you&apos;re helping to reach.
            </p>
          </div>
          <form className="flex w-full md:w-auto">
            <label htmlFor="footer-email" className="sr-only">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Email*"
              className="flex-1 md:w-80 bg-white text-gray-900 placeholder:text-gray-500 px-5 py-3.5 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#9B2185] text-white px-6 py-3.5 text-sm font-medium border border-white/30 hover:bg-[#851c72] transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 -mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div>
            <span className="font-serif text-5xl font-bold tracking-tight">
              KWIN
            </span>
            <p className="mt-6 text-white/70 text-sm leading-relaxed max-w-md">
              Equipping Nigerian girls and women with education, mentorship, and
              the skills to build their own futures. Registered NGO, active in
              Lagos State since 2021.
            </p>
            <p className="mt-16 text-white/50 text-sm">
              &copy; 2026 Kindle Women Initiative. All rights reserved
            </p>
          </div>

          {/* Right column */}
          <div className="lg:pt-2">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: FacebookIcon, label: "Facebook" },
                { icon: XIcon, label: "X" },
                { icon: InstagramIcon, label: "Instagram" },
                { icon: LinkedinIcon, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex items-center justify-center w-11 h-11 border border-white/30 hover:bg-white/10 transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Primary nav */}
            <nav className="flex flex-wrap gap-x-10 gap-y-3 mt-8 text-sm">
              <Link href="#home" className="hover:text-white/70 transition">
                Home
              </Link>
              <Link href="#about" className="hover:text-white/70 transition">
                About
              </Link>
              <Link
                href="#programmes"
                className="hover:text-white/70 transition"
              >
                Programmes
              </Link>
              <Link href="#" className="hover:text-white/70 transition">
                Get Involved
              </Link>
            </nav>

            <div className="border-t border-white/15 mt-6" />

            {/* Secondary nav */}
            <nav className="flex flex-wrap gap-x-10 gap-y-3 mt-6 text-sm">
              <Link href="#" className="hover:text-white/70 transition">
                Blog
              </Link>
              <Link href="#gallery" className="hover:text-white/70 transition">
                Gallery
              </Link>
              <Link href="#events" className="hover:text-white/70 transition">
                Events &amp; News
              </Link>
              <Link href="#" className="hover:text-white/70 transition">
                FAQ
              </Link>
            </nav>

            <div className="border-t border-white/15 mt-6" />

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm text-white/80">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Lagos State, Nigeria
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                kindlewomeninitiative@gmail.com
              </p>
            </div>

            <div className="flex gap-6 mt-8 text-sm text-white/60">
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
