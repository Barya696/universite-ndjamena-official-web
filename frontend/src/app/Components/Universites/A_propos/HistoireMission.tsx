import { Link } from "react-router";
import { BRAND } from "../../Utils/brand";
import { UDNCrest } from "../../Mainlayout";
import imgCeremonial from "../../../Images/Ceremonial.jpeg";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const GOLD_WARM = "#C8A84B";
const PARCHMENT = "#FAF8F3";
const PARCHMENT_ALT = "#F3EEE1";
const LINE = "#DDD6C4";
const INK = "#2B2B2B";
const INK_SOFT = "#565553";
const FONT = "'Source Sans 3', 'Source Sans Pro', ui-sans-serif, system-ui, sans-serif";
const SERIF = "Georgia, 'Times New Roman', serif";

const JALONS = [
  { annee: "1971", titre: "Fondation", texte: "Création de l'Université de N'Djamena (alors Université du Tchad), première université publique du pays, par décret n°015/PR/MESRS." },
  { annee: "1972", titre: "Premières promotions", texte: "Ouverture des trois premières facultés : Lettres, Droit, et Sciences Économiques. 600 étudiants inscrits à la rentrée." },
  { annee: "1978", titre: "Faculté des Sciences Exactes", texte: "Création de la FSEA (Faculté des Sciences Exactes et Appliquées) au campus de Toukra." },
  { annee: "1985", titre: "Institut Supérieur Pédagogique", texte: "Mise en place de l'ISP pour la formation des enseignants du secondaire et du supérieur." },
  { annee: "1990", titre: "Faculté de Médecine", texte: "Création de la Faculté de Médecine et des Sciences de la Santé sur le campus de Farcha, avec l'appui de la coopération française." },
  { annee: "1998", titre: "Autonomie", texte: "L'université acquiert le statut d'Établissement Public à Caractère Scientifique et Technologique (EPST)." },
  { annee: "2005", titre: "Réforme LMD", texte: "Adoption du système Licence-Master-Doctorat, alignant les formations sur les standards internationaux." },
  { annee: "2012", titre: "École Doctorale", texte: "Création de l'École Doctorale unique pour structurer la recherche et le troisième cycle." },
  { annee: "2021", titre: "Cinquantenaire", texte: "12 facultés et instituts, 3 campus, plus de 30 000 étudiants et 1 200 enseignants-chercheurs." },
];

const MISSION = [
  { num: "I", icon: "former" as const, t: "Former", d: "Former des citoyens éclairés, des cadres compétents et des professionnels capables de relever les défis du Tchad et du continent africain." },
  { num: "II", icon: "produire" as const, t: "Produire", d: "Produire des connaissances de qualité adaptées aux réalités sahéliennes et contribuer à la communauté scientifique internationale." },
  { num: "III", icon: "servir" as const, t: "Servir", d: "Mettre l'expertise de l'université au service du développement local, de la souveraineté nationale et de l'épanouissement des populations." },
];

const VALEURS = [
  { t: "Excellence académique", d: "Exiger le meilleur de nos formations, de nos diplômes et de nos enseignants." },
  { t: "Rigueur scientifique", d: "Ancrer la recherche dans la méthode, la preuve et le débat critique." },
  { t: "Intégrité", d: "Agir avec droiture, transparence et responsabilité publique." },
  { t: "Ouverture internationale", d: "Tisser des partenariats et des mobilités au service de nos étudiants." },
  { t: "Engagement sociétal", d: "Répondre aux besoins du Tchad, du Sahel et des communautés locales." },
  { t: "Diversité & inclusion", d: "Offrir à chacun une place digne dans la communauté universitaire." },
  { t: "Cultures nationales", d: "Promouvoir les langues, les arts et le patrimoine du Tchad." },
  { t: "Innovation & créativité", d: "Inventer des solutions adaptées à notre temps et à notre territoire." },
];

const CHIFFRES = [
  { v: "1971", l: "Année de fondation" },
  { v: "30 000+", l: "Étudiants inscrits" },
  { v: "12", l: "Facultés & instituts" },
  { v: "3", l: "Campus" },
];

