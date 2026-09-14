import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Home,
  Stethoscope,
  Briefcase,
  Users,
  Scale,
  ShieldCheck,
  Eye,
  Send,
  CheckCircle2,
  Building2,
  ChevronRight,
} from "lucide-react";
import { BRAND } from "../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const CAMPUS = [
  {
    id: "toukra",
    nom: "Campus de Toukra",
    adresse: "Campus de Toukra, BP 1117, N'Djaména",
    tel: "+235 22 51 44 60",
    email: "contact.toukra@undt.edu.td",
    description:
      "Siège administratif et principal campus, accueillant les facultés de Droit, Sciences Économiques et Sciences Exactes.",
    batiments: [
      "Recteurat & Administration centrale",
      "Faculté de Droit & Sciences Politiques",
      "Faculté des Sciences Économiques & de Gestion",
      "Faculté des Sciences Exactes & Appliquées",
      "Bibliothèque Centrale (3 500 m²)",
      "Amphis A, B, C — 1 200 places au total",
    ],
  },
  {
    id: "farcha",
    nom: "Campus de Farcha",
    adresse: "Faculté de Médecine, Campus de Farcha, N'Djaména",
    tel: "+235 22 51 44 71",
    email: "contact.farcha@undt.edu.td",
    description:
      "Campus dédié aux sciences de la santé, avec la Faculté de Médecine, la Pharmacie et l'Hôpital Universitaire.",
    batiments: [
      "Faculté de Médecine & des Sciences de la Santé",
      "Faculté de Pharmacie",
      "Faculté de Chirurgie Dentaire",
      "Hôpital Universitaire La Renaissance",
      "Bibliothèque FMSS (1 200 m²)",
      "Laboratoires de Biologie & de Biochimie",
    ],
  },
  {
    id: "ardep-djoumal",
    nom: "Campus d'Ardep-Djoumal",
    adresse: "Faculté des Lettres, Ardep-Djoumal, N'Djaména",
    tel: "+235 22 51 44 82",
    email: "contact.ardep@undt.edu.td",
    description:
      "Campus des sciences humaines et sociales, langues, éducation et théologie, au cœur de la ville.",
    batiments: [
      "Faculté des Lettres & Sciences Humaines",
      "Faculté des Sciences de l'Éducation",
      "Faculté de Théologie & Sciences Religieuses",
      "Institut des Langues Nationales",
      "Bibliothèque FLSH (900 m²)",
      "Maison des Étudiants & Espace Culturel",
    ],
  },
];

const RESIDENCES = [
  {
    nom: "Résidence Étudiante Toukra A",
    capacite: "480 lits",
    type: "Mixte — chambres de 2",
    services:
      "Eau, électricité 24h/24, wifi, blanchisserie, réfectoire, infirmerie de proximité.",
    tarif: "25 000 FCFA / année universitaire",
  },
  {
    nom: "Résidence Étudiante Toukra B",
    capacite: "360 lits",
    type: "Filles — chambres de 2",
    services:
      "Gardiennage 24h/24, eau chaude, wifi, cuisine partagée, salle d'étude, buanderie.",
    tarif: "25 000 FCFA / année universitaire",
  },
  {
    nom: "Résidence Farcha FMSS",
    capacite: "240 lits",
    type: "Étudiants en santé — chambres de 2",
    services:
      "Proximité hôpital, eau et électricité permanentes, bibliothèque de proximité, salle de repos.",
    tarif: "30 000 FCFA / année universitaire",
  },
  {
    nom: "Résidence Doctorants",
    capacite: "80 studios individuels",
    type: "Doctorants & chercheurs invités",
    services:
      "Studio meublé, connexion haut-débit, cuisine, accès laboratoires 24h/24.",
    tarif: "60 000 FCFA / an — sur dossier",
  },
];

