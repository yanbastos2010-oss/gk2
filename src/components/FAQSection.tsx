import { useState } from "react";
import { FAQS, FAQ } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-14 px-6 bg-white overflow-hidden defer-render">
      
      {/* Decorative vectors */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-emerald-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-black text-brand-dark tracking-tight whitespace-nowrap">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Collapsible Accordion Stream */}
        <div className="space-y-4">
          {FAQS.map((faq: FAQ, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Header click strip */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-display font-bold text-[#061c12] text-sm md:text-base hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-emerald-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                  )}
                </button>

                {/* Collapsible Answer zone */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-5 md:p-6 pt-0 border-t border-gray-100 text-xs md:text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
