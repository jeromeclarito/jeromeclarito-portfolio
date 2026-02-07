'use client'
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Theme Sync
  useEffect(() => {
    const isLight = localStorage.getItem("theme") === "light";
    setIsDark(!isLight);
    if (!isLight) document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    // { label: "PROJECTS", href: "/projects" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "CONTACT", href: "/contact" },
  ];

  if (isDark === null) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="relative">
          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 relative z-[110] text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {/* Animated Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.3, ease: "circOut" }}
                className="absolute top-full left-0 w-[200px] md:w-[240px] mt-2 ml-4 p-4 rounded-lg shadow-2xl z-[100] border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black"
              >
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block text-lg md:text-xl font-bold tracking-tight py-1.5 px-2 transition-colors ${pathname === item.href ? "text-brand" : "text-foreground hover:text-brand"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="relative w-16 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800"
        >
          <motion.div
            animate={{ x: isDark ? 32 : 4 }}
            className="absolute top-1 w-6 h-6 rounded-full bg-black dark:bg-white"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
      </nav>
    </header>
  );
};