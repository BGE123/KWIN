import Image from "next/image";
import { Button } from "@/components/ui/button";

const filters = ["ALL", "TRAINING", "WORKSHOP", "CEREMONY", "COMMUNITY"];

const galleryImages = [
  {
    id: 1,
    src: "/gallery/img1.jpg",
    aspectRatio: "aspect-[4/5]", // Taller image
    tag: "Training",
    caption: "TechUp Industry graduates, Lagos cohort, March 2026",
  },
  {
    id: 2,
    src: "/gallery/img2.jpg",
    aspectRatio: "aspect-square", // Square image
  },
  {
    id: 3,
    src: "/gallery/img3.jpg",
    aspectRatio: "aspect-[3/4]", // Portrait image
  },
  {
    id: 4,
    src: "/gallery/img4.jpg",
    aspectRatio: "aspect-[16/9]", // Wide image
  },
  {
    id: 5,
    src: "/gallery/img5.jpg",
    aspectRatio: "aspect-[4/3]", // Standard image
  },
  {
    id: 6,
    src: "/gallery/img6.jpg",
    aspectRatio: "aspect-square",
  },
  {
    id: 7,
    src: "/gallery/img7.jpg",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: 8,
    src: "/gallery/img8.jpg",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 9,
    src: "/gallery/img9.jpg",
    aspectRatio: "aspect-square",
  },
];

export default function GalleryGrid() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-1 mb-12">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition-colors ${
                index === 0
                  ? "bg-[#a8248c] text-white"
                  : "bg-[#FCF3FC] text-[#a8248c] hover:bg-[#a8248c] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative break-inside-avoid group cursor-pointer overflow-hidden bg-gray-200"
            >
              <div className={`relative w-full ${image.aspectRatio}`}>
                <Image
                  src={image.src}
                  alt="Gallery image"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Optional Overlay for Caption (Only shows if caption exists) */}
                {image.caption && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end h-full">
                      <span className="inline-block bg-[#00AEEF] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 mb-2 self-start">
                        {image.tag}
                      </span>
                      <p className="text-white text-sm font-medium leading-snug">
                        {image.caption}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-16">
          <Button className="bg-[#a8248c] hover:bg-purple-900 text-white rounded-full px-10 py-6 text-xs font-bold uppercase tracking-widest transition-colors">
            LOAD MORE
          </Button>
        </div>
      </div>
    </section>
  );
}
