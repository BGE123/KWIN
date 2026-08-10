import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

export default async function NewsEvents() {
  // Fetch the 3 most recently published articles from Supabase
  const { data: newsItems } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "Published")
    .order("date", { ascending: false })
    .limit(3);

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto w-full max-w-[2000px] mx-auto px-6 md:px-[120px] px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-4">
            News & Events
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1543] max-w-lg leading-tight">
            What's happening at KWIN
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsItems?.map((item) => (
            <Link
              href={`/events/${item.slug}`}
              key={item.id}
              className="flex flex-col group cursor-pointer"
            >
              {/* Article Image Container */}
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
                <Image
                  src={item.image_url || "/landing-page/hap1.jpg"} // Fallback image
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Article Content */}
              <h3 className="text-xl font-bold font-serif text-[#1a1543] mb-3 leading-snug group-hover:text-purple-600 transition-colors line-clamp-2">
                {item.title}
              </h3>

              <div className="text-xs text-gray-500 font-medium mb-3">
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>

              {/* Author */}
              <div className="flex items-center gap-2 mt-auto pt-2">
                <div className="relative w-5 h-5 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={item.author_image || "/pic2.png"} // Fallback image
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  {item.author}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/events">
            <button className="inline-flex items-center justify-center rounded-full bg-[#8D288D] px-8 py-3.5 text-sm font-bold text-white hover:bg-[#8D288D]-700 transition-all">
              View all news <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