const SANTE = [
  {
    nom: "Service Médical de Toukra",
    lieu: "Bâtiment administratif, rez-de-chaussée",
    horaires: "Lundi–Vendredi 8h–18h · Urgences 24h/24",
    tel: "+235 66 10 10 01",
    services:
      "Consultations générales gratuites pour étudiants inscrits, pharmacie de base, prise de sang, vaccinations, orientation vers FMSS.",
  },
  {
    nom: "Service Médical de Farcha",
    lieu: "Faculté de Médecine, aile B",
    horaires: "Lundi–Samedi 7h–20h · Urgences 24h/24",
    tel: "+235 66 10 10 02",
    services:
      "Médecine générale, dentaire, pharmacie, radiographie conventionnelle, hospitalisation de courte durée.",
  },
  {
    nom: "Service Médical d'Ardep-Djoumal",
    lieu: "Maison des Étudiants",
    horaires: "Lundi–Vendredi 8h–16h",
    tel: "+235 66 10 10 03",
    services:
      "Consultations générales, suivi psychologique étudiant, orientation vers structures spécialisées.",
  },
];

const ORIENTATION = [
  {
    titre: "Bureau d'Orientation & d'Insertion Professionnelle",
    mission:
      "Accompagner les étudiants de la L1 au Doctorat dans la construction de leur projet professionnel et la recherche de stages et d'emplois.",
    prestations: [
      "Entretiens individuels d'orientation et bilan de compétences",
      "Ateliers CV, lettre de motivation, préparation aux entretiens",
      "Forum Emploi & Entrepreneuriat annuel en octobre",
      "Stage d'immersion en entreprise pour les L3 et M2",
      "Portail en ligne des offres de stage & d'emploi partenaires",
    ],
    contact: "insertion@undt.edu.td · +235 22 51 44 99",
    local: "Bâtiment A — Campus de Toukra, 2e étage",
  },
];

const ALUMNI = [
  {
    titre: "Réseau des Anciens de l'UDN (Réseau-UDN)",
    mission:
      "Rassembler les diplômés, favoriser les rencontres inter-promotions et accompagner la nouvelle génération d'étudiants par le mentorat.",
    actions: [
      "Annuaire des diplômés (1975 à aujourd'hui — 42 000+ membres)",
      "Programme de mentorat Alumnus > Étudiant (parrainage 1:1)",
      "Soirées & conférences inter-promotions tous les trimestres",
      "Bourses Alumni pour étudiants en Master & Doctorat",
      "Partenariats entreprises pour offres réservées aux anciens",
    ],
    adhesion:
      "Gratuite sur inscription — carte de membre, accès événements privilégiés",
    contact: "alumni@undt.edu.td · +235 22 51 44 98",
  },
];

const MENTIONS_LEGALES = [
  ["Éditeur", "Université de N'Djamena, Établissement public à caractère scientifique, culturel et professionnel (EPSCP), BP 1117 N'Djaména, République du Tchad."],
  ["Directeur de publication", "Le Recteur de l'Université de N'Djamena, Pr. (à nommer)."],
  ["Responsable de la rédaction", "Le Directeur de la Communication et des Médias."],
  ["Hébergement", "Centre de Calcul et de Ressources Informatiques (CCRI) de l'Université de N'Djamena, Campus de Toukra."],
  ["Propriété intellectuelle", "L'ensemble des contenus (textes, images, logos) est la propriété exclusive de l'UDN sauf mention contraire. Toute reproduction est interdite sans autorisation écrite."],
  ["Droit applicable", "Droit tchadien. Compétence territoriale : tribunaux de N'Djaména."],
];

const CONFIDENTIALITE = [
  "Les données personnelles collectées sur ce site (formulaires d'inscription, candidature, portail étudiant) sont destinées exclusivement aux services administratifs et pédagogiques de l'UDN.",
  "Aucune donnée n'est cédée à des tiers hors cadre légal ou partenariats officiels (établissements d'enseignement supérieur, autorités publiques tchadiennes).",
  "Les étudiants et personnels disposent d'un droit d'accès, de rectification et de suppression de leurs données, à adresser par écrit au Délégué à la Protection des Données : dpo@undt.edu.td.",
  "Les connexions au portail étudiant et aux outils numériques sont journalisées pendant 12 mois conformément aux dispositions du Code Tchadien des Télécommunications.",
  "Ce site utilise des cookies strictement nécessaires au fonctionnement (session, préférences). Aucun cookie publicitaire ou de tracking n'est déposé.",
];

