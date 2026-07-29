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
      {/* OUR STORY */}
      <div className="mx-auto max-w-[1440px] px-6 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-bold tracking-widest text-[#8D288D] mb-3">
            OUR STORY
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1543] mb-6 leading-tight">
            Born from loss.
            <br />
            Built for the next generation.
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            KWIN&apos;s founder (this is a placeholder to be replaced with the
            actual info). That loss became a conviction: no girl&apos;s future
            should depend on circumstances she didn&apos;t choose. Kindle Women
            Initiative was built to change that, one girl at a time.
          </p>
        </div>
        <div className="relative w-full aspect-[4/3]">
          <div className="absolute left-0 top-0 w-[65%] h-full">
            <Image
              src="/aboutimg1.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 top-8 w-[40%] h-[70%]">
            <Image
              src="/aboutimg2.jpg"
              alt="Founder portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Aim, Vision, Mission */}
      <div className="mx-auto max-w-[1440px] px-6 pb-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, index) => (
            <div
              key={index}
              className="border border-[#8D288D]/20 p-8 flex flex-col"
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

      {/* Core Values (Dark Section) */}
      <div className="bg-[#200920] w-full py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-10">
                Core values
              </h2>
              <div className="bg-white/5 p-8 md:p-10 rounded-2xl flex flex-col gap-8">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 mt-1 p-2 bg-white/10 rounded-lg text-white">
                      <value.icon className="w-5 h-5" strokeWidth={2} />
                    </div>
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
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto lg:ml-auto rounded-2xl overflow-hidden">
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
