import Link from "next/link";

export function ContactHero() {
  return (
    <section
      id="contact-hero"
      className="relative w-full min-h-[90vh] md:min-h-[100vh] overflow-hidden flex flex-col justify-end no-invert"
      style={{
        // Changed from 'cover' to '100% auto' to zoom out the image and show the full width
        backgroundImage: `url('/contact/hero1.jpg')`,
        backgroundSize: "100% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        filter: "none",
      }}
    >
      {/* CONTENT CONTAINER */}
      <div className="relative z-10 flex-1 flex flex-col justify-end pb-16 px-6 max-w-7xl mx-auto w-full pt-40">
        <div className="flex items-end justify-between">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight font-serif">
            Let&apos;s talk
          </h1>
          <p className="text-lg text-gray-200 max-w-xl">
            Whether you&apos;re reaching out to donate, volunteer, partner, or
            just ask a question, a real person on our team reads and replies to
            every message.
          </p>
        </div>
      </div>
    </section>
  );
}
