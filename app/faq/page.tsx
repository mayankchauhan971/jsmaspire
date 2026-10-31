'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, ArrowRight, MessageSquare } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ConsultationModal from '@/components/ConsultationModal';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const faqs = [
    {
      question: 'Who do you work with?',
      answer: 'JSM Aspire Foundation works with a diverse array of institutional stakeholders including government departments, state administration bodies, educational institutions (schools, colleges, universities), corporate organizations, non-governmental organizations (NGOs), CSR foundations, development agencies, and regional training partners.',
    },
    {
      question: 'What types of training do you offer?',
      answer: 'We offer specialized programs across 10 main domains: Government Training & Capacity Building, Corporate Learning & Workforce Development, Teacher Professional Development, School & College Student Development, Skill Development & Livelihood Programs, Entrepreneurship Development, Digital & Future Skills, Leadership & Soft Skills, Training of Trainers (ToT), and Customized Institutional Learning Solutions.',
    },
    {
      question: 'Can training programs be customized?',
      answer: 'Yes, absolutely. Customization is at the core of our methodology. We conduct thorough Training Needs Analysis (TNA) prior to project launch, tailoring course content, duration, case studies, and delivery language to match your specific organizational goals, sector regulations, and participant demographics.',
    },
    {
      question: 'Where do you deliver training?',
      answer: 'We operate with a multi-state delivery footprint across India. Our programs can be deployed directly on-site at client premises, government institutes, university auditoriums, regional training centers, or partner venues across metropolitan cities and tier-2/3 regions.',
    },
    {
      question: 'Do you provide online and offline training?',
      answer: 'Yes, we offer fully flexible delivery modes including in-person classroom workshops, live interactive webinars, blended learning models, and self-paced digital learning through custom LMS platforms.',
    },
    {
      question: 'Do you provide post-training support?',
      answer: 'Yes. We believe in sustainable outcome creation. Our programs include post-training support such as impact evaluation reports, participant learning action plans, follow-up refresher modules, digital resource access, and participant mentoring sessions.',
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="px-4 py-1 bg-white/10 text-gold rounded-full text-xs font-bold uppercase tracking-widest border border-gold/30 inline-block">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            How Can We Assist Your Organization?
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Find answers to common inquiries regarding our capacity building programs, execution model, customization options, and multi-state delivery.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto pt-4 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-7" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white text-charcoal rounded-xl text-sm border-2 border-gold/40 focus:outline-none focus:ring-2 focus:ring-gold shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Accordion Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8">
            <HelpCircle className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-xl font-serif font-bold text-navy">No matching questions found</h3>
            <p className="text-slate-600 text-sm mt-1">Try adjusting your search query or submit a direct inquiry to our team.</p>
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200 hover:border-gold/50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-navy text-lg hover:text-gold-700 transition"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-navy/10 text-navy text-xs font-sans font-bold flex items-center justify-center flex-shrink-0">
                      Q{index + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 font-sans bg-cream/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy text-white p-8 sm:p-10 rounded-3xl border border-gold/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" /> Direct Assistance
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">Have a Specific Training Query?</h3>
            <p className="text-slate-300 text-sm max-w-md">
              Speak directly with our institutional advisory team to clarify project specifications, empanelment, or timeline requirements.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3.5 bg-gold text-navy font-bold text-sm rounded-xl hover:bg-gold-400 transition shadow-lg whitespace-nowrap flex items-center gap-2"
          >
            <span>Request Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
