import Image from "next/image";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Empowering Girls Through Community Engagement",
    date: "Oct 10, 2025",
    author: "Bekwa Undie",
    image: "/landing-page/hap1.jpg",
    avatar: "/placeholder-avatar.jpg",
  },
  {
    id: 2,
    title: "Transformative Health Initiatives for Young Women",
    date: "Sep 12, 2025",
    author: "Bekwa Undie",
    image: "/landing-page/hap2.jpg",
    avatar: "/placeholder-avatar.jpg",
  },
  {
    id: 3,
    title: "Collaborative Efforts to Enhance Community Support",
    date: "Sep 15, 2025",
    author: "Bekwa Undie",
    image: "/landing-page/hap3.jpg",
    avatar: "/placeholder-avatar.jpg",
  },
];

export default function NewsEvents() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6">
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
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              {/* Article Image Container */}
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Article Content */}
              <h3 className="text-xl font-bold font-serif text-[#1a1543] mb-3 leading-snug group-hover:text-purple-600 transition-colors">
                {item.title}
              </h3>

              <div className="text-xs text-gray-500 font-medium mb-3">
                {item.date}
              </div>

              {/* Author */}
              <div className="flex items-center gap-2 mt-auto pt-2">
                <div className="relative w-5 h-5 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-semibold text-gray-700">
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-purple-700 transition-all">
            View all news <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