const ACCESSIBILITE = [
  ["Engagement", "L'UDN vise la conformité RGAA niveau AA. Des adaptations sont progressivement déployées sur l'ensemble du portail."],
  ["Navigateur & clavier", "Tous les éléments de navigation sont accessibles au clavier (Tabulation, Entrée, Échap) et compatibles avec les lecteurs d'écran (NVDA, JAWS, VoiceOver)."],
  ["Contrastes & typographie", "Les contrastes respectent les ratios WCAG 2.1 AA. La police système est remplaçable par une police dyslexique via les outils du navigateur."],
  ["Vidéos & médias", "Les vidéos institutionnelles sont sous-titrées en français. Les images porteuses d'information comportent une description alternative (balise alt)."],
  ["Contact accessibilité", "Pour toute difficulté d'accès ou demande d'adaptation : accessibilite@undt.edu.td — Réponse sous 5 jours ouvrés."],
];

const DEPARTEMENTS = [
  { service: "Accueil & Standard", email: "accueil@undt.edu.td", tel: "+235 22 51 44 00" },
  { service: "Inscriptions & Scolarité", email: "scolarite@undt.edu.td", tel: "+235 22 51 44 10" },
  { service: "Candidatures & Admission", email: "candidatures@undt.edu.td", tel: "+235 22 51 44 11" },
  { service: "Portail Étudiant — Assistance", email: "portail-support@undt.edu.td", tel: "+235 66 12 34 56" },
  { service: "Recherches & Partenariats", email: "recherche@undt.edu.td", tel: "+235 22 51 44 20" },
  { service: "Communication & Presse", email: "presse@undt.edu.td", tel: "+235 22 51 44 30" },
  { service: "Bibliothèques & Ressources", email: "biblio@undt.edu.td", tel: "+235 22 51 44 40" },
  { service: "Services Sociaux & bourses", email: "bourses@undt.edu.td", tel: "+235 22 51 44 50" },
];

