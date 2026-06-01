import { useState } from "react";
import { motion } from "motion/react";
import BonusCard from "./components/BonusCard";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import { 
  DRILL_CATEGORIES, 
  BENEFITS, 
  TESTIMONIALS, 
  Category, 
  Benefit, 
  Testimonial 
} from "./data";
import { 
  Zap, 
  ChevronsUp, 
  TrendingDown, 
  Compass, 
  ShieldAlert, 
  Activity, 
  Flame, 
  Footprints,
  Shield, 
  Award, 
  LayoutGrid, 
  TrendingUp, 
  Check, 
  Star, 
  Clock, 
  BadgeCheck, 
  Lock,
  ArrowRight,
  ShieldCheck,
  Target,
  BookOpen,
  Users
} from "lucide-react";

// Mapping icons for categorized drills
const categoryIcons: Record<string, any> = {
  "Zap": Zap,
  "PlaneTakeoff": ChevronsUp,
  "TrendingDown": TrendingDown,
  "Compass": Compass,
  "ShieldAlert": ShieldAlert,
  "Activity": Activity,
  "Flame": Flame,
  "Footprints": Footprints,
};

// Mapping icons for core benefits
const benefitIcons: Record<string, any> = {
  "Target": Target,
  "Award": Award,
  "LayoutGrid": LayoutGrid,
  "TrendingUp": TrendingUp,
};

