import Link from "next/link";
import { Button } from "@/components/ui/button";
import Counter from "@/components/counter";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col"
    >
      {/* 1. STANDARD HTML IMG TAG - Completely immune to Next.js wrapper bugs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/landing-page/heroimg.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* 2. SOLID DARK OVERLAY - Explicitly styled so dark mode can't turn it white */}
      <div
        className="absolute inset-0 z-0 no-invert"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
      />

      {/* 3. CONTENT CONTAINER */}
      <div className="relative z-10 flex-1 flex flex-col justify-between pt-32 pb-12 px-6 w-full max-w-[2000px] mx-auto px-6 md:px-[120px] mx-auto w-full">
        <div className="flex-1 flex flex-col justify-center mb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight text-balance font-serif">
              Empowering Girls Today,
              <br />
              Building Stronger Nations Tomorrow
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-xl">
              Welcome to Kindle Women Initiative, a Faith-based non profit
              organization dedicated to uplifting girls and women through
              education, mentorship, skills development, and entrepreneurship,
              especially in underserved communities. Our goal is to foster
              educated, self-sufficient women prepared for global impact. One
              girl at a time, one woman at a time. A girl who is taught becomes
              a woman who teaches a nation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/programmes" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-[#8D288D] hover:bg-[#8D288D] text-white rounded-full px-8 py-6 text-base font-semibold">
                  APPLY FOR PROGRAMME
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold">
                  GET INVOLVED
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-white/95 p-2 grid grid-cols-2 sm:grid-cols-5 gap-6 rounded-xl overflow-hidden shadow-2xl">
          <div className="text-center p-4">
            <div className="text-2xl sm:text-3xl font-bold text-black font-serif">
              <Counter end={210} />+
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Girls trained since 2021
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl sm:text-3xl font-bold text-black font-serif">
              <Counter end={7} duration={1500} />
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Grants Awarded
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl sm:text-3xl font-bold text-black font-serif">
              <Counter end={5} />
              k+
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Women reached yearly
            </p>
          </div>
          <div className="text-center p-4">
            <div className="text-2xl sm:text-3xl font-bold text-black font-serif">
              <Counter end={6} duration={1500} />
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              States active in
            </p>
          </div>
          <div className="text-center col-span-2 sm:col-span-1 bg-gradient-to-r bg-[#8D288D] p-4 text-white flex flex-col justify-center rounded-lg">
            <div className="text-2xl sm:text-3xl font-bold font-serif">
              <Counter end={500} />k
            </div>
            <p className="text-xs sm:text-sm mt-2 text-white/90">2025 goal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
