import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("/landing-page/heroimg.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 no-invert" />

      <div className="relative h-full flex flex-col justify-between py-12 max-w-[1440px] mx-auto w-full">
        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center ">
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
            <div className="flex gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-base font-semibold">
                APPLY FOR PROGRAMME
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-semibold">
                GET INVOLVED
              </Button>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="bg-white/95 p-2 grid grid-cols-2 sm:grid-cols-5 gap-6 mb-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-black font-serif">
              210+
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Girls trained since 2021
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-black font-serif">
              7
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Grants Awarded
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-black font-serif">
              5k+
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Women reached yearly
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-black font-serif">
              6
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              States active in
            </p>
          </div>
          <div className="text-center col-span-2 sm:col-span-1 bg-gradient-to-r bg-[#8D288D] p-1 text-white">
            <div className="text-2xl sm:text-3xl font-bold font-serif">
              500k
            </div>
            <p className="text-xs sm:text-sm mt-2">2025 goal</p>
          </div>
        </div>
      </div>
    </section>
  );
}
