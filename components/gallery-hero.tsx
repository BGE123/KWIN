import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[500px] bg-gray-900">
      {/* Background Image */}
      <Image
        src="/gallery/gallery-hero.jpg"
        alt="Girls smiling"
        fill
        className="object-cover opacity-90"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent no-invert" />

      {/* Content */}
      <div className="absolute bottom-0 w-full no-invert">
        <div className="mx-auto max-w-[1440px] px-6 pb-12 md:pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight max-w-2xl">
            See the work, not just the numbers
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-sm md:text-right leading-relaxed font-medium">
            Behind every number is a girl who showed up to learn, and kept
            coming back. These are her moments.
          </p>
        </div>
      </div>
    </section>
  );
}
