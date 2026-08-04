import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import apconnect from '../../assets/projectImages/apconnect.png';
import crop from '../../assets/projectImages/crop.png';
import cgpa from '../../assets/projectImages/cgpa.png';

const projects = [
  {
    plateNo: 'NO. 01',
    title: 'APBusConnect',
    description: 'A comprehensive bus travel platform for Andhra Pradesh that enables users to search routes, inspect timetables, discover bus stops, and access APSRTC travel info via a modern interface.',
    image: apconnect,
    tech: ['JavaScript', 'GTFS Data', 'REST API', 'Leaflet'],
    github: 'https://github.com/Sai630414/APBusConnect',
    live: 'https://apbusconnect.xyz/'
  },
  {
    plateNo: 'NO. 02',
    title: 'Agriculture Recommendation System',
    description: 'A smart agriculture solution that calculates crop, fertilizer, and manure recommendations using machine learning and agricultural dataset analysis to optimize farm output.',
    image: crop,
    tech: ['Angular', 'Kaggle Datasets', 'IoT Data'],
    github: 'https://github.com/Sai630414/agriculture-recomendation-system',
    live: 'https://agriculture-recomendation-system.vercel.app/home'
  },
  {
    plateNo: 'NO. 03',
    title: 'CGPA Calculator',
    description: 'A simple and responsive web utility allowing students to compute GPA accurately based on course letter grades and credit hours with instant academic feedback.',
    image: cgpa,
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/Sai630414/gpa-calculator',
    live: 'https://sai630414.github.io/gpa-calculator/index.html'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative z-10 border-b border-[#3A3A3A]/40">
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
            SECTION III • <span className="italic text-[#CFCFCF]">SELECTED WORKS</span>
          </h2>
          <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-widest mt-2 sm:mt-0">
            EDITORIAL EXHIBITION
          </span>
        </motion.div>

        {/* Projects Editorial Cards Stack */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-[#3A3A3A]/60 pb-20 group"
            >
              {/* Project Image Plate */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="border border-[#3A3A3A] p-3 bg-[#141414] relative group-hover:border-white transition-colors duration-500">
                  <div className="relative overflow-hidden aspect-[16/10]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover leica-bw group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 mix-blend-overlay pointer-events-none" />
                  </div>

                  <div className="pt-3 flex justify-between font-mono text-[10px] text-[#7A7A7A] uppercase tracking-wider">
                    <span>PROJECT PLATE — {project.plateNo}</span>
                    <span>MONOCHROME ARCHIVE</span>
                  </div>
                </div>
              </div>

              {/* Project Text Details */}
              <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-[0.3em]">
                  {project.plateNo}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl font-normal text-white uppercase tracking-tight group-hover:text-[#CFCFCF] transition-colors">
                  {project.title}
                </h3>

                <p className="text-[#CFCFCF] text-base font-sans font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="font-mono text-[11px] px-3 py-1 border border-[#3A3A3A] text-[#CFCFCF] uppercase tracking-widest bg-[#141414]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Link Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-white text-white font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Live Showcase</span>
                    <FaExternalLinkAlt size={12} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-[#3A3A3A] text-[#7A7A7A] hover:border-white hover:text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2"
                  >
                    <span>Source</span>
                    <FaGithub size={14} />
                  </a>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* GitHub Repos Archive Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/Sai630414?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#3A3A3A] text-[#CFCFCF] hover:border-white hover:text-white font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 bg-[#141414]"
          >
            <span>View Full Repository Index</span>
            <FaGithub size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
