import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl mb-12 ${centered ? 'mx-auto text-center' : ''}`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
            light
              ? 'bg-gold/20 text-gold border border-gold/40'
              : 'bg-navy/10 text-navy border border-navy/20'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight mb-4 leading-tight ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-1 w-20 bg-gradient-to-r from-gold via-gold-400 to-navy rounded-full mb-4 ${
          centered ? 'mx-auto' : ''
        }`}
      />
      {subtitle && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-200' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
