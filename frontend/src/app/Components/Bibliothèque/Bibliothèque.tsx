import { Search, BookOpen, User, GraduationCap, Calendar, FileText } from "lucide-react";
import { BRAND } from "../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const RAPIDE = [
  { icon: BookOpen, label: "Catalogue en ligne", desc: "40 000 ouvrages et 500 revues scientifiques." },
  { icon: Calendar, label: "Horaires & accès", desc: "Lundi–Vendredi 8h–20h · Samedi 9h–13h." },
  { icon: User, label: "Inscription lecteur", desc: "Créer votre carte de lecteur en ligne." },
  { icon: FileText, label: "Thèses & mémoires", desc: "Accès aux archives numériques de l'UDN." },
];

const SERVICES = [
  "Prêt de documents (15 jours, renouvelable)",
  "Salles de lecture individuelles",
  "Salles de travail en groupe (réservation en ligne)",
  "Accès wifi gratuit aux étudiants",
  "Bases de données académiques (JSTOR, ScienceDirect)",
  "Service de reprographie & numérisation",
  "Appui à la recherche documentaire",
];

export default function Bibliotheque() {
  return (
    <div className="bg-white min-h-screen">
      <section
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
            Bibliothèques Universitaires
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed mb-6">
            3 bibliothèques sur les campus de Toukra, Farcha et Ardep-Djoumal.
          </p>

          <div
            className="flex items-center rounded-lg border overflow-hidden max-w-2xl"
            style={{ background: "#fff", borderColor: "#cbd5e1" }}
          >
            <div className="pl-4 pr-3 h-12 flex items-center text-[#64748b]">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Rechercher un livre, une thèse, un article…"
              className="flex-1 h-12 px-2 outline-none bg-transparent text-[15px]"
            />
            <button
              className="px-5 h-12 font-bold text-white"
              style={{ background: GOLD, color: "#1a2a3a" }}
            >
              Rechercher
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {RAPIDE.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="bg-white rounded-lg border p-5 text-center transition-shadow hover:shadow-lg"
              style={{ borderColor: "#e2e8f0", borderTop: `4px solid ${GOLD}` }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3"
                style={{ background: "#e8f0f8", color: NAVY }}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {label}
              </h3>
              <p className="text-xs text-[#646464] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2
              className="text-2xl font-bold mb-4 pb-2"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Services proposés
            </h2>
            <ul className="space-y-2">
              {SERVICES.map((s, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg border"
                  style={{ borderColor: "#e2e8f0", background: "#fff" }}
                >
                  <GraduationCap className="w-5 h-5 shrink-0 mt-0.5" style={{ color: GOLD }} />
                  <span className="text-sm text-[#444] leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-2xl font-bold mb-4 pb-2"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Nos implantations
            </h2>
            <div className="space-y-4">
              {[
                {
                  nom: "Bibliothèque Centrale — Toukra",
                  adresse: "Campus de Toukra, BP 1117 N'Djaména",
                  tel: "+235 22 51 44 60",
                  superficie: "3 500 m²",
                },
                {
                  nom: "Bibliothèque FMSS — Farcha",
                  adresse: "Faculté de Médecine, Campus de Farcha",
                  tel: "+235 22 51 44 71",
                  superficie: "1 200 m²",
                },
                {
                  nom: "Bibliothèque FLSH — Ardep-Djoumal",
                  adresse: "Faculté des Lettres, Ardep-Djoumal",
                  tel: "+235 22 51 44 82",
                  superficie: "900 m²",
                },
              ].map((b) => (
                <div
                  key={b.nom}
                  className="p-4 rounded-lg border"
                  style={{ borderColor: "#e2e8f0", background: "#fff" }}
                >
                  <h3
                    className="text-base font-bold mb-2"
                    style={{ color: NAVY, fontFamily: "Georgia, serif" }}
                  >
                    {b.nom}
                  </h3>
                  <p className="text-sm text-[#646464] leading-relaxed">
                    📍 {b.adresse}<br />
                    📞 {b.tel}<br />
                    📐 Superficie : {b.superficie}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
