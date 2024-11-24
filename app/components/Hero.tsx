'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text animate-gradient">
        Hello, I'm John Doe
      </h1>
      <p className="text-xl text-gray-400 mb-8">
        Full Stack Developer & Designer
      </p>
      <div className="flex gap-4 justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-600 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          View Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gray-800 rounded-lg font-medium hover:bg-gray-700 transition-colors"
        >
          Contact Me
        </motion.button>
      </div>
    </motion.div>
  );
}