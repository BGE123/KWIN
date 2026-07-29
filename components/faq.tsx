'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const questions = [
  {
    q: 'WHAT SERVICES DO YOU OFFER FOR GIRLS AND WOMEN?',
    a: 'We provide education support, mentorship, digital and vocational skills training, and business grants to help Nigerian girls and women build sustainable futures.',
  },
  {
    q: 'AS AN ORGANIZATION, DO YOU PROVIDE SUPPORT FOR DESIGN PROJECTS?',
    a: 'Yes. Our programmes include creative and design tracks, pairing participants with mentors who guide them through real-world design projects.',
  },
  {
    q: 'WHAT PLATFORMS DO YOU RECOMMEND FOR WEB DEVELOPMENT?',
    a: 'We teach modern, accessible tools that lower the barrier to entry, helping participants ship real projects with industry-standard platforms.',
  },
  {
    q: 'WHAT ARE THE FEES ASSOCIATED WITH YOUR PROGRAMS?',
    a: 'Our core programmes are free for accepted participants. KWIN is funded through grants and donations so cost is never a barrier to access.',
  },
  {
    q: 'ARE THERE ANY ADDITIONAL FEES FOR SPECIFIC SERVICES?',
    a: 'No hidden fees. Any optional add-ons are communicated clearly and transparently before a participant enrolls.',
  },
  {
    q: 'WHAT IS THE TYPICAL DURATION OF YOUR PROGRAMS?',
    a: 'Programmes run between 8 and 24 weeks depending on the track, followed by ongoing mentorship and alumni support.',
  },
  {
    q: 'WILL I NEED ONGOING TECHNICAL SUPPORT FOR MY WEBSITE?',
    a: 'We equip participants to maintain their own work, and our community and mentors remain available for continued guidance.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="w-full bg-[#FBEFF7] py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest text-[#9B2185] mb-4">
            COMMON QUESTIONS
          </p>
          <h2 className="font-serif text-5xl md:text-6xl text-[#2D0A2E] text-balance">
            Some People Ask
          </h2>
        </div>

        <div className="flex flex-col">
          {questions.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index} className="border-b border-[#2D0A2E]/15">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-medium tracking-wide text-[#2D0A2E]">
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 text-[#2D0A2E]">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 pr-10 text-[#2D0A2E]/70 leading-relaxed max-w-3xl">
                    {item.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
