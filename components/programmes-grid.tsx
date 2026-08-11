"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { X, CheckCircle } from "lucide-react";

type Programme = {
  id: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
  footerText: string;
  buttonText: string;
  image: string;
};

export default function ProgrammesGrid() {
  const [programmesData, setProgrammesData] = useState<Programme[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [selectedProg, setSelectedProg] = useState<Programme | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
  });

  useEffect(() => {
    async function fetchPrograms() {
      const { data: dbPrograms } = await supabase
        .from("programs")
        .select("*")
        .eq("status", "Active")
        .order("id", { ascending: true });

      if (dbPrograms) {
        const mappedData = dbPrograms.map((prog) => ({
          id: prog.id,
          category: prog.category || "Programme",
          title: prog.title,
          description: prog.description,
          tags: prog.tags
            ? prog.tags.split(",").map((t: string) => t.trim())
            : [],
          footerText: prog.footer_text || "",
          buttonText: prog.button_text || "APPLY",
          image: prog.image_url || "/programme/img1.jpg",
        }));
        setProgrammesData(mappedData);
      }
      setLoading(false);
    }

    fetchPrograms();
  }, []);

  const handleOpenModal = (prog: Programme) => {
    setSelectedProg(prog);
    setIsSuccess(false);
    setFormData({ name: "", email: "", phone: "", reason: "" });
  };

  const closeModal = () => {
    setSelectedProg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🚀 TODO: Connect this to Supabase or Brevo (Contact API) later!
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <>
      <section className="w-full bg-white pb-32 pt-12">
        {/* Fixed the duplicate mx-auto and px-6 classes here */}
        <div className="w-full max-w-[2000px] mx-auto px-6 md:px-[120px]">
          {loading && (
            <div className="text-center text-[#a8248c] py-12 font-bold uppercase tracking-widest text-sm">
              Loading Programmes...
            </div>
          )}

          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {programmesData.map((prog) => (
                <div
                  key={prog.id}
                  className="flex flex-col bg-white overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-50 transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="relative w-full aspect-[16/10] bg-gray-200">
                    <Image
                      src={prog.image}
                      alt={prog.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="mb-4">
                      <span className="inline-block bg-[#FCF3FC] text-[#a8248c] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                        {prog.category}
                      </span>
                    </div>

                    <h2 className="text-3xl font-serif font-bold text-[#1a1543] mb-4">
                      {prog.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6 border-b border-gray-100 pb-6">
                      {prog.description}
                    </p>

                    {prog.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-100 pb-6">
                        {prog.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="bg-gray-50 text-gray-500 text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-auto flex flex-col items-start">
                      {prog.footerText && (
                        <p className="text-[#a8248c] italic text-sm font-medium mb-6">
                          {prog.footerText}
                        </p>
                      )}

                      <Button
                        onClick={() => handleOpenModal(prog)}
                        className="bg-[#a8248c] hover:bg-[#8D288D] text-white rounded-full px-8 py-6 text-xs font-bold uppercase tracking-widest transition-colors shadow-lg shadow-[#a8248c]/20"
                      >
                        {prog.buttonText}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 🚀 THE NEW SPLIT-LAYOUT APPLICATION MODAL 🚀 */}
      {selectedProg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-6">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] md:max-h-[85vh]">
            {/* Top Header Bar */}
            <div className="bg-white px-6 py-4 border-b border-gray-100 flex justify-between items-center sticky top-0 z-20">
              <span className="text-sm font-bold uppercase tracking-widest text-[#1a1543]">
                Programme Application
              </span>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-[#a8248c] transition-colors p-2 bg-gray-50 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body (Two Columns on Desktop) */}
            <div className="flex flex-col md:flex-row flex-1 overflow-y-auto custom-scrollbar">
              {/* LEFT COLUMN: Programme Details */}
              <div className="w-full md:w-1/2 p-6 md:p-8 bg-[#FDF8FD] border-r border-gray-100 flex flex-col">
                {/* Programme Image */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={selectedProg.image}
                    alt={selectedProg.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <span className="inline-block self-start bg-white border border-[#a8248c]/20 text-[#a8248c] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm mb-4">
                  {selectedProg.category}
                </span>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1543] mb-4">
                  {selectedProg.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {selectedProg.description}
                </p>

                {selectedProg.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProg.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-white border border-gray-200 text-gray-500 text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN: Application Form */}
              <div className="w-full md:w-1/2 p-6 md:p-8 bg-white flex flex-col justify-center">
                {isSuccess ? (
                  /* Success State */
                  <div className="py-12 flex flex-col items-center text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                    <h4 className="text-2xl font-serif font-bold text-[#1a1543] mb-2">
                      Application Received!
                    </h4>
                    <p className="text-gray-600 mb-8 max-w-sm">
                      Thank you for applying to{" "}
                      <strong>{selectedProg.title}</strong>. Our team will
                      review your details and reach out to you shortly.
                    </p>
                    <Button
                      onClick={closeModal}
                      className="bg-[#1a1543] hover:bg-black text-white rounded-full px-12 py-6 text-xs font-bold tracking-widest uppercase"
                    >
                      Close Window
                    </Button>
                  </div>
                ) : (
                  /* Form State */
                  <div>
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-[#1a1543] mb-2">
                        Apply Now
                      </h4>
                      <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                        Fill out the details below to get started.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#a8248c] focus:border-[#a8248c] block p-3.5 outline-none transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#a8248c] focus:border-[#a8248c] block p-3.5 outline-none transition-colors"
                          placeholder="jane@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#a8248c] focus:border-[#a8248c] block p-3.5 outline-none transition-colors"
                          placeholder="+234 800 000 0000"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                          Why do you want to join?
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={formData.reason}
                          onChange={(e) =>
                            setFormData({ ...formData, reason: e.target.value })
                          }
                          className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#a8248c] focus:border-[#a8248c] block p-3.5 outline-none transition-colors resize-none"
                          placeholder="Tell us briefly why this programme is a good fit for you..."
                        />
                      </div>

                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#a8248c] hover:bg-[#8D288D] disabled:bg-gray-400 text-white rounded-full py-6 text-xs font-bold uppercase tracking-widest transition-colors"
                        >
                          {isSubmitting
                            ? "Submitting..."
                            : "Submit Application"}
                        </Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
