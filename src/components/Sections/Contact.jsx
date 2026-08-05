import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Please fill in all required fields (Name, Email, and Message).'
      });
      return;
    }

    setStatus({
      submitting: true,
      submitted: false,
      error: false,
      message: ''
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          submitting: false,
          submitted: true,
          error: false,
          message: data.message || 'Your message has been sent successfully!'
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus({
          submitting: false,
          submitted: false,
          error: true,
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (err) {
      console.error('Contact Form Submit Error:', err);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Network error or server unavailable. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="py-32 relative z-10 border-b border-[#3A3A3A]/40">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-[#3A3A3A] pb-4 mb-20 flex flex-wrap justify-between items-baseline"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-normal uppercase text-white tracking-tight">
            SECTION V • <span className="italic text-[#CFCFCF]">GET IN TOUCH</span>
          </h2>
          <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest mt-2 sm:mt-0">
            INITIATE CORRESPONDENCE
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="border border-[#3A3A3A] bg-[#141414] p-8 sm:p-10 space-y-8">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-[0.2em] block">
                  COMMUNICATION CHANNEL
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white uppercase font-normal">
                  Let’s Connect
                </h3>
                <p className="font-sans font-light text-base text-[#CFCFCF] leading-relaxed pt-2">
                  Whether you have a project in mind, an inquiry, or just want to collaborate, feel free to reach out directly through the form or email.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-[#3A3A3A]">
                {/* Email Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-[#3A3A3A] bg-[#0B0B0B] text-white">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#7A7A7A] uppercase tracking-wider block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href="mailto:saikondareddypala@gmail.com"
                      className="font-sans text-sm text-white hover:text-[#CFCFCF] transition-colors break-all"
                    >
                      saikondareddypala@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 border border-[#3A3A3A] bg-[#0B0B0B] text-white">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#7A7A7A] uppercase tracking-wider block">
                      LOCATION
                    </span>
                    <span className="font-sans text-sm text-white">
                      Andhra Pradesh, India
                    </span>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="p-4 border border-[#3A3A3A] bg-[#0B0B0B] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-xs text-[#CFCFCF] uppercase tracking-wider">
                      Open for Opportunities
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#7A7A7A] uppercase">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-[#3A3A3A] flex items-center gap-4">
                <a
                  href="https://github.com/Sai630414"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#3A3A3A] text-[#CFCFCF] hover:border-white hover:text-white transition-all bg-[#0B0B0B]"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sai-kondareddy-338269291/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#3A3A3A] text-[#CFCFCF] hover:border-white hover:text-white transition-all bg-[#0B0B0B]"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="border border-[#3A3A3A] bg-[#141414] p-8 sm:p-10 space-y-6">
              
              <div className="border-b border-[#3A3A3A] pb-4 mb-6">
                <h3 className="font-serif text-2xl text-white uppercase font-normal">
                  SEND A MESSAGE
                </h3>
                <p className="font-mono text-xs text-[#7A7A7A] uppercase tracking-wider mt-1">
                  RESPONSES ARE DELIVERED DIRECTLY TO MY INBOX
                </p>
              </div>

              {/* Status Banner */}
              {status.message && (
                <div
                  className={`p-4 border flex items-center gap-3 font-mono text-xs tracking-wider uppercase ${
                    status.error
                      ? 'border-red-500/50 bg-red-950/20 text-red-400'
                      : 'border-emerald-500/50 bg-emerald-950/20 text-emerald-400'
                  }`}
                >
                  {status.error ? <FaExclamationCircle size={16} /> : <FaCheckCircle size={16} />}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Input Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest block">
                    NAME <span className="text-white">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Full Name"
                    className="w-full bg-[#0B0B0B] border border-[#3A3A3A] px-4 py-3 text-white placeholder-[#555] font-sans text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest block">
                    EMAIL <span className="text-white">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full bg-[#0B0B0B] border border-[#3A3A3A] px-4 py-3 text-white placeholder-[#555] font-sans text-sm focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest block">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / General Question"
                  className="w-full bg-[#0B0B0B] border border-[#3A3A3A] px-4 py-3 text-white placeholder-[#555] font-sans text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest block">
                  MESSAGE <span className="text-white">*</span>
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message here..."
                  className="w-full bg-[#0B0B0B] border border-[#3A3A3A] p-4 text-white placeholder-[#555] font-sans text-sm focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-4 border border-white text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed bg-transparent"
              >
                {status.submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>SENDING TRANSMISSION...</span>
                  </>
                ) : (
                  <>
                    <span>TRANSMIT MESSAGE</span>
                    <FaPaperPlane size={12} />
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;