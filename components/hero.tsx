import { Button } from "@/components/ui/button";
import Counter from "@/components/counter";
import Link from "next/link";

export function Hero() {
  return (
    <section
      id="home"
      // 1. Changed h-screen to min-h-screen so it can grow on tall mobile screens!
      // Added flex flex-col to help the inner container stretch
      className="relative w-full min-h-screen bg-cover bg-center overflow-hidden flex flex-col"
      style={{
        backgroundImage: 'url("/landing-page/heroimg.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/40 no-invert" />

      {/* 2. Changed h-full to flex-1 and added pt-32 to clear the fixed glass header */}
      <div className="relative flex-1 flex flex-col justify-between pt-32 pb-12 px-6 max-w-[1440px] mx-auto w-full">
        {/* Added mb-12 so the text doesn't crash into the stats box on mobile */}
        <div className="flex-1 flex flex-col justify-center mb-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight text-balance font-serif">
              Fueling Hopes.
              <br />
              Building Futures
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-xl">
              We equip Nigerian girls and women with education, mentorship, and
              the skills to build their own businesses. A girl who is taught
              becomes a woman who teaches a nation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/programmes">
                <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-base font-semibold">
                  APPLY FOR PROGRAMME
                </Button>
              </Link>
              <Button className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold">
                GET INVOLVED
              </Button>
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
