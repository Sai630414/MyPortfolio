import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    period: '2023 — PRESENT',
    title: 'B.Tech Computer Science & Engineering',
    institution: 'VIT-AP University, Amaravati',
    summary: 'Focused on software engineering principles, full stack web systems, algorithms, and intelligent systems design.'
  },
  {
    period: '2021 — 2023',
    title: 'Senior Secondary Education (MPC)',
    institution: 'Aakash Institute',
    summary: 'Mastered core foundations in Mathematics, Physics, and Chemistry while honing logical reasoning and problem-solving skills.'
  },
  {
    period: '2019 — 2021',
    title: 'Secondary School Certification',
    institution: 'Narayana Olympiad School, Nellore',
    summary: 'Completed high school curriculum with distinction in academics, mathematics, and collaborative teamwork.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative z-10 border-b border-[#3A3A3A]/40">
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
            SECTION IV • <span className="italic text-[#CFCFCF]">CHRONICLE & MILESTONES</span>
          </h2>
          <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest mt-2 sm:mt-0">
            ACADEMIC RECORD
          </span>
        </motion.div>

        {/* Newspaper Style Timeline */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Thin Vertical Divider Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-[1px] bg-[#3A3A3A] transform -translate-x-1/2" />

          <div className="space-y-16">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col sm:flex-row items-center w-full group">
                  
                  {/* Small Circular Marker */}
                  <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-white border border-[#0B0B0B] rounded-full transform -translate-x-1/2 z-20 group-hover:scale-150 transition-transform duration-300" />

                  {/* Editorial Card Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:ml-auto'}`}
                  >
                    <div className="border border-[#3A3A3A] bg-[#141414] p-6 hover:border-white transition-colors duration-300">
                      <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest block mb-2">
                        {item.period}
                      </span>

                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-white uppercase tracking-tight mb-1">
                        {item.title}
                      </h3>

                      <h4 className="font-mono text-xs text-[#CFCFCF] uppercase tracking-wider mb-4">
                        {item.institution}
                      </h4>

                      <p className="text-[#7A7A7A] text-sm font-sans font-light leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
