import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";

// ─── PROJETS PROFESSIONNELS ──────────────────────────────────────────────────
const professionalProjects = [
  {
    title: "Edu Levitation SaaS",
    description:
      "Plateforme SaaS éducative complète : notes, facturation, gestion élèves, automatisation notifications.",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    technologies: ["Laravel", "ReactJS", "MySQL", "n8n", "API REST"],
    category: "SaaS",
    liveUrl: "https://edu.levitation.mg",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-primary/30 to-cyan-500/20",
  },
  {
    title: "Levitation (Mini ESN)",
    description:
      "Site collectif de développeurs freelance proposant des solutions web et SaaS.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    technologies: ["ReactJS", "Node.js", "Tailwind CSS"],
    category: "Startup",
    liveUrl: "https://levitation.mg",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-accent/30 to-purple-500/20",
  },
  {
    title: "Transport Interne Konecta",
    description:
      "Digitalisation transport du personnel : planification, optimisation OSRM, reporting.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    technologies: ["PHP", "React", "MySQL", "OSRM"],
    category: "Entreprise",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "ERPNext Migration",
    description: "Migration d'un ERP existant vers Spring Boot avec nouvelle architecture API.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["Python", "Frappe", "Vue.js", "Spring Boot", "MySQL"],
    category: "ERP",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-orange-500/20 to-primary/20",
  },
  {
    title: "DayByDay CRM",
    description: "Migration et amélioration d'un CRM existant vers Spring Boot.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    technologies: ["Symfony", "Spring Boot", "MySQL", "Docker"],
    category: "CRM",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-primary/20 to-green-500/20",
  },
  {
    title: "Cryptomoney Cloud",
    description: "Plateforme crypto complète : apps web et mobile cloud-native.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    technologies: ["Symfony", "Spring Boot", "React", "React Native", "Docker"],
    category: "Cloud",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-yellow-500/20 to-primary/20",
  },
];

// ─── PROJETS ACADÉMIQUES ──────────────────────────────────────────────────────
const academicProjects = [
  // Application Simple (React Todo)
  {
    title: "NextTask - Gestionnaire React",
    description: "Application To-Do list complète avec filtrage avancé, tags et persistance via LocalStorage.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    category: "React",
    githubUrl: "https://github.com/joharymanantena1-ux",
    liveUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-cyan-500/20 to-primary/20",
  },
  // WordPress (Juste 1 pour l'exemple)
  {
    title: "Site Vitrine – Cabinet Dentaire",
    description: "Site WordPress professionnel pour cabinet dentaire avec prise de RDV en ligne et blog santé.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    technologies: ["WordPress", "Elementor", "PHP", "MySQL"],
    category: "WordPress",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-blue-500/20 to-primary/20",
  },
  // Autres académiques
  {
    title: "Codage Son WAV",
    description: "Traitement et analyse de fichiers audio WAV.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    technologies: ["Python", "WAV"],
    category: "Algorithmique",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Codage Huffman",
    description: "Compression Huffman avec visualisation de l'arbre.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    technologies: ["Python", "Numpy", "Matplotlib"],
    category: "Algorithmique",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "eFootball Check Offside",
    description: "Détection de hors-jeu en temps réel via analyse vidéo.",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
    technologies: ["C#", "ASP.NET", "Postgres"],
    category: "Sport",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-green-500/20 to-primary/20",
  },
  {
    title: "SIG McArthur's Madagascar",
    description: "Système d'Information Géographique pour la gestion territoriale.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    technologies: ["JavaScript", "SIG", "PostGIS"],
    category: "Géomatique",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-primary/20 to-cyan-500/20",
  },
  {
    title: "Civilisation",
    description: "Jeu de stratégie en temps réel avec gestion de ressources.",
    image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=800&q=80",
    technologies: ["Java", "Swing", "Postgres"],
    category: "Jeu",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-yellow-500/20 to-accent/20",
  },
  {
    title: "Atelier Réparation PC",
    description: "Gestion d'atelier avec suivi des interventions.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    technologies: ["Spring Boot", "Postgres", "Bootstrap"],
    category: "Gestion",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-gray-500/20 to-primary/20",
  },
  {
    title: "Clustering FTP",
    description: "Système de clustering avec serveur FTP et HAProxy.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    technologies: ["Python", "FTP", "HAProxy", "Linux"],
    category: "Réseau",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-accent/20 to-cyan-500/20",
  },
  {
    title: "Gestion Garage Automobile",
    description: "Application web de gestion d'atelier mécanique.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    technologies: ["CodeIgniter", "PHP", "MySQL"],
    category: "Automobile",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-red-500/20 to-primary/20",
  },
  {
    title: "AsaSprint Framework",
    description: "Framework Java maison pour le développement rapide d'applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    technologies: ["Java"],
    category: "Framework",
    githubUrl: "https://github.com/joharymanantena1-ux",
    gradient: "from-primary/20 to-accent/20",
  },
];

