import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: true });
  };

  return (
    <footer className="py-12 border-t border-[#3A3A3A] bg-[#0B0B0B] relative z-10 font-mono text-xs text-[#7A7A7A]">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright & Signature */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-serif text-sm font-normal text-white uppercase tracking-wider">
            SAI KONDAREDDY
          </div>
          <p className="text-[11px] text-[#7A7A7A] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED • LEICA EDITION
          </p>
        </div>

        {/* Center: Minimal Social Links */}
        <div className="flex items-center gap-6 text-[#CFCFCF]">
          <a
            href="https://github.com/Sai630414"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors uppercase tracking-widest text-[11px]"
          >
            GitHub
          </a>
          <span className="text-[#3A3A3A]">•</span>
          <a
            href="https://www.linkedin.com/in/sai-kondareddy-338269291/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors uppercase tracking-widest text-[11px]"
          >
            LinkedIn
          </a>
          <span className="text-[#3A3A3A]">•</span>
          <a
            href="https://www.instagram.com/sai_.reddy05"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors uppercase tracking-widest text-[11px]"
          >
            Instagram
          </a>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="border border-[#3A3A3A] px-4 py-2 text-[10px] text-[#CFCFCF] hover:border-white hover:text-white transition-all uppercase tracking-widest cursor-pointer"
        >
          Top ↑
        </button>

      </div>
    </footer>
  );
};

export default Footer;
