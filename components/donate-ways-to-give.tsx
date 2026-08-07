"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { supabase } from "@/lib/supabaseClient"; // <-- Import Supabase!

export default function DonateWaysToGive() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  // --- VOLUNTEER FORM STATE ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "", // Maps to "Area of Expertise"
    availability: "",
    message: "",
  });

  // Handle Volunteer Submission
  async function handleVolunteerSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Insert into Supabase
    const { error } = await supabase.from("volunteers").insert([
      {
        name: volunteerForm.name,
        email: volunteerForm.email,
        phone: volunteerForm.phone,
        skills: volunteerForm.skills,
        availability: volunteerForm.availability,
        message: volunteerForm.message,
        status: "Pending", // Automatically sets them to Pending for the admin
      },
    ]);

    if (error) {
      console.error("Error submitting volunteer:", error.message);
      setSubmitStatus("error");
      setIsSubmitting(false);
    } else {
      setSubmitStatus("success");
      setIsSubmitting(false);
      // Reset form and close after 2 seconds
      setTimeout(() => {
        setIsVolunteerModalOpen(false);
        setSubmitStatus("idle");
        setVolunteerForm({
          name: "",
          email: "",
          phone: "",
          skills: "",
          availability: "",
          message: "",
        });
      }, 2000);
    }
  }

  return (
    <div className="w-full flex flex-col">
      {/* --- VOLUNTEER MODAL --- */}
      {isVolunteerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-lg bg-white p-8 md:p-10 rounded-sm shadow-2xl">
            <button
              onClick={() => setIsVolunteerModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-serif font-bold text-[#1a1543] text-center mb-8">
              Become a Volunteer
            </h3>

            {submitStatus === "success" ? (
              <div className="text-center py-8 text-[#92287A] font-bold">
                Thank you! Your application has been received. We will be in
                touch soon.
              </div>
            ) : (
              <form
                onSubmit={handleVolunteerSubmit}
                className="grid grid-cols-2 gap-4"
              >
                <div className="col-span-2 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-700">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={volunteerForm.name}
                    onChange={(e) =>
                      setVolunteerForm({
                        ...volunteerForm,
                        name: e.target.value,
                      })
                    }
                    placeholder="Amina Yusuf"
                    className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] transition-colors rounded-sm"
                  />
                </div>

                <div className="col-span-2 md:col-span-1 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-700">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={volunteerForm.email}
                    onChange={(e) =>
                      setVolunteerForm({
                        ...volunteerForm,
                        email: e.target.value,
                      })
                    }
                    placeholder="amina.yusuf@example.com"
                    className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] transition-colors rounded-sm"
                  />
                </div>

                <div className="col-span-2 md:col-span-1 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-700">
                    Phone number
                  </label>
                  <input
                    required
                    type="tel"
                    value={volunteerForm.phone}
                    onChange={(e) =>
                      setVolunteerForm({
                        ...volunteerForm,
                        phone: e.target.value,
                      })
                    }
                    placeholder="+234 803 456 7890"
                    className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] transition-colors rounded-sm"
                  />
                </div>

                <div className="col-span-2 md:col-span-1 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-700">
                    Area of Expertise
                  </label>
                  <select
                    required
                    value={volunteerForm.skills}
                    onChange={(e) =>
                      setVolunteerForm({
                        ...volunteerForm,
                        skills: e.target.value,
                      })
                    }
                    className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] bg-white transition-colors rounded-sm"
                  >
                    <option value="">Select</option>
                    <option value="Mentorship">Mentorship</option>
                    <option value="Tech/IT">Tech/IT</option>
                    <option value="Business/Finance">Business/Finance</option>
                  </select>
                </div>

                <div className="col-span-2 md:col-span-1 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-700">
                    Availability
                  </label>
                  <select
                    required
                    value={volunteerForm.availability}
                    onChange={(e) =>
                      setVolunteerForm({
                        ...volunteerForm,
                        availability: e.target.value,
                      })
                    }
                    className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] bg-white transition-colors rounded-sm"
                  >
                    <option value="">Select</option>
                    <option value="Weekends">Weekends</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div className="col-span-2 flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-gray-700">
                    Short message (optional)
                  </label>
                  <input
                    type="text"
                    value={volunteerForm.message}
                    onChange={(e) =>
                      setVolunteerForm({
                        ...volunteerForm,
                        message: e.target.value,
                      })
                    }
                    placeholder="Anything else we should know?"
                    className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] transition-colors rounded-sm"
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="col-span-2 text-red-500 text-xs text-center font-bold mt-2">
                    Something went wrong. Please try again.
                  </div>
                )}

                <div className="col-span-2 flex flex-col items-center mt-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#92287A] hover:bg-[#8D288D] text-white rounded-full font-bold text-[10px] uppercase tracking-widest px-8 py-5 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "SUBMITTING..." : "REGISTER NOW"}
                  </Button>
                  <p className="text-[10px] text-gray-400 italic mt-4 text-center">
                    We'll follow up by email once we match you to a programme.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* --- PARTNER MODAL (Left exactly as it was) --- */}
      {isPartnerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-lg bg-white p-8 md:p-10 rounded-sm shadow-2xl">
            <button
              onClick={() => setIsPartnerModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-serif font-bold text-[#1a1543] text-center mb-8">
              Become a Partner
            </h3>
            {/* Keeping your original Partner form code here */}
            <form className="grid grid-cols-2 gap-4">
              <div className="col-span-2 flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-700">
                  Organization Name
                </label>
                <input
                  type="text"
                  placeholder="Organization"
                  className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] transition-colors rounded-sm"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-700">
                  Contact Person (name)
                </label>
                <input
                  type="text"
                  placeholder="Contact Name"
                  className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] transition-colors rounded-sm"
                />
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] transition-colors rounded-sm"
                />
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-700">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+234..."
                  className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] transition-colors rounded-sm"
                />
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-700">
                  Organization Website
                </label>
                <input
                  type="text"
                  placeholder="https://"
                  className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] transition-colors rounded-sm"
                />
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-700">
                  Type of Partnership
                </label>
                <select className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] bg-white transition-colors rounded-sm">
                  <option>Select</option>
                  <option>Funding</option>
                  <option>Media/PR</option>
                  <option>Operational</option>
                </select>
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-gray-700">
                  What would you like to bring to the partnership?
                </label>
                <textarea
                  rows={3}
                  placeholder="Details..."
                  className="border border-gray-200 px-3 py-2.5 text-sm focus:outline-none focus:border-[#a8248c] resize-none transition-colors rounded-sm"
                ></textarea>
              </div>
              <div className="col-span-2 flex flex-col items-center mt-6">
                <Button
                  type="button"
                  className="bg-[#92287A] hover:bg-[#8D288D]-900 text-white rounded-full font-bold text-[10px] uppercase tracking-widest px-10 py-5 transition-colors"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 1. Volunteer Section */}
      <section className="w-full bg-[#92287A] py-24">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <div className="relative w-full h-full bg-gray-200 row-span-2">
              <Image
                src="/donate/img4.jpg"
                alt="Volunteer with students"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-full bg-gray-300">
              <Image
                src="/donate/img5.jpg"
                alt="Two girls smiling"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-full bg-gray-400">
              <Image
                src="/donate/img6.jpg"
                alt="Girl sitting outside"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-start lg:pl-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 mb-4 block">
              VOLUNTEER
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Share what you <br /> know
            </h2>
            <p className="text-sm text-white/90 mb-10 leading-relaxed max-w-md">
              Mentor a girl through TechUp or BizUp, guide a QeDu study group,
              or bring your business or tech background into a workshop. We
              match volunteers to programmes based on what you're good at.
            </p>
            <Button
              onClick={() => setIsVolunteerModalOpen(true)}
              className="bg-white text-[#92287A] hover:bg-gray-100 rounded-full font-bold text-xs uppercase tracking-widest px-8 py-6 transition-colors"
            >
              BECOME A VOLUNTEER
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Partner Section */}
      <section className="w-full bg-white py-24">
        <div>
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-start lg:pr-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-4 block">
                PARTNERSHIPS
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a1543] mb-6 leading-tight">
                Partner with us <br /> at scale
              </h2>
              <p className="text-sm text-gray-600 mb-10 leading-relaxed max-w-md">
                KWIN works with companies, foundations, and institutions that
                want to fund, staff, or scale a programme directly. Join 45+
                partners already building alongside us.
              </p>
              <div className="flex flex-wrap gap-4 mb-16">
                <Button
                  onClick={() => setIsPartnerModalOpen(true)}
                  className="bg-[#92287A] hover:bg-[#8D288D]-900 text-white rounded-full font-bold text-[10px] uppercase tracking-widest px-8 py-5 transition-colors"
                >
                  BECOME A PARTNER
                </Button>
                <Button className="bg-transparent border border-gray-200 text-[#1a1543] hover:border-[#92287A] hover:text-[#92287A] rounded-full font-bold text-[10px] uppercase tracking-widest px-8 py-5 transition-colors">
                  DOWNLOAD BROCHURE
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[44px] h-[400px] md:h-[547px]">
              <div className="relative w-full h-full bg-gray-200">
                <Image
                  src="/donate/img6.jpg"
                  alt="Group outdoors"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-full bg-gray-300">
                <Image
                  src="/donate/img7.jpg"
                  alt="Girls hugging"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-auto max-w-7xl mt-16">
          <div className="p-6 bg-[#FCF3FC] flex flex-col gap-2">
            <span className="text-4xl font-serif font-bold text-[#1a1543]">
              45+
            </span>
            <span className="text-xs text-gray-500 font-medium">Partners</span>
          </div>
          <div className="p-6 border border-[#8D288D] flex flex-col gap-2">
            <span className="text-4xl font-serif font-bold text-[#1a1543]">
              12,000+
            </span>
            <span className="text-xs text-gray-500 font-medium">Mentors</span>
          </div>
          <div className="p-6 border border-[#8D288D] flex flex-col gap-2">
            <span className="text-4xl font-serif font-bold text-[#1a1543]">
              ₦450M
            </span>
            <span className="text-xs text-gray-500 font-medium">Raised</span>
          </div>
        </div>
      </section>
    </div>
  );
}
