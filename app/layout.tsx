import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Jerome Clarito",
  description: "Portfolio and projects by Jerome Clarito, focused on modern web development and clean UI experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=Fira+Code:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased max-w-screen-2xl mx-auto dark:bg-black bg-zinc-50 transition-colors">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
