import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  currentSection: number;
  totalSections: number;
  onNavigate: (index: number) => void;
  sectionNames: string[];
}

const Navigation = ({
  currentSection,
  totalSections,
  onNavigate,
  sectionNames,
}: NavigationProps) => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <>
      {/* Top navigation bar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.a
            href="#"
            className="text-xl md:text-2xl font-display font-bold"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              onNavigate(0);
            }}
          >
            <span className="text-gradient">J</span>
            <span>-m</span>
          </motion.a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {sectionNames.map((name, index) => (
              <button
                key={name}
                onClick={() => onNavigate(index)}
                className={`text-sm font-medium transition-colors relative ${
                  currentSection === index
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {name}
                {currentSection === index && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full border-border"
            >
              {isDark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="lg:hidden rounded-full border-border"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-card border-l border-border p-6 flex flex-col"
            >
              <Button
                variant="ghost"
                size="icon"
                className="self-end mb-8"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="flex flex-col gap-4">
                {sectionNames.map((name, index) => (
                  <button
                    key={name}
                    onClick={() => {
                      onNavigate(index);
                      setIsMenuOpen(false);
                    }}
                    className={`text-lg font-medium text-left py-2 transition-colors ${
                      currentSection === index
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Side navigation dots */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3"
      >
        {Array.from({ length: totalSections }).map((_, index) => (
          <button
            key={index}
            onClick={() => onNavigate(index)}
            className={`nav-dot ${currentSection === index ? "active" : ""}`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </motion.div>
    </>
  );
};

export default Navigation;
