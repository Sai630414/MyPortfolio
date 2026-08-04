import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaJava
} from 'react-icons/fa';
import {
  SiJavascript, SiExpress, SiTailwindcss, SiVite
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillCategories = [
  {
    category: 'Languages & Core',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, level: 'Advanced' },
      { name: 'Java', icon: FaJava, level: 'Intermediate' },
      { name: 'HTML5', icon: FaHtml5, level: 'Advanced' },
      { name: 'CSS3', icon: FaCss3Alt, level: 'Advanced' },
    ]
  },
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'React.js', icon: FaReact, level: 'Advanced' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
      { name: 'Vite', icon: SiVite, level: 'Advanced' },
    ]
  },
  {
    category: 'Backend & Database',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 'Intermediate' },
      { name: 'Express.js', icon: SiExpress, level: 'Intermediate' },
    ]
  },
  {
    category: 'Tools & Version Control',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 'Advanced' },
      { name: 'GitHub', icon: FaGithub, level: 'Advanced' },
      { name: 'VS Code', icon: VscVscode, level: 'Advanced' },
    ]
  }
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const displayedCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === activeCategory);

  return (
    <section id="skills" className="py-32 relative z-10 border-b border-[#3A3A3A]/40">
      <div className="container mx-auto px-6 md:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-b border-[#3A3A3A] pb-4 mb-16 flex flex-wrap justify-between items-baseline"
        >
          <h2 className="font-serif text-4xl sm:text-5xl font-normal uppercase text-white tracking-tight">
            SECTION II • <span className="italic text-[#CFCFCF]">TECHNICAL INVENTORY</span>
          </h2>
          <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest mt-2 sm:mt-0">
            STACK & COMPETENCIES
          </span>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['All', 'Languages & Core', 'Frontend & UI', 'Backend & Database', 'Tools & Version Control'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-white text-black border border-white font-bold'
                  : 'border border-[#3A3A3A] text-[#7A7A7A] hover:border-white hover:text-white bg-[#141414]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-12">
          {displayedCategories.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-6">
              <h3 className="font-serif text-xl font-normal text-[#CFCFCF] border-b border-[#3A3A3A]/60 pb-2">
                {group.category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {group.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                      className="border border-[#3A3A3A] bg-[#141414] hover:border-white p-6 flex flex-col items-center justify-center gap-4 transition-colors duration-300 group"
                    >
                      <div className="text-3xl text-[#CFCFCF] group-hover:text-white transition-colors">
                        <Icon />
                      </div>

                      <div className="text-center space-y-1">
                        <h4 className="font-mono text-sm text-white font-medium uppercase tracking-wider">
                          {skill.name}
                        </h4>
                        <span className="font-mono text-[10px] text-[#7A7A7A] uppercase tracking-widest block">
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
