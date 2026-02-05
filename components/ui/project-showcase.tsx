'use client';

import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ExternalLink,
  Globe,
  Cpu,
  Layers,
  Layout,
  LucideIcon,
  Github,
  ShieldCheck,
  Zap,
  Smartphone,
  Code2,
  Component,
  Database,
  Palette,
  Search
} from 'lucide-react';

export type ProjectId = 'p1' | 'p2' | 'p3' | 'p4' | 'p5';

export interface ProjectMetric {
  label: string;
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

const PROJECT_DATA: Record<string, ProjectData> = {
  p1: {
    id: 'p1',
    label: 'Museums and Galleries Month',
    title: 'MGM',
    description: 'Built the frontend for the nationwide celebration of Filipino cultural heritage. Focused on creating a snappy, accessible interface that serves as a living space for learning and dialogue.',
    image: '/projects/mgm-logo.png',
    link: 'https://mgm.ncca.gov.ph/',
    colors: {
      gradient: 'from-red-600 to-red-900',
      glow: 'bg-red-500',
      ring: 'border-red-500/50',
      bar: 'bg-red-500',
    },
    stats: { role: 'Frontend Developer', completion: 100 },
    features: [
      { label: 'Next.js', icon: Code2 },
      { label: 'Tailwind CSS', icon: Palette },
      { label: 'Shadcn UI', icon: Component },
      { label: 'WCAG Accessible', icon: Layout },
    ],
  },
  p2: {
    id: 'p2',
    label: 'Education & Skills',
    title: 'RNIT (TESDA)',
    description: 'Designed and built the digital presence for Romblon National Institute of Technology. A long-term project focused on providing a clean, easy-to-navigate platform for technical education.',
    image: 'https://rnit-tesda.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRNIT-logo.3b4b8108.webp&w=128&q=75',
    link: 'https://rnit-tesda.org/',
    colors: {
      gradient: 'from-blue-700 to-blue-950',
      glow: 'bg-blue-600',
      ring: 'border-blue-600/50',
      bar: 'bg-blue-600',
    },
    stats: { role: 'Lead Developer', completion: 100 },
    features: [
      { label: 'Next.js', icon: Cpu },
      { label: 'Responsive Design', icon: Smartphone },
      { label: 'Shadcn UI', icon: Component },
      { label: 'SEO Optimized', icon: Search },
    ],
  },
  p3: {
    id: 'p3',
    label: 'Renewable Energy MVP',
    title: 'Origin Shift',
    description: 'Developed an MVP portal to survey and transition customers toward renewable energy. Balanced Material UI and Tailwind for rapid, functional prototyping in the Australia market.',
    image: '/projects/origin-energy.png',
    link: 'https://origin-mvp.netlify.app/',
    colors: {
      gradient: 'from-emerald-600 to-teal-900',
      glow: 'bg-emerald-500',
      ring: 'border-emerald-500/50',
      bar: 'bg-emerald-500',
    },
    stats: { role: 'Frontend Developer', completion: 100 },
    features: [
      { label: 'Next.js', icon: Zap },
      { label: 'Material UI', icon: Layers },
      { label: 'API Integration', icon: Database },
      { label: 'Secure Auth', icon: ShieldCheck },
    ],
  },
  p4: {
    id: 'p4',
    label: 'Finance & Accessibility',
    title: 'Australian Super',
    description: 'Built reusable frontend components for Australia’s largest super fund. My work focused on pixel-perfect responsiveness and strict WCAG 2.1 compliance for public-facing assets.',
    image: '/projects/ausuper.svg',
    link: 'https://www.australiansuper.com/',
    colors: {
      gradient: 'from-orange-600 to-red-900',
      glow: 'bg-orange-500',
      ring: 'border-orange-500/50',
      bar: 'bg-orange-500',
    },
    stats: { role: 'Web Developer', completion: 100 },
    features: [
      { label: 'WCAG 2.1', icon: Globe },
      { label: 'Reusable Library', icon: Component },
      { label: 'Brand Compliance', icon: ShieldCheck },
      { label: 'Mobile-First', icon: Smartphone },
    ],
  },
  p5: {
    id: 'p5',
    label: 'Headless Comparison',
    title: 'Canstar Australia',
    description: 'Enhanced the high-traffic Credit Card comparison engine using a Headless WordPress architecture. Implemented GraphQL and Angular to manage complex financial data efficiently.',
    image: 'https://cef.org.au/wp-content/uploads/2020/08/Canstar-logo.png',
    link: 'https://www.canstar.com.au/credit-cards/',
    colors: {
      gradient: 'from-blue-600 to-indigo-900',
      glow: 'bg-blue-500',
      ring: 'border-blue-500/50',
      bar: 'bg-blue-500',
    },
    stats: { role: 'Frontend Developer', completion: 100 },
    features: [
      { label: 'Headless WP', icon: Layout },
      { label: 'GraphQL', icon: Database },
      { label: 'Angular', icon: Code2 },
      { label: 'Performance', icon: Zap },
    ],
  },
};

// ... (Animations and Sub-components remain the same as your provided code) ...

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
    animate: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring' as const, stiffness: 100 } },
    exit: { opacity: 0, scale: 1.1, filter: 'blur(20px)' },
  } satisfies Variants,
};

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
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-950 px-4 py-2 rounded-full border border-zinc-200 dark:border-white/10 shadow-lg">
        <span className={`h-2 w-2 rounded-full ${data.colors.glow} animate-pulse`} />
        {data.stats.role}
      </div>
    </motion.div>
  </motion.div>
);

