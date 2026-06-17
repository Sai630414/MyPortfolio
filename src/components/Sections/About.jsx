import { motion } from 'framer-motion';
import { Code2, FolderGit2, Trophy } from 'lucide-react';

const stats = [
  { label: 'Projects Built', value: '3+', icon: FolderGit2, color: 'text-primary' },
  { label: 'Technologies', value: '5+', icon: Code2, color: 'text-secondary' },
  { label: 'GitHub Repos', value: '10+', icon: Trophy, color: 'text-accent' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 glass-card p-8 rounded-2xl border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
            <h3 className="text-2xl font-semibold mb-6 text-white">My Journey</h3>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-medium">Sai KondaReddy</span>, an aspiring Frontend Developer with a deep passion for building beautiful, functional, and user-centered web applications. 
              </p>
              <p>
                My journey into web development started out of curiosity and quickly grew into a full-blown passion. I love blending the technical aspects of coding with the creative elements of design. My primary focus these days is mastering <span className="text-primary font-medium">React</span> and building seamless digital experiences.
              </p>
              <p>
                Currently, I am actively learning and building projects using React, Express.js, and modern CSS frameworks like Tailwind. When I'm not coding, I'm constantly exploring new tools and design trends to stay ahead of the curve.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-surface/80 ${stat.color} group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <h4 className="text-3xl font-bold text-white">{stat.value}</h4>
                  </div>
                  <p className="text-muted font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
            
            {/* CTA inside stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass p-6 rounded-xl border border-primary/30 bg-primary/5 flex flex-col justify-center items-center text-center hover:bg-primary/10 transition-colors cursor-pointer"
            >
              <h4 className="text-xl font-semibold text-white mb-2">Let's work together</h4>
              <p className="text-sm text-muted">Open for internships and freelance opportunities.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
