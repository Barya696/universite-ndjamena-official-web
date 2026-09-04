import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const PARCHMENT = "#FAF8F3";
const PARCHMENT_ALT = "#F3EEE1";
const LINE = "#DDD6C4";
const INK_SOFT = "#565553";
const SHADOW = "0 4px 18px -8px rgba(20,30,55,0.18)";
// Matches the sans-serif used in the site footer / HistoireMission page.
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

const CHIFFRES_HAUT = [
  { valeur: "30 000+", libelle: "Étudiants inscrits", sous: "tous niveaux confondus" },
  { valeur: "1 200", libelle: "Enseignants-chercheurs", sous: "titulaires et contractuels" },
  { valeur: "650+", libelle: "Personnels BAT", sous: "administratifs et techniques" },
  { valeur: "12", libelle: "Facultés, Instituts & Écoles", sous: "sur 3 campus" },
];

const DETAILS = [
  {
    titre: "Formations & diplômes",
    items: [
      { k: "Licences (L1-L3)", v: "48 filières" },
      { k: "Masters (M1-M2)", v: "35 mentions" },
      { k: "Doctorats (PhD)", v: "15 écoles doctorales" },
      { k: "Diplômes d'université (DU/DUT)", v: "22 programmes" },
      { k: "Formations continues", v: "plus de 40/an" },
    ],
  },
  {
    titre: "Recherche & innovation",
    items: [
      { k: "Laboratoires accrédités", v: "28" },
      { k: "Publications (5 dernières années)", v: "1 450+" },
      { k: "Projets financés (internationaux)", v: "62" },
      { k: "Thèses soutenues / an", v: "~ 90" },
      { k: "Revues scientifiques éditées", v: "11" },
    ],
  },
  {
    titre: "Coopération & international",
    items: [
      { k: "Universités partenaires", v: "92 pays : 28" },
      { k: "Accords inter-universitaires actifs", v: "137" },
      { k: "Étudiants en mobilité / an (entrants)", v: "320" },
      { k: "Étudiants en mobilité / an (sortants)", v: "410" },
      { k: "Programmes ERASMUS+, GIZ, AFD, etc.", v: "18 programmes" },
    ],
  },
  {
    titre: "Vie étudiante & campus",
    items: [
      { k: "Chambres universitaires", v: "5 200 places" },
      { k: "Restaurants universitaires", v: "8 points de restauration" },
      { k: "Associations étudiantes actives", v: "74" },
      { k: "Bibliothèques (centrale + UFR)", v: "13" },
      { k: "Superficie des 3 campus", v: "218 ha" },
    ],
  },
];

function SectionHeading({ roman, title }: { roman: string; title: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-8">
      <span className="text-sm" style={{ color: GOLD, fontFamily: FONT }}>
        {roman}
      </span>
      <h2 className="text-2xl font-bold pb-2 flex-1" style={{ color: NAVY, fontFamily: FONT, borderBottom: `2px solid ${NAVY}` }}>
        {title}
      </h2>
    </div>
  );
}

export default function ChiffresCles() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE — matches the other "À propos" pages */}
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD, fontFamily: FONT }}>
            À propos
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Chiffres clés
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Quelques données pour mesurer l'ampleur et l'impact de l'Université de N'Djamena
            dans le paysage de l'enseignement supérieur tchadien et africain.
          </p>
        </div>
      </section>

      {/* EN BREF */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4">
        <SectionHeading roman="I." title="En bref" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {CHIFFRES_HAUT.map((c) => (
            <div
              key={c.libelle}
              className="text-center bg-white p-6"
              style={{
                boxShadow: SHADOW,
                border: `1px solid ${LINE}`,
                borderTop: `3px solid ${GOLD}`,
                backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
              }}
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {c.valeur}
              </div>
              <div className="font-semibold" style={{ color: NAVY, fontFamily: FONT }}>
                {c.libelle}
              </div>
              <div className="text-sm mt-1" style={{ color: INK_SOFT, fontFamily: FONT }}>
                {c.sous}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DÉTAILS PAR DOMAINE */}
      <section className="py-14 mt-6" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Détails par domaine" />
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            {DETAILS.map((sec) => (
              <div
                key={sec.titre}
                className="bg-white overflow-hidden"
                style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}
              >
                <div
                  className="px-5 py-3"
                  style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`, borderBottom: `2px solid ${GOLD}` }}
                >
                  <h3 className="font-bold" style={{ color: GOLD, fontFamily: FONT }}>
                    {sec.titre}
                  </h3>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {sec.items.map((it, i) => (
                      <tr key={it.k} style={{ borderTop: i === 0 ? "none" : `1px solid ${LINE}` }}>
                        <td className="py-3 px-5" style={{ color: INK_SOFT, fontFamily: FONT }}>
                          {it.k}
                        </td>
                        <td
                          className="py-3 px-5 text-right font-semibold"
                          style={{ color: NAVY, fontFamily: "Georgia, serif" }}
                        >
                          {it.v}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}