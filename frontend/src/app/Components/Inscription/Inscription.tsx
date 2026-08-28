import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { BRAND } from "../Utils/brand";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;

const ETAPES = [
  { n: 1, t: "Pré-inscription en ligne", d: "Remplir le formulaire de candidature sur le portail officiel." },
  { n: 2, t: "Dépôt du dossier", d: "Scanner et déposer les pièces requises (baccalauréat, pièce d'identité, photos)." },
  { n: 3, t: "Paiement des frais", d: "Frais de dossier : 10 000 FCFA. Plusieurs moyens de paiement acceptés." },
  { n: 4, t: "Validation & convocation", d: "Réception de la convocation et des modalités de rentrée." },
];

const PIECES = [
  "Copie certifiée conforme du Baccalauréat (ou équivalent)",
  "Copie de la pièce d'identité ou passeport",
  "4 photos d'identité récentes",
  "Certificat de nationalité tchadienne",
  "Certificat médical d'aptitude physique",
  "Bulletins de notes du Baccalauréat",
];

export default function Inscription() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    bac: "",
    faculté: "",
    niveau: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

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
            Inscriptions en ligne
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Année académique 2024–2025 : pré-inscriptions du 1er juillet au 31 août 2024.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2
          className="text-2xl font-bold mb-6 pb-2"
          style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
        >
          Étapes d'inscription
        </h2>
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {ETAPES.map((e) => (
            <div
              key={e.n}
              className="relative bg-white rounded-lg border p-5"
              style={{ borderColor: "#e2e8f0", borderTop: `4px solid ${GOLD}` }}
            >
              <div
                className="absolute -top-4 -left-2 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                style={{ background: NAVY, fontFamily: "Georgia, serif" }}
              >
                {e.n}
              </div>
              <h3
                className="text-base font-bold mb-2 mt-3"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                {e.t}
              </h3>
              <p className="text-sm text-[#646464] leading-relaxed">{e.d}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2
              className="text-2xl font-bold mb-6 pb-2"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Dossier de candidature
            </h2>
            <ul className="space-y-3">
              {PIECES.map((p, i) => (
                <li key={i} className="flex items-start gap-3 p-3 rounded-lg border"
                    style={{ borderColor: "#e2e8f0", background: "#fff" }}>
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: GOLD }}>
                    {i + 1}
                  </span>
                  <span className="text-sm text-[#444] leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              className="text-2xl font-bold mb-6 pb-2"
              style={{ color: NAVY, fontFamily: "Georgia, serif", borderBottom: `3px solid ${GOLD}` }}
            >
              Formulaire de pré-inscription
            </h2>

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
                  <p className="font-semibold text-base mb-1">Pré-inscription enregistrée !</p>
                  <p className="text-sm leading-relaxed">
                    Un email de confirmation a été envoyé à <strong>{form.email}</strong>.
                    Vous recevrez dans les 48h les instructions pour finaliser votre dossier.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-lg border p-6 space-y-4"
                style={{ borderColor: "#e2e8f0", background: "#fff" }}
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                      Nom
                    </label>
                    <input
                      required
                      value={form.nom}
                      onChange={(e) => update("nom", e.target.value)}
                      className="w-full h-11 px-3 rounded-lg border outline-none"
                      style={{ borderColor: "#cbd5e1" }}
                      placeholder="Ex: Djamal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                      Prénom
                    </label>
                    <input
                      required
                      value={form.prenom}
                      onChange={(e) => update("prenom", e.target.value)}
                      className="w-full h-11 px-3 rounded-lg border outline-none"
                      style={{ borderColor: "#cbd5e1" }}
                      placeholder="Ex: Ahmat"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full h-11 px-3 rounded-lg border outline-none"
                      style={{ borderColor: "#cbd5e1" }}
                      placeholder="prenom@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                      Téléphone
                    </label>
                    <input
                      required
                      value={form.telephone}
                      onChange={(e) => update("telephone", e.target.value)}
                      className="w-full h-11 px-3 rounded-lg border outline-none"
                      style={{ borderColor: "#cbd5e1" }}
                      placeholder="+235 66 XX XX XX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                    Année du Baccalauréat
                  </label>
                  <select
                    required
                    value={form.bac}
                    onChange={(e) => update("bac", e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border outline-none"
                    style={{ borderColor: "#cbd5e1" }}
                  >
                    <option value="">— Sélectionner —</option>
                    {[2024, 2023, 2022, 2021, 2020].map((y) => (
                      <option key={y} value={y.toString()}>{y}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                    Faculté souhaitée
                  </label>
                  <select
                    required
                    value={form.faculté}
                    onChange={(e) => update("faculté", e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border outline-none"
                    style={{ borderColor: "#cbd5e1" }}
                  >
                    <option value="">— Sélectionner —</option>
                    {[
                      "Droit & Sciences Politiques",
                      "Lettres & Sciences Humaines",
                      "Sciences Exactes & Appliquées",
                      "Sciences de la Santé",
                      "Sciences Économiques & Gestion",
                      "Éducation & Formation",
                      "Agronomie",
                    ].map((f) => (
                      <option key={f}>{f}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: NAVY }}>
                    Niveau d'entrée
                  </label>
                  <select
                    required
                    value={form.niveau}
                    onChange={(e) => update("niveau", e.target.value)}
                    className="w-full h-11 px-3 rounded-lg border outline-none"
                    style={{ borderColor: "#cbd5e1" }}
                  >
                    <option value="">— Sélectionner —</option>
                    {["Licence 1", "Licence 2", "Licence 3", "Master 1", "Master 2"].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full h-11 rounded-lg font-bold text-white"
                  style={{ background: NAVY }}
                >
                  Envoyer ma pré-inscription
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