function MissionIcon({ kind }: { kind: "former" | "produire" | "servir" }) {
  return (
    <span
      className="inline-flex items-center justify-center shrink-0"
      style={{
        width: 58,
        height: 58,
        borderRadius: "9999px",
        background: `radial-gradient(circle at 32% 28%, ${NAVY} 0%, ${NAVY_DEEP} 78%)`,
        border: `1px solid ${GOLD}`,
        boxShadow: `0 10px 20px -8px rgba(10,20,40,0.55), inset 0 1px 1px rgba(255,255,255,0.18), 0 0 0 5px ${PARCHMENT}`,
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {kind === "former" && (
          <>
            <path d="M12 4 3 9l9 5 9-5-9-5Z" />
            <path d="M7 11.2V16c0 1.4 2.5 2.6 5.5 2.6S18 17.4 18 16v-4.8" />
            <path d="M20.5 9v5.5" />
          </>
        )}
        {kind === "produire" && (
          <>
            <path d="M4 6c2.2-1.1 5.3-1.1 7.5 0v13c-2.2-1.1-5.3-1.1-7.5 0Z" />
            <path d="M19.5 6c-2.2-1.1-5.3-1.1-7.5 0v13c2.2-1.1 5.3-1.1 7.5 0Z" />
          </>
        )}
        {kind === "servir" && (
          <>
            <path d="M12 19V8" />
            <path d="M12 8c-1.8.9-4 .1-5-1.7" />
            <path d="M12 11.3c-1.8.9-4 .1-5-1.7" />
            <path d="M12 14.6c-1.8.9-4 .1-5-1.7" />
            <path d="M12 8c1.8.9 4 .1 5-1.7" />
            <path d="M12 11.3c1.8.9 4 .1 5-1.7" />
            <path d="M12 14.6c1.8.9 4 .1 5-1.7" />
          </>
        )}
      </svg>
    </span>
  );
}

function SectionHeading({ roman, title, light }: { roman: string; title: string; light?: boolean }) {
  return (
    <div className="mb-10">
      <p
        className="uppercase tracking-[0.28em] text-[11px] mb-2"
        style={{ color: light ? GOLD : GOLD_WARM, fontFamily: FONT }}
      >
        {roman}
      </p>
      <h2
        className="text-3xl md:text-[2.1rem] font-normal leading-tight"
        style={{ color: light ? "#fff" : NAVY_DEEP, fontFamily: SERIF }}
      >
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-2" style={{ maxWidth: 140 }}>
        <div style={{ width: 36, height: 2, background: GOLD }} />
        <div style={{ flex: 1, height: 1, background: light ? "rgba(255,255,255,0.25)" : LINE }} />
      </div>
    </div>
  );
}

export default function HistoireMission() {
  return (
    <div style={{ background: PARCHMENT, fontFamily: FONT }} className="min-h-screen">
      <section className="relative overflow-hidden text-white" style={{ minHeight: 420 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${imgCeremonial}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 58%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,30,46,0.82) 0%, rgba(30,65,94,0.72) 48%, rgba(30,65,94,0.92) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${GOLD} 0, ${GOLD} 1px, transparent 0, transparent 50%)`,
            backgroundSize: "22px 22px",
            opacity: 0.045,
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 md:px-[50px] py-16 md:py-24">
          <div className="flex items-center gap-3 mb-8">
            <UDNCrest size={52} />
            <div className="h-px flex-1 max-w-[140px]" style={{ background: "rgba(255,212,59,0.45)" }} />
          </div>
          <p className="uppercase tracking-[0.28em] text-[11px] mb-4" style={{ color: GOLD, fontFamily: FONT }}>
            À propos · Université de N'Djamena
          </p>
          <h1
            className="text-4xl md:text-6xl font-normal leading-[1.12] mb-5 max-w-3xl"
            style={{ color: GOLD, fontFamily: SERIF, textShadow: "0 2px 18px rgba(0,0,0,0.35)" }}
          >
            Histoire &amp; Mission
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Première université du Tchad, l'UDN forme depuis plus d'un demi-siècle
            les cadres, les chercheurs et les citoyens qui bâtissent la nation.
          </p>
        </div>
      </section>

      <section className="relative z-10 max-w-6xl mx-auto px-4 -mt-10 md:-mt-12">
        <div
          className="grid grid-cols-2 lg:grid-cols-4 overflow-hidden"
          style={{
            background: "#fff",
            border: `1px solid ${LINE}`,
            boxShadow: "0 18px 40px -24px rgba(20,30,55,0.45)",
          }}
        >
          {CHIFFRES.map((c, i) => (
            <div
              key={c.l}
              className="text-center py-7 px-4"
              style={{
                borderLeft: i === 0 ? "none" : `1px solid ${LINE}`,
                backgroundImage: i % 2 === 0 ? "none" : `linear-gradient(180deg, #fff 0%, ${PARCHMENT} 100%)`,
              }}
            >
              <div className="text-3xl md:text-4xl mb-1.5 tabular-nums" style={{ color: NAVY_DEEP, fontFamily: SERIF }}>
                {c.v}
              </div>
              <div className="text-[12px] uppercase tracking-[0.14em]" style={{ color: INK_SOFT }}>
                {c.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pt-16 pb-6">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-16 items-start">
          <div>
            <SectionHeading roman="Institution" title="Une université née avec la nation" />
            <p className="leading-[1.8] text-[16.5px]" style={{ color: INK }}>
              Fondée en 1971, l'Université de N'Djamena est le premier établissement
              public d'enseignement supérieur du Tchad. Elle a accompagné chaque étape
              de la construction nationale — formant les enseignants, les juristes,
              les médecins, les ingénieurs et les dirigeants qui font vivre le pays
              au quotidien.
            </p>
            <p className="leading-[1.8] text-[16.5px] mt-4" style={{ color: INK_SOFT }}>
              Aujourd'hui répartie sur trois campus, elle rassemble plus de trente
              mille étudiants et un millier d'enseignants-chercheurs autour d'une
              même ambition : l'excellence au service du Tchad et du Sahel.
            </p>
          </div>
          <aside
            className="relative p-8 md:p-9"
            style={{
              background: NAVY_DEEP,
              boxShadow: "0 22px 40px -24px rgba(10,20,40,0.55)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: GOLD }} />
            <p
              className="text-[1.35rem] leading-snug mb-5"
              style={{ color: GOLD, fontFamily: SERIF }}
            >
              « Former, produire, servir : trois verbes pour une institution. »
            </p>
            <p className="text-sm leading-relaxed text-white/75">
              Missions statutaires de l'Université de N'Djamena — former des citoyens
              éclairés, produire des savoirs adaptés au Sahel, et mettre l'expertise
              universitaire au service du développement.
            </p>
          </aside>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pt-10 pb-6">
        <SectionHeading roman="I." title="Missions statutaires" />
        <div className="grid md:grid-cols-3 gap-8 pt-4">
          {MISSION.map((b, i) => (
            <div key={b.t} className="relative group">
              <div
                aria-hidden
                className="absolute"
                style={{
                  top: 14,
                  left: 10,
                  right: -10,
                  bottom: -10,
                  background: NAVY_DEEP,
                  transform: i % 2 === 0 ? "rotate(-1.15deg)" : "rotate(1deg)",
                }}
              />
              <div
                className="relative bg-white p-8 pt-12 h-full transition-transform duration-300 group-hover:-translate-y-1"
                style={{
                  boxShadow: "0 24px 46px -22px rgba(20,30,55,0.38)",
                  border: `1px solid ${LINE}`,
                  borderTop: `3px solid ${GOLD}`,
                  backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
                }}
              >
                <div className="absolute -top-6 left-8">
                  <MissionIcon kind={b.icon} />
                </div>
                <span
                  className="block text-xs mb-3"
                  style={{ color: GOLD_WARM, letterSpacing: "0.18em", fontWeight: 600 }}
                >
                  {b.num}
                </span>
                <h3 className="text-2xl mb-3" style={{ color: NAVY_DEEP, fontFamily: SERIF }}>
                  {b.t}
                </h3>
                <div className="flex items-center gap-2 mb-4" style={{ maxWidth: 96 }}>
                  <div style={{ width: 24, height: 2, background: GOLD }} />
                  <div style={{ flex: 1, height: 1, background: LINE }} />
                </div>
                <p className="leading-relaxed text-[15px]" style={{ color: INK_SOFT }}>
                  {b.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 mt-12" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="II." title="Valeurs de référence" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALEURS.map((v, i) => (
              <div
                key={v.t}
                className="p-5 bg-white"
                style={{
                  border: `1px solid ${LINE}`,
                  borderTop: `3px solid ${GOLD}`,
                  boxShadow: "0 8px 22px -16px rgba(20,30,55,0.35)",
                }}
              >
                <span
                  className="block text-[11px] mb-2 tabular-nums"
                  style={{ color: GOLD_WARM, letterSpacing: "0.16em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[15px] font-semibold mb-2 leading-snug" style={{ color: NAVY_DEEP }}>
                  {v.t}
                </h3>
                <p className="text-[13px] leading-relaxed" style={{ color: INK_SOFT }}>
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionHeading roman="III." title="Jalons historiques" />
        <div className="relative md:pl-2">
          <div
            aria-hidden
            className="hidden md:block absolute top-3 bottom-3"
            style={{ left: 47, width: 2, background: `linear-gradient(180deg, ${GOLD} 0%, ${LINE} 12%, ${LINE} 88%, ${GOLD} 100%)` }}
          />
          <ol className="space-y-0">
            {JALONS.map((h, i) => (
              <li key={h.annee} className="relative grid md:grid-cols-[96px_1fr] gap-5 md:gap-10 py-5">
                <div className="relative z-10 flex md:justify-center items-start">
                  <div
                    className="px-3 py-1.5 tabular-nums text-sm font-semibold"
                    style={{
                      background: i === JALONS.length - 1 ? NAVY_DEEP : "#fff",
                      color: i === JALONS.length - 1 ? GOLD : NAVY_DEEP,
                      border: `1px solid ${i === JALONS.length - 1 ? GOLD : LINE}`,
                      boxShadow: "0 4px 14px -8px rgba(20,30,55,0.4)",
                      fontFamily: SERIF,
                      fontSize: "1.05rem",
                    }}
                  >
                    {h.annee}
                  </div>
                </div>
                <div
                  className="bg-white px-6 py-5"
                  style={{
                    border: `1px solid ${LINE}`,
                    boxShadow: "0 10px 24px -18px rgba(20,30,55,0.4)",
                  }}
                >
                  <h4 className="font-semibold mb-1.5 text-[16px]" style={{ color: NAVY_DEEP }}>
                    {h.titre}
                  </h4>
                  <p className="leading-relaxed text-[14.5px]" style={{ color: INK_SOFT }}>
                    {h.texte}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="py-16 px-4"
        style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end gap-8 justify-between">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.28em] text-[11px] mb-3" style={{ color: GOLD }}>
              Continuer
            </p>
            <h2 className="text-3xl md:text-4xl font-normal leading-snug text-white mb-4" style={{ fontFamily: SERIF }}>
              Une institution au service du Tchad de demain.
            </h2>
            <p className="text-white/75 leading-relaxed">
              Découvrez la gouvernance de l'université, ses chiffres clés, ou le mot du Recteur.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/universite/a-propos/mot-recteur"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold"
              style={{ background: GOLD, color: NAVY_DEEP }}
            >
              Mot du Recteur
            </Link>
            <Link
              to="/universite/a-propos/gouvernance"
              className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white"
              style={{ border: `1px solid rgba(255,255,255,0.35)` }}
            >
              Gouvernance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
