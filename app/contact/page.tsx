import ContactMe from "@/components/contact-me";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Work with Jerome Clarito",
  description:
    "Available for remote opportunities and specialized web consulting for Australian-based projects. Get in touch via email or GitHub.",
  keywords: [
    "Hire Web Consultant Australia",
    "Remote Software Engineer Philippines",
    "Next.js Consultant for Hire",
    "Jerome Clarito Contact",
  ],
  openGraph: {
    title: "Let's Build Together | Contact Jerome Clarito",
    description: "Currently available for remote opportunities and Australian-based consulting projects.",
    url: "https://jeromeeeee.com/contact",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Contact Jerome Clarito" }],
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 py-24 px-6 md:px-12 lg:px-24 transition-colors flex justify-start">
      <ContactMe />
    </main>
  )
}