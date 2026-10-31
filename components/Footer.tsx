'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Globe, MapPin, Clock, ArrowRight, Shield, Award } from 'lucide-react';
import ConsultationModal from './ConsultationModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-navy text-white pt-16 pb-8 border-t-4 border-gold relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            {/* Column 1: Brand & Tagline */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-white rounded-lg p-1 shadow flex items-center justify-center">
                  <Image
                    src="/jsm-logo.png"
                    alt="JSM ASPIRE ACADEMY PVT. LTD. Logo"
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-white tracking-wide">
                    JSM ASPIRE ACADEMY
                  </h3>
                  <p className="text-xs text-gold font-semibold uppercase tracking-widest">
                    Pvt. Ltd. &bull; Capacity Building
                  </p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed max-w-md pt-2">
                A multidisciplinary learning, training, and capacity-building organization delivering high-quality, outcome-driven solutions across government, education, corporate, and community sectors.
              </p>

              <div className="p-3 bg-white/5 rounded-xl border border-gold/20 flex items-center gap-3 max-w-md">
                <Award className="w-8 h-8 text-gold flex-shrink-0" />
                <p className="text-xs text-slate-200">
                  <strong className="text-white block font-semibold">Government & Institutional Partner</strong>
                  Empowering public departments & organizations through accredited, practical methodology.
                </p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li>
                  <Link href="/" className="hover:text-gold transition flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-gold/70" /> Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gold transition flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-gold/70" /> About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-gold transition flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-gold/70" /> Services Overview
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-gold transition flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-gold/70" /> FAQ & Help
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gold transition flex items-center gap-1.5">
                    <ArrowRight className="w-3.5 h-3.5 text-gold/70" /> Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Featured Services */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                Core Programs
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <Link href="/services#gov-training" className="hover:text-gold transition block py-1 border-b border-white/5">
                    Government Capacity Building
                  </Link>
                </li>
                <li>
                  <Link href="/services#corporate-learning" className="hover:text-gold transition block py-1 border-b border-white/5">
                    Corporate Workforce Learning
                  </Link>
                </li>
                <li>
                  <Link href="/services#teacher-dev" className="hover:text-gold transition block py-1 border-b border-white/5">
                    Teacher Professional Dev.
                  </Link>
                </li>
                <li>
                  <Link href="/services#digital-skills" className="hover:text-gold transition block py-1 border-b border-white/5">
                    Digital & Future Skills
                  </Link>
                </li>
                <li>
                  <Link href="/services#tot" className="hover:text-gold transition block py-1 border-b border-white/5">
                    Training of Trainers (ToT)
                  </Link>
                </li>
                <li>
                  <Link href="/services#entrepreneurship" className="hover:text-gold transition block py-1 border-b border-white/5">
                    Entrepreneurship Programs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h4 className="font-serif text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full" />
                Contact Info
              </h4>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white">Phone Inquiry</span>
                    <a href="tel:+916009874892" className="hover:text-gold transition text-slate-300">
                      +91-6009874892
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white">Official Email</span>
                    <a href="mailto:info@jsmaspirefoundation.org" className="hover:text-gold transition text-slate-300 break-all">
                      info@jsmaspirefoundation.org
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Globe className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white">Website</span>
                    <a href="https://www.jsmaspirefoundation.org" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition text-slate-300">
                      www.jsmaspirefoundation.org
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-white">Working Hours</span>
                    <span>Monday–Saturday: 9:00 AM – 6:00 PM</span>
                  </div>
                </li>
              </ul>

              <button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 w-full py-2 bg-gold text-navy font-bold text-xs rounded hover:bg-gold-400 transition text-center shadow"
              >
                Inquire Now
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} <strong className="text-white">JSM ASPIRE ACADEMY PVT. LTD.</strong> All Rights Reserved.
            </p>
            <p className="flex items-center gap-4">
              <span className="hover:text-gold transition cursor-pointer">Building Capacity</span>
              <span>&bull;</span>
              <span className="hover:text-gold transition cursor-pointer">Empowering People</span>
              <span>&bull;</span>
              <span className="hover:text-gold transition cursor-pointer">Creating Impact</span>
            </p>
          </div>
        </div>
      </footer>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
