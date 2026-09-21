import { useState } from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import StudentLogin from "../Student/StudentLogin";
import {
  Home,
  FileText,
  Calendar,
  CreditCard,
  User,
  LogOut,
  Bell,
  ChevronRight,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Key,
  Eye,
  EyeOff,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   DESIGN SYSTEM — tabbed administrative portal.
   Navy identity + a single brass accent; status colors reserved strictly
   for real status. One visual metaphor (a thin bar) carries every metric,
   instead of mixing gauges, sparklines and badges for the same number.
   ───────────────────────────────────────────────────────────────────────── */
const INK = "#1b2130";
const NAVY = "#101a2e";
const NAVY_SOFT = "#1c2b45";
const GOLD = "#9c7a2e";
const GOLD_SOFT = "#c9a55a";
const MUTED = "#6b7280";
const MUTED_SOFT = "#9aa1ac";
const BORDER = "#dbdfe6";
const BORDER_LIGHT = "#eceef2";
const BG = "#f2f3f5";
const SURFACE = "#ffffff";

const SUCCESS = "#2f6b46";
const WARNING = "#a3701f";
const DANGER = "#a5382c";
const INFO = "#3c5c85";
const PLUM = "#6a4356";

const SERIF = "'Source Serif 4', Georgia, serif";
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

/* ── Data ── */
const STUDENT = {
  firstName: "Ahmat",
  lastName: "Djamal",
  studentId: "2022-UDN-48721",
  faculty: "Faculté des Sciences Économiques & de Gestion",
  level: "Licence 3 — Gestion des Entreprises",
  email: "ahmat.djamal@etud.undt.edu.td",
  phone: "+235 6X XX XX XX",
  campus: "Campus de Toukra, N'Djamena",
  avatar: "AD",
  year: "2024–2025",
  semester: "Semestre 5",
};

const moyenneTrend: { t: number; v: number }[] = [
  { t: 0, v: 11.5 },
  { t: 1, v: 11.8 },
  { t: 2, v: 11.6 },
  { t: 3, v: 12.0 },
  { t: 4, v: 12.3 },
  { t: 5, v: 12.1 },
  { t: 6, v: 12.6 },
  { t: 7, v: 12.9 },
  { t: 8, v: 12.7 },
  { t: 9, v: 13.1 },
  { t: 10, v: 13.3 },
  { t: 11, v: 13.42 },
];

const INDICATORS = [
  { label: "Moyenne générale", value: "13,42", suffix: "/ 20", pct: 67, color: GOLD, delta: "+0,8 ce semestre" },
  { label: "Crédits validés", value: "96", suffix: "/ 120", pct: 80, color: SUCCESS, delta: "+6 ce semestre" },
  { label: "Taux de présence", value: "89", suffix: "%", pct: 89, color: INFO, delta: "-2 % vs. sem. précédent" },
  { label: "Classement", value: "12e", suffix: "/ 45", pct: 73, color: PLUM, delta: "+3 places" },
];

const SUIVI = [
  { label: "UE validées", val: "3 / 5", color: SUCCESS },
  { label: "En attente", val: "1", color: WARNING },
  { label: "Absences", val: "4", color: DANGER },
];

/* Single source of truth: roster + grades merged, no duplicate listings */
const COURSES = [
  {
    code: "GE3-L3-01",
    name: "Comptabilité approfondie",
    teacher: "Dr. Saleh Mahamat",
    room: "Amphi B",
    credits: 6,
    cc: "14,0",
    ex: "14,8",
    note: "14,5",
    status: "En cours",
  },
  {
    code: "GE3-L3-02",
    name: "Gestion financière",
    teacher: "Pr. Fatimé Ngarbaye",
    room: "Salle 214",
    credits: 5,
    cc: "12,5",
    ex: "13,0",
    note: "12,8",
    status: "En cours",
  },
  {
    code: "GE3-L3-03",
    name: "Droit des affaires",
    teacher: "Dr. Brahim Koiballa",
    room: "Amphi A",
    credits: 4,
    cc: "15,2",
    ex: "14,9",
    note: "15,0",
    status: "En cours",
  },
  {
    code: "GE3-L3-04",
    name: "Marketing stratégique",
    teacher: "Dr. Aïcha Djimet",
    room: "Salle 307",
    credits: 5,
    cc: "—",
    ex: "—",
    note: "—",
    status: "À rattraper",
  },
  {
    code: "GE3-L3-05",
    name: "Anglais des affaires",
    teacher: "M. Jean-Pierre Ngueyam",
    room: "Salle 112",
    credits: 3,
    cc: "14,0",
    ex: "13,6",
    note: "13,8",
    status: "Validé",
  },
];

const SCHEDULE = [
  { day: "Lundi 11", time: "08:00 – 10:00", subject: "Comptabilité approfondie", room: "Amphi B", teacher: "Dr. Saleh Mahamat", type: "Cours magistral" },
  { day: "Lundi 11", time: "10:30 – 12:30", subject: "Gestion financière · TD", room: "Salle 214", teacher: "Pr. Fatimé Ngarbaye", type: "Travaux dirigés" },
  { day: "Mardi 12", time: "08:00 – 10:00", subject: "Droit des affaires", room: "Amphi A", teacher: "Dr. Brahim Koiballa", type: "Cours magistral" },
  { day: "Mercredi 13", time: "14:00 – 16:00", subject: "Marketing · Cas pratique", room: "Salle 307", teacher: "Dr. Aïcha Djimet", type: "Travaux pratiques" },
  { day: "Jeudi 14", time: "09:00 – 11:00", subject: "Anglais des affaires", room: "Salle 112", teacher: "M. Jean-Pierre Ngueyam", type: "Cours interactif" },
];

const ACTIVITY = [
  { action: "Inscription pédagogique Semestre 6", actor: "Administration", time: "10 sept.", status: "info" },
  { action: "Contrôle continu — Comptabilité", actor: "Salle 214, vendredi 20 sept.", time: "9 sept.", status: "warning" },
  { action: "Stage de fin d'études — Appel à candidatures", actor: "Ecobank, Bolloré, ONU Tchad", time: "5 sept.", status: "success" },
];

const statusMeta: Record<string, { color: string; label: string }> = {
  info: { color: INFO, label: "Info" },
  warning: { color: WARNING, label: "À préparer" },
  success: { color: SUCCESS, label: "Opportunité" },
};

const PAYMENTS = [
  { label: "Frais de scolarité — Tranche 1", amount: "75 000 FCFA", date: "05 juil. 2024", status: "Payé", tone: "paid" },
  { label: "Frais de scolarité — Tranche 2", amount: "60 000 FCFA", date: "Échéance : 30 sept. 2024", status: "En attente", tone: "pending" },
  { label: "Frais de bibliothèque & CVEC", amount: "12 500 FCFA", date: "Échéance : 15 oct. 2024", status: "En attente", tone: "pending" },
];

type View = "login" | "dashboard";
type Tab = "vue-ensemble" | "cours-resultats" | "emploi-du-temps" | "paiements" | "profil";

const TABS: { id: Tab; label: string }[] = [
  { id: "vue-ensemble", label: "Vue d'ensemble" },
  { id: "cours-resultats", label: "Cours & résultats" },
  { id: "emploi-du-temps", label: "Emploi du temps" },
  { id: "paiements", label: "Paiements" },
  { id: "profil", label: "Profil" },
];

/* ── Shared primitives ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.03em", color: MUTED }}>{children}</div>;
}

function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: typeof Home;
  title: string;
  subtitle?: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div className="so-section-icon">
        <Icon style={{ width: 16, height: 16 }} />
      </div>
      <div>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>{title}</h2>
        {subtitle && <p style={{ fontSize: 12.5, color: MUTED, margin: "2px 0 0" }}>{subtitle}</p>}
      </div>
    </div>
  );
}

function IndicatorTile({ item }: { item: (typeof INDICATORS)[number] }) {
  return (
    <div className="so-tile">
      <SectionLabel>{item.label}</SectionLabel>
      <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginTop: 6 }}>
        <span style={{ fontSize: 25, fontWeight: 600, color: item.color, fontFamily: SERIF, letterSpacing: "-0.01em" }}>
          {item.value}
        </span>
        <span style={{ fontSize: 12, color: MUTED }}>{item.suffix}</span>
      </div>
      <div className="so-tile-track">
        <div className="so-tile-fill" style={{ width: `${item.pct}%`, background: item.color }} />
      </div>
      <div style={{ fontSize: 11, color: MUTED_SOFT }}>{item.delta}</div>
    </div>
  );
}

function CourseRow({ c }: { c: (typeof COURSES)[number] }) {
  const meta =
    c.status === "Validé"
      ? { color: SUCCESS, bg: "#eef4f0" }
      : c.status === "À rattraper"
      ? { color: DANGER, bg: "#f7ecea" }
      : { color: INFO, bg: "#eef1f6" };
  return (
    <tr style={{ borderTop: `1px solid ${BORDER_LIGHT}` }}>
      <td style={{ padding: "13px 16px", fontFamily: "monospace", fontSize: 11.5, color: MUTED_SOFT }}>{c.code}</td>
      <td style={{ padding: "13px 16px" }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: INK, fontFamily: SERIF }}>{c.name}</div>
        <div style={{ fontSize: 11.5, color: MUTED, marginTop: 2 }}>
          {c.teacher} · {c.room}
        </div>
      </td>
      <td style={{ padding: "13px 16px", textAlign: "center", color: "#475569", fontSize: 13 }}>{c.credits}</td>
      <td style={{ padding: "13px 16px", textAlign: "center", fontFamily: "monospace", fontSize: 12.5 }}>{c.cc}</td>
      <td style={{ padding: "13px 16px", textAlign: "center", fontFamily: "monospace", fontSize: 12.5 }}>{c.ex}</td>
      <td
        style={{
          padding: "13px 16px",
          textAlign: "center",
          fontWeight: 600,
          fontFamily: SERIF,
          fontSize: 15,
          color: c.note === "—" ? MUTED_SOFT : parseFloat(c.note.replace(",", ".")) >= 10 ? SUCCESS : DANGER,
        }}
      >
        {c.note}
      </td>
      <td style={{ padding: "13px 16px", textAlign: "center" }}>
        <span className="so-badge" style={{ background: meta.bg, color: meta.color }}>
          {c.status}
        </span>
      </td>
    </tr>
  );
}

function ScheduleRow({ s }: { s: (typeof SCHEDULE)[number] }) {
  return (
    <div className="so-item-row">
      <div style={{ textAlign: "center", flexShrink: 0, width: 48 }}>
        <p style={{ fontSize: 10, fontWeight: 600, color: GOLD, margin: 0 }}>{s.day.split(" ")[0]}</p>
        <p style={{ fontSize: 19, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>{s.day.split(" ")[1]}</p>
      </div>
      <div style={{ width: 1, background: BORDER_LIGHT, alignSelf: "stretch" }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 11.5, color: MUTED, marginBottom: 4, flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <Clock style={{ width: 13, height: 13 }} /> {s.time}
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <MapPin style={{ width: 13, height: 13 }} /> {s.room}
          </span>
          <span className="so-badge" style={{ background: BORDER_LIGHT, color: INK }}>
            {s.type}
          </span>
        </div>
        <h4 style={{ fontSize: 14, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>{s.subject}</h4>
        <p style={{ fontSize: 12, color: MUTED, margin: "2px 0 0" }}>{s.teacher}</p>
      </div>
    </div>
  );
}

function PaymentRow({ p }: { p: (typeof PAYMENTS)[number] }) {
  const isPaid = p.tone === "paid";
  return (
    <div className="so-item-row">
      <div className="so-item-icon" style={{ background: isPaid ? "#eef4f0" : "#f8f2e7" }}>
        {isPaid ? (
          <CheckCircle2 style={{ width: 16, height: 16, color: SUCCESS }} />
        ) : (
          <AlertCircle style={{ width: 16, height: 16, color: WARNING }} />
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{ fontSize: 14, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>{p.label}</h4>
        <p style={{ fontSize: 12, color: MUTED, margin: "2px 0 0" }}>{p.date}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
        <span style={{ fontSize: 14.5, fontWeight: 600, color: INK, fontFamily: SERIF }}>{p.amount}</span>
        <span className="so-badge" style={{ background: isPaid ? "#eef4f0" : "#f8f2e7", color: isPaid ? SUCCESS : WARNING }}>
          {p.status}
        </span>
      </div>
    </div>
  );
}

/* ── Masthead (now drives tab state instead of anchor scrolling) ── */
function Masthead({
  onLogout,
  activeTab,
  onTabChange,
}: {
  onLogout: () => void;
  activeTab: Tab;
  onTabChange: (t: Tab) => void;
}) {
  return (
    <header className="so-masthead">
      <nav className="so-masthead-nav">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => onTabChange(t.id)}
            className={`so-tab-btn ${activeTab === t.id ? "so-tab-btn-active" : ""}`}
          >
            {t.label}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <button className="so-icon-btn" aria-label="Notifications">
          <Bell style={{ width: 15, height: 15, color: "#c7ccd6" }} />
          <span style={{ position: "absolute", top: 5, right: 6, width: 5, height: 5, borderRadius: "50%", background: DANGER }} />
        </button>
        <div className="so-avatar-mini">{STUDENT.avatar}</div>
        <button onClick={onLogout} className="so-logout-btn" aria-label="Se déconnecter">
          <LogOut style={{ width: 14, height: 14 }} />
        </button>
      </nav>
    </header>
  );
}