export default function CampusContact() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const sectionHeading = (label: string, icon?: React.ReactNode) => (
    <h2
      className="text-2xl font-bold mb-6 pb-2 flex items-center gap-3"
      style={{
        color: NAVY,
        fontFamily: "Georgia, serif",
        borderBottom: `3px solid ${GOLD}`,
      }}
    >
      {icon}
      <span>{label}</span>
    </h2>
  );

  return (
    <div className="bg-white min-h-screen">
      <section
        id="haut"
        className="py-16 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${BRAND.navyDeep} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Campus, Contact & Services
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Trois campus à N'Djaména, des services dédiés aux étudiants et un
            annuaire complet : trouvez ici toutes les informations pratiques
            pour nous joindre.
          </p>

          <div className="grid md:grid-cols-4 gap-3 mt-8">
            {[
              { href: "#campus", label: "Nos campus", icon: Building2 },
              { href: "#residences", label: "Résidences", icon: Home },
              { href: "#sante", label: "Santé", icon: Stethoscope },
              { href: "#orientation", label: "Orientation", icon: Briefcase },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center justify-center gap-2 rounded-lg px-4 py-3 font-semibold transition-all hover:brightness-105"
                style={{
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  color: "#fff",
                  fontFamily: "Georgia, serif",
                }}
              >
                <Icon className="w-4 h-4 shrink-0" style={{ color: GOLD }} />
                <ChevronRight className="w-3.5 h-3.5 shrink-0 opacity-60 ml-auto" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="campus" className="max-w-6xl mx-auto px-4 py-12">
        {sectionHeading("Nos 3 campus", <Building2 className="w-7 h-7 shrink-0" style={{ color: GOLD }} />)}

        <div className="space-y-6">
          {CAMPUS.map((c) => (
            <article
              key={c.id}
              className="rounded-lg border p-6 md:p-7 bg-white"
              style={{
                borderColor: "#e2e8f0",
                borderTop: `4px solid ${GOLD}`,
              }}
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-3">
                  <h3
                    className="text-xl font-bold mb-1"
                    style={{ color: NAVY, fontFamily: "Georgia, serif" }}
                  >
                    {c.nom}
                  </h3>
                  <p className="text-sm text-[#646464] leading-relaxed mb-4">
                    {c.description}
                  </p>

                  <div className="space-y-2 text-sm text-[#444] mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                      <span>{c.adresse}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                      <span>{c.tel}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                      <span>{c.email}</span>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold mb-2" style={{ color: NAVY }}>
                    Bâtiments & structures
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-y-1 gap-x-4">
                    {c.batiments.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-sm text-[#444]"
                      >
                        <ChevronRight className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="md:col-span-2 rounded-lg flex items-center justify-center min-h-[200px]"
                  style={{
                    background:
                      "linear-gradient(135deg, #e8f0f8 0%, #f4f8fc 100%)",
                    border: `2px dashed ${GOLD}66`,
                  }}
                >
                  <div className="text-center px-6">
                    <MapPin
                      className="w-12 h-12 mx-auto mb-2"
                      style={{ color: NAVY }}
                    />
                    <p
                      className="text-xs font-semibold"
                      style={{ color: NAVY }}
                    >
                      Plan interactif à venir
                    </p>
                    <p className="text-xs text-[#646464] mt-1">
                      Carte {c.id} · Intégration OpenStreetMap
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="residences" className="max-w-6xl mx-auto px-4 py-12">
        {sectionHeading("Résidences étudiantes", <Home className="w-7 h-7 shrink-0" style={{ color: GOLD }} />)}

        <div className="grid md:grid-cols-2 gap-5">
          {RESIDENCES.map((r) => (
            <div
              key={r.nom}
              className="rounded-lg border bg-white p-5"
              style={{ borderColor: "#e2e8f0", borderTop: `4px solid ${GOLD}` }}
            >
              <h3
                className="text-lg font-bold mb-1"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {r.nom}
              </h3>
              <div className="flex flex-wrap gap-2 mb-3">
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{ background: "#e8f0f8", color: NAVY }}
                >
                  {r.capacite}
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-semibold"
                  style={{
                    background: `${GOLD}22`,
                    color: NAVY,
                    border: `1px solid ${GOLD}55`,
                  }}
                >
                  {r.type}
                </span>
              </div>
              <p className="text-sm text-[#444] leading-relaxed mb-3">
                {r.services}
              </p>
              <p
                className="text-sm font-bold"
                style={{ color: GOLD }}
              >
                {r.tarif}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-6 rounded-lg border p-4"
          style={{ borderColor: "#e2e8f0", background: "#f8fafc" }}
        >
          <p className="text-sm text-[#444]">
            <strong style={{ color: NAVY }}>Candidatures logement :</strong>{" "}
            Dépôt de dossier en ligne via le portail étudiant chaque été, du 1er
            juillet au 15 août. Commission sociale en septembre — résultats sur
            le portail. Contact : <strong>bourses@undt.edu.td</strong>
          </p>
        </div>
      </section>

      <section id="sante" className="max-w-6xl mx-auto px-4 py-12">
        {sectionHeading("Services de santé", <Stethoscope className="w-7 h-7 shrink-0" style={{ color: GOLD }} />)}

        <div className="grid md:grid-cols-3 gap-5">
          {SANTE.map((s) => (
            <div
              key={s.nom}
              className="rounded-lg border bg-white p-5"
              style={{ borderColor: "#e2e8f0", borderTop: `4px solid ${GOLD}` }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {s.nom}
              </h3>
              <div className="space-y-2 text-sm text-[#444] mb-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <span>{s.lieu}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <span>{s.horaires}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <span>{s.tel}</span>
                </div>
              </div>
              <p className="text-sm text-[#444] leading-relaxed">
                {s.services}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="orientation" className="max-w-6xl mx-auto px-4 py-12">
        {sectionHeading("Orientation & Emploi", <Briefcase className="w-7 h-7 shrink-0" style={{ color: GOLD }} />)}

        {ORIENTATION.map((o) => (
          <div
            key={o.titre}
            className="rounded-lg border bg-white p-6 md:p-7"
            style={{ borderColor: "#e2e8f0", borderTop: `4px solid ${GOLD}` }}
          >
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: NAVY, fontFamily: "Georgia, serif" }}
            >
              {o.titre}
            </h3>
            <p className="text-sm text-[#444] leading-relaxed mb-4">
              {o.mission}
            </p>
            <h4
              className="text-sm font-bold mb-2"
              style={{ color: NAVY }}
            >
              Prestations proposées
            </h4>
            <ul className="grid md:grid-cols-2 gap-y-1 gap-x-4 mb-5">
              {o.prestations.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2 text-sm text-[#444]"
                >
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  {p}
                </li>
              ))}
            </ul>
            <div
              className="rounded-lg p-4 text-sm"
              style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
            >
              <div className="flex items-start gap-2 mb-1">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                <span className="text-[#444]">{o.contact}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                <span className="text-[#444]">{o.local}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="alumni" className="max-w-6xl mx-auto px-4 py-12">
        {sectionHeading("Alumni — Réseau des Anciens", <Users className="w-7 h-7 shrink-0" style={{ color: GOLD }} />)}

        {ALUMNI.map((a) => (
          <div
            key={a.titre}
            className="rounded-lg border bg-white p-6 md:p-7"
            style={{ borderColor: "#e2e8f0", borderTop: `4px solid ${GOLD}` }}
          >
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: NAVY, fontFamily: "Georgia, serif" }}
            >
              {a.titre}
            </h3>
            <p className="text-sm text-[#444] leading-relaxed mb-4">
              {a.mission}
            </p>
            <h4 className="text-sm font-bold mb-2" style={{ color: NAVY }}>
              Ce que propose le Réseau-UDN
            </h4>
            <ul className="grid md:grid-cols-2 gap-y-1 gap-x-4 mb-5">
              {a.actions.map((x) => (
                <li
                  key={x}
                  className="flex items-start gap-2 text-sm text-[#444]"
                >
                  <ChevronRight className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  {x}
                </li>
              ))}
            </ul>
            <div
              className="rounded-lg p-4 text-sm grid md:grid-cols-2 gap-3"
              style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}
            >
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                <span className="text-[#444]">
                  <strong style={{ color: NAVY }}>Adhésion : </strong>
                  {a.adhesion}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" style={{ color: GOLD }} />
                <span className="text-[#444]">{a.contact}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        {sectionHeading("Annuaire & formulaire de contact", <Mail className="w-7 h-7 shrink-0" style={{ color: GOLD }} />)}

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3
              className="text-lg font-bold mb-4 pb-2"
              style={{
                color: NAVY,
                fontFamily: "Georgia, serif",
                borderBottom: `2px solid ${GOLD}55`,
              }}
            >
              Annuaire des services
            </h3>
            <div className="rounded-lg border overflow-hidden" style={{ borderColor: "#e2e8f0" }}>
              {DEPARTEMENTS.map((d, i) => (
                <div
                  key={d.service}
                  className={`p-3 text-sm ${i % 2 ? "bg-[#f8fafc]" : "bg-white"}`}
                  style={{ borderTop: i === 0 ? "none" : "1px solid #e2e8f0" }}
                >
                  <div className="font-semibold mb-1" style={{ color: NAVY }}>
                    {d.service}
                  </div>
                  <div className="grid grid-cols-2 gap-y-0.5 gap-x-2 text-[#444]">
                    <div className="flex items-start gap-1.5">
                      <Mail className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                      {d.email}
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Phone className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                      {d.tel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3
              className="text-lg font-bold mb-4 pb-2"
              style={{
                color: NAVY,
                fontFamily: "Georgia, serif",
                borderBottom: `2px solid ${GOLD}55`,
              }}
            >
              Écrivez-nous en ligne
            </h3>

            {submitted ? (
              <div
                className="rounded-lg border p-6 flex items-start gap-3"
                style={{
                  background: "#f0fdf4",
                  borderColor: "#bbf7d0",
                  color: "#166534",
                }}
              >
                <CheckCircle2 className="w-6 h-6 shrink-0 text-green-600" />
                <div>
                  <p className="font-semibold text-base mb-1">
                    Message envoyé !
                  </p>
                  <p className="text-sm leading-relaxed">
                    Merci <strong>{form.prenom} {form.nom}</strong>, notre
                    service reviendra vers vous sous 48h ouvrés à{" "}
                    <strong>{form.email}</strong>.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-lg border p-5 space-y-3 bg-white"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: NAVY }}
                    >
                      Nom
                    </label>
                    <input
                      required
                      value={form.nom}
                      onChange={(e) => update("nom", e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border outline-none"
                      style={{ borderColor: "#cbd5e1" }}
                      placeholder="Ex: Mahamat"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: NAVY }}
                    >
                      Prénom
                    </label>
                    <input
                      required
                      value={form.prenom}
                      onChange={(e) => update("prenom", e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border outline-none"
                      style={{ borderColor: "#cbd5e1" }}
                      placeholder="Ex: Kaltouma"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: NAVY }}
                    >
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border outline-none"
                      style={{ borderColor: "#cbd5e1" }}
                      placeholder="vous@email.com"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold mb-1.5"
                      style={{ color: NAVY }}
                    >
                      Téléphone
                    </label>
                    <input
                      value={form.telephone}
                      onChange={(e) => update("telephone", e.target.value)}
                      className="w-full h-10 px-3 rounded-lg border outline-none"
                      style={{ borderColor: "#cbd5e1" }}
                      placeholder="+235 …"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Service destinataire
                  </label>
                  <select
                    required
                    value={form.service}
                    onChange={(e) => update("service", e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border outline-none bg-white"
                    style={{ borderColor: "#cbd5e1" }}
                  >
                    <option value="">— Sélectionner —</option>
                    {DEPARTEMENTS.map((d) => (
                      <option key={d.service} value={d.service}>
                        {d.service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Votre message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border outline-none resize-none"
                    style={{ borderColor: "#cbd5e1" }}
                    placeholder="Décrivez votre demande en quelques lignes…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full h-11 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all hover:brightness-105"
                  style={{ background: NAVY }}
                >
                  <Send className="w-4 h-4" />
                  Envoyer mon message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section
        id="mentions-legales"
        className="max-w-6xl mx-auto px-4 py-12"
      >
        {sectionHeading("Mentions légales", <Scale className="w-7 h-7 shrink-0" style={{ color: GOLD }} />)}

        <div className="rounded-lg border bg-white p-6 md:p-7" style={{ borderColor: "#e2e8f0" }}>
          <dl className="space-y-4">
            {MENTIONS_LEGALES.map(([k, v]) => (
              <div
                key={k}
                className="grid md:grid-cols-3 gap-3 border-b pb-4 last:border-0 last:pb-0"
                style={{ borderColor: "#e2e8f0" }}
              >
                <dt
                  className="text-sm font-bold md:text-right md:pr-4"
                  style={{ color: NAVY }}
                >
                  {k}
                </dt>
                <dd className="text-sm text-[#444] leading-relaxed md:col-span-2">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        id="confidentialite"
        className="max-w-6xl mx-auto px-4 py-12"
      >
        {sectionHeading("Politique de confidentialité", <ShieldCheck className="w-7 h-7 shrink-0" style={{ color: GOLD }} />)}

        <div className="rounded-lg border bg-white p-6 md:p-7" style={{ borderColor: "#e2e8f0" }}>
          <ol className="space-y-3">
            {CONFIDENTIALITE.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-[#444] leading-relaxed"
              >
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: NAVY }}
                >
                  {i + 1}
                </span>
                {p}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="accessibilite"
        className="max-w-6xl mx-auto px-4 py-12"
      >
        {sectionHeading("Accessibilité", <Eye className="w-7 h-7 shrink-0" style={{ color: GOLD }} />)}

        <div className="rounded-lg border bg-white p-6 md:p-7" style={{ borderColor: "#e2e8f0" }}>
          <dl className="space-y-4">
            {ACCESSIBILITE.map(([k, v]) => (
              <div
                key={k}
                className="grid md:grid-cols-3 gap-3 border-b pb-4 last:border-0 last:pb-0"
                style={{ borderColor: "#e2e8f0" }}
              >
                <dt
                  className="text-sm font-bold md:text-right md:pr-4"
                  style={{ color: NAVY }}
                >
                  {k}
                </dt>
                <dd className="text-sm text-[#444] leading-relaxed md:col-span-2">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
