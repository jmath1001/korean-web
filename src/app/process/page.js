'use client';
import FadeInSection from '@/components/ui/FadeInSection';
import { Calendar, MessageSquare, Code, Rocket, BarChart3, Headphones } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function ProcessPage() {
  const { language } = useLanguage();
  const t = translations[language].process;

  const steps = [
    {
      number: '01',
      icon: Calendar,
      title: t.steps[0].title,
      description: t.steps[0].description,
      duration: t.steps[0].duration,
      deliverable: t.steps[0].deliverable,
      details: t.steps[0].details
    },
    {
      number: '02',
      icon: MessageSquare,
      title: t.steps[1].title,
      description: t.steps[1].description,
      duration: t.steps[1].duration,
      deliverable: t.steps[1].deliverable,
      details: t.steps[1].details
    },
    {
      number: '03',
      icon: Code,
      title: t.steps[2].title,
      description: t.steps[2].description,
      duration: t.steps[2].duration,
      deliverable: t.steps[2].deliverable,
      details: t.steps[2].details
    },
    {
      number: '04',
      icon: Rocket,
      title: t.steps[3].title,
      description: t.steps[3].description,
      duration: t.steps[3].duration,
      deliverable: t.steps[3].deliverable,
      details: t.steps[3].details
    },
    {
      number: '05',
      icon: BarChart3,
      title: t.steps[4].title,
      description: t.steps[4].description,
      duration: t.steps[4].duration,
      deliverable: t.steps[4].deliverable,
      details: t.steps[4].details
    },
    {
      number: '06',
      icon: Headphones,
      title: t.steps[5].title,
      description: t.steps[5].description,
      duration: t.steps[5].duration,
      deliverable: t.steps[5].deliverable,
      details: t.steps[5].details
    }
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold">
              {t.hero.badge}
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
            </h1>
          </FadeInSection>

          <FadeInSection delay={400}>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {steps.map((step, i) => (
              <FadeInSection key={i} delay={i * 50}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent hidden md:block" />
                  )}
                  
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center text-xs font-bold">
                          {step.number}
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow bg-slate-800/30 border border-slate-700/50 rounded-2xl p-8 hover:border-blue-500/30 transition-colors">
                      <h3 className="text-3xl font-bold mb-3">{step.title}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {step.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-3 text-slate-400">
                            <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-blue-400" />
                            </div>
                            {detail}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
                          ⏱️ {step.duration}
                        </div>
                        <div className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300">
                          ✓ {step.deliverable}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12">
              <h2 className="text-4xl font-bold mb-6 text-center">{t.pricing.title}</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto text-center">
                {t.pricing.subtitle}
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {t.pricing.tiers.map((tier, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-xl p-6 text-center">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${tier.gradient} bg-clip-text text-transparent mb-2`}>
                      {tier.price}
                    </div>
                    <div className="text-slate-300 font-semibold mb-2">{tier.name}</div>
                    <div className="text-sm text-slate-400">{tier.description}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-slate-800/50 rounded-xl">
                <div className="flex items-start gap-3">
                  <div className="text-2xl">💡</div>
                  <div>
                    <div className="font-semibold text-blue-300 mb-1">{t.pricing.flexible.title}</div>
                    <div className="text-slate-300 text-sm">{t.pricing.flexible.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center">{t.faq.title}</h2>
          </FadeInSection>

          <div className="space-y-6">
            {t.faq.questions.map((faq, i) => (
              <FadeInSection key={i} delay={i * 50}>
                <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                  <h3 className="text-xl font-bold mb-3 text-blue-400">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed">{faq.a}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.cta.title}</h2>
            <p className="text-xl text-slate-300 mb-8">{t.cta.subtitle}</p>
            <Link 
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 text-lg"
            >
              {t.cta.button}
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </FadeInSection>
        </div>
      </section>
    </main>
  );
}