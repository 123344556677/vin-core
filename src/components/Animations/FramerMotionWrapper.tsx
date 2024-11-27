"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  initial = { opacity: 0, x: -100 },
  animate = { opacity: 1, x: 0 },
  exit = { opacity: 0, x: 100 },
  transition = { duration: 0.5, ease: "easeInOut" },
  ...rest
}) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      {...rest} // Pass additional props for flexibility
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
