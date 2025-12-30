import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import developerPortrait from "@/assets/developer-portrait.png";

interface HeroSectionProps {
  onNavigate: (index: number) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section className="section-container relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-accent/10 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-0">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left order-2 lg:order-1 space-y-4 lg:space-y-6"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Développeur Full-Stack
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight"
          >
            Bonjour, je suis{" "}
            <span className="text-gradient">Johary Manantena</span>
            <br />
            <span className="text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Développeur Fullstack</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
          >
            Passionné par la création de solutions numériques modernes et performantes.
            Expérience en développement web, mobile et backend avec une forte capacité
            à analyser les besoins et livrer des applications fiables.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 sm:px-8 glow-primary w-full sm:w-auto"
              onClick={() => onNavigate(4)}
            >
              Voir mes projets
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary font-medium px-6 sm:px-8 w-full sm:w-auto"
              onClick={() => onNavigate(5)}
            >
              Me contacter
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-6 sm:px-8 w-full sm:w-auto gap-2"
              asChild
            >
              <a 
                  href="https://drive.google.com/file/d/1zvg5YYpBdS7wTnSoDlUmuYxobGWqwwZ_/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                Voir mon CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-3 justify-center lg:justify-start pt-2"
          >
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:andrianmanantena@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                aria-label={label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Glow effect behind portrait */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 rounded-full blur-3xl scale-90 animate-pulse-slow" />
            
            {/* Portrait image */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative w-48 sm:w-56 md:w-64 lg:w-80 aspect-[3/4] rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 shadow-elevated">
                <img
                  src={developerPortrait}
                  alt="Johary Manantena - Développeur Fullstack"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            {/* Floating tech badges - hidden on small screens */}
            <div className="hidden sm:block">
              {[
                { label: "React", delay: 0 },
                { label: "Symfony", delay: 1 },
                { label: "Spring Boot", delay: 2 },
              ].map(({ label, delay }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + delay * 0.2, duration: 0.4 }}
                  className="absolute"
                  style={{
                    top: `${20 + index * 30}%`,
                    [index % 2 === 0 ? "left" : "right"]: "-15%",
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
                    className="px-3 py-1.5 rounded-full bg-card border border-border shadow-elevated text-xs sm:text-sm font-medium whitespace-nowrap"
                  >
                    {label}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.button
          onClick={() => onNavigate(1)}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;