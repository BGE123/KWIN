"use client";

import { useEffect, useState, useRef } from "react";
import {
  Building2,
  TrendingUp,
  BookOpen,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function FinancialChart() {
  const [inView, setInView] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = chartRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-[#200920] py-24 px-6 flex flex-col items-center">
      {/* 1. CLEAN HEADING (Matches Figma exactly) */}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-16 md:mb-24">
        Where your money goes
      </h2>

      <div
        ref={chartRef}
        className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-16 lg:gap-32"
      >
        {/* CHART CONTAINER - Locked to a perfect square */}
        <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] flex-shrink-0">
          {/* SVG DONUT CHART */}
          <svg
            viewBox="0 0 42 42"
            className="w-full h-full -rotate-[117deg] drop-shadow-2xl overflow-visible"
          >
            {/* 15% Administration */}
            <circle
              cx="21"
              cy="21"
              r="15.9155"
              fill="transparent"
              stroke="#0ea5e9"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${inView ? 7 : 0} 100`}
              strokeDashoffset="0"
              className="transition-all duration-1000 ease-out"
            />

            {/* 80% Programmes */}
            <circle
              cx="21"
              cy="21"
              r="15.9155"
              fill="transparent"
              stroke="#a8248c"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${inView ? 68 : 0} 100`}
              strokeDashoffset="-16"
              className="transition-all duration-1000 ease-out delay-[200ms]"
            />

            {/* 5% Scaling */}
            {/* A 0.1 dash with round caps perfectly creates a tiny 5% circle! */}
            <circle
              cx="21"
              cy="21"
              r="15.9155"
              fill="transparent"
              stroke="#322a4f"
              strokeWidth="7"
              strokeLinecap="round"
              strokeDasharray={`${inView ? 0.1 : 0} 100`}
              strokeDashoffset="-92"
              className="transition-all duration-1000 ease-out delay-[400ms]"
            />
          </svg>

          {/* ICONS */}
          <div
            className={`absolute top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-700 delay-700 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          >
            <Building2 className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div
            className={`absolute bottom-[14%] left-1/2 -translate-x-1/2 translate-y-1/2 text-white transition-all duration-700 delay-1000 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          >
            <BookOpen className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <div
            className={`absolute top-[23%] left-[23%] -translate-x-1/2 -translate-y-1/2 text-white transition-all duration-700 delay-[1200ms] ${inView ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          >
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
          </div>

          {/* PERCENTAGE BUBBLES */}
          <div
            className={`absolute top-[-5%] left-1/2 -translate-x-1/2 bg-white text-[#1a1543] font-bold text-lg md:text-xl rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg transition-transform duration-700 ease-out delay-[800ms] ${inView ? "scale-100" : "scale-0"}`}
          >
            15%
          </div>
          <div
            className={`absolute top-[12%] left-[-4%] -translate-x-1/2 -translate-y-1/2 bg-white text-[#1a1543] font-bold text-lg md:text-xl rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg transition-transform duration-700 ease-out delay-[1300ms] ${inView ? "scale-100" : "scale-0"}`}
          >
            5%
          </div>
          <div
            className={`absolute bottom-[2%] right-[-2%] bg-white text-[#1a1543] font-bold text-lg md:text-xl rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg transition-transform duration-700 ease-out delay-[1100ms] ${inView ? "scale-100" : "scale-0"}`}
          >
            80%
          </div>
        </div>

        {/* LEGEND */}
        <div className="flex flex-col gap-6 pt-8 md:pt-0">
          <div
            className={`flex items-center gap-4 transition-all duration-700 delay-[1000ms] ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="w-5 h-5 rounded-full bg-[#a8248c] shadow-md border-2 border-transparent"></div>
            <span className="text-white font-bold tracking-wide text-base md:text-lg">
              Programmes
            </span>
          </div>
          <div
            className={`flex items-center gap-4 transition-all duration-700 delay-[1200ms] ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="w-5 h-5 rounded-full bg-[#0ea5e9] shadow-md border-2 border-transparent"></div>
            <span className="text-white font-bold tracking-wide text-base md:text-lg">
              Administration
            </span>
          </div>
          <div
            className={`flex items-center gap-4 transition-all duration-700 delay-[1400ms] ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="w-5 h-5 rounded-full bg-[#322a4f] shadow-md border-2 border-gray-600"></div>
            <span className="text-white font-bold tracking-wide text-base md:text-lg">
              Scaling
            </span>
          </div>
        </div>
      </div>

      {/* 2. BOTTOM LINKS (Matches Figma exactly) */}
      <div
        className={`flex flex-col md:flex-row items-center gap-4 mt-20 transition-all duration-1000 delay-[1600ms] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Link 1: Impact Reports */}
        <div className="flex items-center gap-3 bg-black/20 border border-white/10 rounded px-5 py-3 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
          <span className="text-gray-400">IMPACT REPORTS</span>
          <ArrowRight className="w-3 h-3 text-gray-500" />
          <Link
            href="#"
            className="text-white hover:text-[#a8248c] transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-white/30"
          >
            VIEW OUR LATEST REPORT (PDF)
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Link 2: Audits */}
        <div className="flex items-center gap-3 bg-black/20 border border-white/10 rounded px-5 py-3 text-[10px] sm:text-xs font-bold tracking-widest uppercase">
          <span className="text-gray-400">THIRD-PARTY AUDITS</span>
          <ArrowRight className="w-3 h-3 text-gray-500" />
          <Link
            href="#"
            className="text-white hover:text-[#a8248c] transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-white/30"
          >
            VIEW AUDIT SUMMARY
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
