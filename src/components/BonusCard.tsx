import { motion } from "motion/react";
import { BONUSES, Bonus } from "../data";
import { ClipboardCheck, BookOpen, Flame, Gift, Check } from "lucide-react";

// Icon components helper mapping dynamically to lucide icons
const iconMap: Record<string, any> = {
  ClipboardCheck: ClipboardCheck,
  BookOpen: BookOpen,
  Flame: Flame,
};

export default function BonusCard() {
  return (
    <section id="bonus" className="relative py-14 px-6 bg-white overflow-hidden border-t border-gray-100">
      
      {/* Decorative soccer grid element */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-4">
          <h2 className="text-2xl md:text-4xl font-display font-black text-[#011a0c] tracking-tight">
            Receba 3 Bônus Incríveis Totalmente Grátis!
          </h2>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BONUSES.map((bonus: Bonus, index: number) => {
            const Icon = iconMap[bonus.iconName] || Gift;
            return (
              <motion.div
                key={bonus.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-gray-50 border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col justify-between"
              >
                {/* Ribbon Tag banner */}
                <div className="absolute top-3.5 right-3.5 bg-amber-50 text-amber-700 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-amber-200">
                  {bonus.tag}
                </div>

                <div className="space-y-3 pt-2">
                  {/* Icon Circle */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-2.5 shadow-md flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base md:text-lg font-display font-bold text-[#011a0c] leading-snug">
                    {bonus.title}
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                {/* Slashed Prices */}
                <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 line-through block font-mono">
                      De {bonus.originalPrice}
                    </span>
                    <span className="text-amber-600 font-display text-[11px] font-semibold tracking-wider uppercase">
                      Valor Original
                    </span>
                  </div>
                  <div className="bg-[#22c55e]/90 text-white font-display font-black text-xs px-2.5 py-1 rounded-md tracking-wider animate-pulse flex items-center gap-1">
                    <span>GRÁTIS</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
