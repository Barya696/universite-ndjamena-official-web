# Université de N'Djamena — Site officiel

Site web institutionnel de l'[Université de N'Djamena](https://www.universite-ndjamena.td) (UDN), première université publique du Tchad. L'application présente l'université, ses formations, sa recherche et ses services aux étudiants, chercheurs et partenaires.

## Aperçu

- **Page d'accueil** avec hero, diaporama d'actualités, facultés, programmes, événements à venir et section de contact
- **Portail étudiant** autonome avec connexion / inscription (numéro d'étudiant, faculté, niveau, mot de passe, indicateur de force)
- **Navigation principale** avec sous-menus déroulants : L'université, Admissions, Formations, Recherche, Vie étudiante, Campus, Contact
- **Identité visuelle UDN** : bleu marine (`#1a3a5c`) et or (`#c8a84b`), typographie Georgia + Source Sans Pro
- Mise en page responsive et accessible (barre de recherche, liens d'aide, support)

## Routes

| Chemin | Page | Composant |
|--------|------|-----------|
| `/` | Page d'accueil institutionnelle | `Homepage.tsx` |
| `/portail-etudiant` | Portail de connexion / inscription étudiant | `StudentLogin.tsx` |

Toutes les routes sont enveloppées par le `MainLayout.tsx` (en-tête, navigation globale, pied de page).

## Stack technique

| Outil | Rôle |
|-------|------|
| [React](https://react.dev/) 18.3 | Interface utilisateur |
| [React Router](https://reactrouter.com/) 7 | Routage côté client |
| [Vite](https://vite.dev/) 6 | Build et serveur de développement |
| [Tailwind CSS](https://tailwindcss.com/) 4 | Styles utilitaires |
| [TypeScript](https://www.typescriptlang.org/) | Typage statique |
| [Radix UI](https://www.radix-ui.com/) | Composants accessibles (Dialog, Dropdown, Navigation menu, Accordion, etc.) |
| [MUI](https://mui.com/) 7 | Material UI (icônes, composants complémentaires) |
| [Lucide React](https://lucide.dev/) 0.487 | Icônes légères |
| [Framer Motion](https://motion.dev/) | Animations |
| [Embla Carousel](https://www.embla-carousel.com/) | Diaporama hero |
| [Recharts](https://recharts.org/) | Visualisations de données |
| [Sonner](https://sonner.emilkowal.ski/) | Notifications toast |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Combinaison de classes CSS |

## Prérequis

- [Node.js](https://nodejs.org/) 18 ou supérieur
- npm (inclus avec Node.js) ou [pnpm](https://pnpm.io/)

## Installation

```bash
cd frontend
npm install
```

## Commandes

Depuis le dossier `frontend/` :

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lance le serveur de développement Vite — [http://localhost:5173](http://localhost:5173) |
| `npm run build` | Génère la version de production dans `frontend/dist/` |
| `npx vite preview` | Prévisualise localement la build de production |

## Structure du projet

```
universite-ndjamena/
├── frontend/                    # Application React (Vite)
│   ├── index.html               # Point d'entrée HTML
│   ├── vite.config.ts           # Configuration Vite + Tailwind
│   ├── package.json             # Dépendances et scripts
│   └── src/
│       ├── main.tsx             # Bootstrap React
│       ├── app/
│       │   ├── App.tsx          # Routes principales (/, /portail-etudiant)
│       │   ├── brand.ts         # Palette et tokens de marque UDN (couleurs, typo, hero)
│       │   ├── MainLayout.tsx   # En-tête, HeroSubnav (navbar), section CTA, pied de page
│       │   ├── Homepage.tsx     # Contenu page d'accueil (hero, actualités, facultés, etc.)
│       │   ├── StudentLogin.tsx # Portail étudiant (connexion + inscription à onglets)
│       │   └── Images/          # Assets images
│       │       ├── Ceremonial.jpeg    # Photo cérémonie UDN
│       │       ├── Technology.jpeg    # Photo technologies / laboratoire
│       │       └── laboratory.jpg     # Photo laboratoire
│       └── styles/              # Feuilles de style globales
├── guidelines/
├── ATTRIBUTIONS.md              # Crédits des ressources tierces
└── README.md
```

## Identité visuelle

Les couleurs et tokens de la marque UDN sont centralisés dans `frontend/src/app/brand.ts` :

```ts
navy      = "#1a3a5c"   // Bleu marine UDN
gold      = "#c8a84b"   // Or / jaune doré UDN
goldLight = "#e8d488"   // Or clair (survols, accents)
navyDark  = "#0f2a42"   // Marine foncé (pied de page)
```

Police de caractères : **Georgia** (serif, titres) + **Source Sans Pro** (sans-serif, corps de texte).

## Caractéristiques du portail étudiant

- Formulaire de connexion avec identifiant (numéro étudiant ou email) + mot de passe masquable
- Formulaire d'inscription multi-champs : nom, prénom, N° étudiant, email, faculté (7 options), niveau (L1–Doctorat)
- Indicateur visuel de force du mot de passe (4 niveaux)
- Validation côté client des correspondances de mot de passe et des formats email
- Gestion des états : chargement (spinner), succès, erreurs (AlertCircle)
- Case "Se souvenir de moi" + lien de réinitialisation de mot de passe
- Liens vers support (`support@undt.edu.td`)

## Build de production

La dernière build validée génère :

```
dist/
├── index.html                           0.73 kB
└── assets/
    ├── Technology-*.jpeg              143.68 kB
    ├── Ceremonial-*.jpeg              613.59 kB
    ├── laboratory-*.jpg               708.66 kB
    ├── index-*.css                     26.09 kB  (gzip 5.75 kB)
    └── index-*.js                     240.67 kB  (gzip 73.69 kB)
```

Temps de build moyen : ~3,8 s (1615 modules transformés).

## Crédits

Voir [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) pour les licences des composants et ressources tierces (Radix UI, MUI, Unsplash, Lucide, etc.).

## Licence

Projet privé — © Université de N'Djamena. Tous droits réservés.
