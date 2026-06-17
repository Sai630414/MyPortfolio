import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { Link } from 'react-scroll';

const floatingAnimation = {
  y: ['-10px', '10px'],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut'
  }
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-medium mb-4 text-lg tracking-wide uppercase"
          >
            Welcome to my portfolio
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <br />
            <span className="text-gradient leading-tight">Sai KondaReddy</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-muted font-light mb-8 h-[40px]"
          >
            I am a{' '}
            <span className="text-white font-semibold">
              <Typewriter
                words={['Student','FullStack Enthusiast']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted max-w-lg mb-10 text-lg leading-relaxed"
          >
            Building modern web experiences with React and creativity. Dedicated to crafting premium, fast, and responsive user interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              to="projects"
              smooth={true}
              offset={-80}
              duration={500}
              className="px-8 py-3 rounded-full bg-primary text-white font-semibold hover:bg-blue-600 transition-colors shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] cursor-pointer"
            >
              View Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="px-8 py-3 rounded-full border border-white/20 hover:border-white/50 text-white font-semibold transition-all glass cursor-pointer"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Floating Icons / Visual Content */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 flex justify-center relative h-[400px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-64 h-64 md:w-80 md:h-80 glass-card rounded-full flex items-center justify-center border-primary/30 border-2"
          >
            {/* Main Avatar Placeholder */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center p-8 overflow-hidden">
               {/* Later this can be an img tag if the user provides an image */}
               <span className="text-6xl font-bold text-white/50">SK</span>
            </div>

            {/* Orbiting Tech Icons */}
            <motion.div animate={floatingAnimation} className="absolute -top-6 -left-6 text-5xl text-[#61DAFB] bg-surface p-3 rounded-full border border-white/10 shadow-lg">
              <FaReact />
            </motion.div>
            <motion.div animate={floatingAnimation} className="absolute top-10 -right-8 text-5xl text-[#68A063] bg-surface p-3 rounded-full border border-white/10 shadow-lg" style={{ animationDelay: '0.5s' }}>
              <FaNodeJs />
            </motion.div>
            <motion.div animate={floatingAnimation} className="absolute bottom-10 -left-4 text-5xl text-[#E34F26] bg-surface p-3 rounded-full border border-white/10 shadow-lg" style={{ animationDelay: '1s' }}>
              <FaHtml5 />
            </motion.div>
            <motion.div animate={floatingAnimation} className="absolute -bottom-8 right-10 text-5xl text-[#1572B6] bg-surface p-3 rounded-full border border-white/10 shadow-lg" style={{ animationDelay: '1.5s' }}>
              <FaCss3Alt />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
