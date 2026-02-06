'use client';

import { motion, Variants } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  },
};

export default function ContactMe() {
  const contactLinks = [
    {
      label: "Email",
      value: "jeromeclarito25@gmail.com",
      href: "mailto:jeromeclarito25@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/jeromeclarito",
      href: "https://github.com/jeromeclarito",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 py-24 px-6 md:px-12 lg:px-24 transition-colors grid items-center">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-end">
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
            Let&apos;s build <span className="text-brand">together.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="max-w-xl text-zinc-500 text-sm md:text-base leading-relaxed md:pl-24">
            Currently available for remote opportunities and specialized web
            consulting for Australian-based projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7 space-y-12">
            {contactLinks.map((link) => (
              <motion.div key={link.label} variants={itemVariants}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-8 hover:border-brand transition-colors group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 group-hover:text-brand transition-colors">
                      {link.label}
                    </span>
                    <h2 className="text-xl md:text-2xl font-medium tracking-tight">
                      {link.value}
                    </h2>
                  </div>
                  <div className="p-3 rounded-full bg-zinc-50 dark:bg-zinc-900 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="md:col-span-5 flex flex-col justify-start md:pl-12"
          >
            <div className="p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-brand" />
                    <span className="text-xs uppercase tracking-widest text-zinc-400">Current Location</span>
                  </div>
                  <p className="text-lg font-medium">Manila, Philippines</p>
                  <p className="text-sm text-zinc-500 mt-1">Working remotely globally</p>
                </div>

                <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs uppercase tracking-widest text-zinc-400">Availability</span>
                  </div>
                  <p className="text-sm text-zinc-500">
                    Typically active during AEST/AEDT and PHT business hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}