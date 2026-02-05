'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  Code2,
  ExternalLink,
  ChevronRight,
  Globe,
  Cpu,
  Layers,
  Layout,
  LucideIcon,
  Github,
} from 'lucide-react';

// =========================================
// 1. CONFIGURATION & DATA TYPES
// =========================================

export type ProjectId = 'p1' | 'p2' | 'p3' | 'p4' | 'p5';

export interface ProjectMetric {
  label: string;
  value: number; // 0-100
  icon: LucideIcon;
}

export interface ProjectData {
  id: ProjectId;
  label: string;
  title: string;
  description: string;
  image: string;
  link: string;
  colors: {
    gradient: string;
    glow: string;
    ring: string;
    bar: string;
  };
  stats: {
    role: string;
    completion: number;
  };
  features: ProjectMetric[];
}

const PROJECT_DATA: Record<ProjectId, ProjectData> = {
  p1: {
    id: 'p1',
    label: 'Project 1',
    title: 'Nexus Dashboard',
    description: 'A high-performance analytics platform built with Next.js and Tailwind, featuring real-time data streaming and custom charting engines.',
    image: 'https://illustrations.popsy.co/white/abstract-art-4.svg',
    link: 'https://example.com/nexus',
    colors: {
      gradient: 'from-blue-600 to-indigo-900',
      glow: 'bg-blue-500',
      ring: 'border-blue-500/50',
      bar: 'bg-blue-500',
    },
    stats: { role: 'Lead Frontend', completion: 100 },
    features: [
      { label: 'Performance', value: 98, icon: Cpu },
      { label: 'UX Design', value: 92, icon: Layout },
    ],
  },
  p2: {
    id: 'p2',
    label: 'Project 2',
    title: 'EcoSphere App',
    description: 'A mobile-first environmental tracking application utilizing geo-location and machine learning to identify local flora.',
    image: 'https://illustrations.popsy.co/white/abstract-art-1.svg',
    link: 'https://example.com/eco',
    colors: {
      gradient: 'from-emerald-600 to-teal-900',
      glow: 'bg-emerald-500',
      ring: 'border-emerald-500/50',
      bar: 'bg-emerald-500',
    },
    stats: { role: 'Full Stack', completion: 85 },
    features: [
      { label: 'API Latency', value: 14, icon: Globe },
      { label: 'Architecture', value: 95, icon: Layers },
    ],
  },
  p3: {
    id: 'p3',
    label: 'Project 3',
    title: 'Nova E-Commerce',
    description: 'Modern headless commerce solution with Stripe integration and a custom-built inventory management system.',
    image: 'https://illustrations.popsy.co/white/abstract-art-3.svg',
    link: 'https://example.com/nova',
    colors: {
      gradient: 'from-purple-600 to-fuchsia-900',
      glow: 'bg-purple-500',
      ring: 'border-purple-500/50',
      bar: 'bg-purple-500',
    },
    stats: { role: 'Backend Dev', completion: 90 },
    features: [
      { label: 'Security', value: 99, icon: Code2 },
      { label: 'SEO Score', value: 88, icon: Globe },
    ],
  },
  p4: {
    id: 'p4',
    label: 'Project 4',
    title: 'Vanguard CRM',
    description: 'Enterprise-grade customer relationship manager focused on accessibility and high-speed data entry for sales teams.',
    image: 'https://illustrations.popsy.co/white/abstract-art-2.svg',
    link: 'https://example.com/vanguard',
    colors: {
      gradient: 'from-orange-600 to-red-900',
      glow: 'bg-orange-500',
      ring: 'border-orange-500/50',
      bar: 'bg-orange-500',
    },
    stats: { role: 'UI Engineer', completion: 75 },
    features: [
      { label: 'Accessibility', value: 100, icon: Layout },
      { label: 'Database', value: 82, icon: Layers },
    ],
  },
  p5: {
    id: 'p5',
    label: 'Project 5',
    title: 'Zenith Portal',
    description: 'A collaborative workspace for remote teams, integrating video conferencing and real-time document editing.',
    image: 'https://illustrations.popsy.co/white/digital-nomad.svg',
    link: 'https://example.com/zenith',
    colors: {
      gradient: 'from-pink-600 to-rose-900',
      glow: 'bg-pink-500',
      ring: 'border-pink-500/50',
      bar: 'bg-pink-500',
    },
    stats: { role: 'Product Lead', completion: 60 },
    features: [
      { label: 'Sync Rate', value: 94, icon: Cpu },
      { label: 'Deployment', value: 100, icon: Globe },
    ],
  },
};

