import TextReveal from "@/components/ui/text-reveal";
import { TechStackSection } from "@/components/ui/techstack-section";

export default function AboutPage() {

  return (
    // 'bg-zinc-50' for light, 'dark:bg-black' for dark mode
    <main className="min-h-screen w-full flex items-center justify-center bg-zinc-50 dark:bg-black p-4 transition-colors">
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <TextReveal word="About Me" />
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur placeat rem sit reiciendis dolor quis laborum odit hic qui adipisci illo soluta cupiditate quae at quasi debitis, excepturi saepe porro!</h2>
        <TechStackSection />
      </div>
    </main>
  )
}
