import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  AlertCircle,
  HelpCircle,
  UserPlus,
  User,
  GraduationCap,
  BookOpen,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { BRAND } from "./brand";
import { Link } from "react-router";

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;
const LIGHT_GOLD = BRAND.goldLight;

const FACULTES_SIGNUP = [
  "Droit & Sciences Politiques",
  "Lettres & Sciences Humaines",
  "Sciences Exactes & Appliquées",
  "Sciences de la Santé",
  "Sciences Économiques & Gestion",
  "Éducation & Formation",
  "Théologie & Sciences Religieuses",
];

const NIVEAUX = [
  "Licence 1",
  "Licence 2",
  "Licence 3",
  "Master 1",
  "Master 2",
  "Doctorat",
];

type TabType = "login" | "signup";

export default function StudentLogin() {
  const [activeTab, setActiveTab] = useState<TabType>("login");

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [formSignup, setFormSignup] = useState({
    lastName: "",
    firstName: "",
    studentId: "",
    email: "",
    faculty: "",
    level: "",
    password: "",
    confirmPassword: "",
  });
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showSignupConfirm, setShowSignupConfirm] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (!identifier.trim()) {
      setLoginError("Veuillez saisir votre numéro d'étudiant ou votre email.");
      return;
    }
    if (!password.trim()) {
      setLoginError("Veuillez saisir votre mot de passe.");
      return;
    }

    setLoginLoading(true);
    setTimeout(() => {
      setLoginLoading(false);
      setLoginError(
        "Pour la démo, la connexion n'est pas encore active. Veuillez configurer le backend pour activer l'authentification.",
      );
    }, 1200);
  };

  const updateSignup = (field: keyof typeof formSignup, value: string) =>
    setFormSignup((prev) => ({ ...prev, [field]: value }));

  const passwordStrength = (() => {
    const p = formSignup.password;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();

  const strengthLabel = ["Très faible", "Faible", "Moyen", "Bon", "Excellent"];
  const strengthColors = [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#84cc16",
    "#22c55e",
  ];

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupError("");
    setSignupSuccess(false);

    if (!formSignup.lastName.trim()) {
      setSignupError("Veuillez saisir votre nom.");
      return;
    }
    if (!formSignup.firstName.trim()) {
      setSignupError("Veuillez saisir votre prénom.");
      return;
    }
    if (!formSignup.studentId.trim()) {
      setSignupError("Veuillez saisir votre numéro d'étudiant.");
      return;
    }
    if (!formSignup.email.trim()) {
      setSignupError("Veuillez saisir votre email.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formSignup.email)) {
      setSignupError("Veuillez saisir une adresse email valide.");
      return;
    }
    if (!formSignup.faculty) {
      setSignupError("Veuillez sélectionner votre faculté.");
      return;
    }
    if (!formSignup.level) {
      setSignupError("Veuillez sélectionner votre niveau d'étude.");
      return;
    }
    if (formSignup.password.length < 8) {
      setSignupError("Le mot de passe doit contenir au moins 8 caractères.");
      return;
    }
    if (formSignup.password !== formSignup.confirmPassword) {
      setSignupError("Les deux mots de passe ne correspondent pas.");
      return;
    }
    if (!acceptTerms) {
      setSignupError(
        "Veuillez accepter les conditions générales d'utilisation.",
      );
      return;
    }

    setSignupLoading(true);
    setTimeout(() => {
      setSignupLoading(false);
      setSignupSuccess(true);
      setTimeout(() => setActiveTab("login"), 2000);
    }, 1500);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "#ffffff",
        fontFamily: "'Source Sans Pro', Arial, sans-serif",
      }}
    >
      {/* Top bar */}
      <div
        className="w-full px-4 py-3 border-b"
        style={{
          background: "#f8fafc",
          borderColor: "#e2e8f0",
        }}
      >
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#475569] hover:text-[#1a3a5c] transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
          <div
            className="text-xs tracking-widest uppercase font-semibold"
            style={{ color: NAVY }}
          >
            Portail Étudiant
          </div>
        </div>
      </div>

      {/* Centered card */}
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-lg">
          {/* Logo + title */}
          <div className="text-center mb-7">
            <svg
              width="56"
              height="56"
              viewBox="0 0 100 100"
              aria-label="UDN crest"
              className="mx-auto mb-3"
            >
              <path
                d="M50 8 L88 24 L88 56 C88 76 70 90 50 96 C30 90 12 76 12 56 L12 24 Z"
                fill={NAVY}
                stroke={GOLD}
                strokeWidth="3"
              />
              <rect x="20" y="38" width="60" height="7" fill={GOLD} />
              <path d="M34 50 L50 46 L50 72 L34 76 Z" fill="#fff" opacity="0.9" />
              <path
                d="M66 50 L50 46 L50 72 L66 76 Z"
                fill="#e8e0d0"
                opacity="0.9"
              />
              <line x1="50" y1="46" x2="50" y2="72" stroke={GOLD} strokeWidth="1.5" />
              <rect x="47" y="18" width="6" height="16" rx="2" fill={GOLD} />
              <ellipse cx="50" cy="16" rx="5" ry="7" fill="#f5c518" opacity="0.9" />
            </svg>
            <h1
              className="text-xl font-bold mb-1"
              style={{ color: NAVY, fontFamily: "Georgia, serif" }}
            >
              Université de N'Djamena
            </h1>
            <p className="text-xs text-[#64748b]">Année académique 2024 – 2025</p>
          </div>

          {/* Card with tabs */}
          <div
            className="rounded-xl border overflow-hidden"
            style={{
              background: "#ffffff",
              borderColor: "#e2e8f0",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
            }}
          >
            {/* Tabs */}
            <div
              className="grid grid-cols-2 border-b"
              style={{ borderColor: "#e2e8f0" }}
            >
              <button
                type="button"
                onClick={() => {
                  setActiveTab("login");
                  setSignupSuccess(false);
                }}
                className="h-12 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                style={
                  activeTab === "login"
                    ? {
                        background: "#ffffff",
                        color: NAVY,
                        borderBottom: `2px solid ${NAVY}`,
                      }
                    : {
                        background: "#f8fafc",
                        color: "#64748b",
                        borderBottom: "2px solid transparent",
                      }
                }
              >
                <LogIn className="w-4 h-4" />
                Se connecter
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveTab("signup");
                  setSignupSuccess(false);
                }}
                className="h-12 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                style={
                  activeTab === "signup"
                    ? {
                        background: "#ffffff",
                        color: NAVY,
                        borderBottom: `2px solid ${NAVY}`,
                      }
                    : {
                        background: "#f8fafc",
                        color: "#64748b",
                        borderBottom: "2px solid transparent",
                      }
                }
              >
                <UserPlus className="w-4 h-4" />
                S'inscrire
              </button>
            </div>

            {/* ═══════════ LOGIN FORM ═══════════ */}
            {activeTab === "login" && (
              <form onSubmit={handleLoginSubmit} className="p-7 space-y-5">
                {loginError && (
                  <div
                    className="flex items-start gap-3 p-4 rounded-lg border"
                    style={{
                      background: "#fef2f2",
                      borderColor: "#fecaca",
                      color: "#991b1b",
                    }}
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
                    <p className="text-sm leading-relaxed">{loginError}</p>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="identifier"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: NAVY }}
                  >
                    Numéro d'étudiant ou Email{" "}
                    <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <div
                    className="flex items-center rounded-lg border overflow-hidden"
                    style={{ background: "#fff", borderColor: "#cbd5e1" }}
                  >
                    <div
                      className="pl-3.5 pr-3 h-11 flex items-center border-r"
                      style={{
                        background: "#f8fafc",
                        borderColor: "#e2e8f0",
                        color: "#64748b",
                      }}
                    >
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <input
                      id="identifier"
                      type="text"
                      autoComplete="username"
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="Ex: 2024-UDN-12345  ou  prenom.nom@etud.undt.edu.td"
                      className="flex-1 h-11 px-3 outline-none bg-transparent text-[15px] text-[#1a1a1a] placeholder:text-[#94a3b8]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold"
                      style={{ color: NAVY }}
                    >
                      Mot de passe <span style={{ color: "#dc2626" }}>*</span>
                    </label>
                    <a
                      href="#"
                      className="text-xs font-semibold hover:underline flex items-center gap-1"
                      style={{ color: NAVY }}
                    >
                      <HelpCircle className="w-3.5 h-3.5" />
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <div
                    className="flex items-center rounded-lg border overflow-hidden"
                    style={{ background: "#fff", borderColor: "#cbd5e1" }}
                  >
                    <div
                      className="pl-3.5 pr-3 h-11 flex items-center border-r"
                      style={{
                        background: "#f8fafc",
                        borderColor: "#e2e8f0",
                        color: "#64748b",
                      }}
                    >
                      <Lock className="w-4.5 h-4.5" />
                    </div>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Entrez votre mot de passe"
                      className="flex-1 h-11 px-3 outline-none bg-transparent text-[15px] text-[#1a1a1a] placeholder:text-[#94a3b8]"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="px-3.5 h-11 flex items-center text-[#64748b] hover:text-[#1a3a5c] transition-colors"
                      aria-label={
                        showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="w-4.5 h-4.5" />
                      ) : (
                        <Eye className="w-4.5 h-4.5" />
                      )}
                    </button>
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer select-none pt-1">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-[#cbd5e1]"
                    style={{ accentColor: NAVY }}
                  />
                  <span className="text-sm text-[#475569]">Se souvenir de moi</span>
                </label>

                <button
                  type="submit"
                  disabled={loginLoading}
                  className="w-full h-11 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: NAVY,
                    color: "#ffffff",
                    border: "1px solid #1a3a5c",
                  }}
                >
                  {loginLoading ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="4" />
                        <path className="opacity-75" fill="#ffffff" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Connexion en cours…
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4.5 h-4.5" />
                      Se connecter
                    </>
                  )}
                </button>
              </form>
            )}

            {/* ═══════════ SIGNUP FORM ═══════════ */}
            {activeTab === "signup" && (
              <form onSubmit={handleSignupSubmit} className="p-7 space-y-4">
              {signupError && (
                <div
                  className="flex items-start gap-3 p-4 rounded-lg border"
                  style={{
                    background: "#fef2f2",
                    borderColor: "#fecaca",
                    color: "#991b1b",
                  }}
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
                  <p className="text-sm leading-relaxed">{signupError}</p>
                </div>
              )}

              {signupSuccess && (
                <div
                  className="flex items-start gap-3 p-4 rounded-lg border"
                  style={{
                    background: "#f0fdf4",
                    borderColor: "#bbf7d0",
                    color: "#166534",
                  }}
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-green-600" />
                  <div>
                    <p className="text-sm font-semibold">Inscription réussie !</p>
                    <p className="text-sm">
                      Redirection vers la connexion… Vous pourrez vous connecter
                      avec vos identifiants.
                    </p>
                  </div>
                </div>
              )}

              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Nom <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <div
                    className="flex items-center rounded-lg border overflow-hidden"
                    style={{ background: "#fff", borderColor: "#cbd5e1" }}
                  >
                    <div
                      className="pl-3 pr-2.5 h-11 flex items-center border-r"
                      style={{
                        background: "#f8fafc",
                        borderColor: "#e2e8f0",
                        color: "#64748b",
                      }}
                    >
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={formSignup.lastName}
                      onChange={(e) => updateSignup("lastName", e.target.value)}
                      placeholder="Ex: Djamal"
                      className="flex-1 h-11 px-2.5 outline-none bg-transparent text-[15px] text-[#1a1a1a] placeholder:text-[#94a3b8]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Prénom <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <div
                    className="flex items-center rounded-lg border overflow-hidden"
                    style={{ background: "#fff", borderColor: "#cbd5e1" }}
                  >
                    <div
                      className="pl-3 pr-2.5 h-11 flex items-center border-r"
                      style={{
                        background: "#f8fafc",
                        borderColor: "#e2e8f0",
                        color: "#64748b",
                      }}
                    >
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={formSignup.firstName}
                      onChange={(e) => updateSignup("firstName", e.target.value)}
                      placeholder="Ex: Ahmat"
                      className="flex-1 h-11 px-2.5 outline-none bg-transparent text-[15px] text-[#1a1a1a] placeholder:text-[#94a3b8]"
                    />
                  </div>
                </div>
              </div>

              {/* Student ID + Email */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="studentId"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    N° Étudiant <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <div
                    className="flex items-center rounded-lg border overflow-hidden"
                    style={{ background: "#fff", borderColor: "#cbd5e1" }}
                  >
                    <div
                      className="pl-3 pr-2.5 h-11 flex items-center border-r"
                      style={{
                        background: "#f8fafc",
                        borderColor: "#e2e8f0",
                        color: "#64748b",
                      }}
                    >
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <input
                      id="studentId"
                      type="text"
                      value={formSignup.studentId}
                      onChange={(e) => updateSignup("studentId", e.target.value)}
                      placeholder="2024-UDN-XXXXX"
                      className="flex-1 h-11 px-2.5 outline-none bg-transparent text-[15px] text-[#1a1a1a] placeholder:text-[#94a3b8]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Email <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <div
                    className="flex items-center rounded-lg border overflow-hidden"
                    style={{ background: "#fff", borderColor: "#cbd5e1" }}
                  >
                    <div
                      className="pl-3 pr-2.5 h-11 flex items-center border-r"
                      style={{
                        background: "#f8fafc",
                        borderColor: "#e2e8f0",
                        color: "#64748b",
                      }}
                    >
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={formSignup.email}
                      onChange={(e) => updateSignup("email", e.target.value)}
                      placeholder="prenom.nom@etud.undt.edu.td"
                      className="flex-1 h-11 px-2.5 outline-none bg-transparent text-[15px] text-[#1a1a1a] placeholder:text-[#94a3b8]"
                    />
                  </div>
                </div>
              </div>

              {/* Faculty + Level */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="faculty"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Faculté <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <div
                    className="flex items-center rounded-lg border overflow-hidden"
                    style={{ background: "#fff", borderColor: "#cbd5e1" }}
                  >
                    <div
                      className="pl-3 pr-2.5 h-11 flex items-center border-r"
                      style={{
                        background: "#f8fafc",
                        borderColor: "#e2e8f0",
                        color: "#64748b",
                      }}
                    >
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <select
                      id="faculty"
                      value={formSignup.faculty}
                      onChange={(e) => updateSignup("faculty", e.target.value)}
                      className="flex-1 h-11 px-2.5 outline-none bg-transparent text-[15px] text-[#1a1a1a]"
                    >
                      <option value="">— Sélectionner —</option>
                      {FACULTES_SIGNUP.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="level"
                    className="block text-sm font-semibold mb-1.5"
                    style={{ color: NAVY }}
                  >
                    Niveau <span style={{ color: "#dc2626" }}>*</span>
                  </label>
                  <div
                    className="flex items-center rounded-lg border overflow-hidden"
                    style={{ background: "#fff", borderColor: "#cbd5e1" }}
                  >
                    <div
                      className="pl-3 pr-2.5 h-11 flex items-center border-r"
                      style={{
                        background: "#f8fafc",
                        borderColor: "#e2e8f0",
                        color: "#64748b",
                      }}
                    >
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <select
                      id="level"
                      value={formSignup.level}
                      onChange={(e) => updateSignup("level", e.target.value)}
                      className="flex-1 h-11 px-2.5 outline-none bg-transparent text-[15px] text-[#1a1a1a]"
                    >
                      <option value="">— Sélectionner —</option>
                      {NIVEAUX.map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="signupPassword"
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: NAVY }}
                >
                  Mot de passe <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <div
                  className="flex items-center rounded-lg border overflow-hidden"
                  style={{ background: "#fff", borderColor: "#cbd5e1" }}
                >
                  <div
                    className="pl-3 pr-2.5 h-11 flex items-center border-r"
                    style={{
                      background: "#f8fafc",
                      borderColor: "#e2e8f0",
                      color: "#64748b",
                    }}
                  >
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    id="signupPassword"
                    type={showSignupPassword ? "text" : "password"}
                    autoComplete="new-password"
                    value={formSignup.password}
                    onChange={(e) => updateSignup("password", e.target.value)}
                    placeholder="8 caractères minimum"
                    className="flex-1 h-11 px-2.5 outline-none bg-transparent text-[15px] text-[#1a1a1a] placeholder:text-[#94a3b8]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignupPassword((v) => !v)}
                    className="px-3 h-11 flex items-center text-[#64748b] hover:text-[#1a3a5c] transition-colors"
                    aria-label={showSignupPassword ? "Masquer" : "Afficher"}
                  >
                    {showSignupPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {formSignup.password && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-[#e2e8f0] overflow-hidden flex gap-0.5">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex-1 h-full transition-colors"
                          style={{
                            background:
                              i < passwordStrength
                                ? strengthColors[passwordStrength - 1]
                                : "#e2e8f0",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className="text-xs font-medium"
                      style={{
                        color: passwordStrength
                          ? strengthColors[passwordStrength - 1]
                          : "#94a3b8",
                      }}
                    >
                      {passwordStrength ? strengthLabel[passwordStrength - 1] : ""}
                    </span>
                  </div>
                )}
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: NAVY }}
                >
                  Confirmer le mot de passe{" "}
                  <span style={{ color: "#dc2626" }}>*</span>
                </label>
                <div
                  className="flex items-center rounded-lg border overflow-hidden"
                  style={{ background: "#fff", borderColor: "#cbd5e1" }}
                >
                  <div
                    className="pl-3 pr-2.5 h-11 flex items-center border-r"
                    style={{
                      background: "#f8fafc",
                      borderColor: "#e2e8f0",
                      color: "#64748b",
                    }}
                  >
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    id="confirmPassword"
                    type={showSignupConfirm ? "text" : "password"}
                    autoComplete="new-password"
                    value={formSignup.confirmPassword}
                    onChange={(e) =>
                      updateSignup("confirmPassword", e.target.value)
                    }
                    placeholder="Ressaisir le mot de passe"
                    className="flex-1 h-11 px-2.5 outline-none bg-transparent text-[15px] text-[#1a1a1a] placeholder:text-[#94a3b8]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowSignupConfirm((v) => !v)}
                    className="px-3 h-11 flex items-center text-[#64748b] hover:text-[#1a3a5c] transition-colors"
                    aria-label={showSignupConfirm ? "Masquer" : "Afficher"}
                  >
                    {showSignupConfirm ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {formSignup.confirmPassword &&
                  formSignup.password !== formSignup.confirmPassword && (
                    <p className="text-xs mt-1 text-[#dc2626] font-medium">
                      ⚠ Les mots de passe ne correspondent pas
                    </p>
                  )}
                {formSignup.confirmPassword &&
                  formSignup.password === formSignup.confirmPassword && (
                    <p className="text-xs mt-1 text-[#16a34a] font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Correspondance OK
                    </p>
                  )}
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2 cursor-pointer select-none pt-1">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 rounded border-[#cbd5e1]"
                  style={{ accentColor: NAVY }}
                />
                <span className="text-sm text-[#475569] leading-relaxed">
                  J'accepte les{" "}
                  <a
                    href="#"
                    className="font-semibold hover:underline"
                    style={{ color: NAVY }}
                  >
                    conditions générales d'utilisation
                  </a>{" "}
                  et la{" "}
                  <a
                    href="#"
                    className="font-semibold hover:underline"
                    style={{ color: NAVY }}
                  >
                    politique de confidentialité
                  </a>{" "}
                  de l'Université de N'Djamena.
                </span>
              </label>

              <button
                type="submit"
                disabled={signupLoading || signupSuccess}
                className="w-full h-11 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-all disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                style={{
                  background: signupSuccess ? "#22c55e" : NAVY,
                  color: "#ffffff",
                  border: signupSuccess ? "1px solid #22c55e" : "1px solid #1a3a5c",
                }}
              >
                {signupLoading ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="4" />
                      <path className="opacity-75" fill="#ffffff" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Création du compte…
                  </>
                ) : signupSuccess ? (
                  <>
                    <CheckCircle2 className="w-4.5 h-4.5" />
                    Compte créé avec succès
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4.5 h-4.5" />
                    Créer mon compte étudiant
                  </>
                )}
              </button>
            </form>
            )}

            {/* Help footer */}
            <div
              className="px-7 py-4 border-t text-center"
              style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}
            >
              <div className="text-xs text-[#64748b] leading-relaxed">
                <span className="font-semibold" style={{ color: NAVY }}>
                  Besoin d'aide ?
                </span>{" "}
                Support :{" "}
                <a
                  href="mailto:support@undt.edu.td"
                  className="font-semibold hover:underline"
                  style={{ color: NAVY }}
                >
                  support@undt.edu.td
                </a>{" "}
                · +235 22 51 44 52
              </div>
            </div>
          </div>

          <div className="text-center mt-5 text-xs text-[#94a3b8]">
            © 1971–2024 Université de N'Djamena · Tous droits réservés
          </div>
        </div>
      </div>
    </div>
  );
}
