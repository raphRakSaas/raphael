export type CaseStudyStat = { value: string; label: string };

export type CaseStudyChallenge = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

export type CaseStudyLink = { label: string; href: string; icon?: string };

export type CaseStudy = {
  slug: string;
  stats?: CaseStudyStat[];
  description: string;
  achievements: string[];
  challenges: CaseStudyChallenge[];
  architecture: string[];
  stack: { name: string; icon: string }[];
  links: CaseStudyLink[];
  context: string;
  role: string;
  period: string;
  privacyNote?: string;
  gallery?: string[];
  galleryStyle?: "phone" | "desktop";
  cover?: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  "plum-services": {
    slug: "plum-services",
    stats: [
      { value: "iOS + Android", label: "publiée sur les deux stores" },
      { value: "10+", label: "services tiers intégrés" },
      { value: "0 → 1", label: "produit lancé en production" },
    ],
    description:
      "Chez plüm depuis septembre 2024 — d'abord en alternance, puis en CDI depuis octobre 2025 — je développe et maintiens une application mobile React Native et une plateforme web Next.js dédiées à la mise en relation entre prestataires de services à domicile et clients. Architecture microservices avec NestJS, base de données PostgreSQL gérée via Supabase, paiements intégrés via Stripe, notifications push Firebase/FCM, emails transactionnels Mailjet. Déploiement sur serveur dédié Scaleway avec Docker Compose et Nginx. Intégration de workflows d'automatisation n8n et d'un agent vocal IA via ElevenLabs.",
    achievements: [
      "Développé et publié l'application React Native sur l'App Store et Google Play",
      "Conçu l'architecture microservices NestJS : auth, réservations, paiements, notifications",
      "Intégré Stripe (paiements clients et reversements prestataires), Firebase/FCM et Mailjet",
      "Monté l'infrastructure de production : Docker Compose, Nginx, serveur dédié Scaleway",
      "Automatisé les processus métier avec n8n et intégré un agent vocal IA ElevenLabs",
      "Automatisé l'émission et l'envoi des factures aux clients et aux prestataires après chaque prestation",
      "Anticipé la réforme de facturation électronique 2026 : intégration de Factur-X et connexion à une plateforme de dématérialisation partenaire (PDP) agréée par l'État, obligatoire pour les factures B2B à partir de septembre 2026",
    ],
    challenges: [
      {
        title: "Double encodage JSONB en base",
        problem:
          "Des payloads étaient sérialisés deux fois avant insertion : les colonnes JSONB contenaient des chaînes JSON échappées au lieu d'objets, ce qui cassait les lectures côté mobile.",
        solution:
          "Audit de toutes les écritures, normalisation de la sérialisation dans la couche service NestJS, puis migration SQL pour réparer les lignes existantes sans interruption de service.",
        result: "Lectures fiables sur toutes les plateformes, plus aucune erreur de parsing.",
      },
      {
        title: "Décalages horaires UTC+4",
        problem:
          "Les créneaux de réservation s'affichaient décalés : le serveur raisonnait en UTC alors que les utilisateurs sont à La Réunion (UTC+4), avec des cas limites autour de minuit.",
        solution:
          "Normalisation de tous les horodatages en UTC en base, conversion systématique au fuseau du client à l'affichage, et tests dédiés sur les cas limites.",
        result: "Zéro réservation décalée depuis le correctif.",
      },
      {
        title: "Race condition au déploiement",
        problem:
          "Lors des redéploiements Docker Compose sur Scaleway, deux instances pouvaient traiter les mêmes tâches ou exécuter les migrations en parallèle.",
        solution:
          "Verrouillage des migrations, healthchecks et ordre de démarrage des conteneurs maîtrisé pour fiabiliser les mises en production.",
        result: "Déploiements reproductibles, sans doublons ni état corrompu.",
      },
    ],
    architecture: ["App React Native", "API NestJS (microservices)", "PostgreSQL · Supabase", "Docker · Nginx · Scaleway"],
    stack: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Stripe", icon: "https://cdn.simpleicons.org/stripe/635BFF" },
      { name: "Firebase/FCM", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
      { name: "Scaleway", icon: "https://cdn.simpleicons.org/scaleway/4F0599" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/EA4B71" },
      { name: "ElevenLabs", icon: "https://cdn.simpleicons.org/elevenlabs/000000" },
    ],
    links: [
      { label: "Voir le site", href: "https://www.plumservices.co/" },
      {
        label: "App Store",
        href: "https://apps.apple.com/fr/app/pl%C3%BCm-services/id6751805941",
        icon: "https://cdn.simpleicons.org/appstore",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.plumservices.plum.prod&hl=fr",
        icon: "https://cdn.simpleicons.org/googleplay",
      },
    ],
    cover: "/images/plum/plum.png",
    context: "plüm — alternance puis CDI (oct. 2025)",
    role: "Développeur Fullstack",
    period: "Sept. 2024 — présent",
    privacyNote: "Code source propriété de plüm (dépôt privé). Architecture et extraits présentables en entretien.",
    gallery: [
      "/images/plum/plum-0.webp",
      "/images/plum/plum-1.webp",
      "/images/plum/plum-2.webp",
      "/images/plum/plum-3.webp",
      "/images/plum/plum-4.webp",
    ],
  },
  "plum-website": {
    slug: "plum-website",
    stats: [
      { value: "1er", label: "site mis en ligne par mes soins, de A à Z" },
      { value: "100%", label: "déploiement automatisé à chaque push sur main" },
      { value: "0 → prod", label: "domaine acheté, configuré et en ligne" },
    ],
    description:
      "La landing page publique de plüm — vitrine de l'offre ménage, linge et garde d'enfants à La Réunion, et point d'entrée vers les applications iOS et Android. J'en ai construit la base avec Next.js et Tailwind CSS, mais ce projet est surtout celui de ma première mise en production : mon tout premier site accessible publiquement, du code jusqu'au nom de domaine. Je ne connaissais alors ni Cloudflare Pages, ni la configuration DNS — j'ai tout appris sur le tas, documentation officielle et assistants IA à l'appui, jusqu'à mettre en place un pipeline CI/CD complet : chaque push sur main build et déploie automatiquement le site via un Worker Cloudflare Pages.",
    achievements: [
      "Développé la landing page avec Next.js et Tailwind CSS",
      "Mis en place un pipeline CI/CD : chaque push sur main déclenche un build et un déploiement automatique sur Cloudflare Pages via un Worker",
      "Acheté un nom de domaine et configuré les enregistrements DNS pour le pointer vers l'hébergement",
      "Appris à purger le cache Cloudflare pour que les mises à jour soient visibles immédiatement après déploiement",
      "Premier site mis en production en autonomie complète — le déclic qui m'a donné envie d'explorer Vercel et Netlify, que j'utilise aujourd'hui sur mes side projects",
    ],
    challenges: [
      {
        title: "Premier déploiement en production",
        problem:
          "Je n'avais encore jamais mis un site en ligne moi-même : Cloudflare Pages, les Workers, la notion même de build et de déploiement automatique m'étaient complètement inconnus.",
        solution:
          "J'ai lu la documentation officielle de Cloudflare et échangé avec des assistants IA pour comprendre chaque étape, jusqu'à mettre en place un pipeline complet : push sur main → build Next.js → déploiement automatique via un Worker Cloudflare Pages.",
        result: "Un site accessible publiquement quelques minutes après chaque commit, sans aucune intervention manuelle.",
      },
      {
        title: "Nom de domaine et configuration DNS",
        problem:
          "Acheter un nom de domaine et le relier à un hébergeur me semblait obscur : enregistrements A, CNAME, propagation DNS, purge de cache — tout ça était nouveau.",
        solution:
          "J'ai acheté le domaine, configuré les enregistrements DNS pour pointer vers Cloudflare, et appris à purger le cache pour que chaque changement soit visible immédiatement plutôt que de rester bloqué en cache pendant des heures.",
        result: "Un nom de domaine professionnel opérationnel, et une compétence DNS/cache que je réutilise depuis sur tous mes projets, plüm comme personnels.",
      },
      {
        title: "Élargir la boîte à outils",
        problem:
          "Cloudflare Pages était le seul hébergeur que je connaissais — je ne savais pas s'il existait des alternatives plus adaptées selon le type de projet.",
        solution:
          "En creusant le sujet une fois ce premier déploiement maîtrisé, j'ai découvert Vercel et Netlify, que j'utilise aujourd'hui sur mes side projects selon leurs besoins spécifiques.",
        result: "Une vraie culture DevOps front — je choisis désormais l'hébergeur adapté à chaque projet plutôt que de toujours réutiliser le même par défaut.",
      },
    ],
    architecture: ["Next.js + Tailwind CSS", "Push sur main (GitHub)", "Worker Cloudflare Pages (build & déploiement)", "DNS → domaine personnalisé"],
    stack: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Cloudflare Pages", icon: "https://cdn.simpleicons.org/cloudflarepages" },
      { name: "Cloudflare Workers", icon: "https://cdn.simpleicons.org/cloudflareworkers" },
      { name: "Cloudflare DNS", icon: "https://cdn.simpleicons.org/cloudflare/F38020" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    ],
    links: [{ label: "Voir le site", href: "https://plumservices.co/" }],
    cover: "/images/plum-website/image.png",
    context: "plüm — alternance puis CDI (oct. 2025)",
    role: "Développeur Frontend",
    period: "2024 — présent",
    privacyNote: "Code source propriété de plüm (dépôt privé). Architecture et démarche présentables en entretien.",
  },
  "plum-pro": {
    slug: "plum-pro",
    description:
      "Plateforme web responsive destinée aux professionnels de la location courte durée (conciergeries, propriétaires multi-biens). Elle reprend la logique de l'application mobile plüm dans une version pensée pour le B2B : gestion du parc de biens, réservation et suivi des prestations de ménage, agenda, messagerie intégrée avec les prestataires, factures et paiements. Construite sur la même API NestJS que l'app mobile : la logique métier n'existe qu'une seule fois côté serveur, les deux clients restent automatiquement cohérents.",
    achievements: [
      "Développé la web app responsive Next.js dédiée aux comptes professionnels",
      "Gestion du parc de biens et réservation des prestations de ménage",
      "Messagerie intégrée entre professionnels et prestataires",
      "Même API NestJS partagée entre mobile et web — une seule source de vérité",
    ],
    challenges: [
      {
        title: "Parité mobile / web sans duplication",
        problem:
          "Deux clients (app mobile grand public, web app pro) couvrent des fonctionnalités proches : le risque classique est de dupliquer la logique et de voir les deux diverger à chaque évolution.",
        solution:
          "Toute la logique métier vit dans l'API NestJS partagée, avec des types TypeScript communs. Les clients ne font que de l'affichage et de l'orchestration.",
        result: "Une fonctionnalité développée côté serveur est disponible sur les deux clients.",
      },
      {
        title: "Une interface pro du desktop au téléphone",
        problem:
          "Les prestataires utilisent la plateforme au bureau sur grand écran, mais aussi en déplacement sur mobile — les mêmes écrans devaient rester efficaces partout.",
        solution:
          "Design responsive mobile-first : tableaux qui se replient en cartes, navigation adaptée au pouce, actions critiques toujours accessibles.",
        result: "Un seul code, une expérience adaptée à chaque écran.",
      },
    ],
    architecture: ["Web app Next.js (B2B)", "API NestJS partagée", "PostgreSQL · Supabase", "Docker · Nginx · Scaleway"],
    stack: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
    links: [{ label: "Voir le site", href: "https://bnb.plumservices.co/" }],
    gallery: [
      "/images/bnb-profile/bnb-biens.webp",
      "/images/bnb-profile/bnb-presta.webp",
      "/images/bnb-profile/bnb-calendrier.webp",
      "/images/bnb-profile/bnb-connexion.webp",
    ],
    galleryStyle: "desktop",
    context: "plüm — alternance puis CDI (oct. 2025)",
    role: "Développeur Fullstack",
    period: "Sept. 2024 — présent",
    privacyNote: "Code source propriété de plüm (dépôt privé). Architecture et extraits présentables en entretien.",
  },
  "plum-dashboard": {
    slug: "plum-dashboard",
    description:
      "Dashboard d'administration interne qui centralise le pilotage de la startup : données opérationnelles, application des règles métier, gestion documentaire et suivi de l'activité. C'est l'outil quotidien de l'équipe pour opérer la plateforme — là où se prennent les décisions et où s'appliquent les règles qui gouvernent l'app mobile et l'espace pro. Pour des raisons de sécurité, ni lien ni captures d'écran publiques.",
    achievements: [
      "Centralisé les données opérationnelles et le suivi d'activité de la startup",
      "Implémenté les règles métier de bout en bout, appliquées à toute la plateforme",
      "Mis en place la gestion documentaire interne",
      "Sécurisé l'accès par rôles et permissions — l'outil n'est pas exposé publiquement",
    ],
    challenges: [
      {
        title: "Une seule source de vérité pour le pilotage",
        problem:
          "Les informations nécessaires au pilotage étaient dispersées entre plusieurs outils, avec un risque permanent de décisions prises sur des données obsolètes.",
        solution:
          "Un dashboard unique branché directement sur la base de production, qui agrège données, documents et règles métier au même endroit.",
        result: "L'équipe pilote la startup sur des données à jour, dans un seul outil.",
      },
      {
        title: "Sécuriser un outil très privilégié",
        problem:
          "Un dashboard d'administration accède à tout : données clients, documents, règles métier. C'est la surface d'attaque la plus sensible de la plateforme.",
        solution:
          "Accès restreint par rôles et permissions, aucune exposition publique de l'outil, et traçabilité des actions sensibles.",
        result: "Aucun accès non autorisé à ce jour — la donnée sensible reste cloisonnée à l'équipe qui doit y accéder.",
      },
    ],
    architecture: ["Dashboard Next.js", "API NestJS", "PostgreSQL · Supabase", "Accès restreint par rôles"],
    stack: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "NestJS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
    ],
    links: [],
    context: "plüm — outil interne",
    role: "Développeur Fullstack",
    period: "2025 — présent",
    privacyNote: "Outil interne — ni lien ni captures publiques pour des raisons de sécurité. Démonstration possible en entretien.",
  },
  revo: {
    slug: "revo",
    stats: [
      { value: "100%", label: "conçu et développé en solo" },
      { value: "< 5 s", label: "pour saisir une série en séance" },
      { value: "Freemium", label: "+ essai Pro intégré" },
    ],
    description:
      "Mon projet entrepreneurial, conçu, développé et déployé entièrement en solo sur mon temps libre. Revo centralise l'activité des coachs sportifs : profils clients, saisie rapide des séances, programmes assignables, bibliothèque d'exercices illustrés et détection automatique des records personnels. Interface pensée pour une utilisation sur le terrain — un coach saisit une série en quelques secondes entre deux exercices. Modèle freemium avec essai Pro.",
    achievements: [
      "Produit imaginé, designé, développé et déployé seul — de l'étude du besoin au lancement",
      "Détection automatique des records personnels calculée en SQL côté Supabase",
      "Saisie de séance optimisée terrain : ajout d'une série en quelques secondes",
      "Multi-tenancy coach/clients sécurisé par Row Level Security Supabase",
      "Déploiement continu sur Vercel avec environnement de préproduction",
    ],
    challenges: [
      {
        title: "Saisie ultra-rapide sur le terrain",
        problem:
          "Un coach n'a que quelques secondes entre deux exercices : un formulaire classique rendait la saisie de séance inutilisable en conditions réelles.",
        solution:
          "Interface optimisée mobile-first avec valeurs pré-remplies depuis l'historique, mises à jour optimistes et navigation au pouce.",
        result: "Une série se saisit en moins de cinq secondes, sans quitter l'écran.",
      },
      {
        title: "Détection automatique des records",
        problem:
          "Identifier un record personnel (poids, répétitions, volume) à chaque saisie sans dégrader les performances ni dupliquer la logique côté client.",
        solution:
          "Calcul des records directement en SQL dans Supabase, déclenché à l'insertion de la série — une seule source de vérité.",
        result: "Les records s'affichent instantanément et restent cohérents sur tout l'historique.",
      },
      {
        title: "Isolation des données par coach",
        problem:
          "Chaque coach ne doit voir que ses clients et ses séances, sans qu'aucune requête mal écrite côté client ne puisse fuiter des données.",
        solution:
          "Row Level Security PostgreSQL activée sur toutes les tables, avec politiques par rôle testées — la sécurité est garantie par la base, pas par le code applicatif.",
        result: "Zéro fuite de données inter-comptes possible, sécurité vérifiée au niveau base plutôt qu'applicatif.",
      },
    ],
    architecture: ["Next.js (App Router)", "Supabase Auth + RLS", "PostgreSQL (records en SQL)", "Vercel (CI/CD)"],
    stack: [
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
    ],
    links: [{ label: "Voir le site", href: "https://coach-track.vercel.app/" }],
    gallery: [
      "/images/revo-capture/revo-hero.webp",
      "/images/revo-capture/revo-dashboard.webp",
      "/images/revo-capture/revo-exercice.webp",
      "/images/revo-capture/revo-client.webp",
      "/images/revo-capture/revo-cta.webp",
    ],
    galleryStyle: "desktop",
    context: "Projet personnel",
    role: "Créateur & Développeur Fullstack",
    period: "2025 — présent",
    privacyNote: "Dépôt privé — démonstration du code et de l'architecture possible sur demande.",
  },
};
