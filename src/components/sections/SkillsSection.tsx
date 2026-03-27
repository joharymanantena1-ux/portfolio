import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, Layout, Settings, Target, Layers, Users, Zap, Rocket, RefreshCw, MessageSquare, CheckCircle2 } from "lucide-react";

const skillCategories = [
  {
    title: "Langages & Programmation",
    color: "primary",
    icon: Code2,
    skills: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Java", level: 85 },
      { name: "PHP", level: 90 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    title: "Frameworks & Frontend",
    color: "accent",
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "React Native", level: 85 },
      { name: "Laravel", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "Symfony", level: 85 },
    ],
  },
  {
    title: "DevOps & Outils",
    color: "primary",
    icon: Settings,
    skills: [
      { name: "MySQL / PostgreSQL", level: 90 },
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 80 },
      { name: "API REST / n8n", level: 90 },
      { name: "Firebase", level: 80 },
    ],
  },
];

const softSkills = [
  { label: "Analyse des besoins", icon: Target },
  { label: "Architecture logicielle", icon: Layers },
  { label: "Travail en équipe", icon: Users },
  { label: "Résolution de problèmes", icon: Zap },
  { label: "Autonomie", icon: Rocket },
  { label: "Adaptabilité", icon: RefreshCw },
  { label: "Communication", icon: MessageSquare },
  { label: "Rigueur", icon: CheckCircle2 },
];

// Circular progress SVG component
const CircularProgress = ({
  level,
  color,
  delay,
}: {
  level: number;
  color: string;
  delay: number;
}) => {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = animated
    ? circumference - (level / 100) * circumference
    : circumference;
  const strokeColor = color === "primary" ? "hsl(175 80% 50%)" : "hsl(280 70% 60%)";

  return (
    <div ref={ref} className="flex-shrink-0">
      <svg width="44" height="44" viewBox="0 0 44 44">
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-border/40"
        />
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 22 22)"
          style={{
            transition: `stroke-dashoffset 1s ease ${delay}s`,
            filter: `drop-shadow(0 0 4px ${strokeColor}60)`,
          }}
        />
        <text
          x="22"
          y="26"
          textAnchor="middle"
          fontSize="9"
          fontWeight="600"
          fill={strokeColor}
        >
          {level}%
        </text>
      </svg>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Compétences
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto">
            Un stack moderne et polyvalent, enrichi en continu.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10 md:mb-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="card-floating p-5 lg:p-6 group hover:shadow-glow transition-shadow duration-500"
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    category.color === "primary" ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent"
                  }`}
                >
                  <category.icon className="w-5 h-5 pointer-events-none" />
                </div>
                <div>
                  <h3 className="text-sm font-display font-semibold leading-tight">
                    {category.title}
                  </h3>
                  <div
                    className={`w-8 h-0.5 mt-1 rounded-full ${
                      category.color === "primary" ? "bg-primary" : "bg-accent"
                    }`}
                  />
                </div>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <CircularProgress
                      level={skill.level}
                      color={category.color}
                      delay={catIndex * 0.1 + skillIndex * 0.08}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs sm:text-sm font-medium truncate">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-lg lg:text-xl font-display font-semibold mb-5">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="skill-tag text-xs sm:text-sm flex items-center gap-1.5 cursor-default group"
              >
                <skill.icon className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                {skill.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;