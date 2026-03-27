import { useState, useEffect, useRef, useCallback, useMemo, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";

// Lazy load sections
const HeroSection = lazy(() => import("@/components/sections/HeroSection"));
const AboutSection = lazy(() => import("@/components/sections/AboutSection"));
const ExperienceSection = lazy(() => import("@/components/sections/ExperienceSection"));
const SkillsSection = lazy(() => import("@/components/sections/SkillsSection"));
const ProjectsSection = lazy(() => import("@/components/sections/ProjectsSection"));
const ContactSection = lazy(() => import("@/components/sections/ContactSection"));

const SectionFallback = () => (
  <div className="h-full w-full flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const sections = [
  { name: "Accueil", component: HeroSection },
  { name: "À propos", component: AboutSection },
  { name: "Parcours", component: ExperienceSection },
  { name: "Compétences", component: SkillsSection },
  { name: "Projets", component: ProjectsSection },
  { name: "Contact", component: ContactSection },
];

const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const lastRan = useRef(Date.now());
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback((...args: any[]) => {
    const handler = () => {
      if (Date.now() - lastRan.current >= delay) {
        callback(...args);
        lastRan.current = Date.now();
      } else {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          callback(...args);
          lastRan.current = Date.now();
        }, delay - (Date.now() - lastRan.current));
      }
    };
    handler();
  }, [callback, delay]);
};

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    };
  }, []);

  const navigateToSection = useCallback(
    (index: number) => {
      if (isAnimating || index === currentSection) return;
      if (index < 0 || index >= sections.length) return;

      setIsAnimating(true);
      setCurrentSection(index);

      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);
      }, 900);
    },
    [currentSection, isAnimating]
  );

  const throttledNavigate = useThrottle(navigateToSection, 600);

  useEffect(() => {
    if (isLoading) return;
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;
      if (Math.abs(e.deltaY) > 50) {
        const direction = e.deltaY > 0 ? 1 : -1;
        const newIndex = currentSection + direction;
        if (newIndex >= 0 && newIndex < sections.length) throttledNavigate(newIndex);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, isAnimating, throttledNavigate, isLoading]);

  useEffect(() => {
    if (isLoading) return;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartRef.current || isAnimating) return;
      const deltaX = touchStartRef.current.x - e.changedTouches[0].clientX;
      const deltaY = touchStartRef.current.y - e.changedTouches[0].clientY;
      const threshold = 50;
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > threshold) {
        const newIndex = currentSection + (deltaY > 0 ? 1 : -1);
        if (newIndex >= 0 && newIndex < sections.length) throttledNavigate(newIndex);
      } else if (Math.abs(deltaX) > threshold) {
        const newIndex = currentSection + (deltaX > 0 ? 1 : -1);
        if (newIndex >= 0 && newIndex < sections.length) throttledNavigate(newIndex);
      }
      touchStartRef.current = null;
    };
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSection, isAnimating, throttledNavigate, isLoading]);

  useEffect(() => {
    if (isLoading) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAnimating) return;
      let direction = 0;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") direction = 1;
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") direction = -1;
      if (direction !== 0) {
        const newIndex = currentSection + direction;
        if (newIndex >= 0 && newIndex < sections.length) throttledNavigate(newIndex);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSection, isAnimating, throttledNavigate, isLoading]);

  const sectionVariants = useMemo(() => ({
    enter: (direction: number) => ({
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      y: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
    }),
  }), []);

  const CurrentSectionComponent = useMemo(() => sections[currentSection].component, [currentSection]);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div ref={containerRef} className="h-screen w-screen overflow-hidden bg-background">
      <Navigation
        currentSection={currentSection}
        totalSections={sections.length}
        onNavigate={navigateToSection}
        sectionNames={sections.map((s) => s.name)}
      />

      <AnimatePresence mode="wait" custom={currentSection}>
        <motion.div
          key={currentSection}
          custom={currentSection}
          variants={sectionVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 280, damping: 32 },
            opacity: { duration: 0.35 },
            scale: { duration: 0.35 },
          }}
          className="h-full w-full overflow-y-auto overflow-x-hidden scrollbar-hide"
        >
          <Suspense fallback={<SectionFallback />}>
            <CurrentSectionComponent onNavigate={navigateToSection} />
          </Suspense>
        </motion.div>
      </AnimatePresence>

      {/* Mobile section dots */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden flex gap-1.5 bg-card/80 backdrop-blur-sm px-3 py-2 rounded-full border border-border/50">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToSection(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSection === index ? "bg-primary w-5" : "bg-muted-foreground/40 w-2"
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;