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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent no-invert" />

        {/* Hero Content */}
        <div className="absolute bottom-0 w-full no-invert">
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

    </section>
  );
}
