import Image from "next/image";
import { Button } from "@/components/ui/button";

const impactTiers = [
  {
    amount: "₦5,000",
    description: "One week of mentorship for a girl in our programme",
  },
  {
    amount: "₦20,000",
    description: "A full TechUp skills training module for one participant",
  },
  {
    amount: "₦50,000",
    description: "A partial grant toward a beneficiary's small business launch",
  },
  {
    amount: "Custom",
    description: "Tell us your amount, we'll show you the impact",
  },
];

export default function DonationImpact() {
  return (
    <div className="w-full flex flex-col">
      {/* =========================================
          TOP HALF: Dark Background
          ========================================= */}
      <section className="w-full bg-[#200920] flex justify-center">
        <div className="w-full max-w-7xl pl-6 pr-6 lg:pr-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Text Block */}
          <div className="lg:col-span-5 py-16 lg:py-32 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              80% of every donation goes directly to programmes
            </h2>
            <p className="text-base text-gray-300 mb-10 leading-relaxed">
              80% Programmes · 15% Administration · 5% Scaling & operations. Our
              impact reports and third-party audits are public, because trust
              has to be earned in the open.
            </p>
            <div>
              <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#200920] rounded-full px-10 py-6 text-xs font-bold uppercase tracking-widest transition-colors">
                DONATE NOW
              </Button>
            </div>
          </div>

          {/* Right: Image Pushed Down */}
          {/* THE FIX: Added pt-12 lg:pt-32 to push the image down so it aligns with the text! */}
          <div className="lg:col-span-7 flex flex-col pt-12 lg:pt-32">
            {/* Added lg:-mb-16 and z-10 so it slightly overlaps into the bottom section just like Figma */}
            <div className="relative w-full flex-1 min-h-[400px] lg:min-h-[500px] lg:-mb-16 z-10 bg-gray-800 shadow-2xl">
              <Image
                src="/landing-page/don.jpg"
                alt="Community impact"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BOTTOM HALF: Lighter Purple + Table Grid 
          ========================================= */}
      {/* Added relative z-0 so the image above can overlap on top of this background */}
      <section className="w-full bg-[#381138] flex justify-center py-20 lg:py-32 relative z-0">
        <div className="w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Title aligned with the top text */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold text-white leading-tight">
              Know exactly what your gift does.
            </h2>
          </div>

          {/* Right: Table aligned perfectly with the image above it */}
          <div className="lg:col-span-7">
            {/* Table Header */}
            <div className="flex pb-4 border-b-2 border-[#CCCCCC] mb-2">
              <div className="w-32 md:w-40 text-lg font-bold text-white">
                Amount
              </div>
              <div className="flex-1 text-lg font-bold text-white">
                What it provides
              </div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col">
              {impactTiers.map((tier, index) => (
                <div
                  key={index}
                  className="flex py-6 border-b-[0.5px] border-[#CCCCCC] hover:bg-white/5 transition-colors items-start"
                >
                  {/* Amount Column */}
                  <div className="w-32 md:w-40 text-lg text-white font-medium">
                    {tier.amount}
                  </div>
                  {/* Description Column */}
                  <div className="flex-1 text-lg text-gray-200">
                    {tier.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
