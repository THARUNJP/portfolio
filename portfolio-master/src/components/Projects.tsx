import React from 'react';
import { motion } from 'framer-motion';
// import { ExternalLink, Github } from 'lucide-react';
import task from "../assets/taskApp.png";
import DRAC from "../assets/DRAC.png";
import newDocs from "../assets/newDocs.png";

const projectsList = [
  {
    title: 'Collaborative Document Editor',
    description: 'Developed a real-time collaborative document editor, leveraging WebSockets to synchronize document changes instantly among multiple users, enabling seamless collaboration. Used Quill.js for rich text editing and Redux for efficient state management.',
    image: `${newDocs}?height=400&width=600`,
    technologies: ['ReactJS', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Express.js'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Task Manager App',
    description: 'Created a Task Manager app that allows users to manage tasks with features like adding, editing, deleting, and tracking completion status. Implemented secure authentication and dynamic task management logic, ensuring smooth user interactions and efficient data handling.',
    image: `${task}?height=400&width=600`,
    technologies: ['ReactJS', 'PostgreSQL', 'Node.js', 'Express.js', 'JavaScript'],
    liveLink: '#',
    githubLink: '#'
  },
  {
    title: 'Dynamic Role-Based Access Controler',
    description: 'Designed and implemented a secure role-based access control (RBAC) system, enabling dynamic management of roles and permissions. Developed logic for user validation, role assignments, and scalable access control, allowing admins to manage users and roles, while editors have update permissions and viewers are restricted to read-only access.',
    image: `${DRAC}?height=400&width=600`,
    technologies: ['ReactJS', 'Shadcn UI', 'JavaScript', 'HTML', 'CSS'],
    liveLink: '#',
    githubLink: '#'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative pb-6 mb-24"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-16">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="lg:w-1/2 relative group"
                >
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl shadow-lg relative z-10 w-full"
                  />
                </motion.div>

                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    {/* <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink}
                      className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:border-purple-600 hover:text-purple-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;