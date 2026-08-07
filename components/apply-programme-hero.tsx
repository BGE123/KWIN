"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft } from "lucide-react";
import { supabase } from "@/lib/supabaseClient"; // <-- Add this import

export default function ApplyProgrammeHero() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // State to hold all 4 steps of data
  const [formData, setFormData] = useState({
    applicant_name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    state: "",
    lga: "",
    school_name: "",
    class_level: "",
    grade: "",
    school_type: "",
    program: "",
    guardian_name: "",
    guardian_phone: "",
    relationship: "",
    reason_to_join: "",
    future_goals: "",
    referral_source: "",
  });

  const openModal = () => {
    setIsOpen(true);
    setStep(1);
    setSubmitStatus("idle");
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setStep(1), 300);
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Handle the final submission
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const { error } = await supabase
      .from("applications")
      .insert([{ ...formData, status: "Pending" }]);

    if (error) {
      console.error("Application error:", error.message);
      setSubmitStatus("error");
      setIsSubmitting(false);
    } else {
      setSubmitStatus("success");
      setIsSubmitting(false);
      // Close automatically after 3 seconds
      setTimeout(() => {
        closeModal();
        // Reset form
        setFormData({
          applicant_name: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          state: "",
          lga: "",
          school_name: "",
          class_level: "",
          grade: "",
          school_type: "",
          program: "",
          guardian_name: "",
          guardian_phone: "",
          relationship: "",
          reason_to_join: "",
          future_goals: "",
          referral_source: "",
        });
      }, 3000);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] bg-gray-900 flex items-center justify-center">
      {/* Background Hero Image */}
      <Image
        src="/grant/img1.png"
        alt="Student in uniform"
        fill
        className="object-cover opacity-50"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mt-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          Apply for a programme
        </h1>
        <p className="text-white/90 text-sm md:text-base mb-10 leading-relaxed font-medium">
          Four steps, about 10 minutes. Tell us a bit about yourself and what
          you're hoping to achieve. We review applications on a rolling basis.
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
              <div className="w-10">
                {step > 1 && submitStatus === "idle" && (
                  <button
                    onClick={prevStep}
                    className="text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                )}
              </div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1a1543] text-center flex-1">
                Apply For Programme
              </h2>
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
              {/* Success State */}
              {submitStatus === "success" ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#1a1543] mb-4">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-500 max-w-sm">
                    We have received your details. Our team will review it and
                    get back to you via email shortly.
                  </p>
                </div>
              ) : (
                <>
                  {/* Step Subheaders */}
                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-[#1a1543] mb-1">
                      {step === 1 && "Personal Information"}
                      {step === 2 && "Academic Information"}
                      {step === 3 && "Guardian Information"}
                      {step === 4 && "Motivation"}
                    </h3>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Step {step} of 4
                    </span>
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
                            value={formData.applicant_name}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                applicant_name: e.target.value,
                              })
                            }
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
                            value={formData.dob}
                            onChange={(e) =>
                              setFormData({ ...formData, dob: e.target.value })
                            }
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm text-gray-500"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            Gender
                          </label>
                          <select
                            value={formData.gender}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                gender: e.target.value,
                              })
                            }
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500"
                          >
                            <option value="">Select</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            Email
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
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
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+234 803 456 7890"
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            State
                          </label>
                          <select
                            value={formData.state}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                state: e.target.value,
                              })
                            }
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500"
                          >
                            <option value="">Select</option>
                            <option value="Lagos">Lagos</option>
                            <option value="Abuja">Abuja</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            LGA
                          </label>
                          <select
                            value={formData.lga}
                            onChange={(e) =>
                              setFormData({ ...formData, lga: e.target.value })
                            }
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500"
                          >
                            <option value="">Select</option>
                            <option value="Ikeja">Ikeja</option>
                            <option value="Surulere">Surulere</option>
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
                            value={formData.school_name}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                school_name: e.target.value,
                              })
                            }
                            placeholder="Greenwood High School"
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            Class/Level
                          </label>
                          <select
                            value={formData.class_level}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                class_level: e.target.value,
                              })
                            }
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500"
                          >
                            <option value="">Select</option>
                            <option value="SS1">SS1</option>
                            <option value="SS2">SS2</option>
                            <option value="SS3">SS3</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            Grade
                          </label>
                          <select
                            value={formData.grade}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                grade: e.target.value,
                              })
                            }
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500"
                          >
                            <option value="">Select</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Average">Average</option>
                          </select>
                        </div>
                        <div className="md:col-span-2 flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            School Type
                          </label>
                          <select
                            value={formData.school_type}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                school_type: e.target.value,
                              })
                            }
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500"
                          >
                            <option value="">Select</option>
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                          </select>
                        </div>
                        <div className="md:col-span-2 flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            Which programme are you applying for?
                          </label>
                          <select
                            value={formData.program}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                program: e.target.value,
                              })
                            }
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500"
                          >
                            <option value="">Select</option>
                            <option value="Character Development">
                              Character Development
                            </option>
                            <option value="QeDu Education">
                              QeDu Education
                            </option>
                            <option value="TechUp Industry">
                              TechUp Industry
                            </option>
                            <option value="BizUp Entrepreneurs">
                              BizUp Entrepreneurs
                            </option>
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
                            value={formData.guardian_name}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                guardian_name: e.target.value,
                              })
                            }
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
                            value={formData.guardian_phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                guardian_phone: e.target.value,
                              })
                            }
                            placeholder="Enter Phone Number"
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            Relationship to Applicant
                          </label>
                          <select
                            value={formData.relationship}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                relationship: e.target.value,
                              })
                            }
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500"
                          >
                            <option value="">Select Relationship</option>
                            <option value="Father">Father</option>
                            <option value="Mother">Mother</option>
                            <option value="Sibling">Sibling</option>
                            <option value="Other Relative">
                              Other Relative
                            </option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Motivation */}
                    {step === 4 && (
                      <div className="grid grid-cols-1 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            Why do you want to join this programme?
                          </label>
                          <textarea
                            value={formData.reason_to_join}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                reason_to_join: e.target.value,
                              })
                            }
                            rows={3}
                            placeholder="What made you choose this one?"
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm resize-none"
                          ></textarea>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            What do you hope to achieve?
                          </label>
                          <textarea
                            value={formData.future_goals}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                future_goals: e.target.value,
                              })
                            }
                            rows={3}
                            placeholder="Tell us what success looks like for you."
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm resize-none"
                          ></textarea>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-xs font-bold text-gray-700">
                            How did you hear about KWIN?
                          </label>
                          <select
                            value={formData.referral_source}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                referral_source: e.target.value,
                              })
                            }
                            className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] rounded-sm bg-white text-gray-500"
                          >
                            <option value="">Select</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Friend/Family">Friend/Family</option>
                            <option value="School">School</option>
                            <option value="Community Event">
                              Community Event
                            </option>
                          </select>
                        </div>

                        {submitStatus === "error" && (
                          <div className="text-red-500 text-xs text-center font-bold mt-2">
                            Something went wrong. Please check your inputs and
                            try again.
                          </div>
                        )}
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
                            disabled={isSubmitting}
                            onClick={handleSubmit}
                            className="bg-[#92287A] hover:bg-[#8D288D]-900 text-white rounded-full font-bold text-[10px] uppercase tracking-widest px-10 py-6 transition-colors disabled:opacity-50"
                          >
                            {isSubmitting
                              ? "SUBMITTING..."
                              : "SUBMIT APPLICATION"}
                          </Button>
                          <p className="text-[10px] text-gray-400 italic mt-4 text-center">
                            You'll get a confirmation email right after you
                            submit.
                          </p>
                        </>
                      )}
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
