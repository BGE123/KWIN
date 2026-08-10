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

export default function AboutProgress() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1543] text-center mb-16">
          Progress since 2021
        </h2>

        {/* Stats Table */}
        <div className="w-full flex flex-col">
          {/* Table Header */}
          <div className="flex border-b-2 border-[#6C6C6C] pb-4 mb-3">
            <div className="w-1/3 text-xs font-bold text-[#1a1543] capitalize">
              Stat
            </div>
            <div className="w-2/3 text-xs font-bold text-[#1a1543] capitalize">
              Label
            </div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col gap-3 ">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex items-start border-b-[0.5] border-[#CCCCCC80] pb-3"
              >
                <div className="w-1/3 text-sm font-medium text-[#1a1543]">
                  {stat.value}
                </div>
                <div className="w-2/3 text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
