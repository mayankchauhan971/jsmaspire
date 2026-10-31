'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Award,
  Target,
  Eye,
  Shield,
  Lightbulb,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ConsultationModal from '@/components/ConsultationModal';

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coreValues = [
    {
      title: 'Excellence',
      desc: 'We adhere to the highest institutional standards in instructional design, faculty selection, and delivery execution across every project.',
      icon: Award,
      color: 'from-blue-600 to-navy',
    },
    {
      title: 'Integrity',
      desc: 'Transparency, accountability, and ethical stewardship underpin all our government, corporate, and community partnerships.',
      icon: Shield,
      color: 'from-amber-600 to-gold',
    },
    {
      title: 'Innovation',
      desc: 'We integrate modern learning technologies, interactive pedagogy, and Industry 4.0 paradigms into conventional training frameworks.',
      icon: Lightbulb,
      color: 'from-blue-500 to-navy-700',
    },
    {
      title: 'Collaboration',
      desc: 'We partner closely with client organizations, regional training networks, and domain experts to co-create contextualized solutions.',
      icon: Users,
      color: 'from-gold-600 to-amber-700',
    },
    {
      title: 'Impact',
      desc: 'Our success is defined strictly by empirical progress: improved workplace efficiency, policy execution capability, and career advancement.',
      icon: Target,
      color: 'from-navy-800 to-navy',
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="px-4 py-1 bg-white/10 text-gold rounded-full text-xs font-bold uppercase tracking-widest border border-gold/30 inline-block">
            About JSM Aspire Foundation
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Institutional Leadership & Capacity Building
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Empowering institutions, public departments, and corporate workforces with outcome-focused training and professional development solutions.
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-navy text-xs font-bold uppercase tracking-wider bg-navy/10 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-gold" />
              <span>Company Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy leading-tight">
              A Multidisciplinary Organization Dedicated to Transformative Learning
            </h2>

            <div className="w-20 h-1 bg-gold rounded-full" />

            <p className="text-base text-slate-700 leading-relaxed font-sans">
              <strong>JSM ASPIRE FOUNDATION PVT. LTD.</strong> is a multidisciplinary learning, training, and capacity-building organization delivering high-quality, outcome-driven training solutions across government, education, corporate, and community sectors.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              We work closely with government departments, educational institutions, corporate organizations, NGOs, CSR initiatives, and development partners to strengthen knowledge, skills, leadership, and professional competencies.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Through our blend of adult learning principles, practical toolkits, and scalable implementation infrastructure, we bridge critical skill gaps and enable organizations to achieve long-term operational success.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-navy text-white text-sm font-bold rounded-xl hover:bg-navy-800 transition shadow-md flex items-center gap-2"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </button>

              <Link
                href="/services"
                className="text-sm font-bold text-navy hover:text-gold transition flex items-center gap-1"
              >
                <span>View Our Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
                alt="JSM Aspire Foundation Executive Training"
                width={600}
                height={500}
                className="object-cover w-full h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-2xl border border-gold/30 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-navy text-gold rounded-xl">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif font-bold text-navy">Public & Corporate Trust</h4>
                    <p className="text-xs text-slate-600">Delivering government-aligned capacity building across multiple states.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-surface py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-md relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 bg-navy text-gold rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Target className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-600 block mb-2">Our Mission</span>
                <h3 className="text-2xl font-serif font-bold text-navy mb-4">Empowering Capability Through Practical Training</h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
                  To deliver practical, innovative, and high-impact learning solutions that strengthen human capital, enhance institutional performance, and enable sustainable social and economic progress across sectors.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-600" /> Outcome-Focused Delivery
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-navy text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/15 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-14 h-14 bg-gold text-navy rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Eye className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">Our Vision</span>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">Premier Capacity Building Partner</h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-sans">
                  To be a premier and trusted capacity-building partner recognized for excellence, innovation, and measurable transformation in human capital development across public and private sectors.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-gold" /> Multi-Sector Credibility
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Guiding Principles"
          title="Our Core Values"
          subtitle="Five foundational pillars that dictate our curriculum standards, partner relationships, and operational ethics."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, idx) => {
            const ValueIcon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-gold/50 shadow-sm hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy group-hover:bg-navy group-hover:text-gold transition-colors duration-300 flex items-center justify-center mb-6">
                  <ValueIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-navy mb-2 group-hover:text-gold-600 transition">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {value.desc}
                </p>
              </motion.div>
            );
          })}

          {/* Institutional Commitment Card */}
          <div className="bg-gradient-to-br from-navy to-navy-800 text-white p-8 rounded-2xl border border-gold/30 shadow-lg flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold block mb-2">Our Pledge</span>
              <h3 className="text-xl font-serif font-bold text-white mb-2">Institutional Assurance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Every program delivered by JSM Aspire Foundation undergoes continuous feedback loops, post-training evaluation, and alignment with national standards.
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 px-4 py-2 bg-gold text-navy font-bold text-xs rounded hover:bg-gold-400 transition"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
