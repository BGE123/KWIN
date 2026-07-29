import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section className="w-full bg-[#FAFAFA] py-24 ">
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-20">
          {/* Left Column: Form */}
          <div className="flex flex-col bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-sm border border-gray-100">
            <h2 className="text-3xl font-serif font-bold text-[#1a1543] mb-10">
              Send us a message
            </h2>

            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Samuel Prince"
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. you@email.com"
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Your Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234"
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nigeria"
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Subject
                </label>
                <select className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] bg-white transition-colors">
                  <option>I want to donate</option>
                  <option>I want to volunteer</option>
                  <option>Partnership inquiry</option>
                  <option>General inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you'd like to in details"
                  className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] resize-none transition-colors"
                ></textarea>
              </div>

              <div className="flex justify-end mt-4">
                <Button className="bg-[#a8248c] hover:bg-purple-900 text-white rounded-full px-10 py-6 text-xs font-bold uppercase tracking-widest transition-colors w-full md:w-auto">
                  SEND MESSAGE
                </Button>
              </div>
            </form>

            <p className="text-xs text-gray-500 mt-6 font-medium text-center md:text-left leading-relaxed">
              We reply within 2 to 3 business days. Urgent grant or programme
              questions get priority
            </p>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="flex flex-col gap-8">
            {/* Info Cards */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-4 flex-1 bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                <div className="text-[#a8248c]">
                  <Mail className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">
                    Email
                  </span>
                  <a
                    href="mailto:kindlewomeninitiative@gmail.com"
                    className="text-sm font-bold text-[#1a1543] hover:text-[#a8248c] transition-colors break-all"
                  >
                    kindlewomeninitiative@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 flex-1 bg-white p-6 shadow-sm border border-gray-100 rounded-sm">
                <div className="text-[#a8248c]">
                  <MapPin className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">
                    Address
                  </span>
                  <span className="text-sm font-bold text-[#1a1543]">
                    Lagos State, Nigeria
                  </span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-full min-h-[300px] bg-gray-200 border border-gray-100 rounded-sm overflow-hidden">
              <Image
                src="/placeholder-map.jpg"
                alt="Map of Lagos"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
