import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [frameNum, setFrameNum] = useState(8);

  useEffect(() => {
    // Vintage film countdown effect (8, 7, 6, 5...)
    const interval = setInterval(() => {
      setFrameNum((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 1;
        }
        return prev - 1;
      });
    }, 180);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-50 bg-[#0B0B0B] flex flex-col items-center justify-center pointer-events-auto border-8 border-[#1A1A1A]"
        >
          {/* Vintage Film Projector Reticle & Countdown */}
          <div className="relative w-40 h-40 border border-white/20 rounded-full flex items-center justify-center mb-6">
            <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
            <div className="absolute w-full h-[1px] bg-white/20" />
            <div className="absolute h-full w-[1px] bg-white/20" />
            <span className="font-serif text-5xl font-bold text-white tracking-tighter">
              0{frameNum}
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs text-[#7A7A7A] uppercase tracking-[0.3em]"
          >
            Leica Edition • Portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
