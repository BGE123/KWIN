"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";

const filters = ["ALL", "TRAINING", "WORKSHOP", "CEREMONY", "COMMUNITY"];

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

  const filteredImages =
    activeFilter === "ALL"
      ? galleryImages
      : galleryImages.filter((img) => img.tag.toUpperCase() === activeFilter);

  return (
    <section className="w-full bg-white py-24 min-h-[500px]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-1 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
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
            {filteredImages.map((image) => (
              <div
                key={image.id}
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
        {activeFilter === "ALL" && galleryImages.length > 0 && (
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
