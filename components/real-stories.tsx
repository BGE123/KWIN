"use client";

import { useState } from "react";

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
    image: "/landing-page/stories1.jpg",
  },
  {
    id: "03",
    firstName: "Adaeze",
    fullName: "Adaeze Chukwu",
    role: "Business grant recipient, Enugu",
    quote:
      "The grant wasn't just money; it was someone believing in my idea enough to back it. My bakery now employs four women.",
    image: "/landing-page/stories2.jpg",
  },
  {
    id: "04",
    firstName: "Rebecca",
    fullName: "Rebecca Danjuma",
    role: "Education scholarship, Kaduna",
    quote:
      "I am the first girl in my family to finish secondary school. KWIN gave me the resources, but also the courage to keep going.",
    image: "/landing-page/stories3.png",
  },
  {
    id: "05",
    firstName: "Ifeoma",
    fullName: "Ifeoma Okafor",
    role: "TechUp industry graduate, Port Harcourt",
    quote:
      "Learning to code changed my life trajectory. I now work as a freelance developer and teach weekend classes to young girls.",
    image: "/landing-page/stories4.jpg",
  },
];

export default function RealStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = stories[activeIndex];

  return (
    <section className="w-full flex justify-center py-16 md:py-24 bg-white">
      <div className="w-full max-w-[1240px] bg-[#FCF3FC] mx-6 py-16 md:py-24 px-8 md:px-16 flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-4 block">
            REAL STORIES
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a1543]">
            In her words
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Names Navigation */}
          <div className="lg:col-span-3 flex flex-col pt-2">
            {/* DYNAMIC PROGRESS BAR */}
            <div className="flex items-center justify-between mb-8">
              <div className="relative flex-1 h-[2px] bg-gray-300 mr-4 overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-[#a8248c] transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeIndex + 1) / stories.length) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 tracking-widest transition-all">
                {activeStory.id}/0{stories.length}
              </span>
            </div>

            {/* List of Names */}
            <div className="flex flex-col gap-5">
              {stories.map((story, index) => (
                <button
                  key={story.id}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left text-2xl md:text-3xl font-serif transition-colors duration-300 ${
                    activeIndex === index
                      ? "text-[#1a1543] font-bold"
                      : "text-gray-400 hover:text-gray-600 font-normal"
                  }`}
                >
                  {story.firstName}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content Card */}
          <div className="lg:col-span-9">
            <div
              key={activeStory.id}
              className="bg-white shadow-sm flex flex-col md:flex-row animate-in fade-in duration-500"
            >
              {/* Quote Area */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <p className="text-xl md:text-2xl lg:text-3xl font-serif italic text-[#1a1543] leading-relaxed mb-8">
                  "{activeStory.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-[#1a1543] text-base">
                    {activeStory.fullName}
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    {activeStory.role}
                  </p>
                </div>
              </div>

              {/* IMAGE AREA WITH BULLETPROOF FALLBACK PLACEHOLDER */}
              <div className="relative w-full md:w-[300px] lg:w-[380px] aspect-square md:aspect-auto bg-gray-200">
                <img
                  src={activeStory.image}
                  alt={activeStory.fullName}
                  className="w-full h-full object-cover"
                  // If your local image file is missing, this immediately swaps it to a safe placeholder!
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/400x600/E5E7EB/A8248C?text=${activeStory.firstName}`;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
