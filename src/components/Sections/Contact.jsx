import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Check } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9f09b56f-96f4-4a65-80d5-1f875e0b9afa',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again.');
    }

    setLoading(false);
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
            SECTION V • <span className="italic text-[#CFCFCF]">CORRESPONDENCE</span>
          </h2>
          <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest mt-2 sm:mt-0">
            DESK & INQUIRIES
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Address Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="border border-[#3A3A3A] bg-[#141414] p-8 space-y-8 h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-[0.3em] block">
                  DIRECTORY DETAILS
                </span>

                <h3 className="font-serif text-2xl font-normal text-white uppercase tracking-tight">
                  GET IN TOUCH
                </h3>

                <div className="space-y-4 pt-2">
                  <div className="border-b border-[#3A3A3A]/60 pb-3">
                    <span className="font-mono text-[10px] text-[#7A7A7A] uppercase tracking-widest block mb-1">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href="mailto:saikondareddypala@gmail.com"
                      className="font-mono text-sm text-white hover:text-[#CFCFCF] transition-colors"
                    >
                      saikondareddypala@gmail.com
                    </a>
                  </div>

                  <div className="border-b border-[#3A3A3A]/60 pb-3">
                    <span className="font-mono text-[10px] text-[#7A7A7A] uppercase tracking-widest block mb-1">
                      LOCATION
                    </span>
                    <p className="font-sans text-sm text-[#CFCFCF] font-light">
                      Kadapa, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-[#3A3A3A]">
                <span className="font-mono text-[10px] text-[#7A7A7A] uppercase tracking-widest block mb-4">
                  SOCIAL INDEX
                </span>
                
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Sai630414"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 border border-[#3A3A3A] bg-[#0B0B0B] flex items-center justify-center text-[#CFCFCF] hover:border-white hover:text-white transition-all duration-300"
                  >
                    <FaGithub size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sai-kondareddy-338269291/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 border border-[#3A3A3A] bg-[#0B0B0B] flex items-center justify-center text-[#CFCFCF] hover:border-white hover:text-white transition-all duration-300"
                  >
                    <FaLinkedin size={18} />
                  </a>

                  <a
                    href="https://www.instagram.com/sai_.reddy05"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 border border-[#3A3A3A] bg-[#0B0B0B] flex items-center justify-center text-[#CFCFCF] hover:border-white hover:text-white transition-all duration-300"
                  >
                    <FaInstagram size={18} />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Vintage Envelope Letter Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="border border-[#3A3A3A] bg-[#141414] p-8 sm:p-10 space-y-6 relative"
            >
              <div className="border-b border-[#3A3A3A] pb-4 flex justify-between items-center">
                <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest">
                  FORM NO. 104 • ENVELOPE
                </span>
                <span className="font-serif text-sm italic text-[#CFCFCF]">
                  Confidential
                </span>
              </div>

              {submitted && (
                <div className="p-4 border border-white bg-white/10 text-white font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                  <Check size={16} /> Message Received. Response will be dispatched shortly.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-[10px] text-[#7A7A7A] uppercase tracking-widest mb-2">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g., John Doe"
                    required
                    className="w-full bg-[#0B0B0B] border border-[#3A3A3A] px-4 py-3 text-white font-mono text-sm placeholder-[#3A3A3A] focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-[10px] text-[#7A7A7A] uppercase tracking-widest mb-2">
                    Sender Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@domain.com"
                    required
                    className="w-full bg-[#0B0B0B] border border-[#3A3A3A] px-4 py-3 text-white font-mono text-sm placeholder-[#3A3A3A] focus:outline-none focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] text-[#7A7A7A] uppercase tracking-widest mb-2">
                  Subject Line
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry / Project Discussion"
                  required
                  className="w-full bg-[#0B0B0B] border border-[#3A3A3A] px-4 py-3 text-white font-mono text-sm placeholder-[#3A3A3A] focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] text-[#7A7A7A] uppercase tracking-widest mb-2">
                  Letter Content
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  required
                  className="w-full bg-[#0B0B0B] border border-[#3A3A3A] px-4 py-3 text-white font-mono text-sm placeholder-[#3A3A3A] focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>

              {/* Outline Button: Inverts on hover */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 border border-white bg-transparent text-white font-mono text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span>TRANSMITTING...</span>
                ) : (
                  <>
                    <span>DISPATCH CORRESPONDENCE</span>
                    <Send size={14} />
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
