"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { X } from "lucide-react"; // Import the close icon for our modal

const filters = ["ALL", "TRAINING", "WORKSHOP", "CEREMONY", "COMMUNITY"];
const IMAGES_PER_PAGE = 4; // How many images to load at a time

type GalleryItem = {
  id: number;
  src: string;
  aspectRatio: string;
  tag: string;
  caption: string;
};

export default function GalleryGrid() {
  const [galleryImages, setGalleryImages] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("ALL");

  // New states for Pagination and Modal
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    async function fetchGallery() {
      const { data } = await supabase
        .from("gallery")
        .select("*")
        .eq("status", "Published")
        .order("date", { ascending: false });

      if (data) {
        const formattedData = data.map((item) => ({
          id: item.id,
          src: item.image_url || "/gallery/img1.jpg",
          aspectRatio: item.aspect_ratio || "aspect-square",
          tag: item.category || "COMMUNITY",
          caption: item.caption || item.title || "",
        }));
        setGalleryImages(formattedData);
      }
      setLoading(false);
    }

    fetchGallery();
  }, []);

  // Filter the images based on the active tab
  const filteredImages =
    activeFilter === "ALL"
      ? galleryImages
      : galleryImages.filter((img) => img.tag.toUpperCase() === activeFilter);

  // Slice the array to only show the "visible" amount
  const visibleImages = filteredImages.slice(0, visibleCount);

  // Handle changing filters (resets the load more count)
  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    setVisibleCount(IMAGES_PER_PAGE); // Reset back to 6 when switching tabs
  };

  return (
    <>
      <section className="w-full bg-white py-24 min-h-[500px]">
        <div className="mx-auto w-full max-w-[2000px] mx-auto px-6 md:px-[120px] px-6">
          {/* Filter Bar */}
          <div className="flex flex-wrap gap-1 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                className={`text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition-colors ${
                  activeFilter === filter
                    ? "bg-[#a8248c] text-white"
                    : "bg-[#FCF3FC] text-[#a8248c] hover:bg-[#a8248c] hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center text-gray-500 py-12 font-medium">
              Loading gallery...
            </div>
          )}

          {!loading && filteredImages.length === 0 && (
            <div className="text-center text-gray-500 py-12">
              No images found for this category.
            </div>
          )}

          {/* Masonry Grid */}
          {!loading && (
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-6">
              {visibleImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)} // Open modal on click
                  className="relative break-inside-avoid group cursor-pointer overflow-hidden bg-gray-200 rounded-lg"
                >
                  <div className={`relative w-full ${image.aspectRatio}`}>
                    <Image
                      src={image.src}
                      alt={image.caption || "Gallery image"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
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
          )}

          {/* Load More Button */}
          {!loading && visibleCount < filteredImages.length && (
            <div className="flex justify-center mt-16">
              <Button
                onClick={() =>
                  setVisibleCount((prev) => prev + IMAGES_PER_PAGE)
                }
                className="bg-[#a8248c] hover:bg-[#8D288D] text-white rounded-full px-10 py-6 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                LOAD MORE
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 🚀 THE LIGHTBOX MODAL 🚀 */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-8 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Modal Content */}
          <div className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center">
            <div className="relative w-full h-[60vh] md:h-[75vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.caption}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="mt-6 text-center max-w-2xl">
              <span className="inline-block bg-[#a8248c] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 mb-3">
                {selectedImage.tag}
              </span>
              <p className="text-white text-lg font-medium">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
