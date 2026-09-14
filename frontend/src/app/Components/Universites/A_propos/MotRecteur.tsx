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

const PRIORITES = [
  {
    n: "01",
    t: "L'excellence académique",
    d: "La qualité de nos enseignements et de nos diplômes est notre bien le plus précieux. Elle engage la confiance des familles, des employeurs et de la nation.",
  },
  {
    n: "02",
    t: "La recherche appliquée",
    d: "Produire des connaissances qui répondent aux problèmes concrets du Tchad — climat, santé, droit, langues, développement — et les partager.",
  },
  {
    n: "03",
    t: "L'expérience étudiante",
    d: "Offrir à nos trente mille étudiants un cadre de vie digne, des bourses, des stages et une insertion professionnelle réussie.",
  },
];

function SectionHeading({ roman, title }: { roman: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="uppercase tracking-[0.28em] text-[11px] mb-2" style={{ color: GOLD_WARM, fontFamily: FONT }}>
        {roman}
      </p>
      <h2 className="text-3xl md:text-[2.1rem] font-normal leading-tight" style={{ color: NAVY_DEEP, fontFamily: SERIF }}>
        {title}
      </h2>
      <div className="mt-4 flex items-center gap-2" style={{ maxWidth: 140 }}>
        <div style={{ width: 36, height: 2, background: GOLD }} />
        <div style={{ flex: 1, height: 1, background: LINE }} />
      </div>
    </div>
  );
}

