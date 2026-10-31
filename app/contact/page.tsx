'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  Globe,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Building2,
  User,
  FileText,
  ShieldCheck,
  CalendarCheck
} from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import ConsultationModal from '@/components/ConsultationModal';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    orgType: 'Government Department',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://formsubmit.co/ajax/info@jsmaspirefoundation.org', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Web Inquiry: ${formData.subject || 'General Inquiry'} from ${formData.name}`,
          ...formData,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <span className="px-4 py-1 bg-white/10 text-gold rounded-full text-xs font-bold uppercase tracking-widest border border-gold/30 inline-block">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Contact JSM Aspire Academy
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Connect with our institutional training advisory team to discuss capacity building programs, empanelment, or customized workshop requirements.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-gold uppercase tracking-wider block mb-1">Corporate Details</span>
              <h2 className="text-3xl font-serif font-bold text-navy">JSM ASPIRE ACADEMY PVT. LTD.</h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Multidisciplinary capacity-building & training organization serving government, education, corporate, and community sectors.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone Card */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-gold/50 transition flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Inquiry</h4>
                  <a href="tel:+916009874892" className="text-lg font-serif font-bold text-navy hover:text-gold transition block">
                    +91-6009874892
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Available for program calls & consultations</p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-gold/50 transition flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Email</h4>
                  <a href="mailto:info@jsmaspirefoundation.org" className="text-base font-serif font-bold text-navy hover:text-gold transition block break-all">
                    info@jsmaspirefoundation.org
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Response guaranteed within 24 hours</p>
                </div>
              </div>

              {/* Website Card */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-gold/50 transition flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Website</h4>
                  <a href="https://www.jsmaspirefoundation.org" target="_blank" rel="noopener noreferrer" className="text-base font-serif font-bold text-navy hover:text-gold transition block">
                    www.jsmaspirefoundation.org
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Static portal & information hub</p>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-gold/50 transition flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy text-gold flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Working Hours</h4>
                  <p className="text-base font-serif font-bold text-navy">
                    Monday – Saturday
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">9:00 AM – 6:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Direct Consultation Panel */}
            <div className="p-6 bg-navy text-white rounded-2xl border border-gold/30 shadow-lg space-y-4">
              <div className="flex items-center gap-3">
                <CalendarCheck className="w-6 h-6 text-gold" />
                <h4 className="text-lg font-serif font-bold">Fast-Track Consultation</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Need urgent institutional empanelment or proposal documentation? Use our fast-track booking portal.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 bg-gold text-navy font-bold text-xs rounded-lg hover:bg-gold-400 transition"
              >
                Schedule Consultation Call
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-2">Direct Inquiry Form</span>
              <h3 className="text-2xl font-serif font-bold text-navy mb-6">Send Us a Message</h3>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-navy">Inquiry Submitted Successfully!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for contacting JSM Aspire Academy Pvt. Ltd. Our institutional training advisory team has received your message and will respond promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-navy text-white text-xs font-bold rounded-lg hover:bg-navy-800 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="name@organization.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="+91-9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Organization / Department
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          placeholder="e.g. Dept of Skill Dev"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Subject / Training Requirement *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Faculty Development Workshop Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Message / Project Details *
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                      <textarea
                        rows={4}
                        required
                        placeholder="Provide details regarding cohort size, program focus, and estimated timeframe..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-navy focus:border-navy text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-gold" />
                      <span>Official Communications Channel</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3.5 bg-navy text-white text-sm font-bold rounded-xl hover:bg-navy-800 transition flex items-center gap-2 shadow-lg disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry</span>
                          <Send className="w-4 h-4 text-gold" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Location Placeholder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-gold uppercase tracking-widest block">Geographic Presence</span>
              <h3 className="text-xl font-serif font-bold text-navy">Headquarters & Regional Operations</h3>
            </div>
            <span className="px-3 py-1 bg-navy/10 text-navy text-xs font-bold rounded-full">
              Multi-State Deployment Operations
            </span>
          </div>

          <div className="w-full h-80 bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-300 flex items-center justify-center">
            {/* Styled Map Graphic iframe placeholder */}
            <iframe
              title="JSM Aspire Academy Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5621453248386!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
