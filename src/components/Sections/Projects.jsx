import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import apconnect from '../../assets/projectImages/apconnect.png';
import crop from '../../assets/projectImages/crop.png'
import cgpa from '../../assets/projectImages/cgpa.png'

const projects = [
 {
  title: 'CGPA Calculator',
  description: 'A simple and responsive web application that helps students calculate their GPA accurately based on course grades and credits. Built with a clean user interface to provide instant academic performance insights.',
  image: cgpa, // import your project image
  tech: ['HTML', 'CSS', 'JavaScript'],
  github: 'https://github.com/Sai630414/gpa-calculator',
  live: 'https://sai630414.github.io/gpa-calculator/index.html'
},
  {
  title: 'Agriculture Recommendation System (Ongoing)',
  description: 'Currently developing a smart agriculture solution that recommends suitable crops, fertilizers, and manure using machine learning and agricultural data analysis. The goal is to assist farmers in maximizing yield through accurate recommendations.',
  image: crop,
  tech: ['Angular' ,'kaggle datasets' ,'IOT'],
  github: 'https://github.com/Sai630414/agriculture-recomendation-system',
  live: 'https://agriculture-recomendation-system.vercel.app/home'
},
{
  title: 'APBusConnect',
  description: 'A comprehensive bus travel platform for Andhra Pradesh that helps users search routes, check schedules, discover bus stops, and access APSRTC travel information through a modern and responsive interface.',
  image: apconnect,
  tech: ['JavaScript','GTFS data', 'REST API'],
  github: 'https://github.com/Sai630414/APBusConnect',
  live: 'https://apsrtc-route-finder.vercel.app/'
}
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted mt-6 max-w-2xl mx-auto">Some of the recent projects I've worked on, showcasing my frontend skills and attention to detail.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-2xl overflow-hidden group border border-white/10 hover:border-primary/50 transition-colors"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-muted mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors">
                    <FaGithub size={18} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-accent transition-colors">
                    <FaExternalLinkAlt size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
        >
          <a href="https://github.com/Sai630414?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-primary text-white transition-all glass hover:bg-primary/10">
            View More on GitHub <FaGithub />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
