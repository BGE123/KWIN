"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

type ArticleItem = {
  id: string; // Changed to string to handle combined IDs (e.g., 'art-1')
  type: "article";
  title: string;
  author: string;
  readTime: string;
  image: string;
  slug: string;
  authorImage: string;
  rawDate: number; // Used for sorting
};

type EventItem = {
  id: string;
  type: "event";
  title: string;
  date: string;
  bgColor: string;
  textColor: string;
  dateColor: string;
  slug: string;
  image: string;
  rawDate: number;
};

type GridItem = ArticleItem | EventItem;
type FilterType = "all" | "event" | "article";

export default function NewsGrid() {
  const [gridItems, setGridItems] = useState<GridItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  useEffect(() => {
    async function fetchCombinedData() {
      // Fetch both Articles and Events concurrently
      const [{ data: articlesData }, { data: eventsData }] = await Promise.all([
        supabase.from("articles").select("*").eq("status", "Published"),
        supabase
          .from("events")
          .select("*")
          .in("status", ["Upcoming", "Completed"]),
      ]);

      // Map Articles to GridItem format
      const mappedArticles: ArticleItem[] = (articlesData || []).map((a) => ({
        id: `art-${a.id}`,
        type: "article",
        title: a.title,
        author: a.author,
        readTime: a.read_time || "3 mins read",
        image: a.image_url || "/events/img2.jpg",
        slug: a.slug,
        authorImage: a.author_image || "/pic7.png",
        rawDate: new Date(a.date).getTime(),
      }));

      // Map Events to GridItem format
      const mappedEvents: EventItem[] = (eventsData || []).map((e) => {
        // Format the date nicely for the UI
        const eventDateStr = new Date(e.date).toLocaleDateString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        });

        return {
          id: `evt-${e.id}`,
          type: "event",
          title: e.title,
          date: eventDateStr,
          bgColor: e.bg_color || "bg-[#FCF3FC]",
          textColor: e.text_color || "text-[#a8248c]",
          dateColor: e.date_color || "text-[#a8248c]",
          slug: e.slug,
          image: e.image_url || "/events/img3.jpg",
          rawDate: new Date(e.date).getTime(),
        };
      });

      // Combine arrays and sort them by date (newest first)
      const combined = [...mappedArticles, ...mappedEvents].sort(
        (a, b) => b.rawDate - a.rawDate,
      );

      setGridItems(combined);
      setLoading(false);
    }

    fetchCombinedData();
  }, []);

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return gridItems.filter((item) => {
      if (activeFilter !== "all" && item.type !== activeFilter) return false;
      if (query === "") return true;
      const haystack =
        `${item.title} ${"author" in item ? item.author : ""}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [searchQuery, activeFilter, gridItems]);

  const filterButtons: { label: string; value: FilterType }[] = [
    { label: "ALL", value: "all" },
    { label: "EVENTS", value: "event" },
    { label: "ARTICLES", value: "article" },
  ];

  return (
    <section className="w-full bg-white pb-32 min-h-[500px]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-gray-200 pb-8">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full md:w-auto flex-1 max-w-md"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events and articles..."
              className="w-full border border-gray-300 border-r-0 px-4 py-3 text-sm text-[#000000] focus:outline-none focus:ring-1 focus:ring-[#a8248c]"
            />
            <button
              type="submit"
              className="bg-[#a8248c] text-white px-6 font-medium text-sm hover:bg-[#8D288D]-900 transition-colors"
            >
              Search
            </button>
          </form>

          <div className="flex gap-2">
            {filterButtons.map((btn) => (
              <button
                key={btn.value}
                onClick={() => setActiveFilter(btn.value)}
                className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 transition-colors ${
                  activeFilter === btn.value
                    ? "bg-[#a8248c] text-white"
                    : "bg-[#FCF3FC] text-[#a8248c] hover:bg-[#a8248c] hover:text-white"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-gray-500 py-12 font-medium">
            Loading KWIN updates...
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredItems.length === 0 && (
          <p className="text-sm text-gray-500 mb-8">
            No results found for &quot;{searchQuery}&quot;.
          </p>
        )}

        {/* Dynamic Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              if (item.type === "article") {
                return (
                  <Link
                    href={`/events/${item.slug}`}
                    key={item.id}
                    className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full"
                  >
                    <div className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-3">
                        ARTICLE
                      </span>
                      <h3 className="text-xl font-serif font-bold text-[#1a1543] mb-6 leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2">
                          <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                            <Image
                              src={item.authorImage}
                              alt="Author"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-[10px] font-bold text-gray-700">
                            {item.author}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-400 text-[10px] font-medium">
                          <Clock className="w-3 h-3 mr-1" /> {item.readTime}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }

              // Event Card
              return (
                <Link
                  href={`/events/${item.slug}`}
                  key={item.id}
                  className="md:col-span-2 flex flex-col sm:flex-row h-full group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="relative w-full sm:w-1/2 aspect-[4/3] sm:aspect-auto bg-gray-200 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div
                    className={`flex flex-col p-8 w-full sm:w-1/2 ${item.bgColor} justify-between`}
                  >
                    <div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest ${item.textColor} mb-4 block opacity-80`}
                      >
                        EVENT
                      </span>
                      <h3
                        className={`text-2xl font-serif font-bold ${item.textColor} leading-tight`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <div
                      className={`flex items-center mt-12 text-xs font-medium ${item.dateColor}`}
                    >
                      <Calendar className="w-4 h-4 mr-2" /> {item.date}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
