'use client';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function PortfolioCard({ 
  title, 
  businessType, 
  problem, 
  solution, 
  result,
  metric,
  image,
  tags,
  testimonial,
  link 
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
      {/* Image/Placeholder */}
      <div className="relative h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
        {!imageError && image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-white/20 mb-2">{title}</div>
              <div className="text-sm text-white/40">{businessType}</div>
            </div>
          </div>
        )}
        
        {/* Metric Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-xs font-bold text-white">
          {metric}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
          <p className="text-sm text-blue-400">{businessType}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span 
              key={i}
              className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Problem → Solution */}
        <div className="space-y-3 mb-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Challenge</div>
            <p className="text-sm text-slate-300">{problem}</p>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Solution</div>
            <p className="text-sm text-slate-300">{solution}</p>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase mb-1">Result</div>
            <p className="text-sm text-green-400">{result}</p>
          </div>
        </div>

        {/* Testimonial if exists */}
        {testimonial && (
          <div className="mt-4 pt-4 border-t border-slate-700/50">
            <p className="text-sm italic text-slate-400">"{testimonial}"</p>
          </div>
        )}

        {/* Link if exists */}
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold group/link"
          >
            View Live Site
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        )}
      </div>
    </div>
  );
}