import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const timelineData = [
  {
    year: '2023 - Present',
    title: 'Computer Science Student',
    organization: 'University Name',
    description: 'Currently pursuing my degree, focusing on web technologies, data structures, and software engineering principles.',
    icon: GraduationCap
  },
{
  year: '2021 - 2023',
  title: 'Intermediate (MPC)',
  organization: 'Aakash Institute',
  description:
    'Completed Intermediate education in MPC stream. Developed strong analytical thinking, communication, and teamwork skills through academic and collaborative activities.',
  icon: GraduationCap
},
{
  year: '2019 - 2021',
  title: 'Secondary Education',
  organization: 'Narayana Olympiad School, Nellore',
  description:
    'Completed schooling with a focus on academics and problem-solving. Built a strong foundation in mathematics, logical reasoning, communication, and team management.',
  icon: GraduationCap
}
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-surface/20">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          <p className="text-muted mt-6 max-w-2xl mx-auto">My educational background and learning milestones along my path to becoming a developer.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center w-full">
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-4 md:left-1/2 w-10 h-10 bg-surface border-2 border-primary rounded-full transform -translate-x-1/2 flex items-center justify-center z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  >
                    <Icon size={18} className="text-white" />
                  </motion.div>

                  {/* Content Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}
                  >
                    <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                      <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2 block">{item.year}</span>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <h4 className="text-muted text-sm mb-4 font-medium">{item.organization}</h4>
                      <p className="text-muted/80 text-sm leading-relaxed">{item.description}</p>
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
