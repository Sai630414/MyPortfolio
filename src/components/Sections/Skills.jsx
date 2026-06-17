import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt
} from 'react-icons/fa';
import {
  SiJavascript, SiExpress, SiTailwindcss, SiVite
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: 'text-[#E34F26]', bg: 'hover:shadow-[0_0_20px_rgba(227,79,38,0.3)]', level: 95 },
  { name: 'CSS3', icon: FaCss3Alt, color: 'text-[#1572B6]', bg: 'hover:shadow-[0_0_20px_rgba(21,114,182,0.3)]', level: 90 },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]', bg: 'hover:shadow-[0_0_20px_rgba(247,223,30,0.3)]', level: 85 },
  { name: 'React', icon: FaReact, color: 'text-[#61DAFB]', bg: 'hover:shadow-[0_0_20px_rgba(97,218,251,0.3)]', level: 90 },

  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]', bg: 'hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]', level: 85 },
  { name: 'Express.js', icon: SiExpress, color: 'text-white', bg: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]', level: 75 },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-[#339933]', bg: 'hover:shadow-[0_0_20px_rgba(51,153,51,0.3)]', level: 70 },
  { name: 'Git', icon: FaGitAlt, color: 'text-[#F05032]', bg: 'hover:shadow-[0_0_20px_rgba(240,80,50,0.3)]', level: 80 },
  { name: 'GitHub', icon: FaGithub, color: 'text-white', bg: 'hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]', level: 85 },
  { name: 'VS Code', icon: VscVscode, color: 'text-[#007ACC]', bg: 'hover:shadow-[0_0_20px_rgba(0,122,204,0.3)]', level: 95 },

];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10 bg-surface/20">
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted mt-6 max-w-2xl mx-auto">Technologies and tools I work with to bring digital products to life.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 ${skill.bg} border border-white/5 hover:-translate-y-2 cursor-pointer group`}
              >
                <Icon className={`text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <h4 className="text-white font-medium text-lg">{skill.name}</h4>

                {/* Progress Bar hidden by default, shown on hover (optional) or just simple indicator */}
                <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden mt-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-primary to-accent"
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
