'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Building2,
  Briefcase,
  GraduationCap,
  BookOpen,
  Target,
  Lightbulb,
  Laptop,
  Compass,
  UserCheck,
  Brain,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Users
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ConsultationModal from '@/components/ConsultationModal';

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenConsultation = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const detailedServices = [
    {
      id: 'gov-training',
      title: 'Government Training & Capacity Building',
      badge: 'Public Sector Excellence',
      icon: Building2,
      overview: 'Tailored capacity-building initiatives designed for government departments, public sector undertakings, and municipal bodies to enhance administrative efficiency, digital governance, and policy implementation.',
      benefits: [
        'Streamlined administrative workflows & public service delivery.',
        'Enhanced understanding of e-governance & digital tools.',
        'Strengthened policy execution, compliance, and auditing capability.',
        'Leadership acceleration for mid and senior administrative officers.'
      ],
      targetAudience: 'Civil servants, ministry officials, PSU managers, municipal officers, field administration teams.',
      outcomes: 'Quantifiable improvement in public service turnaround time, transparent file clearance, and modern administrative competence.'
    },
    {
      id: 'corporate-learning',
      title: 'Corporate Learning & Workforce Development',
      badge: 'Enterprise Performance',
      icon: Briefcase,
      overview: 'Comprehensive workforce transformation frameworks designed to align employee skills with evolving business objectives, market dynamics, and technological disruptions.',
      benefits: [
        'Custom executive development and supervisory mastery.',
        'Cross-functional agility and productivity enhancement.',
        'Targeted upskilling in project management, operations, and sales execution.',
        'Reduced employee turnover through structured career development paths.'
      ],
      targetAudience: 'Mid-level managers, executive teams, front-line professionals, enterprise HR leaders.',
      outcomes: 'Demonstrable improvement in project delivery efficiency, team alignment, and operational ROI.'
    },
    {
      id: 'teacher-dev',
      title: 'Teacher Professional Development',
      badge: 'Pedagogical Mastery',
      icon: GraduationCap,
      overview: 'Faculty enrichment programs focused on modern teaching methodologies, learner-centered pedagogy, NEP 2020 compliance, and educational technology integration.',
      benefits: [
        'Mastery over active learning, gamification, and flipped classrooms.',
        'Effective student engagement and classroom discipline strategies.',
        'Digital literacy for hybrid and online instruction.',
        'Continuous professional development tracking & assessment creation.'
      ],
      targetAudience: 'School teachers, college professors, university faculty, vocational instructors, academic coordinators.',
      outcomes: 'Higher classroom participation, improved student pass percentage, and modern academic accreditation readiness.'
    },
    {
      id: 'student-dev',
      title: 'School & College Student Development',
      badge: 'Employability & Skills',
      icon: BookOpen,
      overview: 'Holistic career readiness, soft skill enhancement, and competitive aptitude building for students transitioning from academia to professional careers.',
      benefits: [
        'Comprehensive resume building, interview preparation, and group discussion drills.',
        'Critical thinking, problem-solving, and workplace etiquette.',
        'Career counseling, stream selection, and entrance exam strategies.',
        'Financial literacy, personal productivity, and time management.'
      ],
      targetAudience: 'High school students, undergraduate & postgraduate college students, polytechnic aspirants.',
      outcomes: 'Higher placement success rate, increased campus recruitment confidence, and industry-ready graduates.'
    },
    {
      id: 'skill-livelihood',
      title: 'Skill Development & Livelihood Programs',
      badge: 'Social Impact',
      icon: Target,
      overview: 'Practical vocational training and sustainable livelihood creation initiatives designed for rural youth, women self-help groups, and marginalized communities.',
      benefits: [
        'Hands-on market-aligned vocational skill certification.',
        'Micro-enterprise creation and market linkage support.',
        'CSR and government scheme implementation alignment.',
        'Empowerment of rural and semi-urban communities through economic self-reliance.'
      ],
      targetAudience: 'Rural youth, women entrepreneurs, SHG members, vocational trainees, CSR beneficiaries.',
      outcomes: 'Sustainable household income generation, local employment creation, and economic self-sufficiency.'
    },
    {
      id: 'entrepreneurship',
      title: 'Entrepreneurship Development',
      badge: 'Incubation & Growth',
      icon: Lightbulb,
      overview: 'End-to-end entrepreneurial incubation programs providing aspiring founders with business planning skills, financial modeling, marketing strategies, and investor readiness.',
      benefits: [
        'Step-by-step guidance from idea validation to business registration.',
        'Financial management, GST compliance, and cash flow budgeting.',
        'Digital marketing, customer acquisition, and pitch deck development.',
        'Access to mentorship networks and government grant schemes.'
      ],
      targetAudience: 'Aspiring entrepreneurs, MSME owners, rural innovators, college incubator cohorts.',
      outcomes: 'Successful venture launches, sustainable business operations, and local job creation.'
    },
    {
      id: 'digital-skills',
      title: 'Digital & Future Skills',
      badge: 'Industry 4.0 Ready',
      icon: Laptop,
      overview: 'High-impact digital literacy and future-tech training designed to prepare workforces for the digital economy, automation, and AI integration.',
      benefits: [
        'Practical training in office productivity software, cloud tools, and data analytics.',
        'AI tools for workplace efficiency, content creation, and automation.',
        'Cybersecurity awareness, data privacy compliance, and safe online practices.',
        'Digital marketing, social media management, and e-commerce basics.'
      ],
      targetAudience: 'Public sector employees, corporate staff, educators, students, and small business owners.',
      outcomes: 'Accelerated digital transition, error reduction, and enhanced digital productivity.'
    },
    {
      id: 'leadership',
      title: 'Leadership & Soft Skills',
      badge: 'Executive Competency',
      icon: Compass,
      overview: 'Transformational leadership modules emphasizing emotional intelligence, strategic negotiation, crisis communication, and high-performance team building.',
      benefits: [
        'Enhanced self-awareness and emotional intelligence in high-stress scenarios.',
        'Effective conflict resolution, negotiation, and stakeholder management.',
        'Strategic delegation, decision-making, and change management.',
        'Inspiring team leadership and organizational alignment.'
      ],
      targetAudience: 'Senior executives, department heads, team leads, emerging organizational leaders.',
      outcomes: 'Stronger organizational alignment, higher team morale, and confident decision-making.'
    },
    {
      id: 'tot',
      title: 'Training of Trainers (ToT)',
      badge: 'Master Facilitators',
      icon: UserCheck,
      overview: 'Rigorous certification programs that transform subject experts into high-impact master trainers proficient in instructional design and adult learning methodologies.',
      benefits: [
        'Mastery of ADDIE model, instructional design, and curriculum structuring.',
        'Advanced facilitation techniques, voice modulation, and audience management.',
        'Formative and summative training evaluation methodologies.',
        'Coaching, feedback delivery, and virtual facilitation competence.'
      ],
      targetAudience: 'Internal corporate trainers, government training institute faculty, freelance facilitators.',
      outcomes: 'Standardized training quality across large institutional training networks.'
    },
    {
      id: 'customized',
      title: 'Customized Learning Solutions',
      badge: 'Tailored Excellence',
      icon: Brain,
      overview: 'Bespoke end-to-end learning architectures crafted from ground up to address hyper-specific institutional challenges, geographic contexts, or regulatory mandates.',
      benefits: [
        'Detailed Training Needs Analysis (TNA) before curriculum formulation.',
        'Localized language translation, culturally relevant case studies, and custom LMS creation.',
        'Flexible hybrid deployment across urban and remote rural centers.',
        'Comprehensive baseline and endline impact auditing.'
      ],
      targetAudience: 'Government ministries, multinational corporations, multilateral donor organizations, large institutions.',
      outcomes: 'Exact alignment with client KPIs, zero wasted training hours, and maximum ROI.'
    },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-20">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="px-4 py-1 bg-white/10 text-gold rounded-full text-xs font-bold uppercase tracking-widest border border-gold/30 inline-block">
            Our Training Directory
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight">
            Specialized Capacity Building Services
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto font-sans leading-relaxed">
            Delivering outcome-driven, customizable training solutions designed for government departments, institutions, corporate enterprises, and social organizations.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {detailedServices.map((service, index) => {
          const ServiceIcon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`p-8 sm:p-12 rounded-3xl border transition-all duration-300 scroll-mt-24 ${
                isEven
                  ? 'bg-white border-slate-200 shadow-md'
                  : 'bg-navy text-white border-gold/30 shadow-xl'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
                <div className="space-y-6 flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isEven ? 'bg-navy text-gold' : 'bg-gold text-navy font-bold'
                      }`}
                    >
                      <ServiceIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <span
                        className={`text-xs font-bold uppercase tracking-widest ${
                          isEven ? 'text-gold-700' : 'text-gold'
                        }`}
                      >
                        {service.badge}
                      </span>
                      <h2
                        className={`text-2xl sm:text-3xl font-serif font-bold ${
                          isEven ? 'text-navy' : 'text-white'
                        }`}
                      >
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p
                    className={`text-base leading-relaxed ${
                      isEven ? 'text-slate-700' : 'text-slate-200'
                    }`}
                  >
                    {service.overview}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Benefits List */}
                    <div className="space-y-2">
                      <h4
                        className={`text-sm font-bold uppercase tracking-wider ${
                          isEven ? 'text-navy' : 'text-gold'
                        }`}
                      >
                        Key Benefits & Capabilities
                      </h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                                isEven ? 'text-gold-600' : 'text-gold'
                              }`}
                            />
                            <span className={isEven ? 'text-slate-600' : 'text-slate-300'}>
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Target Audience & Outcomes */}
                    <div className="space-y-4">
                      <div>
                        <h4
                          className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                            isEven ? 'text-navy' : 'text-gold'
                          }`}
                        >
                          Target Audience
                        </h4>
                        <p
                          className={`text-xs sm:text-sm ${
                            isEven ? 'text-slate-600' : 'text-slate-300'
                          }`}
                        >
                          {service.targetAudience}
                        </p>
                      </div>

                      <div>
                        <h4
                          className={`text-sm font-bold uppercase tracking-wider mb-1 ${
                            isEven ? 'text-navy' : 'text-gold'
                          }`}
                        >
                          Measurable Outcomes
                        </h4>
                        <p
                          className={`text-xs sm:text-sm ${
                            isEven ? 'text-slate-600' : 'text-slate-300'
                          }`}
                        >
                          {service.outcomes}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => handleOpenConsultation(service.title)}
                      className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition flex items-center gap-2 shadow ${
                        isEven
                          ? 'bg-navy text-white hover:bg-navy-800'
                          : 'bg-gold text-navy hover:bg-gold-400'
                      }`}
                    >
                      <span>Inquire About This Program</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
