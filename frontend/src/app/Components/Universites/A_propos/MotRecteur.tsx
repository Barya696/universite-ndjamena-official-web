import { BRAND } from "../../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

export default function MotRecteur() {
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
            Mot du Recteur
          </h1>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Le recteur de l'Université de N'Djamena partage sa vision de l'excellence
            académique au service du développement du Tchad.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-[240px_1fr] gap-10">
        <div className="flex flex-col items-center">
          <div
            className="w-52 h-64 rounded-lg flex items-center justify-center"
            style={{
              background: `linear-gradient(160deg, ${NAVY} 0%, ${BRAND.navyDeep} 100%)`,
              borderTop: `4px solid ${GOLD}`,
              color: "rgba(255,255,255,0.35)",
              fontFamily: "Georgia, serif",
              fontSize: "0.9rem",
            }}
          >
            Portrait du Recteur
          </div>
          <h3
            className="text-xl font-bold mt-5 text-center"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            Pr. [Nom du Recteur]
          </h3>
          <p className="text-sm text-[#646464] mt-1 text-center">Recteur de l'UDN</p>
        </div>

        <div>
          <p
            className="text-2xl font-semibold mb-6 leading-relaxed"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            &ldquo;Former l'élite d'aujourd'hui pour bâtir le Tchad de demain.&rdquo;
          </p>

          <div className="space-y-4 text-[#444] leading-relaxed">
            <p>
              Chers étudiants, chers collègues, chers partenaires,
            </p>
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
            <p>
              Trois priorités guident mon action :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong style={{color: NAVY}}>L'excellence académique</strong> — la qualité de nos enseignements et de nos diplômes est notre bien le plus précieux.</li>
              <li><strong style={{color: NAVY}}>La recherche appliquée</strong> — produire des connaissances qui répondent aux problèmes concrets du Tchad.</li>
              <li><strong style={{color: NAVY}}>L'expérience étudiante</strong> — offrir à nos trente mille étudiants un cadre de vie digne, des bourses, des stages et une insertion professionnelle réussie.</li>
            </ul>
            <p>
              Je remercie le Gouvernement du Tchad, nos partenaires internationaux,
              notre personnel administratif et technique, nos enseignants-chercheurs,
              et bien sûr nos étudiants, sans qui rien de tout cela n'existerait.
            </p>
            <p>
              Ensemble, faisons de l'Université de N'Djamena une référence africaine.
            </p>
            <p className="mt-8" style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: NAVY, fontWeight: 600 }}>
              — Le Recteur
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
