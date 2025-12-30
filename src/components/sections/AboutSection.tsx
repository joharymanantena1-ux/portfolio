import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "J'écris du code maintenable, testé et documenté.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Je crée des interfaces élégantes et intuitives.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "J'optimise chaque aspect pour une expérience fluide.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Je travaille efficacement en équipe agile.",
    },
  ];

  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            À propos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
            Qui suis-je ?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
            Développeur fullstack passionné par la création de solutions numériques 
            modernes et performantes. Actuellement en Licence Informatique à IT-University,
            avec une expérience concrète en développement web et mobile.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-floating p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-semibold mb-3 sm:mb-4">
              Mon parcours
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              Étudiant en Licence Informatique à IT-University (2022-2025), 
              je me spécialise dans le développement fullstack. Je maîtrise 
              les langages Java, Python, PHP, C/C# ainsi que les frameworks 
              React, Spring Boot et Symfony.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Mon expérience chez Konecta Madagascar m'a permis de travailler 
              sur des projets concrets de digitalisation, avec des technologies 
              comme React, PHP et MySQL.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-floating p-4 sm:p-6 lg:p-8"
          >
            <h3 className="text-lg sm:text-xl lg:text-2xl font-display font-semibold mb-3 sm:mb-4">
              Ma philosophie
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
              Je crois en des solutions simples, efficaces et bien architecturées. 
              Mon objectif est de concevoir des applications robustes qui répondent 
              précisément aux besoins métier tout en restant maintenables.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Je suis également passionné par les nouvelles technologies, notamment 
              l'IA générative (certification Google Cloud en cours), et je cherche 
              constamment à améliorer mes compétences.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {values.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-3 sm:p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-secondary/50 hover:bg-secondary border border-border/50 transition-all duration-300"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-primary/10 flex items-center justify-center mb-2 sm:mb-3 lg:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="text-sm sm:text-base lg:text-lg font-display font-semibold mb-1 sm:mb-2">{title}</h4>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;