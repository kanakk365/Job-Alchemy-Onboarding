import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, TestTube, FlaskRound, TestTube2 } from 'lucide-react';

const FloatingFlasks = () => {
  const flasks = [
    { id: 0, Icon: FlaskConical, section: { x: 5, y: 5 }, rotation: 15 },
    { id: 1, Icon: FlaskRound, section: { x: 10, y: 25 }, rotation: -20 },
    { id: 2, Icon: TestTube2, section: { x: 80, y: 20 }, rotation: 25 },
    { id: 3, Icon: FlaskConical, section: { x: 90, y: 4 }, rotation: -15 },
    { id: 4, Icon: TestTube, section: { x: 50, y: 26 }, rotation: 20 },
    { id: 5, Icon: FlaskConical, section: { x: 80, y: 70 }, rotation: -25 },
  ].map(item => ({
    ...item,
    initialX: (item.section.x * 33) + (Math.random() * 20),
    initialY: (item.section.y * 50) + (Math.random() * 30),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {flasks.map((flask) => (
        <motion.div
          key={flask.id}
          initial={{ 
            x: `${flask.initialX}%`, 
            y: `${flask.initialY}%`,
            opacity: 0.8,
            scale: 1,
            rotate: flask.rotation
          }}
          animate={{
            y: [`${flask.initialY}%`, `${flask.initialY + 12}%`],
            x: [`${flask.initialX}%`, `${flask.initialX + 5}%`],
            opacity: [0.8, 0.5],
            scale: [1, 1.2],
            rotate: [flask.rotation - 5, flask.rotation + 5]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute"
        >
          <flask.Icon 
            className="w-12 h-12 text-indigo-500"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingFlasks;