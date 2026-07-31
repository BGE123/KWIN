"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft } from "lucide-react";

export default function ApplyHero() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);

  const openModal = () => {
    setIsOpen(true);
    setStep(1); // Always start at step 1
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setStep(1), 300); // Reset step after close animation
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-gray-900 flex items-center justify-center">
      {/* Background Hero Image */}
      <Image
        src="/grant/img1.png"
        alt="Hands stacked together in unity"
        fill
        className="object-cover opacity-60"
        priority
      />
      <div className="absolute inset-0 bg-black/40 no-invert" />{" "}
      {/* Dark overlay for text readability */}
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mt-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Apply for a grant
        </h1>
        <p className="text-white/90 text-sm md:text-base mb-10 leading-relaxed font-medium">
          Four steps, about 10 minutes. We review every application and reply
          within 4 to 5 weeks.
        </p>
        <Button
          onClick={openModal}
          className="bg-white text-[#a8248c] hover:bg-gray-100 rounded-full font-bold text-xs uppercase tracking-widest px-10 py-6 transition-colors shadow-lg"
        >
          GET STARTED
        </Button>
      </div>
      {/* MULTI-STEP MODAL OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white rounded-sm shadow-2xl flex flex-col max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-100 shrink-0">
              {/* Back Button (Only show if step > 1) */}
              <div className="w-10">
                {step > 1 && (
                  <button
                    onClick={prevStep}
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#1a1543] text-center flex-1">
                Apply for a grant
              </h2>

              {/* Close Button */}
              <div className="w-10 flex justify-end">
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 md:p-10 overflow-y-auto">
              {/* Step Subheaders */}
              <div className="mb-8">
                {step === 1 && (
                  <>
                    <h3 className="text-lg font-bold text-[#1a1543] mb-1">
                      Personal Information
                    </h3>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Step 1 of 4
                    </span>
                  </>
                )}
                {step === 2 && (
                  <>
                    <h3 className="text-lg font-bold text-[#1a1543] mb-1">
                      Academic Information
                    </h3>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Step 2 of 4
                    </span>
                  </>
                )}
                {step === 3 && (
                  <>
                    <h3 className="text-lg font-bold text-[#1a1543] mb-1">
                      Guardian Information
                    </h3>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Step 3 of 4
                    </span>
                  </>
                )}
                {step === 4 && (
                  <>
                    <h3 className="text-lg font-bold text-[#1a1543] mb-1">
                      Application
                    </h3>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Step 4 of 4
                    </span>
                  </>
                )}
              </div>

              {/* FORMS */}
              <form
                className="flex flex-col gap-6"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* STEP 1: Personal Info */}
                {step === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2 flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Amina Yusuf"
                        className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm text-gray-500"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Gender
                      </label>
                      <select className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500">
                        <option>Select</option>
                        <option>Female</option>
                        <option>Male</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="amina.yusuf@example.com"
                        className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 803 456 7890"
                        className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        State
                      </label>
                      <select className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500">
                        <option>Select</option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        LGA
                      </label>
                      <select className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500">
                        <option>Select</option>
                        <option>Ikeja</option>
                        <option>Surulere</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 2: Academic Info */}
                {step === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2 flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        School Name
                      </label>
                      <input
                        type="text"
                        placeholder="Central High School"
                        className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Class/Level
                      </label>
                      <select className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500">
                        <option>Select</option>
                        <option>SS1</option>
                        <option>SS2</option>
                        <option>SS3</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Grade/Score
                      </label>
                      <select className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500">
                        <option>Select</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Average</option>
                      </select>
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        School Type
                      </label>
                      <select className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500">
                        <option>Select</option>
                        <option>Public</option>
                        <option>Private</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 3: Guardian Info */}
                {step === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2 flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Guardian Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Guardian Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter Phone Number"
                        className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Relationship to Applicant
                      </label>
                      <select className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500">
                        <option>Select Relationship</option>
                        <option>Father</option>
                        <option>Mother</option>
                        <option>Sibling</option>
                        <option>Other Relative</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 4: Application Details */}
                {step === 4 && (
                  <div className="grid grid-cols-1 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Grant Purpose
                      </label>
                      <textarea
                        rows={3}
                        placeholder="What would this grant help you do? Be specific (e.g., sewing machine, a skill, stock for a small business)"
                        className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm resize-none"
                      ></textarea>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Financial Situation
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Help us understand your current situation and why this grant matters to you right now."
                        className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm resize-none"
                      ></textarea>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        Personal Statement
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about yourself, your goals, or what you hope to build."
                        className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm resize-none"
                      ></textarea>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-bold text-gray-700">
                        How did you hear about KWIN?
                      </label>
                      <select className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500">
                        <option>Select</option>
                        <option>Social Media</option>
                        <option>Friend/Family</option>
                        <option>School</option>
                        <option>Community Event</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Submit / Proceed Buttons */}
                <div className="flex flex-col items-center mt-6">
                  {step < 4 ? (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#92287A] hover:bg-[#8D288D]-900 text-white rounded-full font-bold text-[10px] uppercase tracking-widest px-10 py-6 transition-colors"
                    >
                      PROCEED
                    </Button>
                  ) : (
                    <>
                      <Button
                        type="button"
                        onClick={() => {
                          alert("Application Submitted! (Demo)");
                          closeModal();
                        }}
                        className="bg-[#92287A] hover:bg-[#8D288D]-900 text-white rounded-full font-bold text-[10px] uppercase tracking-widest px-10 py-6 transition-colors"
                      >
                        SUBMIT APPLICATION
                      </Button>
                      <p className="text-[10px] text-gray-400 italic mt-4 text-center">
                        You'll get a reference number and confirmation email
                        right after you submit.
                      </p>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
