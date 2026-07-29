import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white">
      {/* PART 1: The Hero Header */}
      <div className="relative w-full h-[90vh] min-h-[500px] bg-gray-900">
        {/* Placeholder Background Image */}
        <Image
          src="/about-hero.jpg"
          alt="Group of smiling girls"
          fill
          className="object-cover opacity-80"
          priority
        />

        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        {/* Hero Content */}
        <div className="absolute bottom-0 w-full">
          <div className="mx-auto max-w-[1440px] px-6 pb-12 md:pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-none">
              Why We Exist
            </h1>
            <p className="text-white/90 text-sm md:text-base max-w-xs md:text-right leading-relaxed font-medium">
              The story, the people, and the mission behind Kindle Women
              Initiative, and how far they've carried us since 2021
            </p>
          </div>
        </div>
      </div>

      {/* PART 2: Our Story Content & Collage */}
      <div className="py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text */}
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a8248c] mb-6 block">
              OUR STORY
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1543] mb-8 leading-tight">
              Born from loss.
              <br />
              Built for the next generation.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              KWIN's founder (this is a placeholder to be replaced with the
              actual info). That loss became a conviction: no girl's future
              should depend on circumstances she didn't choose.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Kindle Women Initiative was built to change that, one girl at a
              time.
            </p>
          </div>

          {/* Right Column: Image Collage */}
          <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto">
            {/* Main Bottom-Left Image */}
            <div className="absolute bottom-0 left-0 w-[75%] h-[80%] z-10 bg-gray-200 shadow-xl">
              <Image
                src="/aboutimg1.jpg"
                alt="Girl looking at camera"
                fill
                className="object-cover"
              />
            </div>

            {/* Offset Top-Right Image */}
            <div className="absolute top-0 right-0 w-[50%] h-[55%] z-20 bg-gray-300 border-white shadow-2xl">
              <Image
                src="/aboutimg2.jpg"
                alt="Girl outside"
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
