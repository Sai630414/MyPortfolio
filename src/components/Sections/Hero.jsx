import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import heroImg from '../../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex flex-col justify-between relative z-10 overflow-hidden border-b border-[#3A3A3A]/40">

      <div className="container mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center">

        {/* Magazine Issue Metadata Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-between border-b border-[#3A3A3A] pb-3 mb-10 text-xs font-mono text-[#7A7A7A] uppercase tracking-[0.2em]"
        >
          <span>EDITORIAL SHOWCASE • 2026 EDITION</span>
          <span>LOCATION: KADAPA, AP, INDIA</span>
          <span>EST. 2023</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Magazine Cover Typography */}
          <div className="lg:col-span-7 space-y-8 text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="font-mono text-xs text-[#7A7A7A] uppercase tracking-[0.3em] block mb-2">
                PORTFOLIO NO. 01
              </span>

              <h1 className="font-serif text-5xl sm:text-7xl xl:text-8xl font-normal text-white uppercase tracking-tight leading-[0.9]">
                SAI <br />
                <span className="italic font-light text-[#CFCFCF]">KONDAREDDY</span>
              </h1>
            </motion.div>

            {/* Typewriter Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-2xl font-serif text-[#CFCFCF] font-light pt-2 h-[45px] flex items-center"
            >
              <span>Specializing in &nbsp;</span>
              <span className="font-mono text-white text-base sm:text-xl border-b border-white pb-0.5">
                <Typewriter
                  words={[
                    'Full Stack Developer',
                    'MERN Stack Developer'
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={35}
                  delaySpeed={1500}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[#CFCFCF] text-base sm:text-lg max-w-xl font-sans font-light leading-relaxed pt-2"
            >
              Dedicated to crafting timeless digital software, robust full stack systems, and intelligent user experiences through clean architecture and intentional design.
            </motion.p>

            {/* Minimal Outline Buttons (Invert colors on hover) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                to="projects"
                smooth={true}
                offset={-80}
                duration={600}
                className="px-8 py-4 border border-white text-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
              >
                View Works
              </Link>

              <a
                href="https://github.com/Sai630414"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-[#3A3A3A] text-[#CFCFCF] hover:border-white hover:text-white font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
              >
                GitHub Profile
              </a>

              <Link
                to="contact"
                smooth={true}
                offset={-80}
                duration={600}
                className="px-8 py-4 border border-[#3A3A3A] text-[#7A7A7A] hover:border-white hover:text-white font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 cursor-pointer"
              >
                Correspondence
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Leica B&W Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-4 border border-[#3A3A3A] bg-[#141414] max-w-sm sm:max-w-md w-full group"
            >
              {/* Paper Photo Border Frame */}
              <div className="p-3 border border-white/20 bg-[#0B0B0B] relative overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={heroImg}
                    alt="Sai KondaReddy - Leica Vintage Portrait"
                    className="w-full h-full object-cover leica-bw group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Subtle Grain Overlay on Image */}
                  <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
                </div>

                {/* Handwritten Style Caption */}
                <div className="pt-4 flex justify-between items-center font-mono text-[10px] text-[#7A7A7A] uppercase tracking-wider">
                  <span>FIG 1.0 — PORTRAIT</span>
                  <span>LEICA M MONOCHROM</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