// =========================================
// 2. ANIMATIONS
// =========================================

const ANIMATIONS = {
  container: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  image: {
    initial: { opacity: 0, scale: 0.8, rotate: -5 },
    animate: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 100 } },
    exit: { opacity: 0, scale: 1.1, filter: 'blur(20px)' },
  },
};

// =========================================
// 3. SUB-COMPONENTS
// =========================================

const BackgroundGradient = ({ color }: { color: string }) => (
  <div className="fixed inset-0 pointer-events-none">
    <motion.div
      animate={{
        background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
      }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 opacity-20 dark:opacity-30"
    />
  </div>
);

const ProjectVisual = ({ data }: { data: ProjectData }) => (
  <motion.div layout className="relative group shrink-0">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      className={`absolute inset-[-15%] rounded-[4rem] border border-dashed border-zinc-500/20 ${data.colors.ring}`}
    />

    <div className="relative h-72 w-72 md:h-[400px] md:w-[400px] rounded-3xl border border-zinc-200/50 dark:border-white/5 shadow-2xl flex items-center justify-center overflow-hidden bg-white/50 dark:bg-zinc-900/20 backdrop-blur-xl">
      <AnimatePresence mode="wait">
        <motion.img
          key={data.id}
          src={data.image}
          alt={data.title}
          variants={ANIMATIONS.image}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-2/3 h-2/3 object-contain drop-shadow-2xl"
        />
      </AnimatePresence>
    </div>

    <motion.div layout className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-950 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 shadow-lg">
        <span className={`h-2 w-2 rounded-full ${data.colors.glow} animate-pulse`} />
        {data.stats.role}
      </div>
    </motion.div>
  </motion.div>
);

// =========================================
// 4. MAIN COMPONENT
// =========================================

export default function ProjectShowcase() {
  const [activeId, setActiveId] = useState<ProjectId>('p1');
  const current = PROJECT_DATA[activeId];

  return (
    <div className="relative min-h-screen w-full  text-zinc-900 dark:text-zinc-100 transition-colors duration-500 overflow-hidden flex flex-col items-center justify-center font-sans">

      <BackgroundGradient color={current.colors.glow.replace('bg-', 'rgb(')} />

      <main className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">

          <ProjectVisual data={current} />

          <motion.div layout className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                variants={ANIMATIONS.container}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <div>
                  <motion.span variants={ANIMATIONS.item} className="text-xs font-black uppercase tracking-widest text-zinc-500">
                    {current.label}
                  </motion.span>
                  <motion.h1 variants={ANIMATIONS.item} className="text-4xl md:text-6xl font-black tracking-tighter mt-1 mb-4 bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-500">
                    {current.title}
                  </motion.h1>
                  <motion.p variants={ANIMATIONS.item} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {current.description}
                  </motion.p>
                </div>

                <motion.div variants={ANIMATIONS.item} className="grid grid-cols-1 gap-4 p-6 rounded-3xl bg-white/40 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-md">
                  {current.features.map((f) => (
                    <div key={f.label} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-2"><f.icon size={14} /> {f.label}</span>
                        <span className="text-zinc-500">{f.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${f.value}%` }}
                          className={`h-full ${current.colors.bar}`}
                        />
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 flex gap-4">
                    <a href={current.link} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:scale-[1.02] transition-transform">
                      Live Preview <ExternalLink size={16} />
                    </a>
                    <button className="p-3 rounded-xl border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors">
                      <Github size={20} />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      {/* Navigation Switcher */}
      <div className="fixed bottom-8 inset-x-0 flex justify-center z-50">
        <nav className="flex items-center gap-1 p-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-zinc-200 dark:border-white/10 shadow-2xl">
          {(Object.keys(PROJECT_DATA) as ProjectId[]).map((id) => (
            <button
              key={id}
              onClick={() => setActiveId(id)}
              className={`relative px-4 py-2 rounded-full text-xs font-bold transition-colors ${activeId === id ? 'text-zinc-900 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                }`}
            >
              {activeId === id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-zinc-100 dark:bg-white/10 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{PROJECT_DATA[id].label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}