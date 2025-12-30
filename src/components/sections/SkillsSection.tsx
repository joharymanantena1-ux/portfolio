import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Langages & Programmation",
    color: "primary",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 65 },
      { name: "PHP", level: 90 },
      { name: "C / C#", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Frameworks & Technologies",
    color: "accent",
    skills: [
      { name: "React / React Native", level: 90 },
      { name: "Spring Boot", level: 80 },
      { name: "Symfony", level: 85 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Bases de données & Outils",
    color: "primary",
    skills: [
      { name: "MySQL / PostgreSQL / Oracle", level: 90 },
      { name: "Firebase", level: 75 },
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "Postman", level: 85 },
    ],
  },
];

const softSkills = [
  "Analyse des besoins",
  "Architecture logicielle",
  "Travail en équipe",
  "Résolution de problèmes",
  "Autonomie",
  "Adaptabilité",
  "Communication",
  "Rigueur",
];

const SkillsSection = () => {
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
            Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
            Compétences
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Un stack technologique moderne et polyvalent, constamment enrichi
            par la veille et l'apprentissage continu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="card-floating p-4 sm:p-5 lg:p-6"
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-display font-semibold mb-4 sm:mb-5 lg:mb-6 flex items-center gap-2 sm:gap-3">
                <span
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                    category.color === "primary" ? "bg-primary" : "bg-accent"
                  }`}
                />
                {category.title}
              </h3>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                      <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className={`h-full rounded-full ${
                          category.color === "primary"
                            ? "bg-primary"
                            : "bg-accent"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-base sm:text-lg lg:text-xl font-display font-semibold mb-4 sm:mb-6">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="skill-tag text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;