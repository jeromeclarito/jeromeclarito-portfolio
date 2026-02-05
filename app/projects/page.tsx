import ProjectShowcase from "@/components/ui/project-showcase";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-zinc-50 dark:bg-black transition-colors relative z-10">
      <div className="w-full max-w-7xl mx-auto px-6 py-20 md:py-0">
        <ProjectShowcase />
      </div>
    </main>
  )
}