// Category badge color
const categoryColors: Record<string, string> = {
  WordPress: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  SaaS: "bg-primary/20 text-primary border-primary/30",
  Startup: "bg-accent/20 text-accent border-accent/30",
  Algorithmique: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Sport: "bg-green-500/20 text-green-300 border-green-500/30",
  Géomatique: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Jeu: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Réseau: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  default: "bg-secondary text-muted-foreground border-border/50",
};

const getCategoryColor = (category: string) =>
  categoryColors[category] || categoryColors.default;

// Project card
const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
    className="flex-shrink-0 w-[280px] sm:w-[300px] card-floating overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
  >
    <div className="relative aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
      <span
        className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getCategoryColor(project.category)}`}
      >
        {project.category}
      </span>
      <div className="absolute top-3 right-3 flex gap-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-card/80 backdrop-blur-sm text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
            aria-label="Code source"
          >
            <Github className="w-3.5 h-3.5" />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full bg-card/80 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            aria-label="Voir le site"
          >
            <Globe className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>

    <div className="p-4">
      <h3 className="text-sm font-display font-semibold mb-1.5 line-clamp-1">
        {project.title}
      </h3>
      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1">
        {project.technologies.slice(0, 4).map((tech: string) => (
          <span
            key={tech}
            className="px-1.5 py-0.5 rounded-md bg-secondary text-[10px] font-medium"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-1.5 py-0.5 rounded-md bg-secondary text-[10px] font-medium text-muted-foreground">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

// Horizontal drag-scroll carousel
const DragScrollCarousel = ({ projects }: { projects: any[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollRef.current?.scrollLeft ?? 0;
    if (scrollRef.current) scrollRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) scrollRef.current.style.cursor = "grab";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide select-none"
      style={{ cursor: "grab" }}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {projects.map((project, index) => (
        <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
      ))}
      {/* End spacer */}
      <div className="flex-shrink-0 w-4" />
    </div>
  );
};

const academicCategories = ["Tous", "React", "WordPress", "Algorithmique", "Jeu", "Réseau", "Sport", "Géomatique", "Gestion", "Automobile", "Framework"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredProjects = activeFilter === "Tous"
    ? academicProjects
    : academicProjects.filter((p) => p.category === activeFilter);

  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Mes Projets
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            {professionalProjects.length + academicProjects.length} projets illustrant mon parcours académique et professionnel.
          </p>
        </motion.div>

        {/* ── Projets professionnels ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-primary to-accent" />
            <h3 className="text-lg font-display font-semibold">Projets Professionnels</h3>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
              {professionalProjects.length}
            </span>
          </div>
          <DragScrollCarousel projects={professionalProjects} />
        </motion.div>

        {/* ── Projets académiques ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1.5 h-6 rounded-full bg-gradient-to-b from-accent to-primary" />
            <h3 className="text-lg font-display font-semibold">Projets Académiques</h3>
            <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
              {academicProjects.length}
            </span>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-4">
            {academicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DragScrollCarousel projects={filteredProjects} />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;