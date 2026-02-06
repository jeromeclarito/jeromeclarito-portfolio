import EducationTimeline from "@/components/timeline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Jerome Clarito - Web Consultant & Software Engineer",
  description:
    "A timeline of my professional journey, from studying Computer Science to consulting for Australian clients and working with global brands like IBM and Canstar.",
  keywords: [
    "Jerome Clarito",
    "Web Consultant Australia",
    "Software Engineer Philippines",
    "React Developer",
    "Full Stack Developer Portfolio",
    "IBM Learning Experience",
    "Next.js Developer"
  ],
  openGraph: {
    title: "Experience | Jerome Clarito",
    description: "Exploring the path of progress: Academic milestones and professional growth in web development.",
    type: "website",
    url: "https://jeromeeeee.com/experience",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jerome Clarito Professional Experience Timeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerome Clarito | Professional Experience",
    description: "My career journey through software engineering and web consulting.",
  },
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen w-full bg-zinc-50 dark:bg-black transition-colors">
      <EducationTimeline />
    </main>
  );
}