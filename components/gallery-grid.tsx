"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const filters = ["ALL", "TRAINING", "WORKSHOP", "CEREMONY", "COMMUNITY"];

// ADDED: Filled out the tag and caption for every image so the hover works universally!
const galleryImages = [
  {
    id: 1,
    src: "/gallery/img1.jpg",
    aspectRatio: "aspect-[4/5]",
    tag: "Training",
    caption: "TechUp Industry graduates, Lagos cohort, March 2026",
  },
  {
    id: 2,
    src: "/gallery/img2.jpg",
    aspectRatio: "aspect-square",
    tag: "Workshop",
    caption: "Digital skills and portfolio building basics for beginners",
  },
  {
    id: 3,
    src: "/gallery/img3.jpg",
    aspectRatio: "aspect-[3/4]",
    tag: "Ceremony",
    caption: "Annual KWIN awards and community recognition event",
  },
  {
    id: 4,
    src: "/gallery/img4.jpg",
    aspectRatio: "aspect-[16/9]",
    tag: "Community",
    caption: "Mentorship outreach program at local secondary schools",
  },
  {
    id: 5,
    src: "/gallery/img5.jpg",
    aspectRatio: "aspect-[4/3]",
    tag: "Training",
    caption: "Financial literacy and business management bootcamp",
  },
  {
    id: 6,
    src: "/gallery/img6.jpg",
    aspectRatio: "aspect-square",
    tag: "Workshop",
    caption: "Business branding, packaging, and marketing strategies",
  },
  {
    id: 7,
    src: "/gallery/img7.jpg",
    aspectRatio: "aspect-[3/4]",
    tag: "Ceremony",
    caption: "End of year graduation and grant funding pitch",
  },
  {
    id: 8,
    src: "/gallery/img8.jpg",
    aspectRatio: "aspect-[4/5]",
    tag: "Community",
    caption: "Local mentorship circle meetup and networking session",
  },
  {
    id: 9,
    src: "/gallery/img9.jpg",
    aspectRatio: "aspect-square",
    tag: "Training",
    caption: "Web design and software engineering principles class",
  },
];

export default function GalleryGrid() {
  // ADDED: React state to track the active filter (defaults to "ALL")
  const [activeFilter, setActiveFilter] = useState("ALL");

  // ADDED: Logic to filter the images based on the active tab
  const filteredImages =
    activeFilter === "ALL"
      ? galleryImages
      : galleryImages.filter((img) => img.tag.toUpperCase() === activeFilter);

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-1 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              // ADDED: Click handler to update the state
              onClick={() => setActiveFilter(filter)}
              className={`text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition-colors ${
                activeFilter === filter
                  ? "bg-[#a8248c] text-white" // Active state
                  : "bg-[#FCF3FC] text-[#a8248c] hover:bg-[#a8248c] hover:text-white" // Inactive state
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        {/* Note: We map over 'filteredImages' instead of the raw 'galleryImages' */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative break-inside-avoid group cursor-pointer overflow-hidden bg-gray-200"
            >
              <div className={`relative w-full ${image.aspectRatio}`}>
                <Image
                  src={image.src}
                  alt={image.caption || "Gallery image"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay: Dark Gradient + Tag & Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end h-full w-full pointer-events-none">
                  <span className="inline-block bg-[#a8248c] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 mb-3 self-start">
                    {image.tag}
                  </span>
                  <p className="text-white text-sm md:text-base font-medium leading-snug drop-shadow-md">
                    {image.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {/* Only show "Load More" if we are on the "ALL" tab, as filtering usually reduces the list size */}
        {activeFilter === "ALL" && (
          <div className="flex justify-center mt-16">
            <Button className="bg-[#a8248c] hover:bg-[#8D288D] text-white rounded-full px-10 py-6 text-xs font-bold uppercase tracking-widest transition-colors">
              LOAD MORE
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
