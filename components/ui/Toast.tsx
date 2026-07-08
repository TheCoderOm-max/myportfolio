'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 12, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 12, x: '-50%' }}
          transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          className="fixed bottom-7 left-1/2 z-[300] flex items-center gap-2 rounded-xl bg-text px-5 py-3 text-sm font-medium text-white shadow-lg"
        >
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
