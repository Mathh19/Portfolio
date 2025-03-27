'use client';

import { motion } from 'framer-motion';

export const Divisor = () => {
  return (
    <motion.hr
      initial={{ width: 0 }}
      whileInView={{ width: 240 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-full h-[2px] max-w-[240px] bg-gray-color mb-6"
    />
  );
};
