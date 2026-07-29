import Image from "next/image";
import Link from "next/link";
import { Search, Clock, Calendar } from "lucide-react";

// Added a 'slug' property to each clickable item!
const gridItems = [
  {
    id: 1,
    type: "article",
    title: "Empowering Girls Through Community Engagement",
    author: "Bekwa Undie",
    readTime: "3 mins read",
    image: "/events/img2.jpg",
    slug: "empowering-girls-through-community-engagement",
  },
  {
    id: 2,
    type: "image",
    image: "/events/img3.jpg",
  },
  {
    id: 3,
    type: "event",
    title: "Annual TechUp Showcase and Grant Pitch",
    date: "Jul 12 - July 16 2026",
    bgColor: "bg-[#FCF3FC]",
    textColor: "text-[#a8248c]",
    dateColor: "text-[#a8248c]",
    slug: "annual-techup-showcase-2026",
  },
  {
    id: 4,
    type: "image",
    image: "/events/img4.jpg",
  },
  {
    id: 5,
    type: "event",
    title: "Mentorship Drive: Calling All Industry Leaders",
    date: "Aug 01 - Aug 30 2026",
    bgColor: "bg-[#00AEEF]",
    textColor: "text-white",
    dateColor: "text-white/80",
    slug: "mentorship-drive-2026",
  },
  {
    id: 6,
    type: "article",
    title: "Breaking Barriers: Inspiring Journeys of Nigerian Women",
    author: "Bekwa Undie",
    readTime: "4 mins read",
    image: "/events/img5.jpg",
    slug: "breaking-barriers-inspiring-journeys",
  },
  {
    id: 7,
    type: "article",
    title: "Building Futures: The Impact of Education on Girls' Lives",
    author: "Bekwa Undie",
    readTime: "5 mins read",
    image: "/events/img6.jpg",
    slug: "building-futures-impact-of-education",
  },
  {
    id: 8,
    type: "article",
    title: "Voices of Strength: Celebrating Women Who Lead",
    author: "Bekwa Undie",
    readTime: "3 mins read",
    image: "/events/img7.jpg",
    slug: "voices-of-strength-women-who-lead",
  },
  {
    id: 9,
    type: "article",
    title: "From Classroom to Boardroom: A KWIN Success Story",
    author: "Bekwa Undie",
    readTime: "6 mins read",
    image: "/events/img8.jpg",
    slug: "from-classroom-to-boardroom-success",
  },
];

export default function NewsGrid() {
  return (
    <section className="w-full bg-white pb-32">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-gray-200 pb-8">
          <div className="flex w-full md:w-auto flex-1 max-w-md">
            <input
              type="text"
              placeholder="Search events and articles..."
              className="w-full border border-gray-300 border-r-0 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#a8248c]"
            />
            <button className="bg-[#a8248c] text-white px-6 font-medium text-sm hover:bg-purple-900 transition-colors">
              Search
            </button>
          </div>

          <div className="flex gap-2">
            <button className="bg-[#a8248c] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2">
              ALL
            </button>
            <button className="bg-[#FCF3FC] text-[#a8248c] text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-[#a8248c] hover:text-white transition-colors">
              EVENTS
            </button>
            <button className="bg-[#FCF3FC] text-[#a8248c] text-[10px] font-bold uppercase tracking-widest px-4 py-2 hover:bg-[#a8248c] hover:text-white transition-colors">
              ARTICLES
            </button>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridItems.map((item) => {
            // 1. Render Article Card (Now a Link!)
            if (item.type === "article") {
              return (
                <Link
                  href={`/events/${item.slug}`}
                  key={item.id}
                  className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full"
                >
                  <div className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
                    <Image
                      src={item.image!}
                      alt={item.title!}
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
                            src="/placeholder-avatar.jpg"
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

            // 2. Render Event Card (Now a Link!)
            if (item.type === "event") {
              return (
                <Link
                  href={`/events/${item.slug}`}
                  key={item.id}
                  className={`flex flex-col p-8 ${item.bgColor} h-full justify-between hover:-translate-y-1 transition-transform duration-300`}
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
                </Link>
              );
            }

            // 3. Render Photo-only Card (Not clickable)
            if (item.type === "image") {
              return (
                <div
                  key={item.id}
                  className="relative w-full h-full min-h-[300px] bg-gray-200"
                >
                  <Image
                    src={item.image!}
                    alt="Gallery image"
                    fill
                    className="object-cover"
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
