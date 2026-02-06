import { HeroSection } from "@/components/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jerome Clarito | Web Consultant",
  description:
    "Turning designs into clean, accessible code. 6+ years experience consulting for major Australian brands like AustralianSuper and Canstar.",
  keywords: [
    "Web Consultant for Australian Brands",
    "Senior Frontend Engineer",
    "WCAG 2.1 Compliance Expert",
    "Headless WordPress Next.js",
  ],
  openGraph: {
    title: "Jerome Clarito | Web Consultant",
    description: "Crafting modern, accessible web experiences for global brands.",
    url: "https://jeromeeeee.com",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Jerome Clarito Portfolio Home" }],
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
    </div>
  );
}