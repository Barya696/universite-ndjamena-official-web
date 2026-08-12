# Université de N'Djamena — Site officiel

Site web institutionnel de l'[Université de N'Djamena](https://www.universite-ndjamena.td) (UDN), première université publique du Tchad. L'application présente l'université, ses formations, sa recherche et ses services aux étudiants, chercheurs et partenaires.

## Aperçu

- Page d'accueil avec diaporama, actualités et témoignages
- Navigation principale avec menus déroulants (L'université, Formations, Recherche, Vie étudiante, etc.)
- Présentation des facultés et filières (Droit, Lettres, Sciences, Santé, Économie…)
- Mise en page responsive et identité visuelle UDN (bleu marine et or)

## Stack technique

| Outil | Rôle |
|-------|------|
| [React](https://react.dev/) 18 | Interface utilisateur |
| [Vite](https://vite.dev/) 6 | Build et serveur de développement |
| [Tailwind CSS](https://tailwindcss.com/) 4 | Styles utilitaires |
| [TypeScript](https://www.typescriptlang.org/) | Typage statique |
| [Lucide React](https://lucide.dev/) | Icônes |

## Prérequis

- [Node.js](https://nodejs.org/) 18 ou supérieur
- [pnpm](https://pnpm.io/) (recommandé) ou npm

## Installation

```bash
# À la racine du dépôt
pnpm install
# ou : npm install --prefix frontend
```

## Commandes

Depuis la racine :

| Commande | Description |
|----------|-------------|
| `pnpm --dir frontend dev` | Lance le serveur de développement (Vite) |
| `pnpm --dir frontend build` | Génère la version de production dans `frontend/dist/` |

Ou depuis le dossier `frontend/` :

| Commande | Description |
|----------|-------------|
| `pnpm dev` | Lance le serveur de développement |
| `pnpm build` | Génère la version de production |

Le serveur de développement est accessible par défaut sur [http://localhost:5173](http://localhost:5173).

## Structure du projet

```
├── frontend/               # Application React (Vite)
│   ├── index.html          # Point d'entrée HTML
│   ├── src/
│   │   ├── main.tsx        # Bootstrap React
│   │   ├── app/
│   │   │   ├── App.tsx         # Composition racine
│   │   │   ├── MainLayout.tsx  # En-tête, navigation, pied de page
│   │   │   ├── Homepage.tsx    # Contenu de la page d'accueil
│   │   │   └── Images/         # Assets de la page d'accueil
│   │   └── styles/         # Feuilles de style globales et thème
│   ├── vite.config.ts
│   └── package.json
├── guidelines/
├── ATTRIBUTIONS.md
└── README.md
```

## Crédits

Voir [ATTRIBUTIONS.md](./ATTRIBUTIONS.md) pour les licences des composants et ressources tierces (shadcn/ui, Unsplash, etc.).

## Licence

Projet privé — © Université de N'Djamena. Tous droits réservés.
