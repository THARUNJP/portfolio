
import { motion } from 'framer-motion';
import { Code, Server, Database, Globe, Cpu, GitBranch } from 'lucide-react';

const skillsList = [
  { name: 'Frontend', icon: Globe, skills: ['React', 'TypeScript','Tailwind CSS'], color: 'from-blue-400 to-blue-600' },
  { name: 'Backend', icon: Server, skills: ['Node.js', 'Express', 'JavaScript'], color: 'from-green-400 to-green-600' },
  { name: 'Database', icon: Database, skills: ['MongoDB', 'PostgreSQL', 'MS SQL'], color: 'from-yellow-400 to-yellow-600' },
  
  { name: 'Tools', icon: Code, skills: ['VS Code', 'Postman', 'shadcn/ui'], color: 'from-pink-400 to-pink-600' },
  { name: 'Version Control', icon: GitBranch, skills: ['Git', 'GitHub'], color: 'from-indigo-400 to-indigo-600' },
  { name: 'Architecture', icon: Cpu, skills: ['MVC (Model-View-Controller)'], color: 'from-purple-400 to-purple-600' },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          My Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsList.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold ml-4 text-gray-800">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;