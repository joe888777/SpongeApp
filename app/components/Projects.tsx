'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {[1, 2, 3].map((item) => (
        <motion.div
          key={item}
          whileHover={{ scale: 1.05 }}
          className="p-6 bg-gray-800 rounded-xl"
        >
          <h3 className="text-xl font-semibold mb-2">Project {item}</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}