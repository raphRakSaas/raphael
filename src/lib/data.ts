export const nav = [
  { label: "Projets", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
  { label: "À propos", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Disponible — CDI chez plüm",
  title: {
    muted: "De l'idée au produit fini,",
    emphasis: "livré en production.",
  },
  subtitle:
    "Développeur fullstack depuis La Réunion — je prends votre projet de l'idée jusqu'au store et aux serveurs, sans rien déléguer.",
  ctaPrimary: { label: "Voir mes projets", href: "#projects" },
  ctaSecondary: { label: "Me contacter", href: "#contact" },
  stats: [
    { value: "8", label: "produits en production" },
    { value: "Master 2", label: "Mention Très Bien — 2025" },
    { value: "2024 → Aujourd'hui", label: "plüm alternance → CDI" },
  ],
};

export type ProjectCategory = "Startup" | "Side project";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  meta: string;
  description: string;
  image: string;
  private?: boolean;
  externalHref: string;
  appHref?: string;
  appLabel?: string;
};

export const projectCategories: ProjectCategory[] = ["Startup", "Side project"];

// First 4 entries drive the hero scroll-morph (see StackOverlay + morph-context) —
// keep the featured mix here, extra projects render as plain cards after.
export const projects: Project[] = [
  {
    slug: "plum-services",
    name: "Plüm Services",
    category: "Startup",
    meta: "CDI · Sept. 2024 — présent",
    description:
      "Application mobile & plateforme SaaS de gestion de services à domicile — React Native, Next.js, NestJS.",
    image: "/images/plum/plum.png",
    externalHref: "/projects/plum-services",
  },
  {
    slug: "plum-website",
    name: "Plüm — Site vitrine",
    category: "Startup",
    meta: "Site vitrine · 2024 — présent",
    description:
      "Landing page publique de plüm — présentation de l'offre ménage, linge et garde d'enfants à La Réunion, et téléchargement de l'app iOS/Android.",
    image: "/images/plum-website/image.png",
    externalHref: "https://plumservices.co/",
  },
  {
    slug: "plum-pro",
    name: "Plüm BnB — Espace professionnel",
    category: "Startup",
    meta: "B2B · Sept. 2024 — présent",
    description:
      "Web app B2B pour les pros de la location courte durée — biens, prestations de ménage, agenda et facturation.",
    image: "/images/bnb-profile/image.png",
    externalHref: "https://raphael-rakotonaivo.vercel.app/projects/plum-pro",
  },
  {
    slug: "plum-dashboard",
    name: "Dashboard de pilotage plüm",
    category: "Startup",
    meta: "Interne · 2025 — présent",
    description:
      "Outil interne de pilotage de la startup — données, règles métier, documents et opérations centralisés.",
    image: "/images/plum/plum-2.webp",
    private: true,
    externalHref: "https://raphael-rakotonaivo.vercel.app/projects/plum-dashboard",
  },
  {
    slug: "sereno-website",
    name: "Sereno — Site vitrine",
    category: "Side project",
    meta: "Site vitrine · 2025 — présent",
    description:
      "Landing page marketing de Sereno — présentation de l'offre, fonctionnalités, cas d'usage et tarification, réalisée avec Framer.",
    image: "/images/sereno-website/image.png",
    externalHref: "https://sereno-app.framer.website/",
  },
  {
    slug: "sereno",
    name: "Sereno",
    category: "Side project",
    meta: "2025 — présent",
    description:
      "App web de gestion budgétaire 100% locale — sans compte, sans connexion bancaire. Budgets par catégorie, objectifs d'épargne et tableau de bord unifié.",
    image: "/images/sereno/dashboard.png",
    externalHref: "https://sereno-v2-xi.vercel.app/",
  },
  {
    slug: "revo",
    name: "Revo",
    category: "Side project",
    meta: "2025 — présent",
    description:
      "SaaS pour coachs sportifs — gestion clients, séances, programmes et suivi de progression.",
    image: "/images/revo-capture/revo-hero.webp",
    externalHref: "https://raphael-rakotonaivo.vercel.app/projects/revo",
  },
  {
    slug: "tourose",
    name: "TouRose",
    category: "Side project",
    meta: "Beta · 2025 — présent",
    description:
      "Site + app qui recensent événements et lieux à Toulouse — catalogue éditorial, import d'événements OpenAgenda, suggestions contextuelles. Projet personnel en bêta ouverte.",
    image: "/images/tourose/image.png",
    externalHref: "https://tourose.pages.dev/",
  },
];

export const quote =
  "Jongler avec plusieurs responsabilités n'est pas une contrainte — c'est une compétence.";

export const services = {
  title: "Un seul dev pour toute la stack.",
  subtitle:
    "Mobile, web, backend et infra — je ne sous-traite rien. Du prototype au serveur de production, c'est moi qui livre.",
  items: [
    { title: "Applications mobiles", note: "React Native" },
    { title: "Plateformes web", note: "Next.js" },
    { title: "APIs", note: "NestJS · TypeScript" },
    { title: "Déploiement", note: "Docker · Scaleway" },
    { title: "Intégrations", note: "Stripe · Firebase" },
    { title: "Bases de données", note: "PostgreSQL · Supabase" },
  ],
};

export const techMarquee = [
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
  { name: "Scaleway", icon: "https://cdn.simpleicons.org/scaleway/4F0599" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
];

export const about = {
  headline: "Né à Madagascar, construit à La Réunion.",
  stat: { value: "5 ans", label: "de double vie — études et jobs alimentaires en parallèle" },
  stats: [
    { value: "3×", label: "Mention Bien" },
    { value: "Master 2", label: "Mention Très Bien — 2025" },
    { value: "8", label: "produits en production" },
    { value: "Aujourd'hui", label: "CDI chez plüm" },
  ],
  name: "Aina Raphaël Rakotonaivo",
  title: "Développeur Fullstack",
  workHistory: [
    { place: "plüm", role: "Développeur Fullstack", period: "Oct. 2025 — présent" },
    { place: "plüm (alternance)", role: "Développeur Backend", period: "Sept. 2024 — Oct. 2025" },
    { place: "ESIGE · Madagascar", role: "Développeur Web Stagiaire", period: "Déc. 2022 — Jan. 2023" },
  ],
  paragraphs: [
    "Développeur fullstack formé à l'Université de La Réunion — Master 2 Informatique 2025, Mention Très Bien. Pendant 5 ans, j'ai mené de front études et emplois alimentaires : restaurant universitaire, Burger King, SHISO Burger, inventoriste. Cette double vie m'a appris la discipline, la résistance et l'efficacité.",
    "Aujourd'hui en CDI chez plüm, je conçois et déploie des applications mobiles React Native et des plateformes web Next.js — du prototype au serveur de production.",
  ],
};

export type TimelineEntry = {
  date: string;
  title: string;
  place?: string;
  description?: string;
  tags?: string[];
  // Explicit grid row (1-indexed within the band) so overlapping periods line
  // up across the two columns — both sides share one grid, so a row's height
  // is driven by whichever side has content there.
  row: number;
};

export type TimelineBand = {
  years: string;
  left: TimelineEntry[];
  right: TimelineEntry[];
};

export const parcoursIntro = {
  title: "Cinq ans de double vie",
  subtitle:
    "Pendant que j'étudiais à l'université, je travaillais en parallèle en restauration pour financer mes études. À gauche les diplômes et le code, à droite les jobs étudiants — sur les mêmes années.",
  leftLabel: "Études / Code",
  rightLabel: "Job étudiant",
};

export const parcours: TimelineBand[] = [
  {
    years: "2024 — 2025",
    left: [
      {
        row: 1,
        date: "Oct. 2025 — présent",
        title: "Développeur Fullstack",
        place: "plüm — aujourd'hui CDI",
        description: "Évolution naturelle après le Master 2. Prise en charge du front React Native et Next.js en plus du backend.",
        tags: ["React Native", "Next.js", "NestJS", "TypeScript"],
      },
      {
        row: 2,
        date: "Sept. 2024 — Oct. 2025",
        title: "Développeur Backend",
        place: "plüm — Alternance",
        description: "Architecture NestJS, REST API, PostgreSQL/Supabase, Docker, Mailjet, n8n.",
        tags: ["NestJS", "TypeScript", "PostgreSQL", "Docker"],
      },
      {
        row: 3,
        date: "2025 · Mention Très Bien",
        title: "Master 2 Informatique",
        place: "Université de La Réunion",
        description:
          "Diplôme obtenu en menant de front un job étudiant à temps partiel — la meilleure préparation à jongler entre plusieurs contextes une fois en poste.",
        tags: ["Architecture logicielle", "Génie logiciel"],
      },
      {
        row: 4,
        date: "Jan. — Juin 2024",
        title: "Développeur TER",
        place: "LIM · Université de La Réunion",
        description: "Suivi d'activité étudiants sur serveurs TP — Bash, PostgreSQL, dashboards Dash/Python.",
        tags: ["Python", "Dash", "Bash", "PostgreSQL"],
      },
    ],
    right: [
      {
        row: 4,
        date: "Avr. 2024 — Août 2024",
        title: "Cuisinier",
        place: "Shiso Burger, Saint-Denis",
        description:
          "Rythme soutenu en cuisine sur les coups de feu — sang-froid et rapidité d'exécution, en parallèle de la fin du TER avant l'alternance chez plüm.",
        tags: ["Gestion du stress", "Rapidité d'exécution"],
      },
    ],
  },
  {
    years: "2022 — 2023",
    left: [
      {
        row: 1,
        date: "2023 · Mention Bien",
        title: "Licence Informatique",
        place: "Université de La Réunion",
        description:
          "Bases solides en algorithmique, structures de données et programmation orientée objet — premiers projets web menés en parallèle des jobs étudiants.",
        tags: ["Algorithmique", "POO", "Bases de données"],
      },
      {
        row: 2,
        date: "Sept. — Déc. 2023",
        title: "Développeur TER",
        place: "LIM · Université de La Réunion",
        description: "Mise à jour du prototype Maïdo VR — refactorisation, WebXR.",
        tags: ["JavaScript", "WebXR"],
      },
    ],
    right: [
      {
        row: 1,
        date: "Oct. 2022 — Août 2023",
        title: "Employé de restaurant",
        place: "Restaurant universitaire",
        description:
          "Cadences élevées aux heures de pointe, travail d'équipe et sens du service — mené de front avec la Licence puis le TER.",
        tags: ["Travail d'équipe", "Sens du service"],
      },
    ],
  },
  {
    years: "2021 — 2022",
    left: [
      {
        row: 1,
        date: "Déc. 2022 — Jan. 2023",
        title: "Développeur Web Stagiaire",
        place: "ESIGE · Madagascar",
        description: "Plateforme de gestion universitaire — cours en ligne, examens. Laravel full-stack.",
        tags: ["Laravel", "PHP", "MySQL"],
      },
      {
        row: 2,
        date: "2021 · Mention Bien",
        title: "Commerce électronique & e-business",
        place: "CNFDI",
        description:
          "Certification à distance suivie en parallèle des jobs étudiants — bases utiles de la relation client et de la logique business, précieuses aujourd'hui pour comprendre les besoins produit avant de coder.",
        tags: ["E-commerce", "Autonomie"],
      },
    ],
    right: [
      {
        row: 1,
        date: "Juin — Oct. 2022",
        title: "Cuisinier intérimaire",
        place: "SHISO Burger, Sainte-Marie",
        description: "Mission d'été en intérim — adaptation rapide à une nouvelle équipe et à une cadence de service intense.",
        tags: ["Adaptabilité"],
      },
      {
        row: 2,
        date: "Avr. — Juin 2022",
        title: "Inventoriste",
        place: "IVALIS",
        description: "Inventaires en grande distribution, souvent de nuit — rigueur et précision sur des volumes importants.",
        tags: ["Rigueur"],
      },
      {
        row: 3,
        date: "2021 — 2022",
        title: "Caissier — Service Civique",
        place: "Solidarité étudiante",
        description: "Accueil et accompagnement des bénéficiaires au quotidien — relation client et sens du contact humain.",
        tags: ["Relation client"],
      },
    ],
  },
  {
    years: "2017 — 2020",
    left: [
      {
        row: 1,
        date: "2017 · Mention Bien",
        title: "Baccalauréat Scientifique, Série C",
        place: "Lycée Notre Dame · Majunga, Madagascar",
        description:
          "Spécialité mathématiques et physique-chimie à Madagascar — le déclic pour la logique et la résolution de problèmes qui m'a mené vers le développement.",
      },
    ],
    right: [
      {
        row: 1,
        date: "2019 — 2020",
        title: "Employé polyvalent",
        place: "Burger King, Chaudron",
        description:
          "Premier job étudiant, dès le lycée — sens des responsabilités et gestion du rythme entre cours et travail, déjà.",
        tags: ["Ponctualité", "Autonomie"],
      },
    ],
  },
];

export const process = {
  title: "Comment je travaille",
  subtitle: "Mon processus, du ticket au serveur de production.",
  steps: [
    {
      number: "01",
      title: "Cadrer",
      description:
        "Tickets découpés et priorisés sur Notion, maquettes quand l'UI le mérite, et une definition of done écrite avant la première ligne de code.",
    },
    {
      number: "02",
      title: "Construire",
      description:
        "Branches courtes, merge requests relues, TypeScript strict de bout en bout — un même langage du mobile React Native à l'API NestJS.",
    },
    {
      number: "03",
      title: "Livrer & surveiller",
      description:
        "Docker Compose sur serveur dédié, Scaleway, suivi des erreurs en prod et hotfix rapide. Une feature n'est terminée que quand elle tourne chez les utilisateurs.",
    },
  ],
};

export type StackItem = {
  name: string;
  level: "Expert" | "Avancé" | "Intermédiaire";
  note: string;
  category: "Frontend" | "Backend" | "DevOps" | "Outils";
  icon: string;
};

export const stackTitle = {
  title: "Ce que je maîtrise en production",
  subtitle: "Pas une liste de buzzwords — chaque techno tourne aujourd'hui sur de vrais produits. Survolez une carte pour voir où.",
};

export const stackFilters = ["Tout", "Frontend", "Backend", "DevOps", "Outils"] as const;

export const stack: StackItem[] = [
  { name: "React Native", level: "Expert", note: "App plüm en prod sur iOS & Android", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", level: "Expert", note: "Plateformes web plüm, Revo et ce portfolio", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", level: "Expert", note: "Mon langage du quotidien, front & back", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", level: "Expert", note: "Design systems rapides et maintenables", category: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "NestJS", level: "Expert", note: "API microservices de plüm", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
  { name: "PostgreSQL", level: "Avancé", note: "Fonctions SQL complexes, triggers, migrations critiques en prod", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Supabase", level: "Expert", note: "Auth, base et storage chez plüm & Revo", category: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
  { name: "Python", level: "Intermédiaire", note: "Dashboards Dash au LIM", category: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Docker", level: "Avancé", note: "Déploiements Compose sur serveur dédié", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Nginx", level: "Intermédiaire", note: "Reverse proxy & SSL en production", category: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
  { name: "Scaleway", level: "Avancé", note: "Hébergement des services plüm", category: "DevOps", icon: "https://cdn.simpleicons.org/scaleway/4F0599" },
  { name: "Stripe", level: "Avancé", note: "Paiements intégrés chez plüm", category: "Outils", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
  { name: "Firebase/FCM", level: "Avancé", note: "Notifications push mobiles", category: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "n8n", level: "Avancé", note: "Workflows d'automatisation métier", category: "Outils", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
];

export const stackValues = [
  "Code maintenable",
  "Pensée système",
  "Dev-friendly",
  "Process clair",
  "Livraison rapide",
  "Handoff propre",
];

export const hobbies = {
  title: "Centres d'intérêt",
  subtitle: "Hors du code.",
  items: [
    { title: "Voitures", description: "Passion héritée de mon père mécanicien.", image: "/images/hobbies/car.jpg" },
    { title: "Sport", description: "Musculation et marche — discipline corps et esprit.", image: "/images/hobbies/sport.jpg" },
    { title: "Voyages", description: "Madagascar, La Réunion, Paris, Genève…", image: "/images/hobbies/voyage.jpg" },
    { title: "Vélo & Rando", description: "Explorer les hauts de l'île à pied ou à vélo.", image: "/images/hobbies/rando.jpg" },
  ],
};

export const faq = {
  title: "Vos questions, répondues",
  items: [
    {
      question: "Quels types de projets prenez-vous en charge ?",
      answer:
        "Applications mobiles (React Native), plateformes web (Next.js), APIs backend (NestJS), intégrations paiement (Stripe), bases de données PostgreSQL/Supabase et déploiement Docker.",
    },
    {
      question: "Travaillez-vous en remote ?",
      answer:
        "Oui — je travaille en remote depuis La Réunion, avec un fuseau horaire proche de la métropole (+2h/+3h). Déplacements ponctuels possibles à Paris, Lyon ou Toulouse.",
    },
    {
      question: "Quel est votre stack principal ?",
      answer:
        "React Native, Next.js, NestJS et TypeScript de bout en bout, avec PostgreSQL/Supabase, Docker et Scaleway pour le déploiement.",
    },
    {
      question: "Où peut-on voir votre code ?",
      answer:
        "Sur mon GitLab (lien en bas de page) — certains projets professionnels restent privés, mais je peux faire une démo sur demande.",
    },
    {
      question: "Êtes-vous disponible pour de nouvelles opportunités ?",
      answer:
        "Oui, actuellement en CDI chez plüm mais ouvert à discuter d'opportunités CDI, freelance ou missions courtes/longues.",
    },
    {
      question: "Comment puis-je vous contacter ?",
      answer:
        "Par email à raphael.rakotonaivo@gmail.com, ou via LinkedIn — je réponds sous 24h.",
    },
  ],
};

export const contact = {
  title: "Travaillons ensemble.",
  subtitle:
    "Disponible pour des opportunités CDI, remote ou des projets ambitieux. La Réunion, Paris, Lyon, Toulouse — ou derrière un écran.",
  email: "raphael.rakotonaivo@gmail.com",
  socials: [
    { label: "GitLab", href: "https://gitlab.com/raphael137" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aina-rapha%C3%ABl-rakotonaivo-80a821189/" },
  ],
  chips: ["Ouvert aux échanges", "Me répondre sous 24h"],
  ctaCard: {
    title: "Prêt à démarrer dès maintenant.",
    subtitle:
      "CDI, freelance, mission courte ou longue — parlons-en autour d'un café virtuel. Je réponds toujours.",
    mailLabel: "M'envoyer un email",
    cvLabel: "Télécharger le CV",
    cvHref: "/CV_Raphael_Rakotonaivo.pdf",
  },
  footnote: "La Réunion · Remote OK · Paris / Lyon / Toulouse",
};

export const siteMeta = {
  logo: "RAR .dev",
  footerName: "RAR",
  year: "2026",
  ownerLine: "© 2026 Aina Raphaël Rakotonaivo — La Réunion",
};