export default function App() {
  const [purchaseOpen, setPurchaseOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800 min-h-screen font-sans antialiased overflow-x-hidden selection:bg-emerald-500 selection:text-white">
      
      {/* 2. HERO PRINCIPAL */}
      <section className="relative pt-10 pb-16 md:pt-14 md:pb-22 px-6 overflow-hidden">
        {/* Abstract soccer pitch grid background lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] opacity-30 pointer-events-none" />
        {/* Soft Radial Ambient Lights */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-100/40 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-emerald-50/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7.5xl font-display font-black text-[#011a0c] tracking-tight leading-none max-w-5xl"
          >
            +250 Dinâmicas Prontas Para Seus{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700">
              Treinos de Goleiros
            </span>
          </motion.h1>

          {/* Subheadline (Copy do usuário) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-gray-600 text-sm md:text-lg max-w-3xl leading-relaxed font-normal"
          >
            Chega de perder tempo montando treino de última hora. É só abrir, escolher e aplicar — em menos de 2 minutos.
          </motion.p>

          {/* Mockup do Produto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-10 w-full max-w-xl flex justify-center aspect-[4/3] max-h-[480px]"
          >
            <img 
              src="https://i.ibb.co/Qjx0XrXb/Untitled-design-7.webp" 
              alt="Mockup do Infoproduto Goleiros" 
              referrerPolicy="no-referrer"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="576"
              height="432"
              className="w-full h-auto object-contain max-h-[480px] aspect-[4/3] bg-slate-50/10 rounded-2xl"
            />
          </motion.div>

          {/* Large gradient button (Copy do usuário: "QUERO ACESSAR AGORA") */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-10"
          >
            <a 
              href="#precos"
              className="px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-display font-black tracking-wider text-xs md:text-sm uppercase shadow-2xl shadow-emerald-500/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span>QUERO ACESSAR AGORA</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </motion.div>

          {/* Mockup do produto removed */}

        </div>
      </section>

      {/* 3. O QUE VOCÊ VAI RECEBER */}
      <section id="conteudo" className="relative py-14 px-6 bg-white text-brand-dark scroll-mt-20 overflow-hidden defer-render">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-50/40 rounded-full blur-3xl -z-10" />

        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#011a0c] tracking-tight whitespace-nowrap">
              O Que Você Vai Receber
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto items-stretch">
            
            {/* Card 1: Material Completo */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 flex flex-col max-w-sm w-full mx-auto">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 mx-auto text-emerald-600 shrink-0">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#011a0c] text-center mb-4">
                Material Completo
              </h3>
              <ul className="space-y-3 max-w-[248px] mx-auto w-full text-left">
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>+250 dinâmicas organizadas</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Dinâmicas explicadas passo a passo</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Acesso imediato e vitalício</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Atualizações mensais</span>
                </li>
              </ul>
            </div>

            {/* Card 2: Mais de 250 Dinâmicas Divididas em 6 Categorias */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 flex flex-col max-w-sm w-full mx-auto">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 mx-auto text-emerald-600 shrink-0">
                <LayoutGrid className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#011a0c] text-center mb-4">
                Mais de 250 dinâmicas divididas em 6 categorias
              </h3>
              <ul className="space-y-3 max-w-[248px] mx-auto w-full text-left">
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Tempo de reação</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Saídas do gol</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Queda e defesa</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Posicionamento</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>1x1</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm text-gray-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span>Trabalho com os pés</span>
                </li>
              </ul>
            </div>

            {/* Card 3: Para Todos os Níveis */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-emerald-100 flex flex-col max-w-sm w-full mx-auto text-center">
              <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 mx-auto text-emerald-600 shrink-0">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#011a0c] text-center mb-2">
                Para Todos os Níveis
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Dinâmicas adaptáveis para goleiros iniciantes, intermediários e avançados.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. BENEFÍCIOS ("Por Que Escolher Nossas Dinâmicas de Goleiro?") */}
      <section id="beneficios" className="relative py-14 px-6 bg-white border-t border-gray-100 defer-render">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#011a0c] tracking-tight leading-none">
              Por Que Escolher Nossas Dinâmicas para Goleiros?
            </h2>
          </div>

          {/* Benefits Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((benefit: Benefit, idx: number) => {
              const IconComp = benefitIcons[benefit.iconName] || Target;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-emerald-100 p-6 rounded-2xl shadow-sm space-y-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 p-2 flex items-center justify-center text-emerald-600">
                    <IconComp className="w-5.5 h-5.5" />
                  </div>
                  
                  <h3 className="font-display font-extrabold text-lg md:text-xl text-[#011a0c] leading-snug">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Replica of the hero button centered under the cards */}
          <div className="mt-12 flex justify-center">
            <a 
              href="#precos"
              className="px-8 py-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-display font-black tracking-wider text-xs md:text-sm uppercase shadow-2xl shadow-emerald-500/10 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span>QUERO ACESSAR AGORA</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>

        </div>
      </section>

      {/* 5. BONUS EXCLUSIVOS */}
      <BonusCard />

      {/* 7. PLANOS / PRICING */}
      <PricingSection />

      {/* 7.5. GARANTIA DE 14 DIAS */}
      <section className="py-12 px-6 bg-slate-50 border-t border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-emerald-100/80 flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8 relative overflow-hidden">
            {/* Subtle radial light glow helper */}
            <div className="absolute -right-16 -bottom-16 w-40 h-40 bg-emerald-100/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -left-16 -top-16 w-32 h-32 bg-teal-50/40 rounded-full blur-xl pointer-events-none" />
            
            {/* Guarantee Badge */}
            <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0 text-emerald-600 shadow-sm">
              <ShieldCheck className="w-10 h-10 md:w-12 md:h-12 stroke-[1.5]" />
            </div>

            {/* Guarantee Text Content */}
            <div className="space-y-2 relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-black text-[#011a0c] tracking-tight">
                Garantia de 14 dias
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. DEPOIMENTOS (Fortalecidos por atletas renomados como Alisson e Ederson, mais clientes reais) */}
      <section id="depoimentos" className="relative py-14 px-6 bg-white overflow-hidden border-t border-gray-100 defer-render">
        
        {/* Glowing lighting dots */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
            <h2 className="text-3xl md:text-5xl font-display font-black text-[#011a0c] tracking-tight">
              Depoimentos Reais
            </h2>
          </div>

          {/* Testimonial Streams */}
          <div className="space-y-6">

            {/* Standard happy customers Sublock */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {TESTIMONIALS.map((test: Testimonial, i: number) => (
                <div 
                  key={i}
                  className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition-all"
                >
                  <div className="space-y-4">
                    {/* Header: Photo and Name at the top */}
                    <div className="flex items-center gap-2.5">
                      <img 
                        src={test.image} 
                        alt={test.name} 
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        width="40"
                        height="40"
                        className="w-10 h-10 rounded-full object-cover aspect-square bg-slate-100"
                      />
                      <h4 className="text-gray-900 font-display font-semibold text-sm">
                        {test.name}
                      </h4>
                    </div>

                    {/* Golden Stars row */}
                    <div className="flex gap-0.5">
                      {[...Array(test.rating)].map((_, idx) => (
                        <Star key={idx} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-gray-600 text-xs italic leading-relaxed">
                      “{test.comment}”
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* 10. FAQ SECTION */}
      <FAQSection />

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 py-8 px-6 text-center text-xs text-gray-400">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <p className="font-medium tracking-wide text-gray-600">+250 dinâmicas para treinos de goleiros</p>
        </div>
      </footer>

    </div>
  );
}
