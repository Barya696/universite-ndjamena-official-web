import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

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

export default function ChiffresCles() {
  return (
    <div className="bg-white min-h-screen">
      <section
        className="py-16 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${BRAND.navyDeep} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.2em] text-xs mb-3" style={{ color: GOLD }}>
            À propos
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: GOLD, fontFamily: "Georgia, serif" }}
          >
            Chiffres clés
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Quelques données pour mesurer l'ampleur et l'impact de l'Université de N'Djamena
            dans le paysage de l'enseignement supérieur tchadien et africain.
          </p>
        </div>
      </section>

      <section style={{ background: "#f6f6f6" }} className="py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {CHIFFRES_HAUT.map((c) => (
              <div
                key={c.libelle}
                className="text-center bg-white rounded-lg p-6 border"
                style={{ borderTop: `4px solid ${GOLD}`, borderColor: "#e2e8f0" }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ color: NAVY, fontFamily: "Georgia, serif" }}
                >
                  {c.valeur}
                </div>
                <div className="font-semibold" style={{ color: NAVY }}>
                  {c.libelle}
                </div>
                <div className="text-sm text-[#646464] mt-1">{c.sous}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {DETAILS.map((sec) => (
            <div
              key={sec.titre}
              className="rounded-lg border overflow-hidden"
              style={{ borderColor: "#e2e8f0" }}
            >
              <div className="px-5 py-3" style={{ background: NAVY }}>
                <h3 className="font-bold text-white" style={{ fontFamily: "Georgia, serif" }}>
                  {sec.titre}
                </h3>
              </div>
              <div className="bg-white">
                <table className="w-full text-sm">
                  <tbody>
                    {sec.items.map((it, i) => (
                      <tr
                        key={it.k}
                        style={{ borderTop: i === 0 ? "none" : "1px solid #e2e8f0" }}
                      >
                        <td className="py-3 px-5 text-[#444]">{it.k}</td>
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
