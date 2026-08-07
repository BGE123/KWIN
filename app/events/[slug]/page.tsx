import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>; // Next.js 15 requires params to be a Promise
}) {
  // 1. Await the params first!
  const resolvedParams = await params;

  // 2. Translate URL encoding (like %20) back to normal text
  const currentSlug = decodeURIComponent(resolvedParams.slug);

  // 3. Try to fetch from the ARTICLES table first
  let { data: contentItem } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", currentSlug)
    .single();

  // 4. If it's not an article, try fetching from the EVENTS table!
  if (!contentItem) {
    const { data: eventItem } = await supabase
      .from("events")
      .select("*")
      .eq("slug", currentSlug)
      .single();

    contentItem = eventItem; // Assign the event data to our main variable
  }

  // 5. If NEITHER table has it, show 404
  if (!contentItem) {
    notFound();
  }

  // 6. Fetch 3 related articles for the sidebar/bottom grids
  const { data: relatedArticles } = await supabase
    .from("articles")
    .select("*")
    .eq("status", "Published")
    .neq("slug", currentSlug) // Don't show the current article in the related list
    .limit(3);

  // 7. Normalize data safely (since Events and Articles have slightly different DB columns)
  const displayCategory =
    contentItem.category || (contentItem.location ? "EVENT" : "ARTICLE");
  const displayTitle = contentItem.title;
  const displayAuthor = contentItem.author || "KWIN Team";
  const displayAvatar = contentItem.author_image || "/pic1.png";
  const displayDate = new Date(contentItem.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const displayReadTime =
    contentItem.read_time ||
    (contentItem.location ? "Event Details" : "3 min read");
  const displayImage = contentItem.image_url || "/events/img9.jpg";
  const displayContent =
    contentItem.content ||
    contentItem.description ||
    "More details coming soon.";

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* PART 1: Article Header */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-10 w-full">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-6 block">
          {displayCategory}
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a1543] mb-8 leading-tight max-w-4xl">
          {displayTitle}
        </h1>

        {/* Author & Meta Data */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={displayAvatar}
                alt={displayAuthor}
                fill
                className="object-cover"
              />
            </div>
            <span>
              By <strong className="text-gray-900">{displayAuthor}</strong>
            </span>
          </div>
          <span className="hidden sm:inline">|</span>
          <span>
            {contentItem.location ? "Event Date: " : "Published on "}
            {displayDate}
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center">
            {contentItem.location ? (
              <Calendar className="w-3.5 h-3.5 mr-1" />
            ) : (
              <Clock className="w-3.5 h-3.5 mr-1" />
            )}
            {displayReadTime}
          </span>
        </div>
      </section>

      {/* PART 2: Main Hero Image */}
      <section className="mx-auto max-w-7xl px-6 mb-16 w-full">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-200 overflow-hidden rounded-xl">
          <Image
            src={displayImage}
            alt={displayTitle}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* PART 3: Content & Sidebar Grid */}
      <section className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 w-full">
        {/* Left Column: Article Body */}
        <div className="lg:col-span-8 flex flex-col gap-6 text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
          {displayContent}
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          {/* Popular Posts */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-3">
              LATEST POSTS
            </h3>
            <div className="flex flex-col gap-6">
              {relatedArticles?.map((item) => (
                <Link
                  href={`/events/${item.slug}`}
                  key={item.id}
                  className="flex gap-4 items-center group"
                >
                  <div className="relative w-20 h-20 bg-gray-200 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.image_url || "/events/img10.jpg"}
                      alt="Thumbnail"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#a8248c]">
                      {item.category || "ARTICLE"}
                    </span>
                    <h4 className="text-sm font-bold text-[#1a1543] leading-snug line-clamp-2 group-hover:text-[#a8248c] transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-[10px] text-gray-400 flex items-center font-medium">
                      <Clock className="w-3 h-3 mr-1" />{" "}
                      {item.read_time || "3 mins read"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#a8248c] p-8 md:p-10 text-center flex flex-col items-center rounded-2xl">
            <h3 className="text-2xl font-serif font-bold text-white mb-8 leading-snug">
              Ready to start, or ready to help someone else start?
            </h3>
            <Link href="/apply-programme" className="w-full">
              <Button className="w-full bg-white text-[#a8248c] hover:bg-gray-100 rounded-full font-bold text-xs uppercase tracking-widest mb-4 py-6 transition-colors">
                APPLY FOR PROGRAMME
              </Button>
            </Link>
            <Link href="/contact" className="w-full">
              <Button className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-bold text-xs uppercase tracking-widest py-6 transition-colors">
                PARTNER WITH US
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PART 4: Related Articles Grid */}
      <section className="w-full bg-[#FCFAFF] py-24 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-8 border-b border-gray-200 pb-3">
            HERE ARE SOME RELATED ARTICLES YOU MAY FIND INTERESTING
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles?.map((item) => (
              <Link
                href={`/events/${item.slug}`}
                key={item.id}
                className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full rounded-xl overflow-hidden"
              >
                <div className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
                  <Image
                    src={item.image_url || "/events/img5.jpg"}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-3">
                    {item.category || "ARTICLE"}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#1a1543] mb-6 leading-snug group-hover:text-[#a8248c] transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src={item.author_image || "/pic5.png"}
                          alt={item.author || "Author"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-gray-700">
                        {item.author || "KWIN Team"}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400 text-[10px] font-medium">
                      <Clock className="w-3 h-3 mr-1" />{" "}
                      {item.read_time || "3 mins read"}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
