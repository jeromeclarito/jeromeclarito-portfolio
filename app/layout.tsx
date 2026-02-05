import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";

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
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
        />
      </head>
      <body className="font-sans antialiased max-w-screen-2xl mx-auto dark:bg-black bg-zinc-50 transition-colors">
        <Header />
        {children}
      </body>
    </html>
  );
}
