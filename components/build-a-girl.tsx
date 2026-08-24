import Link from "next/link";

export function BuildAGirl() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="mx-auto w-full max-w-[2000px] mx-auto px-6 md:px-[120px]">
        <div className="grid grid-cols-1 overflow-hidden bg-[#9B2185] lg:grid-cols-12">
          {/* Left: Text Block */}
          {/* THE FIX: Dropped lg:pl-16 to lg:pl-10 to inch the text to the left! */}
          <div className="lg:col-span-4 flex flex-col justify-center px-8 py-16 sm:px-12 lg:py-32 lg:pl-10 lg:pr-8">
            <h2 className="font-serif text-3xl font-bold leading-tight text-white lg:text-4xl text-balance">
              Build a girl,
              <br />
              build a nation.
              <br />
              Equip a woman,
              <br />
              equip a nation
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-white/90">
              Every gift, every mentorship hour, and every skill shared moves a
              girl closer to the future she was born to build. We&apos;re how to
              be part of it
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-10 py-5 text-sm font-bold tracking-widest text-[#9B2185] transition hover:bg-gray-100"
              >
                GET INVOLVED
              </Link>
            </div>
          </div>

          {/* Right: Image Block */}
          <div className="lg:col-span-8 relative min-h-[450px] lg:min-h-0 w-full">
            <img
              src="/girlimg.png"
              alt="Four young women smiling together"
              className="absolute inset-0 h-full w-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
