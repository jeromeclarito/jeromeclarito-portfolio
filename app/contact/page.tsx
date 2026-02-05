'use client';

import { motion, Variants } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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

export default function ContactPage() {
  const contactLinks = [
    {
      label: "Email",
      value: "jeromeclarito25@gmail.com",
      href: "mailto:jeromeclarito25@gmail.com",
      icon: <Mail className="w-5 h-5" />,
    },
    {
      label: "GitHub",
      value: "github.com/jeromeclarito",
      href: "https://github.com/jeromeclarito",
      icon: <Github className="w-5 h-5" />,
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 py-24 px-6 md:px-12 lg:px-24 transition-colors grid items-center">
      <div className="max-w-7xl mx-auto">

        {/* Header Section - Same spacing as Education/About */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 items-end"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
            Let&apos;s build <span className="text-brand">together.</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="max-w-xl text-zinc-500 text-sm md:text-base leading-relaxed md:pl-24">
            Currently available for remote opportunities and specialized web
            consulting for Australian-based projects.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

          {/* Left: Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-7 space-y-12"
          >
            {contactLinks.map((link) => (
              <motion.div key={link.label} variants={itemVariants} className="group">
                <Link
                  href={link.href}
                  target="_blank"
                  className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-8 hover:border-brand transition-colors group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400 group-hover:text-brand transition-colors">
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
          </motion.div>

          {/* Right: Location & Availability Status */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="md:col-span-5 flex flex-col justify-start md:pl-12"
          >
            <div className="p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm">
              <div className="space-y-8">
                {/* Location Status */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-brand" />
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Current Location</span>
                  </div>
                  <p className="text-lg font-medium">Manila, Philippines</p>
                  <p className="text-sm text-zinc-500 mt-1">Working remotely globally</p>
                </div>

                {/* Local Time Zone indicator (Optional but Pro) */}
                <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Availability</span>
                  </div>
                  <p className="text-sm text-zinc-500">
                    Typically active during AEST/AEDT and PHT business hours.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}