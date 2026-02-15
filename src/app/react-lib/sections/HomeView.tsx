import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Award, TrendingUp, ArrowRight } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import TypewriterTerminal from '../components/TypewriterTerminal';

export default function HomeView() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent pt-32 pb-20">
      
      {/* Decorative Elements */}
      <div className="hidden lg:block absolute top-40 left-10 text-9xl opacity-10 font-black text-[#521D07] select-none">{'{'}</div>
      <div className="hidden lg:block absolute bottom-40 right-10 text-9xl opacity-10 font-black text-[#521D07] select-none">{'}'}</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        
        {/* --- HERO SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-48 lg:mb-[20rem]">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col items-start text-left space-y-8 z-10 order-2 lg:order-1">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-6 py-2 bg-[#A47A2D] rounded-full"
            >
              <p className="font-mono text-sm md:text-base font-bold text-white uppercase tracking-widest">
                // Portfolio 2024
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 style={{ fontFamily: 'Michroma, sans-serif' }} className="text-[48px] sm:text-[60px] lg:text-[72px] leading-[1.1] font-black text-[#521D07] dark:text-[#E2E8F0] uppercase">
                BACKEND <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A47A2D] to-[#521D07]">DEVELOPER</span>
              </h1>
            </motion.div>

            {/* Subtext */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full max-w-xl"
            >
              <TypewriterTerminal />
              
              <p className="mt-6 text-xl md:text-2xl font-bold text-[#521D07]/80 dark:text-[#B8B0A6] leading-relaxed">
                Building <span className="text-[#A47A2D]">efficient</span>, <span className="text-[#A47A2D]">scalable systems</span> that solve real-world problems.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-[#521D07] text-white text-xl font-bold rounded-full hover:bg-[#FFA51F] hover:scale-105 transition-all shadow-[4px_4px_0px_#A47A2D]"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-4 border-[#521D07] text-[#521D07] dark:text-[#E2E8F0] dark:border-[#E2E8F0] text-xl font-bold rounded-full hover:bg-[#521D07] hover:text-white transition-all"
              >
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex justify-center lg:justify-end relative z-10 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative w-full max-w-md"
            >
              <TiltCard className="w-full">
                <div className="relative bg-white dark:bg-[#252220] p-3 border-4 border-[#521D07] dark:border-[#A47A2D] shadow-[12px_12px_0px_#521D07] rounded-[2rem] overflow-hidden group rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop" 
                    alt="Josh Andrei Aguiluz" 
                    className="w-full h-[450px] object-cover rounded-[1.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-[#1A1715]/90 backdrop-blur-sm p-4 border-2 border-[#521D07] rounded-xl">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-black text-[#521D07] dark:text-[#E2E8F0] text-lg">Josh Andrei</p>
                        <p className="font-mono text-xs text-[#A47A2D] font-bold">TOP 1% WEB DEV</p>
                      </div>
                      <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}