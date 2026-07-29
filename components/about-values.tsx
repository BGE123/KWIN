import Image from "next/image";
import { BookOpen, Clock, Star, Wrench } from "lucide-react";

const principles = [
  {
    title: "Aim",
    description:
      "Close the education, mentorship, and opportunity gap for Nigerian girls and women, community by community.",
  },
  {
    title: "Vision",
    description:
      "Develop 100,000 women who are educated and financially independent by 2030.",
  },
  {
    title: "Mission",
    description:
      "Improve self-discovery, access to education, industry skills, and entrepreneurial knowledge among girls and women through community programmes and educational grants.",
  },
];

const coreValues = [
  {
    title: "Godliness",
    description:
      "Faith-based integrity guides how we lead, mentor, and hold ourselves accountable to the girls we serve.",
    icon: BookOpen,
  },
  {
    title: "Time Management",
    description:
      "We treat a girl's time as valuable. Programmes run on schedule, and promises get kept.",
    icon: Clock,
  },
  {
    title: "Excellence",
    description:
      "Our programmes are held to a standard worth a girl's trust, not just a standard that is good enough.",
    icon: Star,
  },
  {
    title: "Skillfulness",
    description:
      "Every module teaches something usable. Practical skill over theory, always.",
    icon: Wrench,
  },
];

export default function AboutValues() {
  return (
    <section className="w-full bg-white flex flex-col">
      {/* PART 1: Aim, Vision, Mission */}
      <div className="mx-auto max-w-[1440px] px-6 py-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 p-8 flex flex-col"
            >
              <h3 className="text-2xl font-serif font-bold text-[#1a1543] mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* PART 2: Core Values (Dark Section) */}
      <div className="bg-[#200920] w-full py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column: Values List */}
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10">
                Core values
              </h2>

              {/* Lighter purple container for the list */}
              <div className="bg-white/5 p-8 md:p-10 rounded-sm flex flex-col gap-8">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    {/* Icon Container */}
                    <div className="flex-shrink-0 mt-1 p-2 bg-white/10 rounded-sm text-white">
                      <value.icon className="w-5 h-5" strokeWidth={2} />
                    </div>

                    {/* Text Content */}
                    <div>
                      <h4 className="text-base font-bold text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gray-200">
                <Image
                  src="/aboutimg3.jpg"
                  alt="Girl sitting at desk"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
