import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: 'Featured Projects', value: '03' },
    { label: 'Core Competencies', value: '10+' },
    { label: 'GitHub Repositories', value: '10+' },
    { label: 'Problem Solving', value: 'Active' },
  ];

  return (
    <section id="about" className="py-32 relative z-10 border-b border-[#3A3A3A]/40">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-[#3A3A3A] pb-4 mb-16 flex flex-wrap justify-between items-baseline"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-normal uppercase text-white tracking-tight">
            SECTION I • <span className="italic text-[#CFCFCF]">ABOUT THE ENGINEER</span>
          </h2>
          <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest mt-2 sm:mt-0">
            BIOGRAPHY & PHILOSOPHY
          </span>
        </motion.div>

        {/* Magazine Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Large Editorial Quotation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="border border-[#3A3A3A] bg-[#141414] p-8 sm:p-10 relative">
              <span className="font-serif text-7xl text-[#3A3A3A] absolute top-4 left-6 pointer-events-none">
                “
              </span>
              <p className="font-serif text-xl sm:text-2xl italic text-white leading-relaxed pt-6 font-normal">
                Engineering software is not merely about writing code; it is the craft of creating intuitive systems, elegant logic, and lasting digital experiences.
              </p>
              <div className="border-t border-[#3A3A3A] pt-4 mt-6 flex justify-between items-center font-mono text-xs text-[#7A7A7A]">
                <span>SAI KONDAREDDY</span>
                <span>VIT-AP UNIVERSITY</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Drop Cap Paragraph & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6 text-[#CFCFCF] font-sans font-light text-base sm:text-lg leading-relaxed">
              <p className="drop-cap">
                Hello! I am <strong className="text-white font-medium">Sai KondaReddy</strong>, an engineer with a deep passion for building robust web applications, modern full stack architectures, and intelligent software tools.
              </p>
              <p>
                My journey began with a natural curiosity for how digital platforms function behind the scenes. That curiosity evolved into a rigorous discipline covering <span className="text-white">React, JavaScript, Java</span>, modern web frameworks, and algorithmic problem-solving.
              </p>
              <p>
                Currently pursuing my Computer Science degree at <span className="text-white">VIT-AP University</span>, I focus on building practical real-world solutions—from APBusConnect to agricultural decision support systems—ensuring high code quality and clear user utility.
              </p>
            </div>

            {/* Editorial Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#3A3A3A]">
              {stats.map((stat, i) => (
                <div key={i} className="border border-[#3A3A3A] p-4 bg-[#141414] text-center">
                  <span className="font-serif text-3xl font-bold text-white block mb-1">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] text-[#7A7A7A] uppercase tracking-wider block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
