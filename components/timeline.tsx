'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from "@/lib/utils";

interface TimelineEvent {
  id: number;
  year: string; // The single year shown on the timeline
  dateRange: string; // Detailed range shown in the content
  title: string;
  description: string;
}

const timelineData: TimelineEvent[] = [
  {
    id: 1,
    year: "2018",
    dateRange: "March 2018",
    title: "Bachelor of Science in Computer Science",
    description:
      "Graduated with a Bachelor of Science in Computer Science, building a strong foundation in software engineering, algorithms, data structures, and modern web development practices.",
  },
  {
    id: 2,
    year: "2019",
    dateRange: "2018 - 2020",
    title: "August99 / Canstar Australia",
    description:
      "Worked with August99 to enhance Canstar Australia’s Credit Card pages, developing and maintaining features using WordPress, GraphQL, and Angular, with a focus on performance, scalability, and component-based architecture.",
  },
  {
    id: 3,
    year: "2022",
    dateRange: "2020 - 2022",
    title: "Master in Information Technology & IBM Learning",
    description:
      "Joined IBM and contributed to maintaining the IBM Learning platform, improving accessibility and performance, and migrating components from Drupal to React, while later completing a Master’s degree in Information Technology.",
  },
  {
    id: 4,
    year: "2026", // Future placeholder
    dateRange: "2022 - PRESENT",
    title: "Web Consultant",
    description:
      "Delivering tailored web solutions for Australian clients, specializing in modern front-end frameworks, scalable architectures, and accessible, user-focused digital experiences.",
  },

];

export default function EducationPage() {
  const [activeEvent, setActiveEvent] = useState<TimelineEvent>(timelineData[timelineData.length - 1]);

  return (
    <div className='lg:pt-36 py-24 px-6 md:px-12 lg:px-24 overflow-x-hidden '>
      <div className="max-w-7xl mx-auto">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 md:mb-24 items-end">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
            My path of<br /> progress
          </h1>
          <p className="max-w-sm text-zinc-500 text-sm md:text-base leading-relaxed">
            A personal journey through academic milestones and professional growth, focused on creating meaningful impact with modern web technologies.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">

          {/* Main Axis Line - Uses a gradient to "fade" into the future without scrolling */}
          <div className="absolute top-21 left-0 w-full h-px bg-zinc-200 dark:bg-zinc-800 z-0 hidden md:block" />
          <div className="absolute top-21 right-0 w-1/4 h-px bg-gradient-to-r from-zinc-200 dark:from-zinc-800 to-transparent z-0 hidden md:block" />

          {/* Points Grid */}
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl">
            {timelineData.map((event) => (
              <div key={event.id} className="flex md:flex-col items-center mb-6 md:mb-0 group">

                {/* Simplified Year Label */}
                <span className={cn(
                  "hidden md:block text-sm font-mono mb-8 transition-colors",
                  activeEvent.id === event.id ? "text-brand" : "text-zinc-400"
                )}>
                  {event.year}
                </span>

                {/* Dot Trigger */}
                <button
                  onClick={() => setActiveEvent(event)}
                  className="relative p-4 outline-none flex items-center justify-center"
                >
                  <div className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    activeEvent.id === event.id ? "bg-brand scale-125" : "bg-zinc-300 dark:bg-zinc-800"
                  )} />

                  {activeEvent.id === event.id && (
                    <motion.div
                      layoutId="active-box"
                      className="absolute w-6 h-6 border border-brand/50 rounded-sm"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>

                <span className="md:hidden ml-6 text-sm font-mono text-zinc-500">{event.year}</span>
              </div>
            ))}

            {/* "Future" Dot (Non-clickable) */}
            <div className="hidden md:flex flex-col items-center opacity-30">
              <span className="text-sm font-mono mb-8 text-zinc-400">20XX</span>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            </div>
          </div>

          {/* Content Area */}
          <div className="mt-6 md:mt-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeEvent.id}
                initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(10px)" }}
                transition={{ duration: 0.4 }}
                className="md:ml-[40%] max-w-lg"
              >
                <div className="text-xs font-bold font-mono text-zinc-400 uppercase tracking-widest mb-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}