
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, MapPin, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

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
    await emailjs.send(
  'service_k8lvpoi',
  'template_9amufxc',
  {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  },
  'J4Zn6j5gmA3QOupBG'
);

      alert('Message sent successfully!');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      alert('Failed to send message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>

          <p className="text-muted mt-6 max-w-2xl mx-auto">
            Have a question or want to work together? Leave a message!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/3 space-y-8"
          >
            <div className="glass-card p-8 rounded-2xl border border-white/5 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <Mail size={24} />
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-muted text-sm">
                      saikondareddypala@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-muted text-sm">
                      Kadapa, Andhra Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-white font-medium mb-4">Follow Me</h4>

                <div className="flex gap-4">
                  <a
                    href="https://github.com/Sai630414"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-primary hover:bg-primary/20 transition-all"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sai-kondareddy-338269291/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-secondary hover:bg-secondary/20 transition-all"
                  >
                    <FaLinkedin size={20} />
                  </a>

                  <a
                    href="https://www.instagram.com/sai_.reddy05"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-white hover:border-accent hover:bg-accent/20 transition-all"
                  >
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full lg:w-2/3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 rounded-2xl border border-white/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted mb-2">
                    Your Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-muted mb-2">
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-muted mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  required
                  className="w-full bg-surface border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
```
