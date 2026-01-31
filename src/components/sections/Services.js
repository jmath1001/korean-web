'use client'; // Required for useLanguage()

import FadeInSection from '../ui/FadeInSection';
import GradientCard from '../ui/GradientCard';
import { TrendingUp, Globe2, BarChart3, Users } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language].services;

  // We map the translated items from our JSON and attach the Icons/Gradients here
  const serviceItems = t.items.map((item, i) => ({
    ...item,
    icon: [TrendingUp, Globe2, BarChart3, Users][i],
    gradient: [
      'from-blue-500 to-cyan-600',
      'from-purple-500 to-pink-600',
      'from-orange-500 to-red-600',
      'from-green-500 to-emerald-600'
    ][i]
  }));

  return (
    <section id="services" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t.title}
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceItems.map((service, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <GradientCard {...service} />
            </FadeInSection>
          ))}
        </div>

        {/* Analytics Features Highlight */}
        <FadeInSection delay={400}>
          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                {t.analyticsHighlight.title}
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-slate-300">
              <div>
                <h4 className="font-semibold text-white mb-2">{t.analyticsHighlight.p1Title}</h4>
                <p className="text-sm">{t.analyticsHighlight.p1Desc}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">{t.analyticsHighlight.p2Title}</h4>
                <p className="text-sm">{t.analyticsHighlight.p2Desc}</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">{t.analyticsHighlight.p3Title}</h4>
                <p className="text-sm">{t.analyticsHighlight.p3Desc}</p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}