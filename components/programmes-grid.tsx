import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient"; // <-- Add this import

export default async function ProgrammesGrid() {
  // Fetch active programs from Supabase
  const { data: dbPrograms } = await supabase
    .from("programs")
    .select("*")
    .eq("status", "Active")
    .order("id", { ascending: true });

  // Map database rows to UI-friendly objects
  const programmesData = (dbPrograms || []).map((prog) => ({
    id: prog.id,
    category: prog.category || "Programme",
    title: prog.title,
    description: prog.description,
    tags: prog.tags ? prog.tags.split(",").map((t: string) => t.trim()) : [],
    footerText: prog.footer_text || "",
    buttonText: prog.button_text || "APPLY",
    image: prog.image_url || "/programme/img1.jpg",
  }));

  return (
    <section className="w-full bg-white pb-32">
      <div className="mx-auto max-w-7xl px-6">
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

              <div className="p-4 md:p-4 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="inline-block bg-[#FCF3FC] text-[#a8248c] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
                    {prog.category}
                  </span>
                </div>

                <h2 className="text-3xl font-serif font-bold text-[#1a1543] mb-4">
                  {prog.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 border-b border-[#8D288D] pb-4">
                  {prog.description}
                </p>

                {prog.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4 border-b border-[#8D288D] pb-4">
                    {prog.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1.5 rounded-sm"
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

                  <Link
                    href={
                      prog.buttonText.includes("GRANT")
                        ? "/apply"
                        : "/apply-programme"
                    }
                  >
                    <Button className="bg-[#a8248c] hover:bg-[#8D288D]-900 text-white rounded-full px-8 py-5 text-xs font-bold uppercase tracking-widest transition-colors">
                      {prog.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
