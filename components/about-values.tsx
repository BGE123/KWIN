import Image from "next/image";
import { BookOpen, Clock, Star, Wrench } from "lucide-react";

const principles = [
  {
    title: "Aim",
    description:
      "To raise a generation of educated, financially empowered women who make informed decisions, build healthy relationships, and contribute to the wellbeing and longevity of their families and communities.",
  },
  {
    title: "Vision",
    description:
      "To empower girls and women with access to education, mentorship, entrepreneurship, and financial opportunities, enabling them to build healthier, more resilient families and communities.",
  },
  {
    title: "Mission",
    description:
      "To create a continent where women are educated, financially empowered, and equipped to build healthier and more prosperous families across generations.",
  },
  {
    title: "2033 GOAL",
    description:
      "To empower 50,000 girls and women across Nigeria with the knowledge, skills, opportunities, and support to build better lives and stronger families.",
  },
];

const coreValues = [
  {
    title: "Godliness",
    description:
      "Faith-rooted integrity guides how we lead, mentor, and hold ourselves accountable to the girls we serve.",
    icon: BookOpen,
  },
  {
    title: "Productivity",
    description:
      "We treat a girl's time as valuable. Programmes run on schedule, and promises get kept.",
    icon: Clock,
  },
  {
    title: "Excellence",
    description:
      "Our programmes are held to a standard worth a girl's trust, not just a standard that is good enough.",
    icon: Star,
  },
  {
    title: "Skillfulness",
    description:
      "Every module teaches something usable. Practical skill over theory, always.",
    icon: Wrench,
  },
];

export default function AboutValues() {
  return (
    <section className="w-full bg-white flex flex-col">
      {/* OUR STORY */}
      <div className="mx-auto w-full max-w-[2000px] mx-auto px-6 md:px-[120px] px-6 py-6 pt-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-bold tracking-widest text-[#8D288D] mb-3">
            THE STORY BEHIND KWIN
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1543] mb-6 leading-tight">
            A father's sacrifice.
            <br />A daughter's promise.
            <br />A movement born from loss.
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed max-w-md">
            She was once a little girl from a poor but deeply organised,
            goal-oriented, God-loving family. They did not have much, but there
            was structure in their home, a quiet discipline, and dreams that
            stretched far beyond their circumstances. Her father, the late
            Sunday Uwa Agbo (Nwachielemere), was an extraordinary man. He was
            gifted in almost every field of life. People in his community
            admired him not only for his many talents, but for his spirit and
            his desire to see young people become educated. Above all, he was a
            musician. His voice carried emotion, God's love, and conviction. His
            words carried culture. He wrote more than a hundred songs, many of
            them in his native dialect. Whenever he performed, he was loved,
            celebrated and applauded. Sometimes, the little girl would sit with
            her father and talk to him as though they were equals. In her
            innocence, she would look at him and say: "Daddy, you will go back
            to school." She believed in him without doubt, even when life had
            not given him the opportunities he deserved. Then one day, something
            remarkable happened.
          </p>
        </div>
        <div className="relative w-full aspect-[4/3]">
          <div className="absolute left-0 top-0 w-[65%] h-full">
            <Image
              src="/about/salome.jpg"
              alt="Founder"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <p className="leading-relaxed w-full max-w-[2000px] mx-auto px-6 md:px-[120px] mx-auto px-6 pb-10 text-sm text-gray-600">
        A relative approached her father and said, You are gifted. Take this
        money, go to the studio, and put your songs into an album. It was the
        opportunity he had been waiting for. An open door to his dream. He
        accepted the money with gratitude and hope. But when he got home,
        something changed. He lifted his eyes and thanked God not for the
        opportunity to record his songs, but for making provision for his
        daughter's school fees. In that quiet moment, he made a life-altering
        decision. He chose to postpone his dream so that his daughter could
        pursue hers. He believed that if her future was secure, his dreams could
        wait. And so, he let them wait. Years passed. By the grace of God, that
        little girl grew. She carried her father's sacrifices within her like a
        silent promise. She worked hard, stayed focused, and eventually
        graduated from the University of Nigeria, Nsukka. Her father was filled
        with joy. To him, it felt as though everything he had sacrificed for was
        finally coming to life. But the little girl, now a young woman, had her
        own quiet vow. She had seen what her father had given up for her. She
        knew the cost of her success. And she promised herself that she would
        make him happy. She would give him the best life possible. She would
        honour every sacrifice he had made. But life can be unbearably fragile.
        In June 2021, her father fell ill. What began as worry quickly deepened
        into fear. Days became weeks, and hope slowly faded. By September 2021,
        he was gone. The world, as she knew it, came crashing down. The man who
        had sacrificed his dreams so she could have hers was no longer there to
        see what she would become. The joy she had hoped to give him remained
        unfulfilled. And in that grief, she began to see a larger truth. Her
        story was not hers alone. It was the story of many families. Stories of
        sacrifice. Silent sacrifices. Uncelebrated heroes. Parents who
        surrendered their dreams so their children could have opportunities they
        never had. Parents who worked tirelessly for their families, sometimes
        without ever living long enough to enjoy the fruits of their labour. And
        from that place of grief and reflection, something new was born. Kindle
        Women Initiatives was rebirthed. A mission shaped by loss, but driven by
        hope. KWIN was created from a simple but profound conviction: When girls
        and women are educated, empowered, financially equipped and supported,
        they can help build stronger families, healthier relationships and more
        resilient communities. The goal is not simply to change the story of one
        woman. It is to change the story of generations. Because somewhere out
        there, another little girl is watching her father sacrifice everything
        for her future. And KWIN wants her to have a different story. “This is
        the tale of so many families in our communities. KWIN was born to change
        that story.”
      </p>

      {/* Aim, Vision, Mission */}
      <div className="mx-auto w-full max-w-[2000px] mx-auto px-6 md:px-[120px] px-6 pb-20 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {principles.map((item, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col ${
                index === 0
                  ? "bg-[#FCF3FC]" // Aim Card: Light purple fill, no border
                  : "bg-white border border-[#92287A]/40" // Vision & Mission Cards: White fill with purple border
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a1543] mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values (Dark Section) */}
      <div className="bg-[#200920] w-full py-24 lg:py-32">
        <div className="mx-auto w-full max-w-[2000px] mx-auto px-6 md:px-[120px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            {/* Left: Text & List */}
            <div className="lg:col-span-7 flex flex-col">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold text-white mb-10 lg:mb-12 leading-tight">
                Core values
              </h2>

              <div className="flex flex-col">
                {coreValues.map((value, index) => (
                  <div
                    key={index}
                    // Richer purple-tinted gradient to match Figma perfectly
                    className="flex gap-6 lg:gap-8 items-start p-6 lg:p-8 bg-gradient-to-r from-[#3c143c] to-transparent border-b border-black"
                  >
                    {/* Icon Box: Sharp square with a dark background to contrast the gradient */}
                    <div className="flex-shrink-0 w-14 h-14 bg-[#170617] flex items-center justify-center text-white">
                      <value.icon className="w-6 h-6" strokeWidth={2} />
                    </div>

                    <div className="flex flex-col pt-1">
                      <h4 className="text-lg lg:text-xl font-bold text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm lg:text-base text-gray-300 leading-relaxed max-w-md">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sharp Edged Image */}
            <div className="lg:col-span-5 relative w-full aspect-square md:aspect-[3/4] lg:h-[700px] mt-8 lg:mt-0">
              <Image
                src="/aboutimg3.jpg"
                alt="Student in classroom"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
