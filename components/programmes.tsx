import Image from "next/image";
import { ArrowRight } from "lucide-react"; // Kept this one for your "Learn more" button!

const programmes = [
  {
    id: 1,
    title: "Character Development",
    description:
      "Girls build self-awareness, life principles, and healthy relationships through modules on self-concept, financial literacy, goal setting, leadership, and emotional intelligence. 85% of participants report significant transformation",
    // CHANGE THIS: Point to your actual file in the public folder
    icon: "/icon4.png",
    image: "/landing-page/prog1.jpg",
    reverse: false,
  },
  {
    id: 2,
    title: "QeDu Education",
    description:
      "Academic support and career guidance for girls ages 10 to 20, including maths competitions, school debates, essay competitions, career discovery, and scholarship placement. 1:15 mentor-to-student ratio across 36 cohorts",
    // CHANGE THIS: Point to your actual file in the public folder
    icon: "/icon1.png",
    image: "/landing-page/prog2.jpg",
    reverse: true,
  },
  {
    id: 3,
    title: "TechUp Industry",
    description:
      "Vocational and digital skills training in trades like tailoring, graphic design, photography, catering, makeup artistry, and web design, giving girls a marketable skill they can earn from right away",
    // CHANGE THIS: Point to your actual file in the public folder
    icon: "/icon2.png",
    image: "/landing-page/prog3.jpg",
    reverse: false,
  },
  {
    id: 4,
    title: "BizUp Entrepreneurs",
    description:
      "Graduates turn their skills into businesses through training in business planning, agri-business, branding and packaging, financial management, and pitch competitions for grant funding",
    // CHANGE THIS: Point to your actual file in the public folder
    icon: "/icon3.png",
    image: "/landing-page/prog4.jpg",
    reverse: true,
  },
];

export default function Programmes() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
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
              className={`flex flex-col ${
                prog.reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-12 lg:gap-20`}
            >
              {/* Text Content */}
              <div className="flex-1 flex flex-col items-start w-full">
                {/* THE FIX: Replaced Lucide icon with Next.js Image */}
                <div className="mb-6 p-3 inline-flex rounded-full ">
                  <Image
                    src={prog.icon}
                    alt={`${prog.title} icon`}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
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
              <div className="flex-1 w-full relative group cursor-pointer">
                <div className="relative w-full aspect-[4/3] max-w-lg mx-auto">
                  <div
                    className={`absolute inset-0 bg-[#a8248c] z-0 transition-transform duration-500 ease-out
                      ${
                        prog.reverse
                          ? "translate-x-4 md:translate-x-6 group-hover:translate-x-6 md:group-hover:translate-x-8"
                          : "-translate-x-4 md:-translate-x-6 group-hover:-translate-x-6 md:group-hover:-translate-x-8"
                      } 
                      translate-y-4 md:translate-y-6 group-hover:translate-y-6 md:group-hover:translate-y-8`}
                  />

                  <div className="absolute inset-0 z-10 bg-gray-200 transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-105 group-hover:shadow-2xl">
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
