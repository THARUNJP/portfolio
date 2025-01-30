import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import human from "../assets/hymanPoint.png" ;





const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:w-1/3 relative"
          >
          
          <div className="relative w-72 h-72 md:w-96 md:h-96 p-4 border-0 outline-none">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl transform rotate-6 opacity-60 border-0 outline-none">
    <img
      src={human}
      alt=""
      className="absolute inset-0 rounded-2xl w-full h-[288px]  sm:h-[310px] md:h-[384px] lg:h-[384px] object-contain object-center z-10 border-0 outline-none"
    />
  </div>
</div>

          </motion.div>
          
          <div className="lg:w-1/2 space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
            I'm a full-stack developer passionate about creating seamless, user-friendly applications. With expertise in ReactJS, Node.js, MongoDB, and PostgreSQL, I love building solutions that are both efficient and visually engaging. I thrive on turning ideas into impactful, scalable software that users enjoy.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
            With 5 months of experience in full-stack development, I've had the opportunity to build user-friendly, scalable applications that make a real impact. If you’re curious about my work or think we could collaborate, I’d love to connect and see how I can contribute something valuable to your project or team!
            </p>
            
            <div className="flex gap-6 pt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/THARUNJP"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
              <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/tharun-jp-5173b1257"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
            <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://x.com/?lang=en&mx=2"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;