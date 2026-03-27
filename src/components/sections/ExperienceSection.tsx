import { motion } from "framer-motion";
import { Briefcase, GraduationCap, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    title: "Projet SaaS – Gestion des Écoles",
    company: "Levitation",
    companyUrl: "https://levitation.mg",
    period: "Jan 2026 – Présent",
    current: true,
    description:
      "Plateforme SaaS scolaire : gestion des notes, facturation, automatisation workflows (emails/SMS).",
    technologies: ["Laravel", "ReactJS", "MySQL", "n8n", "API REST"],
  },
  {
    title: "Développeur Web Freelance",
    company: "Loca & Deco",
    period: "Nov 2025 – Fév 2026",
    current: false,
    description:
      "Site de location événementielle avec back-office de gestion des stocks et optimisation UX.",
    technologies: ["Spring Boot", "ReactJS", "MySQL"],
  },
  {
    title: "Application Logistique & Transport",
    company: "Konecta Madagascar",
    period: "Sep – Déc 2025",
    current: false,
    description:
      "Suivi de livraisons en temps réel, optimisation des trajets et interfaces multi-profils.",
    technologies: ["React Native", "ReactJS", "Node.js", "Firebase", "MySQL"],
  },
];

const education = [
  {
    title: "Licence en Informatique",
    school: "IT-University",
    period: "2022 – 2025",
    description:
      "Algorithmique, bases de données, POO, développement web et mobile.",
  },
  {
    title: "Gen AI Skills",
    school: "Google Cloud Skill Boost",
    period: "Fév 2025",
    description: "Certification en Intelligence Artificielle Générative.",
  },
  {
    title: "Baccalauréat Série D",
    school: "Lycée Manjary Soa",
    period: "2022",
    description: "Baccalauréat scientifique mention série D.",
  },
];

const TimelineCard = ({
  item,
  index,
  type,
}: {
  item: any;
  index: number;
  type: "exp" | "edu";
}) => {
  const isLeft = index % 2 === 0;
  const isPrimary = type === "exp";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`relative flex md:items-center gap-0 md:gap-8 mb-8 last:mb-0 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Content card */}
      <div className="flex-1 pl-8 md:pl-0">
        <div
          className={`relative p-5 lg:p-6 rounded-2xl bg-card/80 backdrop-blur-sm border transition-all duration-300 hover:shadow-elevated group ${
            item.current
              ? "border-primary/40 shadow-glow"
              : "border-border/50 hover:border-primary/30"
          }`}
        >
          {/* Gradient top bar */}
          <div
            className={`absolute top-0 left-5 right-5 h-0.5 rounded-full ${
              isPrimary
                ? "bg-gradient-to-r from-primary to-accent"
                : "bg-gradient-to-r from-accent to-primary"
            }`}
          />

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                isPrimary ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent"
              }`}
            >
              {item.period}
            </span>
            {item.current && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500/15 text-green-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                En cours
              </span>
            )}
          </div>

          <h3 className="text-base lg:text-lg font-display font-semibold mb-1">
            {item.title}
          </h3>
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-sm text-muted-foreground">
              {item.company || item.school}
            </span>
            {item.companyUrl && (
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
            {item.description}
          </p>
          {item.technologies && (
            <div className="flex flex-wrap gap-1.5">
              {item.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded-md bg-secondary text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Center dot (desktop) */}
      <div className="hidden md:flex absolute md:relative left-0 md:left-auto flex-shrink-0 flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-lg ${
            isPrimary ? "bg-primary/20 border-2 border-primary" : "bg-accent/20 border-2 border-accent"
          }`}
        >
          {type === "exp" ? (
            <Briefcase className="w-4 h-4 text-primary" />
          ) : (
            <GraduationCap className="w-4 h-4 text-accent" />
          )}
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="section-container">
      <div className="section-content max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Parcours
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
            Expériences & Formation
          </h2>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-xs mx-auto grid-cols-2 mb-10 md:mb-12 h-11 rounded-xl">
            <TabsTrigger
              value="experience"
              className="flex items-center gap-2 text-sm rounded-lg"
            >
              <Briefcase className="w-4 h-4" />
              Expériences
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="flex items-center gap-2 text-sm rounded-lg"
            >
              <GraduationCap className="w-4 h-4" />
              Formation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            {/* Mobile: simple left timeline */}
            <div className="md:hidden relative pl-8">
              <div className="timeline-line" />
              {experiences.map((exp, index) => (
                <div key={exp.title} className="relative pb-8 last:pb-0">
                  <div className="timeline-dot absolute -left-4 w-8 h-8">
                    <Briefcase className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <TimelineCard item={exp} index={index} type="exp" />
                </div>
              ))}
            </div>
            {/* Desktop: alternating */}
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2" />
              {experiences.map((exp, index) => (
                <TimelineCard key={exp.title} item={exp} index={index} type="exp" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="md:hidden relative pl-8">
              <div className="timeline-line" />
              {education.map((edu, index) => (
                <div key={edu.title} className="relative pb-8 last:pb-0">
                  <div className="timeline-dot absolute -left-4 w-8 h-8 bg-accent">
                    <GraduationCap className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <TimelineCard item={edu} index={index} type="edu" />
                </div>
              ))}
            </div>
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent/20 -translate-x-1/2" />
              {education.map((edu, index) => (
                <TimelineCard key={edu.title} item={edu} index={index} type="edu" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;