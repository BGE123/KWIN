import Image from "next/image";

export default function ProgrammesHero() {
  return (
    <section className="w-full bg-white pt-32 pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left Images Column (Hidden on smaller screens for cleaner layout) */}
          <div className="hidden lg:block relative w-full lg:w-1/3 h-[450px]">
            {/* The cyan offset block */}
            <div className="absolute top-12 right-12 w-40 h-48 z-0" />

            {/* Center-right Image (Young woman) */}
            <div className="absolute top-20 right-6 w-48 aspect-[3/4] z-20 bg-gray-200 shadow-lg">
              <Image
                src="/programme/hero2.jpg"
                alt="Programme participant"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom-left Image (Older man) */}
            <div className="absolute bottom-16 left-4 w-40 aspect-square z-10 bg-gray-300 shadow-md">
              <Image
                src="/programme/hero1.jpg"
                alt="Programme mentor"
                fill
                className="object-cover "
              />
            </div>
          </div>

          {/* Center Content Column */}
          <div className="w-full lg:w-1/3 flex flex-col items-center text-center z-30">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a8248c] mb-6">
              PROGRAMMES
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a1543] mb-6 leading-tight">
              Four programmes,
              <br />
              one path forward
            </h1>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-md">
              Whether you need to build confidence, stay on track academically,
              learn a trade, or launch a business. Explore all four programmes
              below and apply for whichever matches where you are today.
            </p>
          </div>

          {/* Right Images Column (Hidden on smaller screens) */}
          <div className="hidden lg:block relative w-full lg:w-1/3 h-[450px]">
            {/* Center-left Image (Woman with red hair up) */}
            <div className="absolute top-12 left-6 w-44 aspect-[3/4] z-20 bg-gray-200 shadow-lg">
              <Image
                src="/programme/hero3.jpg"
                alt="Programme graduate"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom-right Image (Woman with short hair) */}
            <div className="absolute bottom-24 right-4 w-36 aspect-square z-10 bg-gray-300 shadow-md">
              <Image
                src="/programme/hero4.jpg"
                alt="Programme student"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
