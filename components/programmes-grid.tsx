import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const programmesData = [
  {
    id: 1,
    category: "Personal Development",
    title: "Character Development",
    description:
      "Before a girl can build a career or a business, she needs to know who she is. This programme covers identity discovery, self-awareness, and the life principles and relationship skills that hold everything else up.",
    tags: [
      "Self-Concept",
      "Healthy Relationships",
      "Financial Literacy",
      "Goal Setting",
      "Leadership",
      "Life Principles",
      "Emotional Intelligence",
      "Communication",
    ],
    footerText:
      "85% of participants report significant personal transformation",
    buttonText: "APPLY",
    image: "/programme/img1.jpg",
  },
  {
    id: 2,
    category: "Academic Excellence",
    title: "QeDu Education",
    description:
      "QeDu keeps girls on an academic track and opens doors beyond the classroom, through competitions, mentorship, and structured career guidance.",
    tags: [
      "Maths Competitions",
      "School Debates",
      "Essay Competitions",
      "Career Discovery",
      "Scholarships",
    ],
    footerText: "1:15 mentor-to-student ratio · 36 cohorts",
    buttonText: "APPLY",
    image: "/programme/img2.jpg",
  },
  {
    id: 3,
    category: "Skills & Industry",
    title: "TechUp Industry",
    description:
      "Vocational and digital skills training that gives girls something immediately marketable, not theory they'll never use.",
    tags: [
      "Catering",
      "Makeup Artistry",
      "Tailoring",
      "Tie & Dye",
      "Graphic Design",
      "Bag Making",
      "Photography",
      "Soap Making",
      "Event Planning",
      "Hairstyling",
      "Interior Design",
      "Bead Making",
      "Web Design",
      "... and more",
    ],
    footerText: "14+ skill tracks",
    buttonText: "APPLY",
    image: "/programme/img3.jpg",
  },
  {
    id: 4,
    category: "Entrepreneurship",
    title: "BizUp Entrepreneurs",
    description:
      "For girls ready to turn a skill into a business. Learn to plan, brand, fund, and run what you've built.",
    tags: [
      "Business Plans",
      "Agri-Business",
      "Branding & Packaging",
      "Pitch & Win Grants",
      "Financial Management",
    ],
    footerText: "",
    buttonText: "APPLY FOR GRANT",
    image: "/programme/img4.jpg",
  },
];

export default function ProgrammesGrid() {
  return (
    <section className="w-full bg-white pb-32">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {programmesData.map((prog) => (
            <div
              key={prog.id}
              className="flex flex-col bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative w-full aspect-[16/10] bg-gray-200">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 md:p-4 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="inline-block bg-[#FCF3FC] text-[#a8248c] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                    {prog.category}
                  </span>
                </div>

                <h2 className="text-3xl font-serif font-bold text-[#1a1543] mb-4">
                  {prog.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  {prog.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {prog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-col items-start">
                  {prog.footerText && (
                    <p className="text-[#a8248c] italic text-sm font-medium mb-6">
                      {prog.footerText}
                    </p>
                  )}

                  {/* DYNAMIC LINK: Checks if the button is for a grant or regular programme */}
                  <Link
                    href={
                      prog.buttonText === "APPLY FOR GRANT"
                        ? "/apply"
                        : "/apply-programme"
                    }
                  >
                    <Button className="bg-[#a8248c] hover:bg-purple-900 text-white rounded-full px-8 py-5 text-xs font-bold uppercase tracking-widest transition-colors">
                      {prog.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
