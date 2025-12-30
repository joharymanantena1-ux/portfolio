import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    title: "Développeur Web Fullstack",
    company: "Konecta Madagascar",
    period: "Sept - Déc 2024",
    description: "Projet de digitalisation du transport interne du personnel. Développement de modules de planification, optimisation d'itinéraires avec OSRM, automatisation des affectations et reporting.",
    technologies: ["PHP", "React", "MySQL", "OSRM"],
  },
];

const education = [
  {
    title: "Licence en Informatique",
    school: "IT-University",
    period: "2022 - 2025",
    description: "Formation complète en informatique : algorithmique, bases de données, programmation orientée objet, développement web et mobile.",
  },
  {
    title: "Gen AI Skills",
    school: "Google Cloud Skill Boost",
    period: "Février 2025",
    description: "Certification en cours sur les compétences en Intelligence Artificielle Générative.",
  },
  {
    title: "Baccalauréat Série D",
    school: "Manjary Soa",
    period: "2022",
    description: "Baccalauréat scientifique série D.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="section-container">
      <div className="section-content max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Parcours
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold">
            Expériences & Formation
          </h2>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full max-w-sm mx-auto grid-cols-2 mb-8 md:mb-12">
            <TabsTrigger value="experience" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              Expériences
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
              Formation
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <div className="relative pl-6 sm:pl-8">
              <div className="timeline-line" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pb-8 sm:pb-10 lg:pb-12 last:pb-0"
                >
                  <div className="timeline-dot absolute -left-3 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8">
                    <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                  </div>
                  
                  <div className="ml-4 sm:ml-6 lg:ml-8 card-floating p-4 sm:p-5 lg:p-6">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-medium">
                        {exp.period}
                      </span>
                      <span className="text-muted-foreground text-xs sm:text-sm">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-display font-semibold mb-1.5 sm:mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="skill-tag text-[10px] sm:text-xs px-2 py-1 sm:px-3 sm:py-1.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="education">
            <div className="relative pl-6 sm:pl-8">
              <div className="timeline-line" />
              
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pb-8 sm:pb-10 lg:pb-12 last:pb-0"
                >
                  <div className="timeline-dot absolute -left-3 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8">
                    <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 text-primary-foreground" />
                  </div>
                  
                  <div className="ml-4 sm:ml-6 lg:ml-8 card-floating p-4 sm:p-5 lg:p-6">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-accent/10 text-accent text-[10px] sm:text-xs font-medium">
                        {edu.period}
                      </span>
                      <span className="text-muted-foreground text-xs sm:text-sm">
                        {edu.school}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-display font-semibold mb-1.5 sm:mb-2">
                      {edu.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;