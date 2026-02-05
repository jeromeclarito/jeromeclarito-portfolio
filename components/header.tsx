'use client'
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import this to detect current route

export const Header = () => {
  const pathname = usePathname(); // Get the current path (e.g., "/about")
  const [isDark, setIsDark] = useState<boolean | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldBeDark = savedTheme === "light" ? false : true;
    setIsDark(shouldBeDark);
    if (shouldBeDark) document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PROJECTS", href: "/projects" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "EDUCATION", href: "/education" },
    { label: "CONTACT", href: "/contact" },
  ];

  if (isDark === null) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6">
      <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 transition-colors duration-300 z-50 text-neutral-500 hover:text-black dark:hover:text-white"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>

          {isMenuOpen && (
            <div
              ref={menuRef}
              className="absolute top-full left-0 w-[200px] md:w-[240px] shadow-2xl mt-2 ml-4 p-4 rounded-lg z-[100] border border-neutral-200 dark:border-neutral-800"
              style={{ backgroundColor: isDark ? "#000" : "#fafafa" }}
            >
              {menuItems.map((item) => {
                // Check if this item is the current page
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block text-lg md:text-xl font-bold tracking-tight py-1.5 px-2 transition-all duration-300"
                    style={{
                      // Priority color: Active Page (#e49514) > Theme Color (White/Black)
                      color: isActive ? "#e49514" : (isDark ? "#fff" : "#1a1a1a"),
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="relative w-16 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800"
        >
          <div
            className="absolute top-1 left-1 w-6 h-6 rounded-full bg-black dark:bg-white transition-transform duration-300"
            style={{ transform: isDark ? "translateX(2rem)" : "translateX(0)" }}
          />
        </button>
      </nav>
    </header>
  );
};