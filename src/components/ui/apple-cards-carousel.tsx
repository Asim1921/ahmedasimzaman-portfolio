"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";

export const Carousel = ({
  items,
  className,
}: {
  items: React.ReactNode[];
  className?: string;
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!carouselRef.current) return;

    const rect = carouselRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct * 100);
    y.set(yPct * 100);
  };

  return (
    <motion.div
      ref={carouselRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={cn(
        "relative overflow-hidden w-full rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-8",
        className
      )}
    >
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            style={{
              x: useTransform(x, [-100, 0, 100], [-10, 0, 10]),
              y: useTransform(y, [-100, 0, 100], [-10, 0, 10]),
            }}
            onHoverStart={() => setActiveIndex(idx)}
            className="min-w-[300px] md:min-w-[400px] snap-center"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export const Card = ({
  card,
  index,
}: {
  card: {
    category: string;
    title: string;
    src: string;
    content?: React.ReactNode;
  };
  index: number;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  useOutsideClick(containerRef, () => setOpen(false));

  return (
    <motion.div
      ref={containerRef}
      onClick={() => setOpen(true)}
      className="relative cursor-pointer"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        animate={open ? "open" : "closed"}
        className="relative"
      >
        <motion.div
          variants={{
            closed: { scale: 1, rotateY: 0 },
            open: { scale: 1.1, rotateY: 5 },
          }}
          transition={{ duration: 0.3 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-xl border border-white/10 shadow-xl"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={card.src}
              alt={card.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs text-violet-400 font-semibold uppercase tracking-wider">
                {card.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{card.title}</h3>
            </div>
          </div>
        </motion.div>
        
        {open && card.content && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute inset-0 z-10 bg-black/95 backdrop-blur-xl rounded-2xl p-6 overflow-y-auto"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
              className="absolute top-4 right-4 text-white hover:text-violet-400 transition-colors"
            >
              ✕
            </button>
            {card.content}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

