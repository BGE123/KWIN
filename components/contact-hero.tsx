import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[90vh] min-h-[500px] bg-gray-900">
      {/* Background Image */}
      <Image
        src="/contact/hero1.jpg"
        alt="Students in classroom"
        fill
        className="object-cover opacity-70"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 w-full">
        <div className="mx-auto max-w-[1440px] px-6 pb-12 md:pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Let's talk
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-md md:text-right leading-relaxed font-medium">
            Whether you're reaching out to donate, volunteer, partner, or just
            ask a question, a real person on our team reads and replies to every
            message.
          </p>
        </div>
      </div>
    </section>
  );
}
