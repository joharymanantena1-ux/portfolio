import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressTrackRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the entire loading screen
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete,
        });
      },
    });

    // Initial state
    gsap.set([logoRef.current, subtitleRef.current, progressTrackRef.current], {
      opacity: 0,
      y: 20,
    });
    gsap.set(progressBarRef.current, { width: "0%" });

    tl
      .to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      })
      .to(
        subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.3"
      )
      .to(
        progressTrackRef.current,
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
        "-=0.2"
      )
      .to(progressBarRef.current, {
        width: "100%",
        duration: 1.2,
        ease: "power2.inOut",
      });

    // Letter-by-letter shimmer on logo
    if (line1Ref.current && line2Ref.current) {
      gsap.fromTo(
        [line1Ref.current, line2Ref.current],
        { backgroundPosition: "200% center" },
        {
          backgroundPosition: "-200% center",
          duration: 2,
          ease: "none",
          repeat: -1,
        }
      );
    }

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/6 blur-3xl"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        {/* Logo */}
        <div ref={logoRef} className="text-center">
          <div className="text-6xl md:text-8xl font-display font-bold leading-none select-none">
            <span
              ref={line1Ref}
              className="text-gradient inline-block"
            >
              J
            </span>
            <span className="text-foreground/20">-</span>
            <span
              ref={line2Ref}
              className="text-foreground"
            >
              m
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-sm md:text-base text-muted-foreground font-medium tracking-widest uppercase"
        >
          Développeur Fullstack
        </p>

        {/* Progress track */}
        <div ref={progressTrackRef} className="flex flex-col items-center gap-3">
          <div className="w-48 md:w-64 h-[2px] bg-border/50 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              style={{ width: "0%" }}
            />
          </div>
          <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">
            Chargement...
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
