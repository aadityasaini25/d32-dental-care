'use client';

import { useState } from 'react';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are dental implants?",
      answer: "Dental implants are titanium posts surgically placed into the jawbone to replace missing tooth roots. They provide a strong foundation for fixed or removable replacement teeth that look, feel, and function like natural teeth."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care and regular dental checkups, dental implants can last 15 years or more, and in many cases, they last a lifetime. Good oral hygiene and healthy gums are key to long-term success."
    },
    {
      question: "Are dental implants painful?",
      answer: "Most patients experience minimal discomfort during and after the procedure. Local anesthesia or sedation is used to ensure comfort, and mild soreness afterward can be managed with prescribed pain medication."
    },
    {
      question: "Who is a good candidate for dental implants?",
      answer: "Ideal candidates are individuals with healthy gums, sufficient bone density, and good overall health. Even if you’ve experienced bone loss, advanced options like bone grafting can make implants possible."
    },
    {
      question: "How do I care for dental implants?",
      answer: "Dental implants require the same care as natural teeth — brushing twice daily, flossing regularly, and routine dental checkups. Avoid smoking and maintain good oral hygiene to extend their lifespan."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="p-4 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6">
          Frequently Asked Questions about Dental Implants
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg hover:shadow-md transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 md:p-6 text-left font-bold hover:bg-gray-50 flex justify-between items-center"
              >
                <span className="flex-grow pr-4 md:text-lg">{faq.question}</span>
                <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''} flex-shrink-0`}>
                  ▼
                </span>
              </button>
              {openFAQ === index && (
                <div className="p-4 md:p-6 border-t bg-gray-50">
                  <p className="text-gray-700 italic md:text-lg">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}