import ProjectShowcase from "@/components/ui/project-showcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Jerome Clarito Portfolio",
  description:
    "A showcase of high-impact projects including work for AustralianSuper, Canstar, and the NCCA. Specializing in Headless CMS, GraphQL, and accessible UI.",
  keywords: [
    "AustralianSuper Frontend Project",
    "Canstar Headless WordPress",
    "Origin Energy MVP",
    "NCCA MGM Project",
    "React Portfolio",
    "GraphQL Web Development",
  ],
  openGraph: {
    title: "Projects | Jerome Clarito Portfolio",
    description: "From finance engines to cultural heritage sites: a showcase of digital excellence.",
    url: "https://jeromeeeee.com/projects",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jerome Clarito Projects Showcase" }],
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-zinc-50 dark:bg-black transition-colors relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6 py-20 md:py-0">
        <ProjectShowcase />
      </div>
    </main>
  )
}