import Link from "next/link";

export function BuildAGirl() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 overflow-hidden bg-[#9B2185] lg:grid-cols-2">
          {/* Left: copy */}
          <div className="flex flex-col justify-center px-8 py-12 sm:px-12 lg:py-24 lg:pl-16 lg:pr-10">
            <h2 className="font-serif text-4xl font-bold leading-tight text-white text-balance sm:text-5xl">
              Build a girl,
              <br />
              build a nation.
              <br />
              Equip a woman,
              <br />
              equip a nation
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/90">
              Every gift, every mentorship hour, and every skill shared moves a
              girl closer to the future she was born to build. We&apos;re how to
              be part of it
            </p>
            <div className="mt-8">
              <Link
                href="#get-involved"
                className="inline-flex items-center rounded-full bg-white px-8 py-4 text-sm font-semibold tracking-wide text-[#9B2185] transition hover:bg-white/90"
              >
                GET INVOLVED
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative">
            <img
              src="/girlimg.png"
              alt="Four young women smiling together"
              className="absolute inset-0 h-full w-full object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
