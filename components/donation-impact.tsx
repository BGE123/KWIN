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
    <section className="w-full bg-[#200920] pt-24 pb-12">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* Top Half: 80% Donation Stat */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              80% of every donation goes directly to programmes
            </h2>
            <p className="text-sm text-gray-300 mb-8 leading-relaxed">
              80% Programmes · 15% Administration · 5% Scaling & operations. Our
              impact reports and third-party audits are public, because trust
              has to be earned in the open.
            </p>
            <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#200920] rounded-full px-8 py-6 text-xs font-bold uppercase tracking-widest transition-colors">
              DONATE NOW
            </Button>
          </div>

          <div className="relative w-full aspect-[4/3] md:aspect-[5/4] bg-gray-800">
            {/* Placeholder Image */}
            <Image
              src="/landing-page/don.jpg"
              alt="Community impact"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Half: Impact Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white max-w-sm leading-tight">
              Know exactly what your gift does.
            </h2>
          </div>

          <div className="lg:col-span-7">
            {/* Table Header */}
            <div className="flex pb-4 border-b border-white/20">
              <div className="w-32 text-xs font-bold text-white">Amount</div>
              <div className="flex-1 text-xs font-bold text-white">
                What it provides
              </div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col">
              {impactTiers.map((tier, index) => (
                <div
                  key={index}
                  className="flex py-6 border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <div className="w-32 text-sm text-gray-300 font-medium">
                    {tier.amount}
                  </div>
                  <div className="flex-1 text-sm text-gray-300">
                    {tier.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
