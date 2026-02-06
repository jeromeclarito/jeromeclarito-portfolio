
import AboutMe from "@/components/about-me";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Jerome Clarito - Web Consultant",
  description:
    "With 6+ years of experience building for Australian brands, I specialize in responsive, WCAG-accessible components using Next.js, Tailwind CSS, and Shadcn UI.",
  keywords: [
    "Jerome Clarito",
    "Web Consultant Philippines",
    "WCAG Accessibility Expert",
    "Next.js Developer Australia",
    "Tailwind CSS Specialist",
    "Master in Information Technology",
  ],
  openGraph: {
    title: "About Jerome Clarito | Web Consultant",
    description: "Building responsive, accessible components that work for everyone. Explore my journey and tech stack.",
    url: "https://jeromeeeee.com/about",
    images: [{ url: "/og-about.png", width: 1200, height: 630, alt: "About Jerome Clarito" }],
  },
};


export default function AboutPage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-zinc-50 dark:bg-black transition-colors">
      <AboutMe />
    </main>
  );
}