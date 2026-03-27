import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPortrait from "@/assets/developer-portrait.png";

interface HeroSectionProps {
  onNavigate: (index: number) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const codeParticles = [
    { label: "</>", color: "text-primary", delay: 0 },
    { label: "{...}", color: "text-accent", delay: 0.2 },
    { label: "()", color: "text-emerald-400", delay: 0.4 },
    { label: "=>", color: "text-cyan-400", delay: 0.6 },
    { label: "[]", color: "text-rose-400", delay: 0.8 },
    { label: ";", color: "text-muted-foreground", delay: 1.0 },
  ];

  return (
    <section className="section-container relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
        <div
          className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-10 lg:py-0">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1 space-y-6 lg:space-y-8"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Disponible pour freelance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
          >
            Bonjour, je suis{" "}
            <br />
            <span className="text-gradient">Johary Manantena</span>
            <br />
            <span className="text-muted-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
              Développeur Full-Stack
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Passionné par la création de solutions numériques modernes et performantes,
            de l'architecture backend au design frontend.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 glow-primary"
              onClick={() => onNavigate(4)}
            >
              Voir mes projets
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary font-medium px-8"
              onClick={() => onNavigate(5)}
            >
              Me contacter
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 gap-2"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1qRizpZePkW1lJWCC8AgexFfZxVR_LjRY/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Mon CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-3 justify-center lg:justify-start"
          >
            {[
              { icon: Github, href: "https://github.com/joharymanantena1-ux", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/johary-andrianjafinoro-73b29b3a3", label: "LinkedIn" },
              { icon: Mail, href: "mailto:andrianmanantena@gmail.com", label: "Email" },
              { icon: Globe, href: "https://levitation.mg", label: "Levitation" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-secondary/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-glow border border-border/50"
                aria-label={label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Portrait with tilt effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
            {/* Rotating glow ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px] rounded-full border-2 border-dashed border-primary/20"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] rounded-full border border-accent/15"
              />
            </div>

            {/* Glow behind portrait */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-60 h-60 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl animate-pulse-slow" />
            </div>

            {/* Portrait with 3D tilt */}
            <motion.div
              style={{ rotateX: springRotateX, rotateY: springRotateY, perspective: 1000 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 cursor-pointer"
            >
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-[340px] md:h-[460px] mx-auto group -rotate-3 hover:rotate-0 transition-transform duration-700">
                {/* Outer animated gradient ring blur */}
                <div className="absolute -inset-4 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-tr from-primary via-accent to-primary opacity-20 dark:opacity-30 blur-2xl animate-pulse-slow group-hover:opacity-40 dark:group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Smooth gradient border (no physical rotation to avoid breaking the shape) */}
                <div className="absolute -inset-1 rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-primary via-accent to-primary bg-[length:200%_200%] animate-gradient-border" />
                
                {/* Inner background masking for thin border */}
                <div className="absolute inset-[3px] rounded-[calc(2.5rem-3px)] md:rounded-[calc(3rem-3px)] bg-background dark:bg-card" />

                {/* The actual photo */}
                <div className="absolute inset-[6px] rounded-[calc(2.5rem-6px)] md:rounded-[calc(3rem-6px)] overflow-hidden bg-card/50 shadow-2xl z-10">
                  {/* Theme aware fade bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent dark:from-background/90 dark:via-transparent dark:to-transparent z-10 pointer-events-none" />
                  <img
                    src={developerPortrait}
                    alt="Johary Manantena - Développeur Fullstack"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Floating code particles */}
                <div className="absolute inset-0 z-20 pointer-events-none hidden sm:block">
                  {codeParticles.map(({ label, color, delay }, index) => {
                    const angle = (index * 360) / codeParticles.length;
                    const radiusClass = "translate-x-[160px] md:translate-x-[190px]";
                    
                    return (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + delay, duration: 0.5 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      >
                        <div
                          style={{
                            transform: `rotate(${angle}deg)`,
                          }}
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                          <div className={radiusClass}>
                            <motion.div
                              animate={{
                                y: [0, -10, 0],
                                rotate: [-angle, -angle + 10, -angle - 10, -angle],
                              }}
                              transition={{
                                duration: 4 + index * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: delay,
                              }}
                              className={`text-xl md:text-2xl font-mono font-bold ${color} opacity-80 filter drop-shadow-md select-none`}
                            >
                              {label}
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.button
          onClick={() => onNavigate(1)}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs font-medium tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;