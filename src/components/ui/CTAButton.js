'use client';
import { ArrowRight } from 'lucide-react';

export default function CTAButton({ children, variant = 'primary', onClick, href }) {
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700',
    secondary: 'bg-white/10 hover:bg-white/20 border border-white/20'
  };

  const className = `${variants[variant]} px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 flex items-center gap-2 group inline-flex`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className}>
      {children}
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}