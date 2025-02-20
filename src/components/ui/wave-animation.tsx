import { motion } from 'framer-motion';

export const WaveAnimation = () => (
  <div className="absolute left-12 right-4 top-1/2 -translate-y-1/2 flex items-center justify-between">
    {[...Array(40)].map((_, i) => (
      <motion.div
        key={i}
        className="w-1 h-6 bg-red-500/60 rounded-full origin-bottom"
        animate={{
          scaleY: [0.4, 1, 0.4],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          delay: i * 0.1,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);