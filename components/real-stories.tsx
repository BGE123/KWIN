"use client";

import { useState } from "react";
import Image from "next/image";

// The data structure holding all the testimonials
const stories = [
  {
    id: "01",
    firstName: "Cynthia",
    fullName: "Cynthia Ofore",
    role: "TechUp industry graduate, Lagos",
    quote:
      "Before KWIN, I didn't think tailoring could be a business. I thought it was just a skill. Now I run my own shop and I'm training two other girls from my community",
    image: "/landing-page/herwords.jpg",
  },
  {
    id: "02",
    firstName: "Bimbo",
    fullName: "Bimbo Adeyemi",
    role: "Mentorship programme, Abuja",
    quote:
      "Having a mentor who looked like me and had achieved what I wanted to achieve changed my entire perspective on what is possible.",
    image: "/placeholder-bimbo.jpg",
  },
  {
    id: "03",
    firstName: "Adaeze",
    fullName: "Adaeze Chukwu",
    role: "Business grant recipient, Enugu",
    quote:
      "The grant wasn't just money; it was someone believing in my idea enough to back it. My bakery now employs four women.",
    image: "/placeholder-adaeze.jpg",
  },
  {
    id: "04",
    firstName: "Rebecca",
    fullName: "Rebecca Danjuma",
    role: "Education scholarship, Kaduna",
    quote:
      "I am the first girl in my family to finish secondary school. KWIN gave me the resources, but also the courage to keep going.",
    image: "/placeholder-rebecca.jpg",
  },
  {
    id: "05",
    firstName: "Ifeoma",
    fullName: "Ifeoma Okafor",
    role: "TechUp industry graduate, Port Harcourt",
    quote:
      "Learning to code changed my life trajectory. I now work as a freelance developer and teach weekend classes to young girls.",
    image: "/placeholder-ifeoma.jpg",
  },
];

export default function RealStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  return (
    <section className="w-full bg-[#FCFAFF] py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">
            Real Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#200920]">
            In [her] words
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Names Navigation */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Progress Indicator & Decorative Line */}
            <div className="flex justify-between items-end border-b border-gray-200 mb-6 pb-2 relative">
              <div
                className="absolute bottom-[-1px] left-0 h-[2px] bg-purple-800 transition-all duration-500 ease-in-out"
                style={{ width: "33.33%" }} // Static width to match Figma's short purple line
              />
              <span className="text-sm font-medium text-gray-400 ml-auto">
                {activeStory.id}/05
              </span>
            </div>

            {/* List of Names */}
            <div className="flex flex-col gap-4">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left text-2xl md:text-3xl font-serif transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-[#200920] font-bold"
                      : "text-gray-400 hover:text-gray-600 font-medium"
                  }`}
                >
                  {story.firstName}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content Card */}
          <div className="lg:col-span-8">
            <div
              // Using a key forces React to re-animate the fade when the index changes
              key={activeStory.id}
              className="bg-white flex flex-col md:flex-row min-h-[400px] animate-in fade-in duration-500"
            >
              {/* Quote Area */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <p className="text-xl md:text-2xl font-serif italic text-[#200920] mb-10 leading-relaxed">
                  "{activeStory.quote}"
                </p>
                <div>
                  <h4 className="text-sm font-bold text-[#200920] mb-1">
                    {activeStory.fullName}
                  </h4>
                  <p className="text-xs text-gray-500">{activeStory.role}</p>
                </div>
              </div>

              {/* Image Area */}
              <div className="relative w-full md:w-2/5 aspect-square md:aspect-auto bg-gray-100">
                <Image
                  src={activeStory.image}
                  alt={activeStory.fullName}
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
