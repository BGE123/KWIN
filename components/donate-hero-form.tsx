import Image from "next/image";
import { Button } from "@/components/ui/button";

const amounts = [
  "₦1,000",
  "₦5,000",
  "₦10,000",
  "₦15,000",
  "₦20,000",
  "₦25,000",
  "₦30,000",
  "₦35,000",
  "₦40,000",
  "₦45,000",
  "₦50,000",
  "₦100,000",
];

export default function DonateHeroForm() {
  return (
    <section className="w-full bg-[#FCFAFF] pt-32 pb-24">
      {/* 1. Hero Section */}
      <div className="mx-auto max-w-[1440px] px-6 mb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          <div className="hidden lg:block w-1/4 h-[300px] relative bg-gray-200">
            <Image
              src="/donate/img1.jpg"
              alt="Students walking"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-2/4 flex flex-col items-center text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-6">
              GET INVOLVED
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#1a1543] mb-6 leading-tight">
              However you give, <br /> it matters
            </h1>
            <p className="text-gray-600 text-sm md:text-base max-w-md">
              Money, time, or your organisation's reach. Choose the way you want
              to support KWIN.
            </p>
          </div>

          <div className="hidden lg:block w-1/4 h-[300px] relative bg-gray-200">
            <Image
              src="/donate/img2.jpg"
              alt="Student smiling"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. Form & Impact Section */}
      <div className="mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text & Table */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-4">
              DONATE
            </span>
            <h2 className="text-4xl font-serif font-bold text-[#1a1543] mb-6 leading-tight">
              Fund a girl's education, mentorship, or grant
            </h2>
            <p className="text-sm text-gray-600 mb-10 leading-relaxed">
              A one-time or monthly gift goes straight into training,
              mentorship, and grants. See exactly what your amount provides
              before you give.
            </p>

            {/* Impact Table */}
            <div className="w-full border-t border-gray-200">
              <div className="flex border-b border-gray-200 py-4 font-bold text-xs text-[#1a1543]">
                <div className="w-1/3">Amount</div>
                <div className="w-2/3">What it provides</div>
              </div>
              <div className="flex border-b border-gray-200 py-4 text-sm text-gray-600 items-start">
                <div className="w-1/3 font-bold text-[#a8248c]">₦5,000</div>
                <div className="w-2/3">
                  One week of mentorship for a girl in our programme
                </div>
              </div>
              <div className="flex border-b border-gray-200 py-4 text-sm text-gray-600 items-start">
                <div className="w-1/3 font-bold text-[#a8248c]">₦50,000</div>
                <div className="w-2/3">
                  A partial grant toward a beneficiary's small business launch
                </div>
              </div>
            </div>
          </div>

          {/* Right: Donation Widget */}
          <div className="bg-white p-8 md:p-10 shadow-[0_20px_50px_rgb(0,0,0,0.05)] rounded-sm border border-gray-100 flex flex-col items-center">
            {/* Toggle */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs font-bold text-gray-400">One-Time</span>
              <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
              </div>
              <span className="text-xs font-bold text-[#1a1543]">Monthly</span>
            </div>

            <h3 className="text-lg font-bold text-[#1a1543] mb-6">
              Select an amount
            </h3>

            {/* Amount Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 w-full mb-6">
              {amounts.map((amount, idx) => (
                <button
                  key={idx}
                  className={`py-3 text-xs font-bold rounded-sm border transition-colors ${idx === 1 ? "bg-[#92287A] text-white border-[#92287A]" : "bg-[#FCF3FC] text-[#92287A] border-transparent hover:border-[#92287A]/30"}`}
                >
                  {amount}
                </button>
              ))}
            </div>

            {/* Custom Input & Button */}
            <div className="w-full flex flex-col gap-4 mt-2">
              <input
                type="text"
                placeholder="Enter custom amount"
                className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] text-center bg-[#FAFAFA]"
              />
              <Button className="w-full bg-[#00AEEF] hover:bg-blue-600 text-white font-bold text-xs uppercase tracking-widest py-6 rounded-full transition-colors">
                DONATE ₦5,000
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
