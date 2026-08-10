import Image from "next/image";
import { Clock } from "lucide-react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function NewsHero() {
  return (
    <section className="w-full bg-white pt-32 pb-16">
      <div className="mx-auto w-full max-w-[2000px] mx-auto px-6 md:px-[120px] px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
          {/* Left Side: Header Text */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-widest text-[#a8248c] mb-6">
              EVENTS & NEWS
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1a1543] mb-6 leading-tight">
              What's happening <br /> at{" "}
              <span className="text-[#a8248c]">KWIN</span>
            </h1>
            <p className="text-gray-600 text-lg mb-12 max-w-md">
              Upcoming events, programme updates, and stories from the field,
              all in one place.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 mr-2 font-medium">
                Follow us on:
              </span>
              <div className="flex gap-2">
                {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="bg-[#1a1543] text-white p-2 rounded-sm hover:bg-[#a8248c] transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Top Article Card */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-white shadow-[0_20px_50px_rgb(0,0,0,0.1)] rounded-sm border border-gray-100 overflow-hidden">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 bg-white border border-gray-200 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#a8248c] shadow-sm">
                Top article
              </div>

              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-gray-200">
                <Image
                  src="/events/img1.jpg"
                  alt="Top article image"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold text-[#1a1543] mb-8 leading-tight">
                  Empowering Girls Through Community Engagement
                </h3>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src="/pic4.jpg"
                        alt="Author"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-bold text-gray-700">
                      Bekwa Undie
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5 mr-1" /> 5 mins read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