export default function ProjectShowcase() {
  const [activeId, setActiveId] = useState<ProjectId>('p1');
  const current = PROJECT_DATA[activeId];

  return (
    <div className="relative min-h-screen w-full text-zinc-900 dark:text-zinc-100 transition-colors duration-500 overflow-hidden flex flex-col items-center justify-center font-sans">
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
                  <motion.h1 variants={ANIMATIONS.item} className="text-4xl md:text-5xl font-black tracking-tighter mt-1 mb-4 bg-clip-text text-transparent bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500 dark:from-white dark:to-zinc-500">
                    {current.title}
                  </motion.h1>
                  <motion.p variants={ANIMATIONS.item} className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {current.description}
                  </motion.p>
                </div>

                <motion.div variants={ANIMATIONS.item} className="grid grid-cols-1 gap-4 p-6 rounded-3xl bg-white/40 dark:bg-zinc-900/40 border border-zinc-200 dark:border-white/5 backdrop-blur-md">
                  {current.features.map((f) => (
                    <div key={f.label} className="space-y-2">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                        <span className="flex items-center gap-2"><f.icon size={14} /> {f.label}</span>
                      </div>
                    </div>
                  ))}

                  <div className="pt-4 flex gap-4">
                    <a href={current.link} target="_blank" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-bold hover:scale-[1.02] transition-transform">
                      View Site <ExternalLink size={16} />
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </main>

      <div className="fixed bottom-8 inset-x-0 flex justify-center z-50">
        <nav className="flex items-center gap-1 p-1.5 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-zinc-200 dark:border-white/10 shadow-2xl">
          {(Object.keys(PROJECT_DATA) as ProjectId[]).map((id) => (
            <button
              key={id}
              onClick={() => setActiveId(id)}
              className={`relative px-4 py-2 rounded-full text-[10px] font-bold transition-colors ${activeId === id ? 'text-zinc-900 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'}`}
            >
              {activeId === id && (
                <motion.div layoutId="active-pill" className="absolute inset-0 bg-zinc-100 dark:bg-white/10 rounded-full" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />
              )}
              <p className="relative z-10 md:text-sm">{PROJECT_DATA[id].title}</p>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}