'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  HeartHandshake,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Layers,
  Zap,
  Target,
  BookOpen,
  UserCheck,
  Laptop,
  Compass,
  TrendingUp,
  Brain,
  Lightbulb,
  FileCheck
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ConsultationModal from '@/components/ConsultationModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  // 1. Audience categories for Trusted By section
  const audienceCategories = [
    {
      title: 'Government Departments',
      desc: 'Capacity building, governance training, public sector reform & officer development.',
      icon: Building2,
      badge: 'Public Sector',
    },
    {
      title: 'Educational Institutions',
      desc: 'Faculty development, institutional accreditation support & student readiness.',
      icon: GraduationCap,
      badge: 'Higher Ed & Schools',
    },
    {
      title: 'Corporate Organizations',
      desc: 'Workforce reskilling, leadership academies & productivity enhancement.',
      icon: Briefcase,
      badge: 'Enterprise',
    },
    {
      title: 'NGOs & Non-Profits',
      desc: 'Grassroots training, field worker empowerment & program execution strength.',
      icon: Users,
      badge: 'Social Impact',
    },
    {
      title: 'CSR Initiatives',
      desc: 'Customized social impact skill deployment aligned with CSR compliance.',
      icon: HeartHandshake,
      badge: 'CSR Partners',
    },
    {
      title: 'Development Partners',
      desc: 'State-wide livelihood missions, donor funded projects & impact assessment.',
      icon: Globe2,
      badge: 'Multilateral',
    },
  ];

  // 2. Services Overview (10 Services)
  const servicesList = [
    {
      id: 'gov-training',
      title: 'Government Training & Capacity Building',
      desc: 'Structured modules for civil servants, public administrators, and department staff focused on governance, policy execution, and digital service delivery.',
      icon: Building2,
    },
    {
      id: 'corporate-learning',
      title: 'Corporate Learning & Workforce Development',
      desc: 'Targeted executive education, functional skill upgrade, managerial excellence, and organizational transformation initiatives.',
      icon: Briefcase,
    },
    {
      id: 'teacher-dev',
      title: 'Teacher Professional Development',
      desc: 'Pedagogical mastery, modern classroom management, NEP alignment, and digital teaching technology integration for educators.',
      icon: GraduationCap,
    },
    {
      id: 'student-dev',
      title: 'School & College Student Development',
      desc: 'Career orientation, soft skills, aptitude building, entrance readiness, and industry-aligned employability workshops.',
      icon: BookOpen,
    },
    {
      id: 'skill-livelihood',
      title: 'Skill Development & Livelihood Programs',
      desc: 'Vocational training, trade certification, rural empowerment, and sustainable employment generation frameworks.',
      icon: Target,
    },
    {
      id: 'entrepreneurship',
      title: 'Entrepreneurship Development',
      desc: 'Incubation mentorship, business plan formulation, financial literacy, and micro-enterprise creation for aspiring founders.',
      icon: Lightbulb,
    },
    {
      id: 'digital-skills',
      title: 'Digital & Future Skills',
      desc: 'Industry 4.0 training covering AI fundamentals, data literacy, cloud tools, digital marketing, and cybersecurity essentials.',
      icon: Laptop,
    },
    {
      id: 'leadership',
      title: 'Leadership & Soft Skills',
      desc: 'Strategic thinking, emotional intelligence, cross-cultural communication, negotiation, and high-performance team building.',
      icon: Compass,
    },
    {
      id: 'tot',
      title: 'Training of Trainers (ToT)',
      desc: 'Master trainer certification, instructional design methodology, facilitation technique, and training evaluation frameworks.',
      icon: UserCheck,
    },
    {
      id: 'customized',
      title: 'Customized Learning Solutions',
      desc: 'End-to-end bespoke curriculum design, localized content translation, blended LMS deployment, and institutional auditing.',
      icon: Brain,
    },
  ];

  // 3. Why Choose Us (10 Points)
  const whyChooseUsPoints = [
    { title: 'Comprehensive Cross-Sector Solutions', desc: 'Holistic curriculum tailored for government, corporate, academic, and social sectors.' },
    { title: 'Strong Public Sector Collaboration', desc: 'Proven capability in executing government capacity-building mandates at scale.' },
    { title: 'Trusted Partner Network', desc: 'Deep regional reach through accredited domain partners across multiple states.' },
    { title: 'Experienced Expert Faculty', desc: 'Panel of veteran administrators, industry leaders, and academic subject experts.' },
    { title: 'Client-Centric Customization', desc: 'Needs-assessment driven curriculum design matching exact institutional outcomes.' },
    { title: 'Interactive Practical Methodology', desc: 'Experiential learning featuring case studies, simulations, and real-world roleplay.' },
    { title: 'Multi-State Scalable Delivery', desc: 'Robust logistics and deployment capabilities for nationwide cohort execution.' },
    { title: 'Flexible Delivery Modes', desc: 'Seamless classroom, blended, hybrid, and digital LMS learning infrastructure.' },
    { title: 'Measurable Outcome Tracking', desc: 'Rigorous baseline and endline evaluations ensuring tangible skill acquisition.' },
    { title: 'Quality & Innovation Focus', desc: 'Continuous alignment with NEP 2020, Industry 4.0, and global best practices.' },
  ];

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] bg-navy-gold-gradient text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
        {/* Abstract Background Accents */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-500/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 subtle-pattern opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Logo Badge Header */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-gold/30 shadow-lg">
              <div className="w-8 h-8 rounded-full bg-white p-0.5 flex items-center justify-center">
                <Image
                  src="/jsm-logo.png"
                  alt="JSM Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-gold uppercase">
                JSM ASPIRE ACADEMY PVT. LTD.
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.15] tracking-tight">
                Building Capacity. <br />
                <span className="gold-gradient-text">Empowering People.</span> <br />
                Creating Impact.
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl">
                JSM ASPIRE ACADEMY PVT. LTD. is a multidisciplinary learning, training, and capacity-building organization delivering high-quality, outcome-driven training solutions across government, education, corporate, and community sectors.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => handleOpenConsultation()}
                className="px-8 py-4 bg-gradient-to-r from-gold via-gold-400 to-gold-600 text-navy font-bold text-base rounded-xl hover:shadow-gold-glow transition flex items-center justify-center gap-2 group shadow-xl"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </button>

              <Link
                href="/services"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-base rounded-xl border border-white/20 backdrop-blur-md transition flex items-center justify-center gap-2 text-center"
              >
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Credibility Highlights */}
            <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-gold">10+</div>
                <div className="text-xs text-slate-300">Core Training Domains</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white">Multi-State</div>
                <div className="text-xs text-slate-300">Implementation Reach</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-gold">ISO Aligned</div>
                <div className="text-xs text-slate-300">Quality Framework</div>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Graphic Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-navy-card p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/20 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-gold font-bold">Institutional Excellence</span>
                  <h3 className="text-xl font-serif font-bold text-white">Capacity Building Ecosystem</h3>
                </div>
                <div className="p-3 bg-white/10 rounded-2xl border border-gold/30">
                  <ShieldCheck className="w-8 h-8 text-gold" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Government & Public Sector</h4>
                      <p className="text-xs text-slate-300">Executive capacity building & administrative officer training.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Academia & Educator Training</h4>
                      <p className="text-xs text-slate-300">Faculty development programs and student employability modules.</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/50 transition">
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Corporate & Livelihood Missions</h4>
                      <p className="text-xs text-slate-300">Workforce reskilling, CSR deployments & entrepreneurship.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" /> Outcome Driven
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" /> Experiential Pedagogy
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUSTED BY SECTION (Audience Categories) */}
      <section className="py-20 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Target Sectors"
            title="Trusted Partner Across Key Stakeholder Domains"
            subtitle="We deliver outcome-focused capacity building programs designed for public institutions, academic ecosystems, and social impact leaders."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audienceCategories.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-2xl hover-gold-border group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy group-hover:bg-navy group-hover:text-gold transition-colors duration-300 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 bg-gold/15 text-gold-700 rounded-full border border-gold/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-navy mb-2 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <button
                    onClick={() => handleOpenConsultation(item.title)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-navy group-hover:text-gold transition"
                  >
                    <span>Inquire for {item.badge}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT SNAPSHOT SECTION */}
      <section className="py-20 bg-surface border-y border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop"
                  alt="JSM Aspire Academy Capacity Building Workshop"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[400px] lg:h-[480px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-gold/30 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-navy text-gold flex items-center justify-center font-bold">
                      JSM
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy">JSM ASPIRE ACADEMY PVT. LTD.</h4>
                      <p className="text-xs text-slate-600">Empowering Leaders Across India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy/10 text-navy rounded-full text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold" />
                <span>About Our Organization</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy leading-tight">
                Strengthening Knowledge, Skills, and Leadership Across Sectors
              </h2>

              <div className="w-16 h-1 bg-gold rounded-full" />

              <p className="text-base text-slate-700 leading-relaxed font-sans">
                <strong>JSM ASPIRE ACADEMY PVT. LTD.</strong> works closely with government departments, educational institutions, corporate organizations, NGOs, CSR initiatives, and development partners to strengthen knowledge, skills, leadership, and professional competencies through practical and impactful learning solutions.
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Our multidisciplinary approach blends adult learning principles, industry-proven methodologies, and custom curriculum frameworks designed to solve real-world capacity bottlenecks in public administration, teaching standards, and workforce readiness.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <Award className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-navy">Quality & Excellence</h5>
                    <p className="text-xs text-slate-500">Rigorous trainer vetting and outcome evaluation.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                  <Layers className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-bold text-navy">Scalable Frameworks</h5>
                    <p className="text-xs text-slate-500">Classroom, blended, and digital LMS delivery.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white text-sm font-bold rounded-lg hover:bg-navy-800 transition shadow-md group"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW SECTION (10 Service Cards) */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Comprehensive Offerings"
            title="Our Core Capacity Building Services"
            subtitle="Explore our 10 specialized training domain portfolios engineered for institutional transformation and skill excellence."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-gold/50 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-navy/5 text-navy group-hover:bg-navy group-hover:text-gold transition-colors duration-300 flex items-center justify-center mb-6 shadow-inner">
                      <ServiceIcon className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 block mb-1">
                      Program {idx + 1}
                    </span>

                    <h3 className="text-xl font-serif font-bold text-navy mb-3 group-hover:text-gold-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services#${service.id}`}
                      className="text-xs font-bold text-navy hover:text-gold flex items-center gap-1"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => handleOpenConsultation(service.title)}
                      className="px-3 py-1 bg-navy/10 text-navy hover:bg-navy hover:text-white text-xs font-semibold rounded transition"
                    >
                      Inquire
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white text-sm font-bold rounded-xl hover:bg-navy-800 transition shadow-lg"
            >
              <span>View Full Services Directory & Outcomes</span>
              <ArrowRight className="w-4 h-4 text-gold" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION (10 Feature Grid) */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            badge="Institutional Excellence"
            title="Why Choose JSM Aspire Academy?"
            subtitle="Built on credibility, empirical methodology, and a commitment to measurable social and economic outcomes."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {whyChooseUsPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-gold/40 transition flex items-start gap-4 hover:bg-white/10"
              >
                <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-white mb-1 flex items-center gap-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP APPROACH SECTION */}
      <section className="py-24 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Collaborative Framework"
            title="Our Partnership Approach"
            subtitle="We work synergistically with partners across regions and disciplines to deliver end-to-end capacity building."
          />

          {/* Infographic Model Card */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gold/30 shadow-xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {/* Partner 1 */}
              <div className="p-6 bg-cream rounded-2xl border border-slate-200 text-center space-y-3 relative group hover:border-navy transition">
                <div className="w-16 h-16 bg-navy text-gold rounded-2xl mx-auto flex items-center justify-center shadow-md">
                  <Globe2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-serif font-bold text-navy">Regional Training Partners</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Local execution partners with on-the-ground infrastructure for seamless multi-state rollouts.
                </p>
              </div>

              {/* Partner 2 */}
              <div className="p-6 bg-cream rounded-2xl border border-slate-200 text-center space-y-3 relative group hover:border-navy transition">
                <div className="w-16 h-16 bg-navy text-gold rounded-2xl mx-auto flex items-center justify-center shadow-md">
                  <Brain className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-serif font-bold text-navy">Domain Experts</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Senior policy advisors, veteran bureaucrats, and technical subject specialists guiding curriculum.
                </p>
              </div>

              {/* Partner 3 */}
              <div className="p-6 bg-cream rounded-2xl border border-slate-200 text-center space-y-3 relative group hover:border-navy transition">
                <div className="w-16 h-16 bg-navy text-gold rounded-2xl mx-auto flex items-center justify-center shadow-md">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-serif font-bold text-navy">Educational Institutions</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Universities, colleges, and school boards co-creating faculty and student development frameworks.
                </p>
              </div>

              {/* Partner 4 */}
              <div className="p-6 bg-cream rounded-2xl border border-slate-200 text-center space-y-3 relative group hover:border-navy transition">
                <div className="w-16 h-16 bg-navy text-gold rounded-2xl mx-auto flex items-center justify-center shadow-md">
                  <Briefcase className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-serif font-bold text-navy">Industry Professionals</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Corporate leaders ensuring training content stays synchronized with Industry 4.0 standards.
                </p>
              </div>
            </div>

            <div className="mt-10 p-6 bg-navy text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <FileCheck className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <h4 className="text-base font-bold">Interested in Becoming an Empanelled Partner?</h4>
                  <p className="text-xs text-slate-300">We invite regional training organizations and domain experts to collaborate on national projects.</p>
                </div>
              </div>

              <button
                onClick={() => handleOpenConsultation('Partnership Empanelment')}
                className="px-6 py-2.5 bg-gold text-navy font-bold text-xs rounded-lg hover:bg-gold-400 transition whitespace-nowrap shadow"
              >
                Join Partner Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-gradient-to-r from-navy via-navy-800 to-navy text-white relative overflow-hidden border-t-4 border-gold">
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="px-4 py-1.5 bg-gold/20 text-gold rounded-full text-xs font-bold uppercase tracking-widest border border-gold/40 inline-block">
            Start Your Program Today
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
            Ready to Build Capacity and Create Lasting Impact?
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-sans">
            Connect with our capacity building specialists to discuss customized curriculum design, training logistics, and project timelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleOpenConsultation()}
              className="w-full sm:w-auto px-8 py-4 bg-gold text-navy font-bold text-base rounded-xl hover:bg-gold-400 transition shadow-xl flex items-center justify-center gap-2"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-base rounded-xl border border-white/20 backdrop-blur-md transition text-center"
            >
              Contact Us Directly
            </Link>
          </div>
        </div>
      </section>

      {/* Modal Integration */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
