"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    buildingHeight: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", buildingHeight: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get Your Free Quote
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Ready to transform your building&apos;s facade? Fill out the form and our 
              team will get back to you within 24 hours with a customized quote.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Office Location</h3>
                  <p className="text-gray-400">SCO 123, Sector 17, Chandigarh 160017</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Phone</h3>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-accent transition-colors">
                    +91-98765-43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a href="mailto:contact@vertexfacade.com" className="text-gray-400 hover:text-accent transition-colors">
                    contact@vertexfacade.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-medium/30 border border-slate-light/10 rounded-xl">
              <h3 className="font-semibold text-white mb-3">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {["Chandigarh", "Panchkula", "Mohali", "Gurgaon", "Faridabad", "Noida", "Delhi NCR"].map(
                  (area) => (
                    <span
                      key={area}
                      className="px-3 py-1 bg-slate-light/20 rounded-full text-sm text-gray-300"
                    >
                      {area}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-slate-medium/50 border border-slate-light/20 rounded-2xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-400 mb-6">
                    We&apos;ve received your request. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-accent hover:text-accent-hover transition-colors"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-dark/50 border border-slate-light/20 rounded-xl text-white placeholder-gray-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-dark/50 border border-slate-light/20 rounded-xl text-white placeholder-gray-500 transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-dark/50 border border-slate-light/20 rounded-xl text-white placeholder-gray-500 transition-all"
                        placeholder="+91-XXXXX-XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="buildingHeight" className="block text-sm font-medium text-gray-300 mb-2">
                      Building Height (floors)
                    </label>
                    <select
                      id="buildingHeight"
                      value={formData.buildingHeight}
                      onChange={(e) => setFormData({ ...formData, buildingHeight: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-dark/50 border border-slate-light/20 rounded-xl text-white transition-all"
                    >
                      <option value="">Select height</option>
                      <option value="1-6">1-6 floors</option>
                      <option value="7-15">7-15 floors</option>
                      <option value="16-25">16-25 floors</option>
                      <option value="25+">25+ floors</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-dark/50 border border-slate-light/20 rounded-xl text-white placeholder-gray-500 transition-all resize-none"
                      placeholder="Tell us about your building and requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 gradient-accent text-white font-semibold rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Get Free Quote
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our privacy policy. We&apos;ll never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
