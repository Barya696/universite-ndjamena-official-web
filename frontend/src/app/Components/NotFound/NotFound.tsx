import { Link } from "react-router";
import {
  Home,
  Search,
  BookOpen,
  GraduationCap,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { BRAND } from "../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const QUICK_LINKS = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Formations", href: "/universite/formations", icon: GraduationCap },
  { label: "Candidature", href: "/candidature", icon: Search },
  { label: "Bibliothèque", href: "/bibliotheque", icon: BookOpen },
  { label: "Portail étudiant", href: "/portail-etudiant", icon: Home },
];

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen">
      <section
        className="py-20 px-4 md:px-[50px]"
        style={{
          background: `linear-gradient(180deg, ${BRAND.navyDeep} 0%, ${NAVY} 100%)`,
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div
            className="font-black leading-none mb-6 select-none"
            style={{
              fontSize: "clamp(6rem, 22vw, 13rem)",
              fontFamily: "Georgia, serif",
              color: GOLD,
              textShadow: "0 4px 24px rgba(0,0,0,0.35)",
              letterSpacing: "-0.04em",
            }}
          >
            404
          </div>

          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#ffffff", fontFamily: "Georgia, serif" }}
          >
            Page introuvable
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed mb-8">
            La page que vous cherchez n'existe pas, a été déplacée ou
            n'est plus disponible. Revenez à l'accueil ou explorez les liens
            ci-dessous.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-xl font-semibold px-5 h-12 transition-all hover:brightness-105"
              style={{
                fontFamily: "Georgia, serif",
                background: "#4a86c8",
                color: "#ffffff",
                boxShadow: "0 4px 12px rgba(74,134,200,0.28)",
              }}
            >
              <Home className="w-4.5 h-4.5" />
              Revenir à l'accueil
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 rounded-xl font-semibold px-5 h-12 transition-all hover:brightness-105 border"
              style={{
                background: "rgba(255,255,255,0.10)",
                color: "#fff",
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              <ArrowLeft className="w-4.5 h-4.5" />
              Page précédente
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2
          className="text-2xl font-bold mb-8 pb-2 text-center"
          style={{
            color: NAVY,
            fontFamily: "Georgia, serif",
            borderBottom: `3px solid ${GOLD}`,
            maxWidth: "30rem",
            marginInline: "auto",
          }}
        >
          Vous cherchez peut-être…
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-14">
          {QUICK_LINKS.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              to={href}
              className="group rounded-lg border bg-white p-5 text-center transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{
                borderColor: "#e2e8f0",
                borderTop: `4px solid ${GOLD}`,
              }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 transition-colors group-hover:scale-105"
                style={{ background: "#e8f0f8", color: NAVY }}
              >
                <Icon className="w-5.5 h-5.5" />
              </div>
              <div
                className="text-sm font-bold flex items-center justify-center gap-1"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {label}
                <ChevronRight className="w-4 h-4 shrink-0 opacity-60" />
              </div>
            </Link>
          ))}
        </div>

        <div
          className="rounded-lg border p-7 md:p-9 text-center"
          style={{
            borderColor: "#e2e8f0",
            background:
              "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
          }}
        >
          <h3
            className="text-xl font-bold mb-2"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            Une question sur l'admission ou les formations ?
          </h3>
          <p className="text-sm text-[#646464] mb-5 max-w-2xl mx-auto leading-relaxed">
            Notre équipe est disponible par email ou par téléphone du lundi au
            vendredi, de 8h à 16h. N'hésitez pas à nous contacter !
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl font-semibold px-5 h-12 transition-all hover:brightness-105"
            style={{
              fontFamily: "Georgia, serif",
              background: NAVY,
              color: "#ffffff",
            }}
          >
            Accéder à la page Contact
            <ChevronRight className="w-4.5 h-4.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
