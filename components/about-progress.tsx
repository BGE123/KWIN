const stats = [
  {
    value: "210+",
    label: "Girls trained",
  },
  {
    value: "7",
    label: "Grants awarded",
  },
  {
    value: "6",
    label: "States expanded",
  },
  {
    value: "85%",
    label: "Report significant personal transformation",
  },
  {
    value: "210 / 500,000",
    label: "Progress toward our 2033 goal",
  },
];

const sdgs = [
  {
    id: 1,
    title: "SDG 1 — No Poverty",
    description:
      "Promoting economic empowerment and sustainable livelihoods for women.",
  },
  {
    id: 3,
    title: "SDG 3 — Good Health & Well-being",
    description:
      "Supporting healthier lives, relationships, and resilient families.",
  },
  {
    id: 4,
    title: "SDG 4 — Quality Education",
    description:
      "Expanding access to education, skills development, and lifelong learning.",
  },
  {
    id: 5,
    title: "SDG 5 — Gender Equality",
    description:
      "Advancing opportunities, empowerment, and equal participation for women and girls.",
  },
  {
    id: 8,
    title: "SDG 8 — Decent Work & Economic Growth",
    description:
      "Building skills, entrepreneurship, and pathways to sustainable employment.",
  },
  {
    id: 17,
    title: "SDG 17 — Partnerships for the Goals",
    description:
      "Working with communities and strategic partners to create lasting impact.",
  },
];

export default function AboutProgress() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* ============================== */}
        {/* STATS SECTION                  */}
        {/* ============================== */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1543] text-center mb-16">
          Progress since 2021
        </h2>

        {/* Stats Table */}
        <div className="w-full flex flex-col max-w-3xl mx-auto">
          {/* Table Header */}
          <div className="flex border-b-2 border-[#6C6C6C] pb-4 mb-4">
            <div className="w-1/3 text-xs font-bold text-[#1a1543] capitalize tracking-wide">
              Stat
            </div>
            <div className="w-2/3 text-xs font-bold text-[#1a1543] capitalize tracking-wide">
              Label
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-start border-b border-[#CCCCCC80] pb-4"
              >
                <div className="w-1/3 text-sm md:text-base font-bold text-[#1a1543]">
                  {stat.value}
                </div>
                <div className="w-2/3 text-sm md:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Divider */}
        <div className="my-24 border-t border-gray-100 w-full" />

        {/* ============================== */}
        {/* SDG SECTION                    */}
        {/* ============================== */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#a8248c] mb-4 block text-center">
            Global Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1543] text-center mb-6">
            Our Commitment to the SDGs
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mb-16 leading-relaxed">
            KWIN’s programmes actively contribute to the United Nations
            Sustainable Development Goals, ensuring our local actions drive
            meaningful global change.
          </p>

          {/* SDG Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 w-full">
            {sdgs.map((sdg) => (
              <div
                key={sdg.id}
                className="flex flex-col bg-[#FDF8FD] p-6 rounded-r-lg border-l-4 border-[#a8248c] shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-serif font-bold text-[#1a1543] mb-2">
                  {sdg.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {sdg.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
