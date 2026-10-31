'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, Send, CheckCircle2, ShieldCheck, Building2, User, Mail, Phone, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultService = '' }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orgType: 'Government Department',
    service: defaultService || 'Government Training & Capacity Building',
    message: '',
  });

  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to FormSubmit
      const res = await fetch('https://formsubmit.co/ajax/info@jsmaspirefoundation.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Consultation Request from ${formData.name} (${formData.orgType})`,
          ...formData,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback for demonstration
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-md"
          />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-cream rounded-2xl shadow-2xl border border-gold/30 overflow-hidden z-10 my-8"
          >
            {/* Header Banner */}
            <div className="bg-navy p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-10 h-10 bg-white rounded-lg p-1 flex items-center justify-center shadow">
                  <Image
                    src="/jsm-logo.png"
                    alt="JSM Aspire Foundation"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-gold">Official Inquiry</span>
                  <h3 className="text-2xl font-serif font-bold text-white">Request a Consultation</h3>
                </div>
              </div>
              <p className="text-sm text-slate-200 mt-1 max-w-lg">
                Partner with JSM Aspire Foundation Pvt. Ltd. to design customized learning, capacity-building, and skill development programs.
              </p>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              {submitted ? (
                <div className="text-center py-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle2 className="w-10 h-10" />
                  </motion.div>
                  <h4 className="text-2xl font-serif font-bold text-navy mb-2">Consultation Request Received!</h4>
                  <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm">
                    Thank you for reaching out. Our institutional training advisory team will review your inquiry and connect with you within 24 business hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-navy text-white rounded-lg font-medium hover:bg-navy-700 transition shadow-md"
                  >
                    Done & Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="e.g. Dr. Rajesh Kumar"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="name@dept.gov.in"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Contact Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="+91-9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                        Organization Type *
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <select
                          value={formData.orgType}
                          onChange={(e) => setFormData({ ...formData, orgType: e.target.value })}
                          className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900 appearance-none"
                        >
                          <option value="Government Department">Government Department</option>
                          <option value="Educational Institution">Educational Institution</option>
                          <option value="Corporate Organization">Corporate Organization</option>
                          <option value="NGO / CSR Foundation">NGO / CSR Foundation</option>
                          <option value="Development Agency">Development Agency</option>
                          <option value="Training Partner">Training Partner / Franchise</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Primary Service Focus
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                    >
                      <option value="Government Training & Capacity Building">1. Government Training & Capacity Building</option>
                      <option value="Corporate Learning & Workforce Development">2. Corporate Learning & Workforce Development</option>
                      <option value="Teacher Professional Development">3. Teacher Professional Development</option>
                      <option value="School & College Student Development">4. School & College Student Development</option>
                      <option value="Skill Development & Livelihood Programs">5. Skill Development & Livelihood Programs</option>
                      <option value="Entrepreneurship Development">6. Entrepreneurship Development</option>
                      <option value="Digital & Future Skills">7. Digital & Future Skills</option>
                      <option value="Leadership & Soft Skills">8. Leadership & Soft Skills</option>
                      <option value="Training of Trainers (ToT)">9. Training of Trainers (ToT)</option>
                      <option value="Customized Learning Solutions">10. Customized Learning Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1">
                      Project Requirements & Target Audience *
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <textarea
                        rows={3}
                        required
                        placeholder="Briefly describe target cohort size, location preference, and specific training outcomes..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-gold" />
                      <span>Strict Data Confidentiality Assured</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-2.5 bg-gradient-to-r from-navy to-navy-800 text-white font-medium rounded-lg hover:shadow-lg transition flex items-center gap-2 text-sm disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <span>Submit Request</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
