import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import { useRef } from 'react';
import { messageValidate } from './service/service';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const name= nameRef.current?.value;
    const email=emailRef.current?.value;
    const message=messageRef.current?.value;
    if(name && email && message ){
      console.log("hi");
      
      const res = await messageValidate(name,email,message)
      console.log(res);
      
      
        setTimeout(() => setIsSubmitting(false), 1500);
        setTimeout(() => {
          if (nameRef.current) nameRef.current.value = "";
          if (emailRef.current) emailRef.current.value = "";
          if (messageRef.current) messageRef.current.value = "";
          alert("Your message has been sent successfully.");
       }, 1600);
    }
    else{
      alert("Every fields are mandatory")
    }
    
    
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
        >
          Get in Touch
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-2xl blur-xl" />
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="flex items-center text-gray-700 text-sm font-medium mb-2">
                      <User className="w-4 h-4 mr-2 text-purple-600" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 text-gray-600 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                      placeholder="John Doe"
                      ref={nameRef}
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="flex items-center text-gray-700 text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 mr-2 text-purple-600" />
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="text-gray-600 w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                      placeholder="john@example.com"
                      ref={emailRef}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="flex items-center text-gray-700 text-sm font-medium mb-2">
                    <MessageSquare className="w-4 h-4 mr-2 text-purple-600" />
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className=" text-gray-600 w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 resize-none"
                    placeholder="Hello, I'd like to talk about..."
                    ref={messageRef}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-200 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" onClick={handleSubmit} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
