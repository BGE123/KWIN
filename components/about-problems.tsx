import Image from "next/image";
import { BookX, HeartHandshake, Coins, Map } from "lucide-react";

const problems = [
  {
    title: "Interrupted schooling",
    description:
      "Many girls lose access to consistent, quality education long before they finish it.",
    icon: BookX,
  },
  {
    title: "Early marriage pressure",
    description:
      "Cultural and financial pressure pushes girls toward marriage instead of continued education.",
    icon: HeartHandshake,
  },
  {
    title: "Financial hardship",
    description:
      "Limited household income cuts off options before a girl gets to choose for herself.",
    icon: Coins,
  },
  {
    title: "No pathway after school",
    description:
      "Little to no mentorship or industry access once formal education ends, leaving ability with nowhere to go.",
    icon: Map,
  },
];

export default function AboutProblems() {
  return (
    <section className="w-full bg-[#FCF3FC] py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* The Split Container */}
        <div className="flex flex-col lg:flex-row w-full max-w-5xl mx-auto overflow-hidden shadow-xl">
          {/* Left Side: Image */}
          <div className="relative w-full lg:w-1/2 aspect-square lg:aspect-auto min-h-[400px]">
            <Image
              src="/aboutimg4.jpg"
              alt="Two girls smiling in grayscale"
              fill
              className="object-cover grayscale"
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 bg-[#92287A] p-10 md:p-14 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-10">
              Problems we address
            </h2>

            <div className="flex flex-col gap-8">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-5 items-start">
                  {/* Icon Box */}
                  <div className="flex-shrink-0 mt-1 border border-white/30 p-2 rounded-sm text-white bg-white/5">
                    <problem.icon className="w-4 h-4" strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">
                      {problem.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed font-medium pr-4">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
