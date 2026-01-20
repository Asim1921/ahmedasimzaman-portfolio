"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const SkillsSlider = ({
  skills,
  className,
}: {
  skills: {
    name: string;
    proficiency: number;
    icon: string;
    color: string;
    experience: string;
    category: string;
  }[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const skillsPerView = 3;

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.ceil(skills.length / skillsPerView) - 1;
      if (newDirection > 0) {
        return prevIndex < maxIndex ? prevIndex + 1 : 0;
      } else {
        return prevIndex > 0 ? prevIndex - 1 : maxIndex;
      }
    });
  };

  const currentSkills = skills.slice(
    currentIndex * skillsPerView,
    currentIndex * skillsPerView + skillsPerView
  );

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative h-[400px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {currentSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
                
                <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl group-hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                      {skill.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">{skill.experience}</div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-500">
                    {skill.name}
                  </h3>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Proficiency</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden backdrop-blur-xl border border-white/10">
                      <motion.div
                        className={`h-3 bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 2, delay: 1.3, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => paginate(-1)}
          className="px-4 py-2 bg-black/40 backdrop-blur-xl text-white rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200"
        >
          ← Previous
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: Math.ceil(skills.length / skillsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-200",
                index === currentIndex
                  ? "w-8 bg-gradient-to-r from-violet-500 to-purple-500"
                  : "bg-white/30 hover:bg-white/50"
              )}
            />
          ))}
        </div>
        <button
          onClick={() => paginate(1)}
          className="px-4 py-2 bg-black/40 backdrop-blur-xl text-white rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

