import Image from "next/image";
import { ArrowRight } from "lucide-react";

const approachSteps = [
  {
    id: "1",
    title: "Teach",
    description:
      "Character development and academic support build the foundation: self-worth, life skills, and classroom performance",
    image: "/landing-page/approah1.jpg",
  },
  {
    id: "2",
    title: "Mentor",
    description:
      "Girls are paired with mentors and guided into industry-relevant skills, from tech to trades, at a 1:15 mentor-to-student ratio",
    image: "/landing-page/approach2.jpg",
  },
  {
    id: "3",
    title: "Empower",
    description:
      "Graduates receive grants, business training, and support to turn skills into sustainable income",
    image: "/landing-page/approach3.jpg",
  },
];

export default function RealityApproach() {
  return (
    <section className="w-full bg-[#FCFAFF] pt-24 pb-32">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* PART 1: The Reality */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a8248c] mb-4 block">
              THE REALITY
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#1a1543] mb-8 leading-tight">
              Millions of Nigerian girls are still locked out of the future they
              were born to build.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Across Nigeria, girls face barriers that compound: interrupted
              schooling, early marriage pressure, financial hardship, and a
              near-total absence of mentorship or industry pathways once school
              ends. The girls we work with aren't short on ability. They're
              short on access. KWIN exists to close that gap, one girl, one
              skill, one grant at a time.
            </p>
          </div>

          {/* Image with decorative dashed border */}
          <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-auto">
            {/* Dashed background square */}
            <div className="absolute inset-0 border-2 border-dashed border-[#a8248c]/30 translate-x-6 translate-y-6 z-0" />
            {/* Main Image */}
            <div className="absolute inset-0 z-10 bg-gray-200">
              <Image
                src="/landing-page/Frame 9.svg"
                alt="Nigerian girl smiling"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* PART 2: Our Approach */}
        <div className="mb-32">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#1a1543] mb-6">
              Our approach
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Every programme we run is built on the same three principles,
              whichever one a girl applies for. This isn't a ladder she has to
              climb from one to the next, it's how we design each programme on
              its own.
            </p>
          </div>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {approachSteps.map((step) => (
              <div
                key={step.id}
                className="relative w-full aspect-[3/4] max-w-sm mx-auto group"
              >
                {/* Purple Offset Block */}
                <div className="absolute inset-0 bg-[#a8248c] -translate-x-3 translate-y-3 md:-translate-x-4 md:translate-y-4 z-0" />

                {/* Image Container */}
                <div className="absolute inset-0 z-10 bg-gray-900 overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />

                  {/* Top Gradient for Watermark Number */}
                  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/50 to-transparent z-20" />

                  {/* Bottom Gradient for Text */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20" />

                  {/* Card Content */}
                  <div className="absolute inset-0 z-30 p-8 flex flex-col justify-between">
                    {/* Number & Title */}
                    <div className="relative">
                      {/* Giant Watermark Number */}
                      <span className="absolute -top-12 -left-4 text-9xl font-serif font-bold text-white/20 select-none">
                        {step.id}
                      </span>
                      <h3 className="relative text-3xl font-serif font-bold text-white mt-4">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-white/90 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: The Story */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-[#1a1543] leading-snug mb-12">
            Kindle Women Initiative began with one founder's personal story of
            sacrifice and loss, and a conviction that no girl's future should
            depend on circumstances she didn't choose. Since 2021, that
            conviction has grown into a Lagos-based NGO working across six
            states, guided by four core values: Godliness, Time Management,
            Excellence, and Skillfulness.
          </h2>
          <button className="inline-flex items-center justify-center rounded-full bg-[#a8248c] px-8 py-4 text-sm font-bold text-white hover:bg-purple-900 transition-all">
            Read our story <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
