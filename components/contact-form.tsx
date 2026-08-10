"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Nigeria",
    subject: "I want to donate",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "Nigeria",
        subject: "I want to donate",
        message: "",
      });
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-[#FAFAFA] py-24">
      <div className="mx-auto w-full max-w-[2000px] mx-auto px-6 md:px-[120px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Form */}
          <div className="flex flex-col bg-white p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-sm border border-gray-100">
            <h2 className="text-3xl font-serif font-bold text-[#1a1543] mb-10">
              Send us a message
            </h2>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
                <h3 className="text-2xl font-bold text-[#1a1543]">
                  Message Sent!
                </h3>
                <p className="text-gray-500">
                  Thank you for reaching out. We will get back to you within 2-3
                  business days.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  className="mt-4 bg-[#a8248c] text-white rounded-full"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-black">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Samuel Prince"
                      className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] transition-colors text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. you@email.com"
                      className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] transition-colors text-black"
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
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+234"
                      className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] transition-colors text-black"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Country
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                      className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] bg-white transition-colors text-black"
                    >
                      <option>Nigeria</option>
                      <option>Ghana</option>
                      <option>Kenya</option>
                      <option>United Kingdom</option>
                      <option>United States</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] bg-white transition-colors text-black"
                  >
                    <option>I want to donate</option>
                    <option>I want to volunteer</option>
                    <option>I want to partner wih you</option>
                    <option>Partnership inquiry</option>
                    <option>General inquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Message
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={5}
                    placeholder="Tell us what you'd like to in details"
                    className="border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#a8248c] resize-none transition-colors text-black"
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-xs font-bold text-right">
                    Something went wrong. Please try again.
                  </p>
                )}

                <div className="flex justify-end mt-4">
                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[#a8248c] hover:bg-[#8D288D]-900 text-white rounded-full px-10 py-6 text-xs font-bold uppercase tracking-widest transition-colors w-full md:w-auto disabled:opacity-50"
                  >
                    {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
                  </Button>
                </div>
              </form>
            )}

            <p className="text-xs text-gray-500 mt-6 font-medium text-center md:text-left leading-relaxed">
              We reply within 2 to 3 business days. Urgent grant or programme
              questions get priority
            </p>
          </div>

          {/* Right Column: Contact Info & Map (Unchanged) */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-sm">
              <div className="text-[#a8248c] mt-0.5">
                <Mail className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">
                  Email
                </span>
                <a
                  href="mailto:info@kindlewomeninitiative.org"
                  className="text-sm font-bold text-[#1a1543] underline decoration-1 underline-offset-2 hover:text-[#a8248c] transition-colors break-all"
                >
                  info@kindlewomeninitiative.org
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-50 p-6 rounded-sm">
              <div className="text-[#a8248c] mt-0.5">
                <MapPin className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1 block">
                  Address
                </span>
                <span className="text-sm font-bold text-[#1a1543] underline decoration-1 underline-offset-2">
                  Abakaliki, Ebonyi State, Nigeria
                </span>
              </div>
            </div>
            <div className="relative w-full flex-1 min-h-[300px] bg-gray-200 border border-gray-100 rounded-sm overflow-hidden">
              <Image
                src="/contact/map.png"
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
