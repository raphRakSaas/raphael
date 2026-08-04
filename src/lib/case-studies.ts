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
  stats: CaseStudyStat[];
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
  gallery: string[];
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
};
