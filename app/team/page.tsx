"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

// Custom SVGs for Social Icons
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface TeamMember {
  name: string;
  role: string;
  bioPreview: string;
  bioParagraphs: string[];
  image: string;
  linkedin?: string;
  twitter?: string;
}

// Founder Profile
const founder: TeamMember = {
  name: "Salome Enoshi Nwodom nee Uwah",
  role: "Founder",
  bioPreview:
    "Passionate about empowering women and girls through education, mentorship, and practical skill acquisition across Nigeria.",
  bioParagraphs: [
    "Salome is a doctoral researcher at Robert Gordon University, Aberdeen, United Kingdom, where her research focuses on the application of Artificial Intelligence for Mental Wellbeing through her emerging concept of Psychotelligence, the intersection of psychology, emotional intelligence, and intelligent systems. Her academic journey is marked by a commitment to excellence, innovation, and community impact. Prior to commencing her doctoral studies, she served as a Research and Teaching Assistant at the Centre of Intelligence of Things, University of Greater Manchester, supporting research, teaching, and student development within the fields of Artificial Intelligence and Computing.",
    "Salome's contributions to academia and student leadership have earned her several prestigious recognitions, including the UK Black Student of the Year 2026 Award by the Caribbean and African Health Network (CAHN), the Vice-Chancellor's Highest Academic Achievement Award from the University of Greater Manchester, and First Place at the IEEE Women in Engineering (WIE) International Leadership Summit Research Poster Competition in London, United Kingdom.",
    "She is also an Associate Fellow of Advance HE (AFHEA) and an Aspen Rising Leaders Fellow, reflecting her dedication to educational excellence and leadership development. A passionate advocate for women in technology and inclusive innovation, Salome founded the IEEE Women in Engineering (WIE) Affinity Group at the University of Greater Manchester and previously served as Chair of the IEEE Student Branch, where she led initiatives that promoted professional development, research engagement, and industry collaboration among students. Beyond her academic achievements, Salome is deeply committed to mentoring and empowering the next generation of innovators and researchers. Through her research support initiatives and student development programmes, she has mentored and supported over 146 postgraduate students transitioning into Artificial Intelligence and Computing research.",
    "As the Founder of Kindle Women Initiative (KWIN), Salome is driven by a vision of raising educated, confident, and financially independent women who can transform families, communities, and nations. Through education, mentorship, scholarships, entrepreneurship, and leadership development, she continues to create opportunities that empower girls and women to realise their full potential and become catalysts for lasting societal change. Her work stands at the intersection of research, leadership, education, technology, and social impact, reflecting a lifelong commitment to empowering people and building stronger communities through knowledge and opportunity.",
  ],
  image: "/about/salome.jpg",
  linkedin: "#",
  twitter: "#",
};

// Executive & Project Team
const teamMembers: TeamMember[] = [
  {
    name: "Ikemsinachi Gideon Nweze",
    role: "Project Coordinator",
    bioPreview:
      "Ikemsinachi Gideon Nweze is a law graduate, entrepreneur, youth and girl child advocate, and community development enthusiast with a strong passion for empowering young people, especially girls and young women.",
    bioParagraphs: [
      "Ikemsinachi Gideon Nweze is a law graduate, entrepreneur, youth and girl child advocate, and community development enthusiast with a strong passion for empowering young people, especially girls and young women. His passion for community impact has been shaped by his involvement with Sisters’ Ally Foundation for Community Development (SAF), where he has contributed to initiatives focused on girl-child advocacy, mentorship, education, empowerment, and community outreach.",
      "Through his experiences with young people and community-focused initiatives, Ikemsinachi has developed a deep belief in the importance of giving young people access to the right knowledge, mentorship, skills, and opportunities to discover their potential. He believes that empowering a girl is not just about changing her story, it is about giving her the confidence and opportunity to change the stories of others around her.",
    ],
    image: "/about/gideon.png",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Circular Card Component
  const MemberCircleCard = ({
    member,
    isFounder = false,
  }: {
    member: TeamMember;
    isFounder?: boolean;
  }) => (
    <div className="flex flex-col items-center text-center group">
      {/* Outer Circular Container */}
      <div
        className={`relative rounded-full p-2 bg-gradient-to-b from-[#a8248c]/25 via-transparent to-transparent shadow-lg transition-transform duration-500 group-hover:scale-105 ${
          isFounder ? "w-64 h-64 md:w-72 md:h-72" : "w-52 h-52 md:w-60 md:h-60"
        }`}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner bg-gray-100">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      </div>

      {/* Member Details */}
      <div className="mt-6 flex flex-col items-center max-w-sm">
        <h3 className="text-xl md:text-2xl font-bold text-[#1a1543] font-serif mb-1">
          {member.name}
        </h3>
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          {member.role}
        </span>

        <button
          onClick={() => setSelectedMember(member)}
          className="px-6 py-2 rounded-md bg-[#1a1543] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#a8248c] transition-colors shadow-sm"
        >
          View Profile
        </button>
      </div>
    </div>
  );

  return (
    <>
    <Header />
    <main className="flex-1 bg-white pt-24">
      {/* Hero Section */}
      <section className="bg-[#FDF8FD] py-20 border-b border-gray-100">
        <div className="w-full max-w-[2000px] mx-auto px-6 md:px-[120px] text-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-4 block">
            The Faces Behind KWIN
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#1a1543] mb-6">
            Meet Our Team
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            Meet the leaders shaping our strategy, education programs, and commitment to empowering Nigerian women and girls.
          </p>
        </div>
      </section>

      {/* Circular Team Showcase */}
      <section className="py-24">
        <div className="w-full max-w-[1200px] mx-auto px-6">
          {/* Top Founder Section */}
          <div className="flex justify-center mb-20">
            <MemberCircleCard member={founder} isFounder={true} />
          </div>

          {/* Other Team Members Grid */}
          {teamMembers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 justify-items-center">
              {teamMembers.map((member, index) => (
                <MemberCircleCard key={index} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          {/* Backdrop click to dismiss */}
          <div
            className="absolute inset-0"
            onClick={() => setSelectedMember(null)}
          />

          {/* Modal Content Box */}
          <div className="relative bg-white w-full max-w-5xl rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 md:bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#a8248c] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image on Left */}
            <div className="relative w-full md:w-5/12 h-72 md:h-auto min-h-[320px] bg-gray-100 shrink-0">
              <Image
                src={selectedMember.image}
                alt={selectedMember.name}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Modal Content on Right */}
            <div className="p-8 md:p-10 flex-1 overflow-y-auto flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#a8248c] mb-2 block">
                  {selectedMember.role}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1543] mb-4">
                  {selectedMember.name}
                </h3>
                <div className="w-12 h-1 bg-[#a8248c] mb-6 rounded-full" />

                {/* Multi-Paragraph Bio Display */}
                <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed mb-8">
                  {selectedMember.bioParagraphs.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Connect:
                </span>
                {selectedMember.linkedin && (
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#a8248c] hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                )}
                {selectedMember.twitter && (
                  <a
                    href={selectedMember.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#a8248c] hover:text-white transition-colors"
                  >
                    <XIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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
    </>
  );
}