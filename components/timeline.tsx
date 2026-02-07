'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { cn } from "@/lib/utils";

interface TimelineEvent {
  id: number;
  year: string;
  dateRange: string;
  title: string;
  description: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    year: "2018",
    dateRange: "March 2018",
    title: "Bachelor of Science in Computer Science",
    description: "Graduated with a Bachelor of Science in Computer Science, building a strong foundation in software engineering, algorithms, data structures, and modern web development practices.",
  },
  {
    id: 2,
    year: "2019",
    dateRange: "2018 - 2020",
    title: "August99 / Canstar Australia",
    description: "Worked with August99 to enhance Canstar Australia’s Credit Card pages, developing and maintaining features using WordPress, GraphQL, and Angular.",
  },
  {
    id: 3,
    year: "2022",
    dateRange: "2020 - 2022",
    title: "Master in Information Technology & IBM Learning",
    description: "Joined IBM and contributed to maintaining the IBM Learning platform, improving accessibility and performance, and migrating components from Drupal to React.",
  },
  {
    id: 4,
    year: "PRESENT",
    dateRange: "2022 - PRESENT",
    title: "Web Consultant",
    description: "Delivering tailored web solutions for Australian clients, specializing in modern front-end frameworks and scalable architectures.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function EducationPage() {
  const [activeEvent, setActiveEvent] = useState<TimelineEvent>(timelineData[timelineData.length - 1]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className='overflow-x-hidden'
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-24 items-end">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
            My path of<br /> progress
          </motion.h1>
          <motion.p variants={itemVariants} className="max-w-sm text-zinc-500 text-sm md:text-base leading-relaxed">
            A personal journey through academic milestones and professional growth, focused on creating meaningful impact.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            variants={lineVariants}
            style={{ originX: 0 }}
            className="absolute top-21 left-0 w-full h-px bg-zinc-200 dark:bg-zinc-800 z-0 hidden md:block"
          />

          {/* Points Grid */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl">
            {timelineData.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                onClick={() => setActiveEvent(event)}
                className="flex md:flex-col items-center mb-6 md:mb-0 group cursor-pointer"
              >
                {/* Clickable Year Label */}
                <span className={cn(
                  "hidden md:block text-sm mb-8 transition-all duration-300 font-medium tracking-tight",
                  activeEvent.id === event.id
                    ? "text-brand translate-y-[-2px]"
                    : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200"
                )}>
                  {event.year}
                </span>

                {/* Dot Trigger Container */}
                <div className="relative p-4 flex items-center justify-center">
                  <div className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-500",
                    activeEvent.id === event.id
                      ? "bg-brand scale-125 shadow-[0_0_15px_rgba(var(--brand-rgb),0.5)]"
                      : "bg-zinc-300 dark:bg-zinc-800 group-hover:bg-zinc-400"
                  )} />

                  {activeEvent.id === event.id && (
                    <motion.div
                      layoutId="active-box"
                      className="absolute w-7 h-7 border border-brand/40 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                {/* Mobile Year Label */}
                <span className={cn(
                  "md:hidden ml-6 text-sm transition-colors",
                  activeEvent.id === event.id ? "text-brand font-bold" : "text-zinc-500"
                )}>
                  {event.year}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Content Area */}
          <motion.div variants={itemVariants} className="mt-12 md:mt-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="md:ml-[40%] max-w-lg"
              >
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mb-4">
                  {activeEvent.dateRange}
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">
                  {activeEvent.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed">
                  {activeEvent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}