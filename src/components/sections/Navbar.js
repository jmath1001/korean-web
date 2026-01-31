'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, Mail } from 'lucide-react';
import CTAButton from '../ui/CTAButton';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/10 py-3' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center gap-4">
          
          {/* LEFT: Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
              {t.logo}
            </a>
          </div>

          {/* MIDDLE: Widened Contact Info */}
          <div className="hidden lg:flex flex-grow justify-center max-w-2xl">
            <div className="flex items-center gap-10 bg-slate-800/40 px-8 py-2.5 rounded-2xl border border-white/5 backdrop-blur-md">
              <a href="tel:2146043095" className="group flex items-center gap-3 hover:text-blue-400 transition-all whitespace-nowrap">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Call</span>
                  <span className="text-sm font-semibold text-slate-200">{t.phone}</span>
                </div>
              </a>

              <div className="w-px h-6 bg-white/10" />

              <a href="mailto:opatmath@gmail.com" className="group flex items-center gap-3 hover:text-purple-400 transition-all whitespace-nowrap">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Email</span>
                  <span className="text-sm font-semibold text-slate-200">{t.email}</span>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT: Dual Language Toggle + CTA */}
          <div className="flex-shrink-0 flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4">
              
              {/* Dual Language Toggle Button */}
              <button
                onClick={toggleLanguage}
                className="relative flex items-center bg-slate-800/50 border border-white/10 rounded-full p-1 transition-all hover:border-white/20"
                aria-label="Switch Language"
              >
                {/* Sliding Background Indicator */}
                <div 
                  className={`absolute h-7 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 ease-in-out ${
                    language === 'en' ? 'left-1' : 'left-[52px]'
                  }`}
                />
                
                <span className={`relative z-10 w-12 text-center text-[10px] font-bold transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-slate-400'}`}>
                  EN
                </span>
                <span className={`relative z-10 w-12 text-center text-[10px] font-bold transition-colors duration-300 ${language === 'ko' ? 'text-white' : 'text-slate-400'}`}>
                  한글
                </span>
              </button>
              
              <CTAButton variant="primary" href="/process">
                {t.contact}
              </CTAButton>
            </div>

            <button className="lg:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-white/10 px-6 py-8 space-y-6">
          <div className="grid grid-cols-1 gap-3">
             <a href="tel:2146043095" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <Phone className="text-blue-400" />
                <span className="font-semibold text-slate-200">{t.phone}</span>
             </a>
             <a href="mailto:opatmath@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <Mail className="text-purple-400" />
                <span className="font-semibold text-slate-200">{t.email}</span>
             </a>
          </div>
          
          {/* Mobile Dual Toggle */}
          <div className="flex justify-between items-center pt-4 border-t border-white/5">
            <button
              onClick={toggleLanguage}
              className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1"
            >
              <div className={`absolute h-8 w-16 bg-blue-600 rounded-full transition-all duration-300 ${language === 'en' ? 'translate-x-0' : 'translate-x-[64px]'}`} />
              <span className="relative z-10 w-16 text-center text-xs font-bold py-1">EN</span>
              <span className="relative z-10 w-16 text-center text-xs font-bold py-1">한글</span>
            </button>
            
            <CTAButton variant="primary" href="/#contact">
              {t.contact}
            </CTAButton>
          </div>
        </div>
      )}
    </nav>
  );
}