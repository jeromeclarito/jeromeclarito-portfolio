'use client';

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, Send, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactLinks = [
    { label: "Email", value: "jeromeclarito25@gmail.com", href: "mailto:jeromeclarito25@gmail.com" },
    { label: "GitHub", value: "github.com/jeromeclarito", href: "https://github.com/jeromeclarito" },
  ];

  // Netlify AJAX submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Hard-coding the form-name ensures it is correctly sent as "contact"
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      body.append(key, value.toString());
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        console.error("Netlify error status:", response.status);
        throw new Error("Failed to submit to Netlify");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please check your connection or try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:mb-24 items-end">
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
          Let&apos;s build <span className="text-brand">together.</span>
        </motion.h1>
        <motion.p variants={itemVariants} className="max-w-sm text-zinc-500 text-sm md:text-base leading-relaxed">
          Currently available for remote opportunities and specialized web consulting for Australian-based projects.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Left Column */}
        <div className="md:col-span-7">
          <motion.div variants={itemVariants} className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  method="POST"
                  action="/"
                  onSubmit={handleSubmit}
                  name="jeromecontact"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  className="space-y-6"
                >
                  {/* CRITICAL: hidden input for Netlify form-name */}
                  <input type="hidden" name="form-name" value="jeromecontact" />

                  {/* Honeypot field - autoComplete off prevents browser-triggered spam */}
                  <p className="hidden">
                    <label>
                      Don’t fill this out if you’re human:
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-400 ml-1">Name</label>
                      <Input
                        name="name"
                        required
                        placeholder="John Doe"
                        autoComplete="name"
                        className="bg-transparent border-zinc-200 dark:border-zinc-800 focus:border-blue-600 rounded-xl h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-400 ml-1">Email</label>
                      <Input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        autoComplete="email"
                        className="bg-transparent border-zinc-200 dark:border-zinc-800 focus:border-blue-600 rounded-xl h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 ml-1">Message</label>
                    <Textarea
                      name="message"
                      required
                      placeholder="How can I help you?"
                      className="bg-transparent border-zinc-200 dark:border-zinc-800 focus:border-blue-600 rounded-2xl min-h-[150px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 h-12 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black hover:scale-[1.02] transition-transform flex gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-12 border border-zinc-100 dark:border-zinc-900 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/20 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2">Message Sent!</h3>
                  <p className="text-zinc-500 max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                  <Button
                    variant="ghost"
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-xs uppercase tracking-widest text-zinc-400 hover:text-brand"
                  >
                    Send another message
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Social Links */}
          <div className="space-y-8 pt-8 border-t border-zinc-100 dark:border-zinc-900">
            {contactLinks.map((link) => (
              <motion.div key={link.label} variants={itemVariants}>
                <Link
                  href={link.href}
                  target="_blank"
                  className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-6 hover:border-blue-600 transition-colors group"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 group-hover:text-brand transition-colors">
                      {link.label}
                    </span>
                    <h2 className="text-xl font-medium tracking-tight italic">{link.value}</h2>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-zinc-300 group-hover:text-brand transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Location Card */}
        <motion.div
          variants={itemVariants}
          className="md:col-span-5 flex flex-col justify-start md:pl-12"
        >
          <div className="p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm sticky top-24">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-brand" />
                  <span className="text-xs uppercase tracking-widest text-zinc-400">Current Location</span>
                </div>
                <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Manila, Philippines</p>
                <p className="text-sm text-zinc-500 mt-1">Working remotely globally</p>
              </div>
              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest text-zinc-400">Availability</span>
                </div>
                <p className="text-sm text-zinc-500">Typically active during AEST/AEDT and PHT business hours.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}