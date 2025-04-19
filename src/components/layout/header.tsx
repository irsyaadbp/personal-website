import { useState, useEffect, useRef } from "react";

import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";

const Header = ({ activePath = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const mainNavItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Discussion", path: "/discussion" },
  ];

  function checkActiveMenu(menuPath: string) {
    if (menuPath === "/") {
      return menuPath === "/" && activePath === "/";
    }

    return (activePath || "").startsWith(menuPath);
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between md:justify-center items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 text-zinc-600 dark:text-zinc-400"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-4 py-2 border border-zinc-200 dark:border-zinc-800">
            {/* Logo */}
            <a
              href="/"
              className="text-lg font-medium text-zinc-800 dark:text-zinc-200 font-sans"
            >
              Ir
            </a>

            {/* Divider */}
            <div className="h-5 w-px bg-zinc-300 dark:bg-zinc-700 mx-2"></div>

            {mainNavItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors font-sans",
                  checkActiveMenu(item.path)
                    ? "text-lime-500 dark:text-primary"
                    : "text-zinc-500 hover:text-lime-500 dark:text-zinc-500 dark:hover:text-primary"
                )}
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </nav>

          {/* Mobile Logo (centered) */}
          <div className="md:hidden flex items-center">
            <a
              href="/"
              className="text-lg font-medium text-zinc-800 dark:text-zinc-200 font-sans"
            >
              Ir
            </a>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="md:hidden p-2 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden mt-4 rounded-lg bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-lg overflow-hidden"
          >
            <div className="p-2">
              {mainNavItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-md text-sm font-medium transition-colors font-sans",
                    checkActiveMenu(item.path)
                      ? "text-lime-500 dark:text-primary bg-zinc-100 dark:bg-zinc-800"
                      : "text-zinc-500 hover:text-lime-500 dark:text-zinc-500 dark:hover:text-primary hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
