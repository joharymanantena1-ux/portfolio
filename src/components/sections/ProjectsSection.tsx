import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Transport Interne Konecta",
    description: "Digitalisation du transport du personnel avec planification, optimisation d'itinéraires via OSRM, automatisation des affectations et système de reporting complet.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    technologies: ["PHP", "React", "MySQL", "OSRM"],
    category: "Entreprise",
  },
  {
    title: "ERPNext Migration",
    description: "Migration d'un ERP existant vers une nouvelle architecture Spring Boot.",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAgVBMVEUAif////8AhP8Agf8Ah/8Ag/8AgP/Z5f/9/f+Xv//n7v/E2P+Luf/g6f+Vvf+mxv/0+P+50v8di/9rqP/S4f+hw/9lpf/w9P/b5v/L3P8Aff9Blv/p7/9Kmv+Csv/09v9boP++1P92rf+tyv8zkf+0zv+Itv9yrP8AeP9Rnf8ijv+0+92aAAAFDUlEQVR4nO3YaXuiPBQGYMiCqChq3ajWXdv6/3/gm5yThEXnrf0wxc713B9mJAZsHkIWoggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP59WtbpepkW6ramLkuVPRaNy4noV9HTTsMk0v2lP5j287ngJqmyynTffUsoBbUZdDqDS2i0PptTl/nvCiEZxQ2TKFnXCraZtDVVvdpgZ3uM6NLByXcL2bGHff3w7ytt/YWGfcPdDHqNoqm9ryptlA51yGAp3eXk9HsZqHk6MiZ/p3EPeiiDuJB3Mog3wmcQd12rv53Bi/vNNunOoG7pM1hMp9OOfyrelcugZ0u3XJiGfhDHK34afmUGN/OCueOcwfnVHCSngv7IjnQZXKh0zil0Rcigx81uZKCELucQJSz3DX9Wek5nm6/UzV/WKs5gTA1Rr/xg+Gcho0aIFRUOZMggPtKQUMtAiHneL/aznbQNVLthZnBbT/bj8LrJjnSyOZg/VwjVDHxvX6lqBlFCbU11mUG8s42oZiAv7pmJ1y82oFMcLiD7VPy6DWfH+5Ynh4Z6BhvXwloGmu/fpJLBghpXZqCLsoFxbkLQVHdkqqk3KvxMFmWNcYsZiIaomcHwXj/QZ35COIOUvhon1Qz4VgeZKdLU5KGIJMXTT/Rz9AORDWu6p+Z4MOA7XhsPIh4ltglnsOW+8iLKDFz36WXvGQ8oV/Nb7xRYJHauRORn7izj83jT3niQNGf9NxXmBTOmSzcvLJNqBirhFhZuPEg/qOkjVWbA93ycCCUSusTZRJrQKjL/WNr/ZnaJlfC8YKaPFofEmzVSyGCxNPwDe/Drg4s009jq6EtdBjqiLwvpM1B0qxfcv+nMrfbjQHqg76hDPcX64M8ZVJXrxDRNQ8/pST8eCO7m8eHVZSBy+//xI7G4l5iHLJL7cMnDL8uguLtfSM1OyWcQJWP+4DLgSYH2AgadSQuAib9Ih3cYT5RBriZeFDUzGB14dGxksLbL45BBpOix6Rcug07cdLAZ6KE7cmvrJ8pgVpuYOIPeeXwe+K4RNTPoXWgUq2TAg33KGcjlTQY08OvseTOovfQI84LkpZ2ZFCKfwfmw2WwO82vCZ5QZ+GWT6wf8TFyy0srWn/gqz/cs3MvArg/cUuiF1vthXhAqTGSVDCK9rmRw5hh53WU3TlTlmcfEe88CrZGu9Ceu7U2rrZG8agZuBUwZKJ7/+GaL3W51ss1Un/Q1jQkLfsA4gx9o6P9o9gM7KFYy0LPYt/zLDHxlWiNx7dmrUkrzJjMsQI8fNMwc7fVdBivZ5o7p9j3Sqr5Wpu/NCvCBDKJkGTJwo0MxX711UzcAiAtfy3UH+xLSfVyc+6sfb3rwVQZuy5TrRzJQp5BBJOovZu3kEq7A+6mpHWqF//1Ne++iv8rALfzjiXogA3enKQN1XVSvatYYkpZR63KYMXssnzHvJ1pys2eyGdAt3NfeH5hhLv5jBnEo5P1RQY+62odrDj61X0DQclHTUnpEb11yrtKTUVtE1m1sns2WdpgbBzcBipk9ypWy/x539f2dmh9N6awsvNpjtw+Wp26x2C46R3qZpjb2q6HbRtHFPimPVT4ddNrcO9+8QxG+TNVrNEud2otSX7s8VZstk3T74tt3qr5cS9nm3hkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7Mf2NWRZeRL12XAAAAAElFTkSuQmCC",
    technologies: ["Python","Frappe","VueJs","API Rest","Spring Boot", "MySQL", "Vue.js"],
    category: "ERP",
  },
  {
    title: "DayByDay CRM",
    description: "Migration et amélioration d'un CRM existant vers Spring Boot.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj46SaXIwTYr07lSAvi1OJ8SETNy2Qt8n6hw&s",
    technologies: ["Symphony","API Rest","Spring Boot", "MySQL", "Docker"],
    category: "CRM",
  },
    {
    title: "Cryptomoney Cloud",
    description: "Plateforme crypto complète avec applications web et mobile cloud-native.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80",
    technologies: ["Symfony", "Spring Boot", "React", "React Native", "Postgres", "Docker", "Firebase"],
    category: "Cloud",
  },
  {
    title: "Codage Son WAV",
    description: "Application de traitement et d'analyse de fichiers audio WAV.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM6MG-jTSaiRCet34U1ogCalayPd2o9Utdy_chL3pczV5Ts2tRq9XnuhMe-JqkcwH2rE9f9h7jkfyPhTV7S4_odpERa0O1eLFEC0WNBCz2g9gzRGsoS6WwIQGUjbWkWxGeRGk_rngpobE/s1600/codageson1.PNG",
    technologies: ["Python", "WAV"],
    category: "Algorithmique",
  },
  {
    title: "Codage Huffman",
    description: "Implémentation de l'algorithme de compression Huffman avec visualisation.",
    image: "https://miro.medium.com/1*VDG9h4caXMwPKf0b23z9oQ.jpeg",
    technologies: ["Python", "Numpy", "Matplotlib"],
    category: "Algorithmique",
  },
  {
    title: "Atelier Réparation PC",
    description: "Gestion d'atelier de réparation informatique avec suivi des interventions.",
    image: "https://atelierduweb.be/wp-content/uploads/2024/07/pexels-it-services-eu-9278798-7639373.jpg",
    technologies: ["Spring Boot", "Postgres", "Bootstrap"],
    category: "Informatique",
  },
  {
    title: "Gestion État Financier",
    description: "Application de gestion financière avec reporting et tableaux de bord.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["Spring Boot", "Postgres", "HTML/JS"],
    category: "Gestion",
  },
  {
    title: "Gestion RH",
    description: "Système complet de gestion des ressources humaines.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    technologies: ["Spring MVC", "Java", "Postgres"],
    category: "RH",
  },
  {
    title: "Botry",
    description: "Application de gestion des course Botry avec Spring Boot.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHoB2BjnuJk4thJ-WOkokyP66cAh6UJwRw8Q&s",
    technologies: ["Spring Boot", "MySQL"],
    category: "Informatique",
  },
  {
    title: "Clustering FTP",
    description: "Système de clustering avec serveur FTP, HAProxy sur Linux/Windows.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    technologies: ["Python", "FTP", "HAProxy", "Linux", "Windows"],
    category: "Réseau",
  },
  {
    title: "eFootball Check Offside",
    description: "Système de détection de hors-jeu en temps réel pour le football.",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=800&q=80",
    technologies: ["C#", "ASP.NET", "Postgres"],
    category: "Sport",
  },
  {
    title: "Kidoro",
    description: "Plateforme de vente en ligne avec panier et système de paiement.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    technologies: ["EJB", "Java EE", "Oracle"],
    category: "E-commerce",
  },
  {
    title: "eHetra Trano",
    description: "Application de gestion immobilière avec Java EE et Oracle.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    technologies: ["EJB", "Java EE", "Oracle"],
    category: "Immobilier",
  },
  {
    title: "CinemaServlet",
    description: "Site de réservation de billets de cinéma avec gestion des séances.",
    image: "https://img.freepik.com/premium-psd/3d-render-cinema-ticket-popup-from-smartphone-with-booking-tickets-online_252008-535.jpg",
    technologies: ["Java", "Servlet", "Postgres", "Bootstrap"],
    category: "Divertissement",
  },
  {
    title: "AsaSprint Framework",
    description: "Framework Java maison pour le développement rapide d'applications.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    technologies: ["Java"],
    category: "Framework",
  },
  {
    title: "SIG McArthur's Madagascar",
    description: "Système d'Information Géographique pour la gestion territoriale.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    technologies: ["JavaScript", "SIG", "Postgres", "PostGIS"],
    category: "Géomatique",
  },
  {
    title: "Gestion Garage Automobile",
    description: "Application web de gestion d'atelier mécanique avec suivi des réparations.",
    image: "https://abc-pneupascher.eu/wp-content/uploads/2023/02/gestion-garage-logiciel-garage-auto_1870.jpg",
    technologies: ["CodeIgniter", "PHP", "MySQL", "HTML/CSS"],
    category: "Automobile",
  },
  {
    title: "RallyChrono Web",
    description: "Version web du système de chronométrage pour rallye automobile.",
    image: "https://img.freepik.com/free-photo/closeup-hand-holding-stopwatch_53876-14563.jpg?semt=ais_hybrid&w=740&q=80",
    technologies: ["Java", "Servlet", "Postgres"],
    category: "Sport",
  },
  {
    title: "Helicoptera",
    description: "Jeu d'hélicoptère avec gestion des scores et interface graphique.",
    image: "https://assets.funnygames.nl/1/151/52944/672x448/heli-attack-2.webp",
    technologies: ["Perl", "MySQL", "Tkinter"],
    category: "Jeu",
  },
  {
    title: "eHindrambola @ Fiangonana",
    description: "Plateforme de gestion des dons et contributions pour église.",
    image: "https://media.istockphoto.com/id/1503371245/fr/photo/signe-de-pourcentage-au-dessus-des-piles-de-pi%C3%A8ces-avant-le-graphique-financier-bleu.jpg?s=612x612&w=0&k=20&c=gCvmpqYTFbiBYDnS5uKKkgB-FBd9zMSsW-nIZRQfe2U=",
    technologies: ["Python", "Django", "Postgres"],
    category: "Communauté",
  },
  {
    title: "Des Chiffres et des Lettres",
    description: "Jeu éducatif de calcul mental et de recherche de mots.",
    image: "https://images.uncyclomedia.co/desencyclopedie/fr/b/be/Chiflett.jpg",
    technologies: ["C++", "Web", "Postgres"],
    category: "Jeu",
  },
  {
    title: "Chrono Rally",
    description: "Application de chronométrage pour rallye avec interface web et gestion des temps.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    technologies: ["C++", "Web", "Postgres"],
    category: "Sport",
  },
  {
    title: "Assur'M - BackOffice",
    description: "Système de gestion des assurances avec suivi des polices et des sinistres.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    technologies: ["CodeIgniter", "Postgres"],
    category: "Assurance",
  },
  {
    title: "Police Voleur - 2D/3D Packing",
    description: "Algorithme d'optimisation d'emballage 2D/3D avec visualisation graphique.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
    technologies: ["Python", "Pandas", "Numpy", "Tkinter"],
    category: "Algorithmique",
  },
  {
    title: "DiTea - Plateforme de Commande",
    description: "Plateforme de commande en ligne pour salon de thé avec gestion des produits et des commandes.",
    image: "https://edito.meilleursagents.com/sites/default/files/styles/735x412/public/images/web/2023-03/parcelles-diviser-seloger.jpg?itok=0Sq0I7p2",
    technologies: ["CodeIgniter", "PHP", "MySQL", "Bootstrap"],
    category: "eCommerce",
  },
  {
    title: "Appel Vidéo - Socket",
    description: "Application de communication vidéo en temps réel avec partage de fichiers FTP.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&q=80",
    technologies: ["Socket", "Java", "FTP"],
    category: "Réseau",
  },
  {
    title: "ValanOmby",
    description: "Plateforme de gestion de ferme bovine avec suivi du bétail et gestion des transactions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAi5KTb8BVfYOQDWD73maPqEAO6a6ZvtIWIQ&s",
    technologies: ["Java", "Servlet", "Postgres"],
    category: "Agriculture",
  },
  {
    title: "Gestion Restauration",
    description: "Système de gestion de restaurant avec commandes en ligne, gestion de stock et facturation.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    technologies: ["Java", "Servlet", "MySQL"],
    category: "Restauration",
  },
  {
    title: "Gestion Dentisterie Solonify",
    description: "Application de gestion de cabinet dentaire avec prise de rendez-vous et suivi des patients.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    technologies: ["C#", "Postgres", "WinForm"],
    category: "Santé",
  },
  {
    title: "Civilisation",
    description: "Jeu de stratégie en temps réel avec gestion de ressources et développement de civilisation.",
    image: "https://assets.2k.com/1a6ngf98576c/13dMkOzfo93j8q43mqzSNl/c9ec59c4c5b8997902ad2d89117bba7d/civ-3_screen9.png",
    technologies: ["Java", "Swing", "Postgres"],
    category: "Jeu",
  },
  {
    title: "Projet SGBD - Algèbre Relationnelle",
    description: "Implémentation des opérations d'algèbre relationnelle avec interface console en Java.",
    image: "https://www.monlyceenumerique.fr/nsi_terminale/bdd/img/bdd_tournoi_structure.png",
    technologies: ["Java"],
    category: "Base de données",
  },
  {
    title: "Trandraka Volamena",
    description: "Logiciel de gestion d'une mine d'or avec suivi des extractions et des ventes.",
    image: "https://www.minejxsc.com/wp-content/uploads/2024/06/gold-mine-3.webp",
    technologies: ["Java", "Servlet", "Swing", "Oracle", "Postgres"],
    category: "Gestion",
  },
  {
    title: "Poker",
    description: "Application de jeu de poker en ligne avec gestion des parties, système de paris et interface interactive.",
    image: "https://img.freepik.com/free-vector/gradient-poker-table-background_23-2151085419.jpg?semt=ais_hybrid&w=740&q=80",
    technologies: ["PHP", "HTML", "MySQL"],
    category: "Jeu",
  },
];

