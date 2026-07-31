import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const currentSlug = params.slug;
  // Add this inside your component, before the return statement
  const relatedArticles = [
    {
      id: "1",
      slug: "empowering-girls-community",
      category: "ARTICLE",
      title: "Empowering Girls Through Community Engagement",
      image: "/events/img5.jpg", // Replace with your actual image paths
      author: "Bekwa Undie",
      authorImage: "/pic5.png",
      readTime: "3 mins read",
    },
    {
      id: "2",
      slug: "building-sustainable-businesses",
      category: "NEWS",
      title: "Building Sustainable Businesses for Tomorrow",
      image: "/events/img2.jpg",
      author: "Amina Yusuf",
      authorImage: "/pic2.png",
      readTime: "5 mins read",
    },
    {
      id: "3",
      slug: "tech-skills-future",
      category: "EVENT",
      title: "Why Tech Skills are Crucial for the Future",
      image: "/events/img3.jpg",
      author: "Sarah Johnson",
      authorImage: "/pic1.png",
      readTime: "4 mins read",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* PART 1: Article Header */}
      <section className="mx-auto max-w-7xl px-6 pt-32 pb-10 w-full">
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-6 block">
          EVENT
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a1543] mb-8 leading-tight max-w-4xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h1>

        {/* Author & Meta Data */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
              <Image
                src="/pic1.jpg"
                alt="Bekwa Undie"
                fill
                className="object-cover"
              />
            </div>
            <span>
              By <strong className="text-gray-900">Bekwa Undie</strong>
            </span>
          </div>
          <span className="hidden sm:inline">|</span>
          <span>Published on November 14, 2022</span>
          <span className="hidden sm:inline">|</span>
          <span className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1" /> 3 min read
          </span>
        </div>
      </section>

      {/* PART 2: Main Hero Image */}
      <section className="mx-auto max-w-7xl px-6 mb-16 w-full">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-gray-200 overflow-hidden">
          <Image
            src="/events/img9.jpg"
            alt="Group of girls talking"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* PART 3: Content & Sidebar Grid */}
      <section className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 w-full">
        {/* Left Column: Article Body */}
        <div className="lg:col-span-8 flex flex-col gap-6 text-gray-600 leading-relaxed text-sm md:text-base">
          <p>
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam imperdiet augue. Vestibulum auctor ornare leo, non
            suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
            maximus ante fermentum sit amet. Pellentesque commodo lacus at
            sodales sodales.
          </p>
          <p>
            Quisque sagittis orci ut diam condimentum, vel euismod erat
            placerat. In iaculis arcu eros, eget tempus orci facilisis id. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
            Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
            mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis
            tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
            non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
            maximus ante fermentum sit amet.
          </p>

          {/* Inline Image */}
          <div className="relative w-full aspect-[4/3] bg-gray-200 my-8 overflow-hidden">
            <Image
              src="/events/img11.jpg"
              alt="Girls in grayscale"
              fill
              className="object-cover grayscale"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1543] mt-4 mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p>
            Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci
            ut diam condimentum, vel euismod erat placerat. In iaculis arcu
            eros, eget tempus orci facilisis id. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit
            urna. Pellentesque sit amet sapien fringilla, mattis ligula
            consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </p>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-12">
          {/* Popular Posts */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6 border-b border-gray-100 pb-3">
              POPULAR POSTS
            </h3>
            <div className="flex flex-col gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Link
                  href="#"
                  key={item}
                  className="flex gap-4 items-center group"
                >
                  <div className="relative w-20 h-20 bg-gray-200 flex-shrink-0 overflow-hidden">
                    <Image
                      src="/events/img10.jpg"
                      alt="Thumbnail"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#a8248c]">
                      ARTICLE
                    </span>
                    <h4 className="text-sm font-bold text-[#1a1543] leading-snug line-clamp-2 group-hover:text-[#a8248c] transition-colors">
                      Empowering Women: Stories of Change and Resilience
                    </h4>
                    <span className="text-[10px] text-gray-400 flex items-center font-medium">
                      <Clock className="w-3 h-3 mr-1" /> 3 mins read
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-[#a8248c] p-8 md:p-10 text-center flex flex-col items-center">
            <h3 className="text-2xl font-serif font-bold text-white mb-8 leading-snug">
              Ready to start, or ready to help someone else start?
            </h3>
            <Link href="/programmes">
              <Button className="w-full bg-white text-[#a8248c] hover:bg-gray-100 rounded-full font-bold text-xs uppercase tracking-widest mb-4 py-6 transition-colors">
                APPLY FOR PROGRAMME
              </Button>
            </Link>
            <Button className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-bold text-xs uppercase tracking-widest py-6 transition-colors">
              PARTNER WITH US
            </Button>
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
            {/* Map over your dynamic array here */}
            {relatedArticles.map((article) => (
              <Link
                href={`/articles/${article.slug}`} // Dynamically routes to the article
                key={article.id}
                className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group h-full"
              >
                {/* Dynamic Article Image */}
                <div className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Dynamic Category */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-3">
                    {article.category}
                  </span>

                  {/* Dynamic Title */}
                  <h3 className="text-lg font-serif font-bold text-[#1a1543] mb-6 leading-snug group-hover:text-[#a8248c] transition-colors">
                    {article.title}
                  </h3>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      {/* Dynamic Author Image */}
                      <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src={article.authorImage}
                          alt={article.author}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Dynamic Author Name */}
                      <span className="text-[10px] font-bold text-gray-700">
                        {article.author}
                      </span>
                    </div>

                    {/* Dynamic Read Time */}
                    <div className="flex items-center text-gray-400 text-[10px] font-medium">
                      <Clock className="w-3 h-3 mr-1" /> {article.readTime}
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
