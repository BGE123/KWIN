"use client";

import { useState } from "react";
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

const impactRows = [
  {
    amount: "₦1,000",
    provides: "One week of mentorship for a girl in our programme",
  },
  {
    amount: "₦2,000",
    provides: "A full TechUp skills training module for one participant",
  },
  {
    amount: "₦5,000",
    provides: "A partial grant toward a beneficiary's small business launch",
  },
  {
    amount: "₦8,000",
    provides: "A partial grant toward a beneficiary's small business launch",
  },
];

export default function DonateHeroForm() {
  const [selectedAmount, setSelectedAmount] = useState("₦5,000");
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);

  const handlePresetClick = (amount: string) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(`₦${Number(value).toLocaleString()}`);
    }
  };

  const displayAmount = customAmount
    ? `₦${Number(customAmount).toLocaleString()}`
    : selectedAmount;

  return (
    <section className="w-full bg-[#FCFAFF] pt-32">
      {/* 1. Hero Section */}
      <div className="mx-auto w-full max-w-[2000px] mx-auto px-6 md:px-[120px] px-6 mb-32">
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
              src="/donate/img8.jpg"
              alt="Student smiling"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* 2. Form & Impact Section */}
      <section className="w-full flex justify-center py-16 md:py-24 bg-[#FCF3FC]">
        <div className="w-full flex flex-col w-full max-w-[2000px] mx-auto px-6 md:px-[120px] px-6">
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
              <div className="w-full border-t border-gray-200 bg-[#FFFFFF]">
                <div className="hidden sm:flex border-b border-gray-200 py-4 font-bold text-xs text-[#1a1543]">
                  <div className="w-1/3">Amount</div>
                  <div className="w-2/3">What it provides</div>
                </div>
                {impactRows.map((row, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row border-b border-gray-200 py-4 text-sm text-gray-600 items-start gap-1 sm:gap-0"
                  >
                    <div className="w-full sm:w-1/3 font-bold text-[#a8248c]">
                      {row.amount}
                    </div>
                    <div className="w-full sm:w-2/3">{row.provides}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: ONE unified card */}
            <div className="w-full bg-white shadow-[0_20px_50px_rgb(0,0,0,0.06)] overflow-hidden">
              {/* Toggle bar */}
              <div className="flex items-center gap-3 px-8 md:px-10 py-6 border-b border-gray-100 max-w-1xl">
                <span
                  className={`text-sm font-bold cursor-pointer ${!isMonthly ? "text-[#1a1543]" : "text-gray-400"}`}
                  onClick={() => setIsMonthly(false)}
                >
                  One-Time
                </span>
                <div
                  className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer"
                  onClick={() => setIsMonthly((prev) => !prev)}
                >
                  <div
                    className={`w-5 h-5 bg-white border border-gray-300 rounded-full absolute top-0.5 shadow-sm transition-all ${isMonthly ? "left-[26px]" : "left-0.5"}`}
                  ></div>
                </div>
                <span
                  className={`text-sm font-bold cursor-pointer ${isMonthly ? "text-[#1a1543]" : "text-gray-400"}`}
                  onClick={() => setIsMonthly(true)}
                >
                  Monthly
                </span>
              </div>

              {/* Amount selection */}
              <div className="p-8 md:p-10 flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1a1543] mb-8">
                  Select an amount
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 w-full mb-6">
                  {amounts.map((amount, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handlePresetClick(amount)}
                      className={`py-2 px-0.5 text-sm font-semibold rounded-lg transition-colors ${
                        !customAmount && selectedAmount === amount
                          ? "bg-[#92287A] text-white"
                          : "bg-[#F5E7F3] text-[#92287A] hover:bg-[#92287A]/10"
                      }`}
                    >
                      {amount}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  inputMode="numeric"
                  value={customAmount}
                  onChange={handleCustomChange}
                  placeholder="Enter custom amount"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#a8248c] text-center bg-white mb-6"
                />

                <Button
                  type="button"
                  className="w-auto min-w-[220px] bg-[#92287A] hover:bg-[#7a2067] text-white font-bold text-xs uppercase tracking-widest py-6 px-10 rounded-full transition-colors"
                >
                  DONATE {displayAmount}
                  {isMonthly ? "/MONTH" : ""}
                </Button>

                <div className="flex items-center justify-center gap-6 mt-6">
                  <Image
                    src="/donate/logo1.png"
                    alt="Secure"
                    width={100}
                    height={40}
                    className="object-contain h-5 w-auto"
                  />
                  <Image
                    src="/donate/logo2.png"
                    alt="PCI-DSS Compliant"
                    width={100}
                    height={40}
                    className="object-contain h-5 w-auto"
                  />
                  <Image
                    src="/donate/logo3.png"
                    alt="Paystack"
                    width={100}
                    height={40}
                    className="object-contain h-5 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