export default function MotRecteur() {
  return (
    <div style={{ background: PARCHMENT, fontFamily: FONT }} className="min-h-screen">
      <section className="relative overflow-hidden text-white" style={{ minHeight: 380 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${imgCeremonial}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 42%",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,30,46,0.84) 0%, rgba(30,65,94,0.74) 50%, rgba(30,65,94,0.94) 100%)",
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
          <p className="uppercase tracking-[0.28em] text-[11px] mb-4" style={{ color: GOLD }}>
            À propos · Le Recteur
          </p>
          <h1
            className="text-4xl md:text-6xl font-normal leading-[1.12] mb-5"
            style={{ color: GOLD, fontFamily: SERIF, textShadow: "0 2px 18px rgba(0,0,0,0.35)" }}
          >
            Mot du Recteur
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
            Une vision de l'excellence académique au service du développement du Tchad.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pt-12 md:pt-16 pb-6 grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-14">
        <aside className="lg:sticky lg:top-8 h-fit">
          <div className="relative">
            <div
              aria-hidden
              className="absolute"
              style={{
                top: 14,
                left: 10,
                right: -10,
                bottom: -10,
                background: NAVY_DEEP,
                transform: "rotate(-1.2deg)",
              }}
            />
            <div
              className="relative overflow-hidden"
              style={{
                border: `1px solid ${LINE}`,
                borderTop: `3px solid ${GOLD}`,
                background: "#fff",
                boxShadow: "0 24px 46px -22px rgba(20,30,55,0.4)",
              }}
            >
              <div className="relative h-72">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${imgCeremonial}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center 30%",
                    filter: "saturate(0.85)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(15,30,46,0.15) 0%, rgba(15,30,46,0.78) 100%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-6">
                  <div
                    className="mb-3"
                    style={{
                      boxShadow: "0 0 0 4px rgba(255,212,59,0.25)",
                      borderRadius: 999,
                    }}
                  >
                    <UDNCrest size={64} />
                  </div>
                </div>
              </div>
              <div className="px-6 py-6 text-center" style={{ backgroundImage: `linear-gradient(180deg, #fff 0%, ${PARCHMENT} 100%)` }}>
                <p className="uppercase tracking-[0.2em] text-[10px] mb-2" style={{ color: GOLD_WARM }}>
                  Recteur de l'UDN
                </p>
                <h3 className="text-xl leading-snug" style={{ color: NAVY_DEEP, fontFamily: SERIF }}>
                  Pr. [Nom du Recteur]
                </h3>
                <div className="mx-auto mt-3 mb-3" style={{ width: 36, height: 2, background: GOLD }} />
                <p className="text-[13px] leading-relaxed" style={{ color: INK_SOFT }}>
                  Université de N'Djamena
                  <br />
                  Campus de Toukra
                </p>
              </div>
            </div>
          </div>
        </aside>

        <article>
          <p
            className="relative text-[1.65rem] md:text-[1.85rem] leading-snug mb-8"
            style={{ color: NAVY_DEEP, fontFamily: SERIF }}
          >
            <span
              aria-hidden
              className="absolute -top-8 -left-1 md:-left-4 select-none"
              style={{ color: GOLD, fontSize: "4.5rem", lineHeight: 1, fontFamily: SERIF, opacity: 0.85 }}
            >
              &ldquo;
            </span>
            <span className="relative">
              Former l'élite d'aujourd'hui pour bâtir le Tchad de demain.
            </span>
          </p>

          <p className="text-[12px] uppercase tracking-[0.18em] mb-8" style={{ color: INK_SOFT }}>
            N'Djamena · Campus de Toukra
          </p>

          <div className="space-y-5 leading-[1.85] text-[16.5px]" style={{ color: INK }}>
            <p>Chers étudiants, chers collègues, chers partenaires,</p>
            <p>
              <span
                className="float-left mr-3 mt-1 flex items-center justify-center"
                style={{
                  width: 52,
                  height: 58,
                  background: NAVY_DEEP,
                  color: GOLD,
                  fontFamily: SERIF,
                  fontSize: "2rem",
                  lineHeight: 1,
                }}
              >
                C
              </span>
              'est pour moi un honneur et une responsabilité immense de diriger
              l'Université de N'Djamena, première et plus grande université du Tchad.
              Depuis plus de cinquante ans, notre institution a accompagné toutes les
              étapes de la construction nationale — formant les enseignants, les
              juristes, les médecins, les ingénieurs et les dirigeants qui font vivre
              notre pays au quotidien.
            </p>
            <p className="clear-both">
              Nous entrons aujourd'hui dans une nouvelle ère. Le monde change vite,
              les technologies transforment les métiers, et le Sahel fait face à des
              défis exceptionnels — climatiques, sécuritaires, économiques. L'UDN a
              l'ambition d'être à la hauteur : une université moderne, ouverte,
              tournée vers l'innovation et profondément ancrée dans ses racines.
            </p>
          </div>
        </article>
      </section>

      <section className="py-16 mt-8" style={{ background: PARCHMENT_ALT }}>
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading roman="I." title="Trois priorités" />
          <div className="grid md:grid-cols-3 gap-6">
            {PRIORITES.map((p) => (
              <div
                key={p.n}
                className="bg-white p-7 relative overflow-hidden"
                style={{
                  border: `1px solid ${LINE}`,
                  borderTop: `3px solid ${GOLD}`,
                  boxShadow: "0 14px 28px -20px rgba(20,30,55,0.4)",
                }}
              >
                <span
                  className="block mb-4 tabular-nums"
                  style={{ color: GOLD, fontFamily: SERIF, fontSize: "2rem", lineHeight: 1, opacity: 0.9 }}
                >
                  {p.n}
                </span>
                <h3 className="text-lg mb-3 leading-snug" style={{ color: NAVY_DEEP, fontFamily: SERIF }}>
                  {p.t}
                </h3>
                <p className="text-[14.5px] leading-relaxed" style={{ color: INK_SOFT }}>
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div
          className="relative px-8 md:px-14 py-12 text-center"
          style={{
            background: "#fff",
            border: `1px solid ${LINE}`,
            boxShadow: "0 18px 40px -24px rgba(20,30,55,0.4)",
          }}
        >
          <div className="absolute top-0 left-8 right-8 h-[3px]" style={{ background: GOLD }} />
          <p className="uppercase tracking-[0.28em] text-[11px] mb-5" style={{ color: GOLD_WARM }}>
            Remerciements
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-5" style={{ color: NAVY_DEEP, fontFamily: SERIF }}>
            Je remercie le Gouvernement du Tchad, nos partenaires internationaux,
            notre personnel administratif et technique, nos enseignants-chercheurs,
            et bien sûr nos étudiants, sans qui rien de tout cela n'existerait.
          </p>
          <p className="text-[15px] leading-relaxed" style={{ color: INK_SOFT }}>
            Ensemble, faisons de l'Université de N'Djamena une référence africaine.
          </p>

          <div className="mt-10 flex flex-col items-center">
            <div className="mb-3" style={{ width: 48, height: 2, background: GOLD }} />
            <p className="text-xl" style={{ fontFamily: SERIF, color: NAVY_DEEP }}>
              Le Recteur
            </p>
            <p className="text-sm mt-1" style={{ color: INK_SOFT }}>
              Université de N'Djamena
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-14 px-4"
        style={{ background: `linear-gradient(180deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)` }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end gap-8 justify-between">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.28em] text-[11px] mb-3" style={{ color: GOLD }}>
              L'institution
            </p>
            <h2 className="text-3xl font-normal leading-snug text-white mb-3" style={{ fontFamily: SERIF }}>
              Découvrir l'histoire et la mission de l'UDN.
            </h2>
            <p className="text-white/75 leading-relaxed">
              De 1971 à nos jours : fondation, missions statutaires et jalons de l'université.
            </p>
          </div>
          <Link
            to="/universite/a-propos/histoire-mission"
            className="inline-flex items-center px-5 py-2.5 text-sm font-semibold shrink-0"
            style={{ background: GOLD, color: NAVY_DEEP }}
          >
            Histoire &amp; Mission
          </Link>
        </div>
      </section>
    </div>
  );
}
