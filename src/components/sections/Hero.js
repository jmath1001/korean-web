'use client';
import FadeInSection from '../ui/FadeInSection';
import CTAButton from '../ui/CTAButton';
import { ChevronDown, DollarSign, Zap, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <FadeInSection>
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold">
            {t.badge}
          </div>
        </FadeInSection>
        
        <FadeInSection delay={200}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            {t.title}
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {t.titleHighlight}
            </span>
          </h1>
        </FadeInSection>

        <FadeInSection delay={400}>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </FadeInSection>

        {/* Pricing Hook */}
        <FadeInSection delay={500}>
          <div className="mb-12 flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 bg-green-500/10 border border-green-500/30 rounded-lg">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="text-green-300 font-semibold">{t.pricePoint}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">{t.speedPoint}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">{t.resultsPoint}</span>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="primary" href="#portfolio">{t.cta1}</CTAButton>
            <CTAButton variant="secondary" href="#contact">{t.cta2}</CTAButton>
          </div>
        </FadeInSection>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </div>
      </div>
    </section>
  );
}