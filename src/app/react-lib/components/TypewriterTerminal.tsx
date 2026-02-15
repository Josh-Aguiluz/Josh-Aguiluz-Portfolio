import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TypewriterTerminal() {
  const line = "> Josh_Aguiluz.exe Ready.";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < line.length) {
        setDisplayedText(line.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="font-mono text-sm md:text-base font-bold text-[#521D07] dark:text-[#A47A2D] opacity-80 mt-4 flex items-center gap-2">
      <span>{displayedText}</span>
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-2 h-4 bg-[#A47A2D]"
      />
    </div>
  );
}