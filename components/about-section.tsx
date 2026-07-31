export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-white flex flex-col">
      {/* PART 1: The Hero Header */}
      <div
        // THE FIX 1: Changed from h-[90vh] to min-h-[70vh] so the image isn't aggressively cropped
        className="relative w-full min-h-[100vh] md:min-h-[100vh] flex flex-col justify-end no-invert"
        style={{
          // THE FIX 2: Bulletproof background gradient combo! Prevents the white haze at the top.
          backgroundImage: `url('/about-hero.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "none",
        }}
      >
        {/* Hero Content */}
        <div className="w-full relative z-10">
          <div className="mx-auto max-w-7xl px-6 pb-12 md:pb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-none tracking-tight">
              Why We Exist
            </h1>

            {/* THE FIX 3: Increased max-w-xs to max-w-md, and bumped text size to text-base/md:text-lg */}
            <p className="text-white/90 text-base md:text-lg max-w-md md:text-right leading-relaxed font-medium">
              The story, the people, and the mission behind Kindle Women
              Initiative, and how far they've carried us since 2021
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
