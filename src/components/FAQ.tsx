"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are drone painting operations safe?",
      answer:
        "Yes — flights are pilot-supervised, we maintain exclusion zones, use non-flammable paint formulations, and carry full liability insurance. Our pilots are DGCA-certified and follow strict safety protocols for every operation.",
    },
    {
      question: "Do you need permission to fly in my area?",
      answer:
        "We handle Digital Sky filings and local permissions as part of every project. Our team manages all DGCA compliance requirements, municipal notifications, and police clearances. You don't need to worry about any regulatory paperwork.",
    },
    {
      question: "How much can I save compared to traditional methods?",
      answer:
        "Clients typically save up to 80% compared to traditional scaffolding and lift methods, with projects completing up to 4× faster. The exact savings depend on building height, surface area, and project complexity.",
    },
    {
      question: "What areas do you service?",
      answer:
        "We currently service Chandigarh, Panchkula, Mohali, and the wider Punjab, Haryana, and Delhi NCR regions. Our service radius extends approximately 100 km from Chandigarh. Contact us for projects outside this area.",
    },
    {
      question: "What is included in the inspection report?",
      answer:
        "Every project includes high-resolution before/after photos, thermal imaging where applicable, detailed condition assessment, and maintenance recommendations. Reports are delivered digitally within 24-48 hours of project completion.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about our drone facade services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-medium/30 border border-slate-light/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium text-white pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 bg-slate-light/20 rounded-full flex items-center justify-center transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition-colors"
          >
            Contact our team
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
