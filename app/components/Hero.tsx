'use client';

import { motion } from 'framer-motion';
import { MemeButton } from './ui/MemeButton';

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center p-8 bg-gradient-to-b from-green-400 to-green-600 rounded-3xl border-4 border-yellow-400"
    >
      <h1 className="text-6xl font-bold mb-6 text-white">
        Hello, I'm Sponge 🧽
      </h1>
      <p className="text-xl text-yellow-200 mb-8">
        Your Friendly Web3 Assistant
      </p>
      <div className="flex gap-4 justify-center">
        <MemeButton>
          View Projects 🚀
        </MemeButton>
        <MemeButton className="bg-black hover:bg-gray-800 text-yellow-400">
          Contact Me 💌
        </MemeButton>
      </div>
    </motion.div>
  );
}