import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const NAVY_DEEP = BRAND.navyDeep;
const GOLD = BRAND.gold;
const PARCHMENT = "#FAF8F3";
const PARCHMENT_ALT = "#F3EEE1";
const LINE = "#DDD6C4";
const INK = "#2B2B2B";
const INK_SOFT = "#565553";
const SHADOW = "0 4px 18px -8px rgba(20,30,55,0.18)";
// Matches the sans-serif used in the site footer / HistoireMission page.
const FONT = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";

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

export default function MotRecteur() {
  return (
    <div style={{ background: PARCHMENT }} className="min-h-screen">
      {/* EN-TÊTE — matches HistoireMission's hero */}
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
            Mot du Recteur
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed" style={{ fontFamily: FONT }}>
            Le recteur de l'Université de N'Djamena partage sa vision de l'excellence
            académique au service du développement du Tchad.
          </p>
        </div>
      </section>

      {/* PORTRAIT + LETTRE */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4 grid md:grid-cols-[260px_1fr] gap-10">
        <div className="relative">
          {/* second sheet peeking out behind — same depth cue as the mission cards */}
          <div
            aria-hidden
            className="absolute"
            style={{
              top: 14,
              left: 10,
              right: -10,
              bottom: -10,
              background: NAVY,
              transform: "rotate(-1.3deg)",
              boxShadow: "0 18px 34px -20px rgba(10,20,40,0.55)",
            }}
          />
          <div
            className="relative bg-white p-6 flex flex-col items-center"
            style={{
              boxShadow: "0 24px 46px -22px rgba(20,30,55,0.4), 0 8px 16px -10px rgba(20,30,55,0.22)",
              border: `1px solid ${LINE}`,
              borderTop: `3px solid ${GOLD}`,
              backgroundImage: `linear-gradient(160deg, #ffffff 0%, ${PARCHMENT} 100%)`,
            }}
          >
            <div
              className="w-full h-64 rounded-sm flex items-center justify-center"
              style={{
                background: `linear-gradient(160deg, ${NAVY} 0%, ${NAVY_DEEP} 100%)`,
                color: "rgba(255,255,255,0.35)",
                fontFamily: FONT,
                fontSize: "0.85rem",
              }}
            >
              Portrait du Recteur
            </div>
            <h3
              className="text-lg font-bold mt-5 text-center"
              style={{ color: NAVY, fontFamily: FONT }}
            >
              Pr. [Nom du Recteur]
            </h3>
            <div className="flex items-center gap-2 mt-2 mb-1" style={{ maxWidth: 96 }}>
              <div style={{ width: 24, height: 2, background: GOLD }} />
            </div>
            <p className="text-sm text-center" style={{ color: INK_SOFT, fontFamily: FONT }}>
              Recteur de l'UDN
            </p>
          </div>
        </div>

        <div>
          <p
            className="text-2xl font-semibold mb-6 leading-relaxed"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            <span style={{ color: GOLD }}>&ldquo;</span>
            Former l'élite d'aujourd'hui pour bâtir le Tchad de demain.
            <span style={{ color: GOLD }}>&rdquo;</span>
          </p>

          <div className="space-y-4 leading-relaxed" style={{ color: INK, fontFamily: FONT }}>
            <p>Chers étudiants, chers collègues, chers partenaires,</p>
            <p>
              C'est pour moi un honneur et une responsabilité immense de diriger
              l'Université de N'Djamena, première et plus grande université du Tchad.
              Depuis plus de cinquante ans, notre institution a accompagné toutes les
              étapes de la construction nationale — formant les enseignants, les
              juristes, les médecins, les ingénieurs et les dirigeants qui font vivre
              notre pays au quotidien.
            </p>
            <p>
              Nous entrons aujourd'hui dans une nouvelle ère. Le monde change vite,
              les technologies transforment les métiers, et le Sahel fait face à des
              défis exceptionnels — climatiques, sécuritaires, économiques. L'UDN a
              l'ambition d'être à la hauteur : une université moderne, ouverte,
              tournée vers l'innovation et profondément ancrée dans ses racines.
            </p>
            <p>Trois priorités guident mon action :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong style={{ color: NAVY }}>L'excellence académique</strong> — la qualité
                de nos enseignements et de nos diplômes est notre bien le plus précieux.
              </li>
              <li>
                <strong style={{ color: NAVY }}>La recherche appliquée</strong> — produire des
                connaissances qui répondent aux problèmes concrets du Tchad.
              </li>
              <li>
                <strong style={{ color: NAVY }}>L'expérience étudiante</strong> — offrir à nos
                trente mille étudiants un cadre de vie digne, des bourses, des stages et une
                insertion professionnelle réussie.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* REMERCIEMENTS */}
      <section className="py-14 mt-10" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading roman="I." title="Remerciements" />
          <div className="bg-white" style={{ boxShadow: SHADOW, border: `1px solid ${LINE}` }}>
            <div className="py-8 px-6 md:px-8">
              <p className="leading-relaxed text-[15px]" style={{ color: INK_SOFT, fontFamily: FONT }}>
                Je remercie le Gouvernement du Tchad, nos partenaires internationaux,
                notre personnel administratif et technique, nos enseignants-chercheurs,
                et bien sûr nos étudiants, sans qui rien de tout cela n'existerait.
              </p>
              <p className="leading-relaxed text-[15px] mt-4" style={{ color: INK_SOFT, fontFamily: FONT }}>
                Ensemble, faisons de l'Université de N'Djamena une référence africaine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="flex items-center gap-3 justify-end">
          <div style={{ width: 40, height: 2, background: GOLD }} />
          <p style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: NAVY, fontWeight: 600 }}>
            — Le Recteur
          </p>
        </div>
      </section>
    </div>
  );
}