/* ── Tab panels ── */
function VueEnsemble() {
  return (
    <section>
      <SectionHeading icon={Home} title="Vue d'ensemble" subtitle={`${STUDENT.year} · ${STUDENT.semester} · ${STUDENT.level}`} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 1, marginTop: 20 }} className="so-card">
        {INDICATORS.map((it, i) => (
          <div key={it.label} style={{ padding: "18px 20px", borderRight: i < INDICATORS.length - 1 ? `1px solid ${BORDER_LIGHT}` : "none" }}>
            <IndicatorTile item={it} />
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 18, marginTop: 18 }}>
        <div className="so-card" style={{ padding: "18px 20px 6px" }}>
          <SectionLabel>Évolution de la moyenne — {STUDENT.semester}</SectionLabel>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart data={moyenneTrend} margin={{ top: 14, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="moyGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={GOLD} stopOpacity={0.25} />
                  <stop offset="100%" stopColor={GOLD} stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <Tooltip
                contentStyle={{ background: NAVY, border: "none", borderRadius: 6, fontSize: 11 }}
                itemStyle={{ color: "#fff" }}
                labelStyle={{ display: "none" }}
                formatter={(v: number) => [v, "Moyenne"]}
              />
              <Area type="monotone" dataKey="v" stroke={GOLD} strokeWidth={2} fill="url(#moyGrad)" dot={false} activeDot={{ r: 4, fill: GOLD, strokeWidth: 0 }} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="so-card">
          <div style={{ display: "flex", borderBottom: `1px solid ${BORDER_LIGHT}` }}>
            {SUIVI.map((s, i) => (
              <div key={s.label} style={{ flex: 1, padding: "14px 16px", borderRight: i < SUIVI.length - 1 ? `1px solid ${BORDER_LIGHT}` : "none" }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: MUTED_SOFT }}>{s.label}</div>
                <div style={{ fontSize: 18, fontWeight: 600, color: s.color, fontFamily: SERIF, marginTop: 3 }}>{s.val}</div>
              </div>
            ))}
          </div>
          {ACTIVITY.map((item, i) => {
            const meta = statusMeta[item.status];
            return (
              <div key={i} className="so-act-row">
                <span className="so-act-dot" style={{ background: meta.color }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="so-act-action">{item.action}</div>
                  <div className="so-act-actor">{item.actor}</div>
                </div>
                <div style={{ fontSize: 10.5, color: MUTED_SOFT, flexShrink: 0 }}>{item.time}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CoursResultats() {
  return (
    <section>
      <SectionHeading icon={FileText} title="Cours & résultats" subtitle="Relevé provisoire — inscription, notes et statut par unité d'enseignement" />
      <div className="so-card" style={{ marginTop: 20, overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 620 }}>
          <thead style={{ background: "#f7f7f9" }}>
            <tr>
              {["UE", "Intitulé", "Crédits", "CC", "Examen", "Note", "Statut"].map((h) => (
                <th
                  key={h}
                  style={{
                    textAlign: h === "Intitulé" ? "left" : "center",
                    padding: "12px 16px",
                    fontWeight: 600,
                    color: MUTED,
                    fontSize: 10.5,
                    letterSpacing: "0.02em",
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COURSES.map((c) => (
              <CourseRow key={c.code} c={c} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function EmploiDuTemps() {
  return (
    <section>
      <SectionHeading icon={Calendar} title="Emploi du temps" subtitle="Semaine du 9 au 15 septembre 2024" />
      <div className="so-card" style={{ marginTop: 20 }}>
        {SCHEDULE.map((s, i) => (
          <ScheduleRow key={i} s={s} />
        ))}
      </div>
    </section>
  );
}

function Paiements() {
  return (
    <section>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <SectionHeading icon={CreditCard} title="Paiements" subtitle={`Année académique ${STUDENT.year}`} />
        <button className="so-primary-btn">
          Payer en ligne <ChevronRight style={{ width: 13, height: 13 }} />
        </button>
      </div>

      <div className="so-card" style={{ marginTop: 20 }}>
        <div style={{ display: "flex", borderBottom: `1px solid ${BORDER_LIGHT}` }}>
          <div style={{ flex: 1, padding: "16px 20px", borderRight: `1px solid ${BORDER_LIGHT}` }}>
            <SectionLabel>Total payé</SectionLabel>
            <div style={{ fontSize: 21, fontWeight: 600, color: SUCCESS, fontFamily: SERIF, marginTop: 4 }}>75 000 FCFA</div>
          </div>
          <div style={{ flex: 1, padding: "16px 20px" }}>
            <SectionLabel>Restant dû</SectionLabel>
            <div style={{ fontSize: 21, fontWeight: 600, color: WARNING, fontFamily: SERIF, marginTop: 4 }}>72 500 FCFA</div>
          </div>
        </div>
        {PAYMENTS.map((p, i) => (
          <PaymentRow key={i} p={p} />
        ))}
      </div>
    </section>
  );
}

function Profil() {
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState(STUDENT.email);
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setEditing(false);
    setPwd("");
    setPwdConfirm("");
    setTimeout(() => setSaved(false), 3000);
  };
  const handleCancel = () => {
    setEditing(false);
    setEmail(STUDENT.email);
    setPwd("");
    setPwdConfirm("");
  };

  return (
    <section>
      <SectionHeading icon={User} title="Profil" subtitle="Coordonnées et identifiants de connexion" />

      <div className="so-card" style={{ marginTop: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, padding: "20px 20px", borderBottom: `1px solid ${BORDER_LIGHT}` }}>
          {[
            { k: "Téléphone", v: STUDENT.phone },
            { k: "Campus", v: STUDENT.campus },
            { k: "Faculté", v: STUDENT.faculty },
          ].map(({ k, v }) => (
            <div key={k}>
              <p style={{ fontSize: 10.5, color: MUTED_SOFT, fontWeight: 600, margin: "0 0 5px" }}>{k}</p>
              <p style={{ fontSize: 13.5, color: INK, margin: 0 }}>{v}</p>
            </div>
          ))}
        </div>

        <div style={{ padding: "18px 20px 6px", display: "flex", alignItems: "center", gap: 11 }}>
          <div className="so-section-icon" style={{ width: 30, height: 30 }}>
            <Key style={{ width: 14, height: 14 }} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 13.5, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>Identifiants de connexion</h3>
            <p style={{ fontSize: 11, color: MUTED, margin: "1px 0 0" }}>Email et mot de passe sont les seuls champs modifiables</p>
          </div>
          {!editing && !saved && (
            <button onClick={() => setEditing(true)} className="so-secondary-btn">
              Modifier
            </button>
          )}
          {saved && (
            <span className="so-badge" style={{ background: "#eef4f0", color: SUCCESS, display: "flex", alignItems: "center", gap: 5, padding: "6px 10px" }}>
              <CheckCircle2 style={{ width: 12, height: 12 }} />
              Enregistré
            </span>
          )}
        </div>

        <div style={{ padding: "16px 20px 22px", display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: INK, marginBottom: 6 }}>
              Adresse email universitaire
            </label>
            {editing ? (
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="so-input" />
            ) : (
              <div className="so-input-static">{email}</div>
            )}
          </div>

          <div>
            <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: INK, marginBottom: 6 }}>
              {editing ? "Nouveau mot de passe" : "Mot de passe"}
            </label>
            {editing ? (
              <div style={{ position: "relative" }}>
                <input
                  type={showPwd ? "text" : "password"}
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  placeholder="Laissez vide pour conserver le mot de passe actuel"
                  className="so-input"
                  style={{ paddingRight: 42 }}
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  style={{ position: "absolute", right: 11, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: MUTED, cursor: "pointer", display: "flex" }}
                  tabIndex={-1}
                  aria-label={showPwd ? "Masquer" : "Afficher"}
                >
                  {showPwd ? <EyeOff style={{ width: 16, height: 16 }} /> : <Eye style={{ width: 16, height: 16 }} />}
                </button>
              </div>
            ) : (
              <div className="so-input-static" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ letterSpacing: "0.35em", color: "#475569" }}>••••••••</span>
                <span className="so-badge" style={{ background: BORDER_LIGHT, color: MUTED }}>Modifié le 14 août 2024</span>
              </div>
            )}
          </div>

          {editing && (
            <>
              <div>
                <label style={{ display: "block", fontSize: 12.5, fontWeight: 600, color: INK, marginBottom: 6 }}>
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type={showPwd ? "text" : "password"}
                  value={pwdConfirm}
                  onChange={(e) => setPwdConfirm(e.target.value)}
                  placeholder="Retapez le nouveau mot de passe"
                  className="so-input"
                />
                {pwd && pwdConfirm && pwd !== pwdConfirm && (
                  <p style={{ marginTop: 6, fontSize: 11.5, fontWeight: 600, color: DANGER, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle style={{ width: 13, height: 13 }} />
                    Les mots de passe ne correspondent pas
                  </p>
                )}
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 6, borderTop: `1px solid ${BORDER_LIGHT}` }}>
                <button onClick={handleCancel} className="so-secondary-btn">Annuler</button>
                <button onClick={handleSave} className="so-primary-btn">
                  <CheckCircle2 style={{ width: 13, height: 13 }} />
                  Enregistrer
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

const TAB_PANELS: Record<Tab, React.ComponentType> = {
  "vue-ensemble": VueEnsemble,
  "cours-resultats": CoursResultats,
  "emploi-du-temps": EmploiDuTemps,
  "paiements": Paiements,
  "profil": Profil,
};

/* ── Page ── */
function StudentDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<Tab>("vue-ensemble");
  const ActivePanel = TAB_PANELS[activeTab];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG,
        fontFamily: SANS,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }

        .so-masthead { background: ${NAVY}; position: sticky; top: 0; z-index: 30; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .so-masthead-nav {
          display: flex; align-items: center; gap: 4px;
          padding: 8px 28px; max-width: 1180px; margin: 0 auto;
          overflow-x: auto; min-height: 44px;
        }
        .so-tab-btn {
          font-size: 12.5px; font-weight: 500; color: #a9b0bd; text-decoration: none;
          padding: 5px 12px; border-radius: 5px; white-space: nowrap;
          background: none; border: none; cursor: pointer; font-family: ${SANS};
        }
        .so-tab-btn:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .so-tab-btn-active { background: ${NAVY_SOFT}; color: #fff; }

        .so-icon-btn {
          position: relative; width: 28px; height: 28px; border-radius: 5px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          background: none; border: none; cursor: pointer;
        }
        .so-icon-btn:hover { background: rgba(255,255,255,0.06); }
        .so-avatar-mini {
          width: 26px; height: 26px; border-radius: 5px; background: ${NAVY_SOFT};
          border: 1px solid rgba(201,165,90,0.35); flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-weight: 600; color: ${GOLD_SOFT}; font-size: 10.5px; font-family: ${SERIF};
        }
        .so-logout-btn {
          width: 28px; height: 28px; border-radius: 5px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          background: none; border: 1px solid rgba(255,255,255,0.12); color: #c7ccd6; cursor: pointer;
        }
        .so-logout-btn:hover { background: rgba(165,56,44,0.16); border-color: rgba(165,56,44,0.3); color: #e8a49c; }

        .so-main { max-width: 1180px; margin: 0 auto; padding: 30px 28px 60px; }

        .so-section-icon {
          width: 32px; height: 32px; border-radius: 6px; background: ${NAVY}; color: ${GOLD_SOFT};
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }

        .so-card {
          background: ${SURFACE}; border: 1px solid ${BORDER}; border-radius: 8px; overflow: hidden;
        }

        .so-tile { padding: 4px 2px; }
        .so-tile-track { height: 4px; background: ${BORDER_LIGHT}; border-radius: 2px; margin: 10px 0 7px; overflow: hidden; }
        .so-tile-fill { height: 4px; border-radius: 2px; }

        .so-badge {
          font-size: 10.5px; font-weight: 600; padding: 3px 9px; border-radius: 4px;
          white-space: nowrap; display: inline-block;
        }

        .so-item-row { display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-bottom: 1px solid ${BORDER_LIGHT}; }
        .so-item-row:last-child { border-bottom: none; }
        .so-item-icon {
          width: 36px; height: 36px; border-radius: 6px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }

        .so-primary-btn {
          font-size: 12.5px; font-weight: 600; padding: 9px 16px; border-radius: 6px;
          display: inline-flex; align-items: center; gap: 6px;
          color: #fff; background: ${NAVY}; border: none; cursor: pointer; font-family: ${SANS};
        }
        .so-primary-btn:hover { background: ${NAVY_SOFT}; }
        .so-secondary-btn {
          font-size: 12.5px; font-weight: 600; padding: 9px 16px; border-radius: 6px;
          border: 1px solid ${BORDER}; color: #475569; background: #fff; cursor: pointer; font-family: ${SANS};
        }
        .so-secondary-btn:hover { background: ${BORDER_LIGHT}; }

        .so-input {
          width: 100%; padding: 10px 13px; border-radius: 6px; border: 1px solid ${BORDER};
          font-size: 13.5px; font-family: ${SANS}; outline: none; color: ${INK};
        }
        .so-input:focus { border-color: ${GOLD}; box-shadow: 0 0 0 3px rgba(156,122,46,0.12); }
        .so-input-static {
          padding: 10px 13px; border-radius: 6px; border: 1px solid ${BORDER_LIGHT};
          background: #fafafb; font-size: 13.5px; color: ${INK};
        }

        .so-act-row { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-bottom: 1px solid #f8f8f9; }
        .so-act-row:last-child { border-bottom: none; }
        .so-act-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
        .so-act-action { font-size: 12.5px; font-weight: 500; color: ${INK}; }
        .so-act-actor { font-size: 11px; color: ${MUTED}; margin-top: 2px; }
      `}</style>

      <Masthead onLogout={onLogout} activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="so-main">
        <ActivePanel />
      </div>
    </div>
  );
}

export default function Portail_Etudiant() {
  const [view, setView] = useState<View>("login");

  if (view === "dashboard") {
    return <StudentDashboard onLogout={() => setView("login")} />;
  }

  return (
    <div>
      <div style={{ padding: 16, background: "#fff", borderBottom: `1px solid ${BORDER}`, textAlign: "center" }}>
        <p style={{ fontSize: 12, color: MUTED, margin: 0 }}>
          Démonstration : cliquez sur{" "}
          <button
            onClick={() => setView("dashboard")}
            style={{ textDecoration: "underline", fontWeight: 600, color: GOLD, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
          >
            accéder au tableau de bord
          </button>{" "}
          pour visualiser l'interface étudiant (sans connexion réelle).
        </p>
      </div>
      <StudentLogin />
    </div>
  );
}