'use client';

import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

interface TextAnimatorProps {
  sequence: (string | number)[]; // Animation sequence
  className?: string;           // Optional className for styling
}

const TextAnimator: React.FC<TextAnimatorProps> = ({ sequence, className }) => {
  const [animationSequence, setAnimationSequence] = useState<(string | number)[]>(sequence);

  useEffect(() => {
    if (sequence && sequence.length > 0) {
      setAnimationSequence(sequence);
    }
  }, [sequence]);

  return (
    <TypeAnimation
      sequence={animationSequence}
      wrapper="span"
      speed={30}
      style={{
        fontSize: "50px",
        fontWeight: 700,
        fontFamily: "Display Playfair, serif",
      }}
      className={className} // Apply dynamic classes
      repeat={Infinity}
    />
  );
};

export default TextAnimator;
