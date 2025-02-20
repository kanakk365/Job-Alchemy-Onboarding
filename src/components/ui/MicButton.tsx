import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic } from 'lucide-react';

const MicButton = ({ isRecording, onToggle }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onToggle}
      className={`absolute right-3 bottom-3 p-2 rounded-full ${
        isRecording ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
      }`}
    >
      <AnimatePresence>
        {isRecording && (
          <>
            {/* Outer pulse animation */}
            <motion.div
              key="outer-pulse"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 2],
                opacity: [0.5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute inset-0 bg-red-400 rounded-full"
            />
            
            {/* Inner pulse animation */}
            <motion.div
              key="inner-pulse"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.5],
                opacity: [0.7, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.5
              }}
              className="absolute inset-0 bg-red-400 rounded-full"
            />
            
            {/* Background glow */}
            <motion.div
              key="background-glow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-red-400 rounded-full"
            />
          </>
        )}
      </AnimatePresence>
      
      {/* Microphone icon with animations */}
      <motion.div
        animate={
          isRecording
            ? {
                scale: [1, 1.1, 1],
                rotate: [0, 3, -3, 0],
              }
            : { scale: 1, rotate: 0 }
        }
        transition={{
          duration: 1,
          repeat: isRecording ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="relative z-10"
      >
        <Mic className="w-5 h-5" />
      </motion.div>
    </motion.button>
  );
};

export default MicButton;