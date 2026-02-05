'use client';

import { motion, Variants } from "framer-motion";
import TextReveal from "@/components/ui/text-reveal";
import { TechStackSection } from "@/components/ui/techstack-section";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-50 dark:bg-black transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 pt-20 pb-12">

        <div className="mb-12">
          <TextReveal word="About Me" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          {/* Left Column: Main Narrative */}
          {/* <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Crafting modern web experiences with <span className="text-brand">Next.js</span> and <span className="text-brand">Scalable CMS</span> architectures.
            </h2>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              With over <strong>6 years of experience</strong> delivering high-performance digital solutions for prominent Australian brands, I specialize in bridging the gap between robust backend structures and elite user interfaces.
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              While my foundation is built on deep <strong>WordPress</strong> expertise, specifically Headless and Component-based architectures, my recent focus is centered on the <strong>Next.js, Tailwind CSS, and Shadcn UI</strong> stack. This allows me to build fast, type-safe, and highly accessible applications that meet modern financial and enterprise standards.
            </p>
          </motion.div> */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              Building <span className="text-brand">responsive</span> components that work for everyone.
            </h2>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I’ve spent the last <strong>6 years</strong> working with Australian brands, turning designs into clean, functional code. My main focus is on building components that are fully responsive and meet <strong>WCAG accessibility standards</strong>, making sure the web stays usable for everyone.
            </p>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I have a solid background in <strong>WordPress</strong> and headless setups, but these days I do most of my work using <strong>Next.js, Tailwind CSS, and Shadcn UI</strong>. I prefer these tools because they help me build fast, reliable interfaces that are easy to maintain and scale.
            </p>
          </motion.div>

          {/* Right Column: Stats & Focus */}
          <motion.div
            variants={itemVariants}
            className="bg-zinc-100/50 dark:bg-zinc-900/50 p-8 rounded-3xl border border-zinc-200 dark:border-white/5 backdrop-blur-sm"
          >
            {/* Quick Stats Section */}
            <div className="mb-10">
              <h3 className="text-brand font-bold uppercase tracking-widest text-xs mb-6">Quick Stats</h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  <span className="text-zinc-500">Experience</span>
                  <span className="font-mono text-zinc-900 dark:text-white">6+ Years</span>
                </li>
                <li className="flex justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  <span className="text-zinc-500">Education</span>
                  <span className="font-mono text-zinc-900 dark:text-white">Master in Information Technology</span>
                </li>
                <li className="flex justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
                  <span className="text-zinc-500">Location</span>
                  <span className="font-mono text-zinc-900 dark:text-white">Philippines</span>
                </li>
              </ul>
            </div>

            {/* Professional Focus Section */}
            <h3 className="text-brand font-bold uppercase tracking-widest text-xs mb-6">Professional Focus</h3>
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block mb-3">Primary Stack</span>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Tailwind', 'Shadcn UI', 'TypeScript'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white dark:bg-zinc-800 text-[11px] font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tech Stack Footer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <TechStackSection />
        </motion.div>
      </div>
    </main>
  );
}