'use client';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language].footer;
  
  return (
    <footer className="border-t border-white/10 py-12 px-6 relative z-10 bg-slate-950">
      <div className="max-w-7xl mx-auto text-center text-slate-400">
        <p>{t.copyright}</p>
      </div>
    </footer>
  );
}