const ProjectsSection = () => {
  return (
    <section className="section-container">
      <div className="section-content">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 sm:mb-6">
            Mes Projets Académiques & Professionnels
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            {projects.length} projets qui illustrent mon parcours académique et mon expertise 
            dans le développement web, desktop et mobile.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 sm:-ml-4">
            {projects.map((project, index) => (
              <CarouselItem key={`${project.title}-${index}`} className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 10) * 0.1 }}
                  className="card-floating overflow-hidden group h-full"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    <span className="absolute top-2 left-2 sm:top-4 sm:left-4 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-card/80 backdrop-blur-sm text-[10px] sm:text-xs font-medium">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-3 sm:p-4 lg:p-6">
                    <h3 className="text-base sm:text-lg lg:text-xl font-display font-semibold mb-1.5 sm:mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md bg-secondary text-[10px] sm:text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md bg-secondary text-[10px] sm:text-xs font-medium">
                          +{project.technologies.length - 6}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2 sm:gap-3">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        
                      </a>
                      <a

                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="h-8 sm:h-9 px-2 sm:px-3">
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <CarouselPrevious className="static translate-y-0 bg-secondary hover:bg-primary hover:text-primary-foreground w-8 h-8 sm:w-10 sm:h-10" />
            <CarouselNext className="static translate-y-0 bg-secondary hover:bg-primary hover:text-primary-foreground w-8 h-8 sm:w-10 sm:h-10" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;