'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'span';
}

export default function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const MotionTag = as === 'span' ? motion.span : motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
