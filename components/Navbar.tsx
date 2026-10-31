'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, ChevronRight, CalendarCheck } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Banner Contact Line */}
      <div className="bg-navy text-white text-xs py-2 px-4 sm:px-8 border-b border-gold/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-200">
              <Phone className="w-3.5 h-3.5 text-gold" />
              <a href="tel:+916009874892" className="hover:text-gold transition">+91-6009874892</a>
            </span>
            <span className="flex items-center gap-2 text-slate-200">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <a href="mailto:info@jsmaspirefoundation.org" className="hover:text-gold transition">info@jsmaspirefoundation.org</a>
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Multidisciplinary Capacity Building & Training Solutions</span>
            <span className="text-gold font-medium">| Mon–Sat: 9:00 AM – 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-md py-3 border-b border-gold/20'
            : 'bg-cream py-4 border-b border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-white rounded-lg p-1 shadow-sm border border-gold/30 flex items-center justify-center group-hover:border-gold transition">
              <Image
                src="/jsm-logo.png"
                alt="JSM ASPIRE ACADEMY PVT. LTD. Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-navy tracking-tight group-hover:text-gold-600 transition">
                JSM ASPIRE ACADEMY
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-wider text-slate-500 uppercase">
                Pvt. Ltd. &bull; Capacity Building
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition relative py-1 ${
                    isActive
                      ? 'text-navy font-bold'
                      : 'text-slate-700 hover:text-navy'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition shadow-md hover:shadow-lg hover:shadow-navy/20 flex items-center gap-2 border border-gold/40 group"
            >
              <CalendarCheck className="w-4 h-4 text-gold group-hover:scale-110 transition" />
              <span>Request Consultation</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-3 py-1.5 bg-navy text-white text-xs font-semibold rounded hover:bg-navy-800 transition mr-1"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy rounded-lg hover:bg-slate-200/50 transition focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition ${
                    isActive
                      ? 'bg-navy/10 text-navy font-bold border-l-4 border-gold'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-navy'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full py-3 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition flex items-center justify-center gap-2 shadow-md"
              >
                <CalendarCheck className="w-4 h-4 text-gold" />
                <span>Request Consultation</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
