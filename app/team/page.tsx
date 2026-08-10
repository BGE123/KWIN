import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react"; // Removed Linkedin and Twitter from here
import { Button } from "@/components/ui/button";

// Custom SVGs for Social Icons
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Dummy data for your team - you can easily swap these out later!
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Founder & Executive Director",
    bio: "Passionate about empowering women and girls through education and skill acquisition.",
    image: "/gallery/img1.jpg",
  },
  {
    name: "Dr. Amina Bello",
    role: "Head of Education Programs",
    bio: "Leading the QeDu initiative, Amina brings 15 years of experience in academic enrichment.",
    image: "/gallery/pic1.png",
  },
  {
    name: "Grace Okafor",
    role: "Director of Entrepreneurship",
    bio: "Helping women turn their TechUp and Hand skills into sustainable, profitable businesses.",
    image: "/gallery/pic2.png",
  },
  {
    name: "Esther Adeyemi",
    role: "Community Outreach Lead",
    bio: "Connecting KWIN with local communities and managing our volunteer network.",
    image: "/gallery/pic3.png",
  },
];

export default function TeamPage() {
  return (
    <main className="flex-1 bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-[#FDF8FD] py-20 border-b border-gray-100">
        <div className="w-full max-w-[2000px] mx-auto px-6 md:px-[120px] mx-auto px-6 text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-4 block">
            The Faces Behind KWIN
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1a1543] mb-6">
            Meet Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            We are a group of passionate educators, entrepreneurs, and advocates
            dedicated to equipping Nigerian women and girls with the tools they
            need to build their own futures.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="w-full max-w-[2000px] mx-auto px-6 md:px-[120px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col group">
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-gray-100 rounded-sm">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale-[20%]"
                  />
                  {/* Social links on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-end gap-3">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-[#a8248c] transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-[#a8248c] transition-colors"
                    >
                      <XIcon className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-[#1a1543] font-serif mb-1">
                  {member.name}
                </h3>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#a8248c] mb-3 block">
                  {member.role}
                </span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer CTA */}
      <section className="bg-[#1a1543] py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Want to be part of our story?
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            We are always looking for passionate volunteers, mentors, and
            partners to help us scale our impact across Nigeria.
          </p>
          <Link href="/contact">
            <Button className="bg-[#a8248c] hover:bg-[#8D288D] text-white rounded-full px-10 py-6 text-xs font-bold uppercase tracking-widest transition-colors">
              BECOME A VOLUNTEER <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
