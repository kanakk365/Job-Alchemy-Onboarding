import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const MagicButton = ({ onClick }: { onClick: () => void }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="absolute bottom-3 right-3 p-2 rounded-full bg-indigo-100 text-indigo-600 z-20
               hover:bg-indigo-200 transition-colors duration-200"
  >
    <motion.div
      animate={{
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Sparkles className="w-4 h-4" />
    </motion.div>
  </motion.button>
);