import React from "react"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { Variants } from "framer-motion"

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.5,
    },
  },
};

export interface TechIcon {
  src: string
  alt: string
  darkModeInvert?: boolean
}

// Optimized list of 8 icons
const DEFAULT_TECH: TechIcon[] = [
  { alt: "React", src: "https://cdn.simpleicons.org/react/61DAFB" },
  { alt: "Next.js", src: "https://cdn.simpleicons.org/nextdotjs/000000", darkModeInvert: true },
  { alt: "Tailwind CSS", src: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { alt: "Shadcn UI", src: "https://cdn.simpleicons.org/shadcnui/000000", darkModeInvert: true },
  { alt: "Figma", src: "https://cdn.simpleicons.org/figma/F24E1E" },
  { alt: "WordPress", src: "https://cdn.simpleicons.org/wordpress/21759B" },
  { alt: "GitHub", src: "https://cdn.simpleicons.org/github/181717", darkModeInvert: true },
  { alt: "Netlify", src: "https://cdn.simpleicons.org/netlify/00C7B7" },
]

interface TechStackSectionProps {
  className?: string
}

export function TechStackSection({ className }: TechStackSectionProps) {
  return (
    <section className={`py-12 md:py-20 ${className ?? ""}`}>
      <div className="mx-auto max-w-3xl px-6">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.1,
                },
              },
            },
            item: itemVariants,
          }}
          className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-12 sm:grid-cols-4"
        >
          {DEFAULT_TECH.map((tech, index) => (
            <div key={index} className="group relative flex flex-col items-center justify-center">
              <img
                className={`h-10 w-auto object-contain transition-all duration-300 
                  grayscale hover:grayscale-0 hover:scale-110
                  ${tech.darkModeInvert ? "dark:invert dark:brightness-200" : ""}
                `}
                src={tech.src}
                alt={tech.alt}
                loading="lazy"
              />

              {/* Tooltip hint on hover */}
              <span className="pointer-events-none absolute -bottom-8 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 opacity-0 transition-all duration-300 group-hover:translate-y-[-4px] group-hover:opacity-100 dark:text-zinc-500">
                {tech.alt}
              </span>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}