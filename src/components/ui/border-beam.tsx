import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BorderBeamProps {
  duration?: number;
  delay?: number;
  size?: number;
  className?: string;
}

export const BorderBeam = ({
  duration = 4,
  delay = 0,
  size = 200,
  className,
}: BorderBeamProps) => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-0 z-0"
    >
      <div
        className={cn(
          "absolute inset-0 h-[100%] w-[100%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent",
          className
        )}
        style={{
          maskImage: `radial-gradient(${size}px ${size}px at center, black, transparent)`,
          WebkitMaskImage: `radial-gradient(${size}px ${size}px at center, black, transparent)`,
        }}
      />
    </motion.div>
  );
};