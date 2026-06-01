import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, Shield, AlertCircle, ShoppingCart, Gift } from "lucide-react";

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showUpsell, setShowUpsell] = useState(false);

  const handleOpenCheckout = (planName: string) => {
    let checkoutUrl = "";
    if (planName === "Plano Básico — R$ 10,00") {
      checkoutUrl = "https://checkout.materialcompleto.shop/VCCL1O8SD2NG";
    } else if (planName === "Plano Completo — R$ 19,90") {
      checkoutUrl = "https://checkout.materialcompleto.shop/VCCL1O8SD2NF";
    } else if (planName === "Plano Completo — R$ 27,00") {
      checkoutUrl = "https://checkout.materialcompleto.shop/VCCL1O8SD2NE";
    }

    if (checkoutUrl) {
      window.open(checkoutUrl, "_blank");
    }
  };

  const handleSimulatePurchase = (e: FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes("@")) {
      alert("Por favor, digite um e-mail válido para receber o material.");
      return;
    }
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setPurchaseSuccess(true);
    }, 1200);
  };

  return (
    <section id="precos" className="relative py-14 px-6 bg-white overflow-hidden scroll-mt-10">
      
      {/* Soft background grids */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-neon/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-black text-brand-dark tracking-tight">
            Invista na Qualidade dos Seus Treinos
          </h2>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-4xl mx-auto">
          
          {/* 1. PLANO BÁSICO */}
          <div 
            className="group bg-gray-50 border border-gray-200 rounded-3xl p-8 flex flex-col justify-between relative shadow-sm"
          >
            <div>
              
              {/* Title & Price */}
              <h3 className="text-2xl font-display font-bold text-brand-dark text-center">Plano Básico</h3>
              <p className="text-gray-500 text-xs mt-1 text-center">Para quem quer testar o método</p>
              
              <div className="mt-6 flex flex-col items-center">
                <div className="flex items-start text-gray-900 font-black mb-1">
                  <span className="text-lg mt-2">R$</span>

                  <span className="text-5xl">10</span>

                  <div className="flex flex-col items-start mt-2">
                    <span className="text-2xl">,00</span>
                  </div>
                </div>

                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                  Pagamento Único
                </p>
              </div>

              {/* Benefits list */}
              <ul className="mt-8 space-y-4 text-sm md:text-base text-[#374151]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>+250 Dinâmicas para Treinos de Goleiros</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Acesso Digital</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Garantia de 14 dias</strong></span>
                </li>
                <li className="flex items-start gap-2.5 text-[#374151]">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Bônus Exclusivos</strong></span>
                </li>
                <li className="flex items-start gap-2.5 text-[#374151]">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span><strong>Atualizações Mensais</strong></span>
                </li>
              </ul>
            </div>

            {/* Button */}
            <div className="mt-10">
              <button 
                onClick={() => setShowUpsell(true)}
                className="w-[90%] mx-auto block text-center py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:brightness-110 text-white font-display font-black uppercase rounded-xl transition-all text-sm md:text-base cursor-pointer shadow-xl animate-scale-pulse cursor-pointer"
              >
                COMPRAR AGORA
              </button>
            </div>
          </div>

          {/* 2. PLANO COMPLETO (Recommended Option) */}
          <div 
            className="relative bg-white border-2 border-emerald-600/45 rounded-3xl p-8 flex flex-col justify-between shadow-lg hover:border-emerald-600 transition-colors duration-300"
          >
            {/* MAIS ESCOLHIDO Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white text-[10px] font-black tracking-widest px-4 py-1 rounded-full uppercase shadow-sm">
              MAIS ESCOLHIDO
            </div>

            <div>

              {/* Title & Price */}
              <h3 className="text-2xl font-display font-bold text-brand-dark text-center">Plano Completo</h3>
              <p className="text-gray-500 text-xs mt-1 text-center">Para transformar seus treinos</p>

              <div className="mt-6 flex flex-col items-center">
                <div className="flex items-start text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-700 font-black mb-1">
                  <span className="text-lg mt-2">R$</span>

                  <span className="text-5xl">27</span>

                  <div className="flex flex-col items-start mt-2">
                    <span className="text-2xl">,00</span>
                  </div>
                </div>

                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">
                  Pagamento Único
                </p>
              </div>

              {/* Benefits list */}
              <ul className="mt-8 space-y-4 text-sm md:text-base text-[#374151]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>+250 Dinâmicas para Treinos de Goleiros</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Gift className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>BÔNUS: Ficha de Presença dos Atletas</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Gift className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>BÔNUS: Guia de Preparação Mental e Foco para Goleiros</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Gift className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>BÔNUS: Circuitos de Agilidade e Explosão</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Para Treinos Individuais e em Grupo</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Dinâmicas Alinhadas ao Futebol Moderno</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Aplicação Imediata</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Atualizações Mensais</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Material 100% Baixável</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Suporte Rápido</strong></span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span><strong>Garantia de 14 Dias</strong></span>
                </li>
              </ul>
            </div>

            {/* Premium Button */}
            <div className="mt-10">
              <a 
                href="https://checkout.materialcompleto.shop/VCCL1O8SD2NE"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[90%] mx-auto block text-center py-4 bg-gradient-to-r from-emerald-600 to-teal-700 hover:brightness-110 text-white font-display font-black uppercase rounded-xl transition-all text-sm md:text-base cursor-pointer shadow-xl animate-scale-pulse select-none"
              >
                COMPRAR AGORA
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* UPSELL DIALOG MODAL */}
      <AnimatePresence>
        {showUpsell && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white text-slate-800 border-2 border-emerald-500/30 w-full max-w-md p-5 md:p-6 rounded-3xl shadow-2xl overflow-hidden relative"
            >
              <button 
                onClick={() => setShowUpsell(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 text-xl font-bold cursor-pointer transition-colors"
                aria-label="Fechar"
              >
                ✕
              </button>

              <div className="space-y-5">
                
                {/* Visual Header */}
                <div className="text-center">
                  <span className="text-[11px] bg-emerald-50 text-emerald-700 font-mono font-bold px-3 py-1 rounded-full border border-emerald-200 animate-pulse inline-block uppercase tracking-wider">
                    ⚠️ Oportunidade Única
                  </span>
                  <h4 className="text-[30px] font-display font-black text-[#011a0c] tracking-tight mt-3">
                    Espere! Antes de finalizar...
                  </h4>
                </div>

                {/* Subtext description adapted cleanly to goalkeeper theme */}
                <p className="text-slate-650 text-sm md:text-base leading-relaxed text-center px-1">
                  Você escolheu o plano básico de <strong className="text-slate-900 font-extrabold">R$ 10,00</strong>, mas por apenas <strong className="text-[#22c55e] font-black">R$ 9,90 a mais</strong> pode liberar o Pacote Completo, com acesso total a +250 Dinâmicas de Treinos de Goleiros e todos os bônus inclusos.
                </p>

                {/* Price Display card in clean light palette */}
                <div className="bg-[#F0FDF4]/95 rounded-2xl p-4 border border-emerald-500/20 max-w-sm mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* Visual Price column structured beautifully */}
                  <div className="flex items-start text-[#22c55e] font-black shrink-0">
                    <span className="text-lg mt-1 mr-0.5 font-bold">R$</span>
                    <span className="text-5xl tracking-tighter">19</span>
                    <div className="flex flex-col mt-1">
                      <span className="text-2xl font-bold">,90</span>
                    </div>
                  </div>

                  {/* Adapted Features bullets with checkmarks */}
                  <ul className="text-left space-y-2 text-[10px] sm:text-xs md:text-sm text-slate-700 font-black whitespace-nowrap">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                      <span><strong>+250 DINÂMICAS PARA TREINOS DE GOLEIROS</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                      <span><strong>ACESSO VITALÍCIO + ATUALIZAÇÕES</strong></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#22c55e] shrink-0" />
                      <span><strong>+R$ 198 EM BÔNUS INCLUSOS</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Conversion Buttons */}
                <div className="space-y-3 pt-1">
                  <a 
                    onClick={() => {
                      setShowUpsell(false);
                    }}
                    href="https://checkout.materialcompleto.shop/VCCL1O8SD2NF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:brightness-110 text-white font-display font-black text-sm uppercase tracking-wider cursor-pointer shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2 select-none"
                  >
                    <span>SIM, QUERO O PLANO COMPLETO!</span>
                  </a>

                  <a 
                    onClick={() => {
                      setShowUpsell(false);
                    }}
                    href="https://checkout.materialcompleto.shop/VCCL1O8SD2NG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-white hover:bg-slate-50 border-2 border-[#E2E8F0] text-[#94A3B8] hover:text-slate-500 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors cursor-pointer text-center leading-tight select-none flex items-center justify-center"
                  >
                    Não, prefiro o plano básico
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* DETAILED CHECKOUT SIMULATION MODAL */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0c120e] text-white border border-brand-green/30 w-full max-w-md p-6 rounded-3xl shadow-2xl overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white text-sm"
              >
                ✕ Fechar
              </button>

              {!purchaseSuccess ? (
                <div className="space-y-4">
                  <div className="text-center">
                    <span className="text-[10px] bg-brand-neon/20 text-brand-neon font-mono font-bold px-3 py-1 rounded-full border border-brand-neon/30">
                      🔒 CHECKOUT INTEGRADO SEGURO
                    </span>
                    <h4 className="text-xl font-display font-bold uppercase tracking-tight mt-3">
                      Adquirir Material
                    </h4>
                    <p className="text-emerald-400 text-xs font-semibold mt-1">
                      {selectedPlan}
                    </p>
                  </div>

                  <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-xs text-gray-300 space-y-2">
                    <p className="font-semibold text-white">📦 O que acontece a seguir?</p>
                    <p>✓ Seus dados de pagamento são totalmente processados de forma criptografada pelo gateway SSL.</p>
                    <p>✓ Insira seu e-mail correto abaixo. As dinâmicas em PDF serão disparadas de forma automatizada no instante que o sistema receber o pagamento.</p>
                  </div>

                  <form onSubmit={handleSimulatePurchase} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1">
                        Seu Melhor E-mail:
                      </label>
                      <input 
                        type="email" 
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="exemplo@goleiro.com" 
                        className="w-full bg-black/60 border border-brand-green/50 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-neon text-sm"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-display font-black text-xs md:text-sm uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all text-center flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Processando Pagamento...</span>
                        </>
                      ) : (
                        <span>FINALIZAR COMPRA 🚀</span>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-gray-500 text-center">
                      Suas informações estão completamente protegidas sob leis de privacidade brasileiras.
                    </p>
                  </form>
                </div>
              ) : (
                <div className="text-center py-6 space-y-5">
                  <div className="w-16 h-16 bg-brand-neon/20 rounded-full flex items-center justify-center mx-auto border border-brand-neon/40">
                    <Check className="w-8 h-8 text-brand-neon" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <h4 className="text-2xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-gold">
                      COMPRA CONFIRMADA!
                    </h4>
                    <p className="text-xs text-gray-300">
                      Parabéns! O seu material já foi emitido e encaminhado.
                    </p>
                  </div>

                  <div className="bg-brand-neon/10 rounded-xl p-3 border border-brand-neon/20 text-xs text-emerald-400 space-y-1">
                    <p className="font-semibold">📧 Enviado para:</p>
                    <p className="font-mono text-white break-all">{emailInput}</p>
                  </div>

                  <p className="text-[11px] text-gray-400 px-3">
                    Abra o seu e-mail em instantes. Caso não localize na caixa principal, lembre-se de conferir no Lixo Eletrônico ou Spam. Bons treinos de goleiro!
                  </p>

                  <button 
                    onClick={() => setSelectedPlan(null)}
                    className="mt-4 px-6 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
                  >
                    Entendido, voltar para o site!
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
