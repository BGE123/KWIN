import Image from "next/image";
import { ArrowRight, Star, Users, Monitor, Briefcase } from "lucide-react";

const programmes = [
  {
    id: 1,
    title: "Character Development",
    description:
      "Girls build self-awareness, life principles, and healthy relationships through modules on self-concept, financial literacy, goal setting, leadership, and emotional intelligence. 85% of participants report significant transformation",
    icon: Star,
    image: "/landing-page/prog1.jpg",
    // Determines if the image is on the right (false) or left (true)
    reverse: false,
  },
  {
    id: 2,
    title: "QeDu Education",
    description:
      "Academic support and career guidance for girls ages 10 to 20, including maths competitions, school debates, essay competitions, career discovery, and scholarship placement. 1:15 mentor-to-student ratio across 36 cohorts",
    icon: Users,
    image: "/landing-page/prog2.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "TechUp Industry",
    description:
      "Vocational and digital skills training in trades like tailoring, graphic design, photography, catering, makeup artistry, and web design, giving girls a marketable skill they can earn from right away",
    icon: Monitor,
    image: "/landing-page/prog3.jpg",
    reverse: false,
  },
  {
    id: 4,
    title: "BizUp Entrepreneurs",
    description:
      "Graduates turn their skills into businesses through training in business planning, agri-business, branding and packaging, financial management, and pitch competitions for grant funding",
    icon: Briefcase,
    image: "/landing-page/prog4.jpg",
    reverse: true,
  },
];

export default function Programmes() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#a8248c] mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1543] mb-6 leading-tight">
            Four programmes,
            <br />
            one mission.
          </h2>
          <p className="text-base text-gray-600 leading-relaxed">
            Every girl enters where she is and moves through the stage that fits
            her, from building character to building a business
          </p>
        </div>

        {/* Alternating Rows */}
        <div className="flex flex-col gap-24 md:gap-32">
          {programmes.map((prog) => (
            <div
              key={prog.id}
              className={`flex flex-col ${prog.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 lg:gap-20`}
            >
              {/* Text Content */}
              <div className="flex-1 flex flex-col items-start w-full">
                <div className="mb-6 p-3 rounded-full border-2 border-[#a8248c]/20 text-[#a8248c]">
                  <prog.icon strokeWidth={2} className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-[#1a1543] mb-4">
                  {prog.title}
                </h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {prog.description}
                </p>
                <button className="flex items-center text-sm font-bold text-[#a8248c] hover:text-purple-900 transition-colors group">
                  Learn more{" "}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Image with offset background */}
              <div className="flex-1 w-full relative">
                <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
                  {/* The solid purple offset block */}
                  <div
                    className={`absolute inset-0 bg-[#a8248c] ${prog.reverse ? "translate-x-4 md:translate-x-6" : "-translate-x-4 md:-translate-x-6"} translate-y-4 md:translate-y-6 z-0`}
                  />
                  {/* The Image */}
                  <div className="absolute inset-0 z-10 bg-gray-200">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
