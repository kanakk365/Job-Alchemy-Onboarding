import { motion } from 'framer-motion';

export const WaveRing = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full border-4 ${
          i === 0 ? 'border-indigo-500/50' :
          i === 1 ? 'border-purple-500/40' :
                    'border-blue-500/30'
        }`}
        initial={{ 
          width: '100%', 
          height: '100%', 
          opacity: 0.7,
        }}
        animate={{
          width: ['100%', '170%'],
          height: ['100%', '170%'],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: i * 0.3,
          ease: "easeOut"
        }}
      />
    ))}
    
    {/* Inner glow effect */}
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
      initial={{ width: '100%', height: '100%' }}
      animate={{
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </div>
);