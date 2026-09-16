import { useState } from "react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
} from "recharts";
import StudentLogin from "../Student/StudentLogin";
import {
  Home,
  BookOpen,
  Calendar,
  FileText,
  CreditCard,
  User,
  LogOut,
  Bell,
  ChevronRight,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Award,
  TrendingUp,
  Lock,
  Key,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────────────
   DESIGN SYSTEM — Registrar / administrative identity
   Palette: deep institutional navy + a single restrained brass accent.
   Status colors (success/warning/danger/info) are reserved strictly for
   actual status meaning — never used decoratively.
   Type: Source Serif 4 for headings, figures and identity; Inter for UI,
   body copy and dense data.
   ───────────────────────────────────────────────────────────────────────── */
const INK = "#1b2130";        // primary text
const NAVY = "#101a2e";       // brand / sidebar / header
const NAVY_SOFT = "#1c2b45";  // sidebar hover / secondary surfaces
const GOLD = "#9c7a2e";       // single accent — used for emphasis & active state
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
const PLUM = "#6a4356"; // secondary accent, reserved for ranking only

const SERIF = "'Source Serif 4', Georgia, serif";
const SANS = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

/* ── Types ── */
interface Badge {
  t: string;
  c: string;
}

interface GaugeItem {
  label: string;
  sub: string;
  val: number;
  color: string;
  badges: Badge[];
  spark: number[];
}

interface HealthItem {
  label: string;
  value: number;
  color: string;
}

interface ProgItem {
  name: string;
  val: string;
  pct: number;
}

interface StatCell {
  label: string;
  val: string;
  color: string;
}

interface ActivityItem {
  action: string;
  actor: string;
  time: string;
  status: string;
}

interface StatusMeta {
  color: string;
  label: string;
}

interface HeaderStat {
  label: string;
  value: string;
}

interface SparkProps {
  data: number[];
  color: string;
}

interface GaugeProps {
  value: number;
  color: string;
  size?: number;
}

/* ── Data ── */
const STUDENT = {
  firstName: "Ahmat",
  lastName: "Djamal",
  studentId: "2022-UDN-48721",
  faculty: "Faculté des Sciences Économiques & de Gestion",
  level: "Licence 3 — Gestion des Entreprises",
  email: "ahmat.djamal@etud.undt.edu.td",
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

const sparkMoyenne: number[] = [12.0, 12.3, 12.1, 12.6, 12.9, 12.7, 13.1, 13.3, 13.42];
const sparkCredits: number[] = [70, 74, 76, 78, 79, 80, 80, 80, 80];
const sparkPresence: number[] = [92, 91, 90, 88, 87, 89, 89, 88, 89];
const sparkRang: number[] = [20, 18, 17, 16, 15, 14, 13, 12, 12];

const toSparkData = (arr: number[]): { i: number; v: number }[] =>
  arr.map((v, i) => ({ i, v }));

const HEADER_STATS: HeaderStat[] = [
  { label: "Cours actifs", value: "5" },
  { label: "Échéances", value: "2" },
];

const GAUGES: GaugeItem[] = [
  {
    label: "Moyenne générale",
    sub: "Sur 20 points",
    val: 67,
    color: GOLD,
    badges: [
      { t: "13,42/20", c: GOLD },
      { t: "+0,8", c: MUTED },
    ],
    spark: sparkMoyenne,
  },
  {
    label: "Crédits validés",
    sub: "Progression du diplôme",
    val: 80,
    color: SUCCESS,
    badges: [
      { t: "96/120", c: SUCCESS },
      { t: "+6 ce sem.", c: MUTED },
    ],
    spark: sparkCredits,
  },
  {
    label: "Taux de présence",
    sub: "Ce semestre",
    val: 89,
    color: INFO,
    badges: [
      { t: "89 %", c: INFO },
      { t: "-2 %", c: WARNING },
    ],
    spark: sparkPresence,
  },
  {
    label: "Classement",
    sub: "Sur 45 étudiants",
    val: 73,
    color: PLUM,
    badges: [
      { t: "12e / 45", c: PLUM },
      { t: "+3", c: SUCCESS },
    ],
    spark: sparkRang,
  },
];

const HEALTH: HealthItem[] = [
  { label: "Crédits validés", value: 80, color: SUCCESS },
  { label: "Taux de présence", value: 89, color: INFO },
  { label: "Objectif moyenne (≥12/20)", value: 67, color: GOLD },
];

const STAT_CELLS: StatCell[] = [
  { label: "UE validées", val: "3/5", color: SUCCESS },
  { label: "En attente", val: "1", color: WARNING },
  { label: "Absences", val: "4", color: DANGER },
];

const COURSES = [
  {
    code: "GE3-L3-01",
    name: "Comptabilité approfondie",
    teacher: "Dr. Saleh Mahamat",
    room: "Amphi B · Campus Toukra",
    credits: 6,
    grade: "14,5",
    status: "En cours",
  },
  {
    code: "GE3-L3-02",
    name: "Gestion financière",
    teacher: "Pr. Fatimé Ngarbaye",
    room: "Salle 214 · Campus Toukra",
    credits: 5,
    grade: "12,8",
    status: "En cours",
  },
  {
    code: "GE3-L3-03",
    name: "Droit des affaires",
    teacher: "Dr. Brahim Koiballa",
    room: "Amphi A · Campus Toukra",
    credits: 4,
    grade: "15,0",
    status: "En cours",
  },
  {
    code: "GE3-L3-04",
    name: "Marketing stratégique",
    teacher: "Dr. Aïcha Djimet",
    room: "Salle 307 · Campus Toukra",
    credits: 5,
    grade: "—",
    status: "À rattraper",
  },
  {
    code: "GE3-L3-05",
    name: "Anglais des affaires",
    teacher: "M. Jean-Pierre Ngueyam",
    room: "Salle 112 · Campus Toukra",
    credits: 3,
    grade: "13,8",
    status: "Validé",
  },
];

const PROGRESS: ProgItem[] = [
  { name: "Comptabilité", val: "14,5/20", pct: 72.5 },
  { name: "Gestion fin.", val: "12,8/20", pct: 64 },
  { name: "Droit affaires", val: "15,0/20", pct: 75 },
  { name: "Anglais aff.", val: "13,8/20", pct: 69 },
];

const SCHEDULE = [
  {
    day: "Lundi 11",
    time: "08:00 – 10:00",
    subject: "Comptabilité approfondie",
    room: "Amphi B",
    teacher: "Dr. Saleh Mahamat",
    type: "Cours magistral",
  },
  {
    day: "Lundi 11",
    time: "10:30 – 12:30",
    subject: "Gestion financière · TD",
    room: "Salle 214",
    teacher: "Pr. Fatimé Ngarbaye",
    type: "Travaux dirigés",
  },
  {
    day: "Mardi 12",
    time: "08:00 – 10:00",
    subject: "Droit des affaires",
    room: "Amphi A",
    teacher: "Dr. Brahim Koiballa",
    type: "Cours magistral",
  },
  {
    day: "Mercredi 13",
    time: "14:00 – 16:00",
    subject: "Marketing · Cas pratique",
    room: "Salle 307",
    teacher: "Dr. Aïcha Djimet",
    type: "Travaux pratiques",
  },
  {
    day: "Jeudi 14",
    time: "09:00 – 11:00",
    subject: "Anglais des affaires",
    room: "Salle 112",
    teacher: "M. Jean-Pierre Ngueyam",
    type: "Cours interactif",
  },
];

const ACTIVITY: ActivityItem[] = [
  {
    action: "Inscription pédagogique Semestre 6",
    actor: "Administration",
    time: "10 sept.",
    status: "info",
  },
  {
    action: "Contrôle continu — Comptabilité",
    actor: "Évaluation · Salle 214, vendredi 20 sept.",
    time: "9 sept.",
    status: "warning",
  },
  {
    action: "Stage de fin d'études — Appel à candidatures",
    actor: "Ecobank, Bolloré, ONU Tchad",
    time: "5 sept.",
    status: "success",
  },
  {
    action: "Maintenance portail — Samedi 14",
    actor: "Technique · 14h à 18h",
    time: "4 sept.",
    status: "neutral",
  },
];

const statusMeta: Record<string, StatusMeta> = {
  info: { color: INFO, label: "Info" },
  warning: { color: WARNING, label: "À préparer" },
  success: { color: SUCCESS, label: "Opportunité" },
  neutral: { color: MUTED, label: "Technique" },
};

const PAYMENTS = [
  {
    label: "Frais de scolarité — Tranche 1",
    amount: "75 000 FCFA",
    date: "05 juil. 2024",
    status: "Payé",
    tone: "paid",
  },
  {
    label: "Frais de scolarité — Tranche 2",
    amount: "60 000 FCFA",
    date: "Échéance : 30 sept. 2024",
    status: "En attente",
    tone: "pending",
  },
  {
    label: "Frais de bibliothèque & CVEC",
    amount: "12 500 FCFA",
    date: "Échéance : 15 oct. 2024",
    status: "En attente",
    tone: "pending",
  },
];

type View = "login" | "dashboard";
type DashboardTab = "accueil" | "cours" | "emploi" | "notes" | "paiements" | "profil";

/* ── Shared visual primitives ── */
function Gauge({ value, color, size = 58 }: GaugeProps) {
  const r = (size - 8) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={BORDER_LIGHT} strokeWidth={5} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={5}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="butt"
      />
    </svg>
  );
}

function Spark({ data, color }: SparkProps) {
  const d = toSparkData(data);
  return (
    <ResponsiveContainer width="100%" height={32}>
      <LineChart data={d} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
        <Line type="monotone" dataKey="v" stroke={color} strokeWidth={1.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.03em",
        color: MUTED,
        fontFamily: SANS,
      }}
    >
      {children}
    </div>
  );
}

function MetricCard({
  label,
  value,
  suffix,
  color,
  icon: Icon,
}: {
  label: string;
  value: string;
  suffix?: string;
  color: string;
  icon: typeof Home;
}) {
  return (
    <div className="so-card" style={{ padding: "18px 20px" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div>
          <SectionLabel>{label}</SectionLabel>
          <div style={{ display: "flex", alignItems: "baseline", gap: 5, marginTop: 6 }}>
            <span style={{ fontSize: 27, fontWeight: 600, color, letterSpacing: "-0.01em", fontFamily: SERIF }}>
              {value}
            </span>
            {suffix && <span style={{ fontSize: 12.5, color: MUTED }}>{suffix}</span>}
          </div>
        </div>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 6,
            background: NAVY,
            color: GOLD_SOFT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon style={{ width: 16, height: 16 }} />
        </div>
      </div>
    </div>
  );
}

function CourseRow({ course }: { course: (typeof COURSES)[number] }) {
  const meta =
    course.status === "Validé"
      ? { color: SUCCESS, bg: "#eef4f0" }
      : course.status === "À rattraper"
      ? { color: DANGER, bg: "#f7ecea" }
      : { color: INFO, bg: "#eef1f6" };

  return (
    <div className="so-item-row">
      <div className="so-item-icon">
        <BookOpen style={{ width: 17, height: 17, color: GOLD_SOFT }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 3 }}>
          <span style={{ fontSize: 11, fontFamily: "monospace", color: MUTED_SOFT }}>{course.code}</span>
          <span className="so-badge" style={{ background: meta.bg, color: meta.color }}>
            {course.status}
          </span>
          <span style={{ fontSize: 11.5, color: MUTED_SOFT }}>{course.credits} ECTS</span>
        </div>
        <h4 style={{ fontSize: 14.5, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>
          {course.name}
        </h4>
        <p style={{ fontSize: 12.5, color: MUTED, margin: "3px 0 0" }}>
          {course.teacher} · {course.room}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18, flexShrink: 0 }}>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: 10, color: MUTED_SOFT, margin: 0 }}>Note</p>
          <p
            style={{
              fontSize: 17,
              fontWeight: 600,
              margin: 0,
              fontFamily: SERIF,
              color: course.grade === "—" ? MUTED_SOFT : parseFloat(course.grade.replace(",", ".")) >= 10 ? SUCCESS : DANGER,
            }}
          >
            {course.grade}
          </p>
        </div>
        <button className="so-action-btn" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          Détails <ChevronRight style={{ width: 13, height: 13 }} />
        </button>
      </div>
    </div>
  );
}

function ScheduleRow({ s }: { s: (typeof SCHEDULE)[number] }) {
  return (
    <div className="so-item-row">
      <div style={{ textAlign: "center", flexShrink: 0, width: 50 }}>
        <p style={{ fontSize: 10, fontWeight: 600, color: GOLD, margin: 0, fontFamily: SANS }}>
          {s.day.split(" ")[0]}
        </p>
        <p style={{ fontSize: 20, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>
          {s.day.split(" ")[1]}
        </p>
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
        <h4 style={{ fontSize: 14.5, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>{s.subject}</h4>
        <p style={{ fontSize: 12.5, color: MUTED, margin: "3px 0 0" }}>{s.teacher}</p>
      </div>
    </div>
  );
}

function PaymentRow({ p }: { p: (typeof PAYMENTS)[number] }) {
  const isPaid = p.tone === "paid";
  return (
    <div className="so-item-row">
      <div
        className="so-item-icon"
        style={{ background: isPaid ? "#eef4f0" : "#f8f2e7" }}
      >
        {isPaid ? (
          <CheckCircle2 style={{ width: 17, height: 17, color: SUCCESS }} />
        ) : (
          <AlertCircle style={{ width: 17, height: 17, color: WARNING }} />
        )}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{ fontSize: 14.5, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>{p.label}</h4>
        <p style={{ fontSize: 12.5, color: MUTED, margin: "3px 0 0" }}>{p.date}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 18, flexShrink: 0 }}>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: 10, color: MUTED_SOFT, margin: 0 }}>Montant</p>
          <p style={{ fontSize: 15, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>{p.amount}</p>
        </div>
        <span
          className="so-badge"
          style={{ background: isPaid ? "#eef4f0" : "#f8f2e7", color: isPaid ? SUCCESS : WARNING }}
        >
          {p.status}
        </span>
      </div>
    </div>
  );
}

/* ── Navigation shell ── */
function Sidebar({
  active,
  onChange,
  onLogout,
}: {
  active: DashboardTab;
  onChange: (t: DashboardTab) => void;
  onLogout: () => void;
}) {
  const items: { id: DashboardTab; label: string; icon: typeof Home }[] = [
    { id: "accueil", label: "Tableau de bord", icon: Home },
    { id: "cours", label: "Mes cours", icon: BookOpen },
    { id: "emploi", label: "Emploi du temps", icon: Calendar },
    { id: "notes", label: "Notes & résultats", icon: FileText },
    { id: "paiements", label: "Paiements", icon: CreditCard },
    { id: "profil", label: "Mon profil", icon: User },
  ];

  return (
    <aside className="so-sidebar">
      <div className="so-sidebar-header">
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div className="so-seal">
            <ShieldCheck style={{ width: 18, height: 18, color: GOLD_SOFT }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 12.5, fontWeight: 600, color: "#fff", margin: 0, fontFamily: SERIF, letterSpacing: "0.01em" }}>
              Université de N'Djamena
            </p>
            <p style={{ fontSize: 10.5, color: "#8b93a3", margin: 0 }}>Portail étudiant</p>
          </div>
        </div>
      </div>

      <div className="so-sidebar-id">
        <div className="so-sidebar-avatar">{STUDENT.avatar}</div>
        <div style={{ minWidth: 0 }}>
          <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {STUDENT.firstName} {STUDENT.lastName}
          </p>
          <p style={{ fontSize: 11, color: "#8b93a3", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {STUDENT.studentId}
          </p>
        </div>
      </div>

      <nav style={{ flex: 1, padding: "6px 10px", display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={`so-nav-btn${isActive ? " so-nav-btn-active" : ""}`}
            >
              <Icon style={{ width: 16, height: 16, flexShrink: 0 }} />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <div style={{ padding: 10, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <button onClick={onLogout} className="so-nav-btn so-logout-btn">
          <LogOut style={{ width: 16, height: 16, flexShrink: 0 }} />
          <span>Se déconnecter</span>
        </button>
      </div>
    </aside>
  );
}

function MobileNav({
  active,
  onChange,
}: {
  active: DashboardTab;
  onChange: (t: DashboardTab) => void;
}) {
  const items: { id: DashboardTab; label: string; icon: typeof Home }[] = [
    { id: "accueil", label: "Accueil", icon: Home },
    { id: "cours", label: "Cours", icon: BookOpen },
    { id: "emploi", label: "Emploi", icon: Calendar },
    { id: "notes", label: "Notes", icon: FileText },
    { id: "paiements", label: "Paiements", icon: CreditCard },
    { id: "profil", label: "Profil", icon: User },
  ];
  return (
    <nav className="so-mobile-nav">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", maxWidth: 640, margin: "0 auto" }}>
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                padding: "8px 0",
                fontSize: 10.5,
                fontWeight: 600,
                color: isActive ? GOLD : MUTED,
                background: "none",
                border: "none",
                fontFamily: SANS,
              }}
            >
              <Icon style={{ width: 19, height: 19 }} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function DashboardHeader({ onLogout }: { onLogout: () => void }) {
  return (
    <header className="so-topbar">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", height: 68, gap: 12 }}>
        <div>
          <p style={{ fontSize: 11, fontWeight: 600, color: GOLD, margin: 0, letterSpacing: "0.01em" }}>
            {STUDENT.year} · {STUDENT.semester}
          </p>
          <h1 style={{ fontSize: 19, fontWeight: 600, color: INK, margin: "2px 0 0", fontFamily: SERIF, letterSpacing: "-0.005em" }}>
            Bonjour, {STUDENT.firstName}
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button className="so-icon-btn" aria-label="Notifications">
            <Bell style={{ width: 17, height: 17, color: INK }} />
            <span style={{ position: "absolute", top: 8, right: 9, width: 6, height: 6, borderRadius: "50%", background: DANGER }} />
          </button>
          <div className="so-topbar-profile">
            <div className="so-topbar-avatar">{STUDENT.avatar}</div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: INK, margin: 0, lineHeight: 1.2 }}>
                {STUDENT.firstName} {STUDENT.lastName}
              </p>
              <button onClick={onLogout} style={{ fontSize: 10.5, color: MUTED, background: "none", border: "none", padding: 0, cursor: "pointer", fontFamily: "inherit" }}>
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ── Tab content ── */
function TabContent({ tab }: { tab: DashboardTab }) {
  const [liveFeedTab, setLiveFeedTab] = useState<"evolution" | "matieres">("evolution");
  const [editing, setEditing] = useState(false);
  const [email, setEmail] = useState(STUDENT.email);
  const [pwd, setPwd] = useState("");
  const [pwdConfirm, setPwdConfirm] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [saved, setSaved] = useState(false);

  if (tab === "accueil") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 28, flexWrap: "wrap" }}>
          {HEADER_STATS.map((s) => (
            <div key={s.label} style={{ textAlign: "right" }}>
              <SectionLabel>{s.label}</SectionLabel>
              <div style={{ fontSize: 21, fontWeight: 600, color: INK, letterSpacing: "-0.01em", fontFamily: SERIF, marginTop: 2 }}>
                {s.value}
              </div>
            </div>
          ))}
        </div>

        <div className="so-card">
          <div className="so-card-header">
            <span className="so-rule" />
            <span className="so-card-title">Progression académique</span>
            <div style={{ display: "flex" }}>
              {(
                [
                  { id: "evolution" as const, label: "Évolution" },
                  { id: "matieres" as const, label: "Par matière" },
                ]
              ).map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setLiveFeedTab(t.id)}
                  className={`so-tab-btn${liveFeedTab === t.id ? " so-tab-btn-active" : ""}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="so-livefeed-body">
            <div className="so-livefeed-left">
              {liveFeedTab === "evolution" ? (
                <>
                  <div style={{ padding: "16px 22px 0", display: "flex", gap: 36 }}>
                    {[
                      { label: "Moyenne actuelle", val: "13,42/20", color: GOLD },
                      { label: "Crédits", val: "96/120", color: SUCCESS },
                      { label: "Présence", val: "89 %", color: INFO },
                    ].map((s) => (
                      <div key={s.label}>
                        <SectionLabel>{s.label}</SectionLabel>
                        <div style={{ fontSize: 24, fontWeight: 600, color: s.color, letterSpacing: "-0.01em", fontFamily: SERIF, marginTop: 3 }}>
                          {s.val}
                        </div>
                      </div>
                    ))}
                  </div>
                  <ResponsiveContainer width="100%" height={160}>
                    <AreaChart data={moyenneTrend} margin={{ top: 16, right: 0, left: 0, bottom: 0 }}>
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
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke={GOLD}
                        strokeWidth={2}
                        fill="url(#moyGrad)"
                        dot={false}
                        activeDot={{ r: 4, fill: GOLD, strokeWidth: 0 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </>
              ) : (
                <div style={{ padding: "16px 22px" }}>
                  <SectionLabel>Notes par matière</SectionLabel>
                  <div style={{ marginTop: 14 }}>
                    {PROGRESS.map((d) => (
                      <div key={d.name} style={{ marginBottom: 14 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, fontWeight: 600, marginBottom: 6, color: INK }}>
                          <span>{d.name}</span>
                          <span>{d.val}</span>
                        </div>
                        <div style={{ height: 4, background: BORDER_LIGHT, borderRadius: 2, overflow: "hidden" }}>
                          <div style={{ width: `${d.pct}%`, height: "100%", background: GOLD }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="so-livefeed-right">
              <div>
                {PROGRESS.map((p) => (
                  <div key={p.name}>
                    <div className="so-prog-label">
                      <span className="so-prog-name">{p.name}</span>
                      <span style={{ fontWeight: 600, fontSize: 12, color: INK }}>{p.val}</span>
                    </div>
                    <div className="so-prog-track">
                      <div className="so-prog-fill" style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="so-action-btn-row">
                <button type="button" className="so-action-btn" style={{ flex: 1 }}>
                  Relevé complet
                </button>
                <button type="button" className="so-action-btn" style={{ flex: 1 }}>
                  Emploi du temps
                </button>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", borderTop: `1px solid ${BORDER_LIGHT}` }}>
            {GAUGES.map((g) => (
              <div key={g.label} className="so-gauge-cell">
                <div className="so-gauge-wrap">
                  <Gauge value={g.val} color={g.color} size={58} />
                  <span className="so-gauge-num" style={{ color: g.color }}>{g.val}</span>
                </div>
                <div className="so-gauge-info">
                  <div className="so-gauge-label">{g.label}</div>
                  <div className="so-gauge-sublabel">{g.sub}</div>
                  <div className="so-gauge-badges">
                    {g.badges.map((b) => (
                      <span key={b.t} className="so-badge" style={{ background: b.c + "14", color: b.c }}>
                        {b.t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="so-gauge-spark">
                  <Spark data={g.spark} color={g.color} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="so-bottom">
          <div className="so-card">
            <div className="so-card-header">
              <span className="so-rule" />
              <span className="so-card-title">État académique</span>
            </div>
            <div style={{ padding: "20px 22px 0" }}>
              {HEALTH.map((h) => (
                <div key={h.label} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: "#3f4657", fontWeight: 500 }}>{h.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: h.color, fontFamily: SERIF }}>{h.value}%</span>
                  </div>
                  <div className="so-health-track">
                    <div className="so-health-fill" style={{ width: `${h.value}%`, background: h.color }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="so-stat-grid">
              {STAT_CELLS.map((s) => (
                <div key={s.label} className="so-stat-cell">
                  <div className="so-stat-label">{s.label}</div>
                  <div className="so-stat-val" style={{ color: s.color }}>
                    {s.val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="so-card">
            <div className="so-card-header">
              <span className="so-rule" />
              <span className="so-card-title">Actualités</span>
              <span style={{ fontSize: 10.5, color: MUTED_SOFT }}>Cette semaine</span>
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
                  <div className="so-act-right">
                    <div className="so-act-time">{item.time}</div>
                    <span
                      className="so-act-badge"
                      style={{ color: meta.color, borderColor: meta.color + "40", background: meta.color + "0d" }}
                    >
                      {meta.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (tab === "cours") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>Mes cours</h2>
          <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>
            {COURSES.length} unités d'enseignement · {STUDENT.semester}
          </p>
        </div>
        <div className="so-card" style={{ padding: "0 8px" }}>
          {COURSES.map((c) => (
            <CourseRow key={c.code} course={c} />
          ))}
        </div>
      </div>
    );
  }

  if (tab === "emploi") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>Emploi du temps</h2>
          <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>Semaine du 9 au 15 septembre 2024</p>
        </div>
        <div className="so-card" style={{ padding: "0 8px" }}>
          {SCHEDULE.map((s, i) => (
            <ScheduleRow key={i} s={s} />
          ))}
        </div>
      </div>
    );
  }

  if (tab === "notes") {
    const rows = [
      { code: "CA", name: "Comptabilité approfondie", credits: 6, cc: "14,0", ex: "14,8", note: "14,5", decision: "ACQ" },
      { code: "GF", name: "Gestion financière", credits: 5, cc: "12,5", ex: "13,0", note: "12,8", decision: "ACQ" },
      { code: "DA", name: "Droit des affaires", credits: 4, cc: "15,2", ex: "14,9", note: "15,0", decision: "ACQ" },
      { code: "MS", name: "Marketing stratégique", credits: 5, cc: "—", ex: "—", note: "—", decision: "—" },
      { code: "AA", name: "Anglais des affaires", credits: 3, cc: "14,0", ex: "13,6", note: "13,8", decision: "ACQ" },
    ];
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>Notes & résultats</h2>
          <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>Relevé provisoire — {STUDENT.semester}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
          <MetricCard label="Moyenne générale" value="13,42" suffix="/ 20" color={GOLD} icon={Award} />
          <MetricCard label="Crédits validés" value="96" suffix="/ 120" color={SUCCESS} icon={CheckCircle2} />
          <MetricCard label="Rang" value="12" suffix="/ 45" color={PLUM} icon={TrendingUp} />
        </div>

        <div className="so-card">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
              <thead style={{ background: "#f7f7f9" }}>
                <tr>
                  {["UE", "Intitulé", "Crédits", "CC", "Examen", "Note finale", "Décision"].map((h, i) => (
                    <th
                      key={h}
                      style={{
                        textAlign: i === 3 || i === 4 || i === 5 || i === 6 ? "center" : "left",
                        padding: "13px 18px",
                        fontWeight: 600,
                        color: MUTED,
                        fontSize: 11,
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
                {rows.map((row, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${BORDER_LIGHT}` }}>
                    <td style={{ padding: "13px 18px", fontFamily: "monospace", fontSize: 12, color: MUTED_SOFT }}>{row.code}</td>
                    <td style={{ padding: "13px 18px", fontWeight: 500, color: INK, fontFamily: SERIF }}>{row.name}</td>
                    <td style={{ padding: "13px 18px", color: "#475569" }}>{row.credits}</td>
                    <td style={{ padding: "13px 18px", textAlign: "center", fontFamily: "monospace" }}>{row.cc}</td>
                    <td style={{ padding: "13px 18px", textAlign: "center", fontFamily: "monospace" }}>{row.ex}</td>
                    <td
                      style={{
                        padding: "13px 18px",
                        textAlign: "center",
                        fontWeight: 600,
                        fontFamily: SERIF,
                        color: row.note === "—" ? MUTED_SOFT : INK,
                      }}
                    >
                      {row.note}
                    </td>
                    <td style={{ padding: "13px 18px", textAlign: "center" }}>
                      <span
                        className="so-badge"
                        style={{
                          background: row.decision === "ACQ" ? "#eef4f0" : row.decision === "—" ? BORDER_LIGHT : "#f7ecea",
                          color: row.decision === "ACQ" ? SUCCESS : row.decision === "—" ? MUTED_SOFT : DANGER,
                        }}
                      >
                        {row.decision}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (tab === "paiements") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>Paiements & factures</h2>
            <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>Année académique {STUDENT.year}</p>
          </div>
          <button className="so-primary-btn">
            Payer en ligne <ChevronRight style={{ width: 14, height: 14 }} />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
          <MetricCard label="Total payé" value="75 000" suffix="FCFA" color={SUCCESS} icon={CheckCircle2} />
          <MetricCard label="Restant dû" value="72 500" suffix="FCFA" color={WARNING} icon={AlertCircle} />
        </div>

        <div className="so-card" style={{ padding: "0 8px" }}>
          {PAYMENTS.map((p, i) => (
            <PaymentRow key={i} p={p} />
          ))}
        </div>
      </div>
    );
  }

  /* Profil */
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
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>Mon profil</h2>
          <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>Informations personnelles & parcours académique</p>
        </div>
        {saved && (
          <span className="so-badge" style={{ background: "#eef4f0", color: SUCCESS, display: "flex", alignItems: "center", gap: 6, fontSize: 12, padding: "7px 12px" }}>
            <CheckCircle2 style={{ width: 14, height: 14 }} />
            Modifications enregistrées
          </span>
        )}
      </div>

      <div className="so-card">
        <div className="so-profile-banner">
          <div className="so-profile-avatar">{STUDENT.avatar}</div>
          <span className="so-badge so-profile-lock">
            <Lock style={{ width: 12, height: 12 }} />
            Informations académiques — Lecture seule
          </span>
        </div>

        <div style={{ padding: "48px 24px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 22 }}>
          {[
            { k: "Nom complet", v: `${STUDENT.firstName} ${STUDENT.lastName}` },
            { k: "N° étudiant", v: STUDENT.studentId },
            { k: "Téléphone", v: "+235 6X XX XX XX" },
            { k: "Faculté", v: STUDENT.faculty },
            { k: "Filière & niveau", v: STUDENT.level },
            { k: "Année académique", v: STUDENT.year },
            { k: "Campus principal", v: "Campus de Toukra, N'Djamena" },
          ].map(({ k, v }) => (
            <div key={k}>
              <p style={{ fontSize: 10.5, color: MUTED_SOFT, fontWeight: 600, letterSpacing: "0.02em", margin: "0 0 5px" }}>
                {k}
              </p>
              <p style={{ fontSize: 14.5, color: INK, margin: 0, fontFamily: SERIF }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="so-card">
        <div className="so-card-header" style={{ background: "#fafafb" }}>
          <div className="so-key-icon">
            <Key style={{ width: 15, height: 15 }} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 14.5, fontWeight: 600, color: INK, margin: 0, fontFamily: SERIF }}>Identifiants de connexion</h3>
            <p style={{ fontSize: 11.5, color: MUTED, margin: "2px 0 0" }}>
              Les seules informations modifiables : email et mot de passe
            </p>
          </div>
          {!editing && (
            <button onClick={() => setEditing(true)} className="so-primary-btn">
              <User style={{ width: 13, height: 13 }} />
              Modifier
            </button>
          )}
        </div>

        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: INK, marginBottom: 7 }}>
              Adresse email universitaire
            </label>
            {editing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="so-input"
              />
            ) : (
              <div className="so-input-static">{email}</div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: INK, marginBottom: 7 }}>
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
                    style={{ paddingRight: 44 }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    style={{
                      position: "absolute",
                      right: 12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      color: MUTED,
                      cursor: "pointer",
                      display: "flex",
                    }}
                    tabIndex={-1}
                    aria-label={showPwd ? "Masquer" : "Afficher"}
                  >
                    {showPwd ? <EyeOff style={{ width: 17, height: 17 }} /> : <Eye style={{ width: 17, height: 17 }} />}
                  </button>
                </div>
              ) : (
                <div className="so-input-static" style={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>
                  <span style={{ letterSpacing: "0.35em", color: "#475569" }}>••••••••</span>
                  <span className="so-badge" style={{ background: BORDER_LIGHT, color: MUTED }}>
                    Modifié le 14 août 2024
                  </span>
                </div>
              )}
            </div>

            {editing && (
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: INK, marginBottom: 7 }}>
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
                  <p style={{ marginTop: 6, fontSize: 12, fontWeight: 600, color: DANGER, display: "flex", alignItems: "center", gap: 4 }}>
                    <AlertCircle style={{ width: 14, height: 14 }} />
                    Les mots de passe ne correspondent pas
                  </p>
                )}
                <p style={{ marginTop: 6, fontSize: 12, color: MUTED }}>
                  Astuce : minimum 8 caractères, une majuscule et un chiffre recommandés.
                </p>
              </div>
            )}
          </div>

          {editing && (
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, paddingTop: 8, borderTop: `1px solid ${BORDER_LIGHT}` }}>
              <button onClick={handleCancel} className="so-secondary-btn">
                Annuler
              </button>
              <button onClick={handleSave} className="so-primary-btn">
                <CheckCircle2 style={{ width: 14, height: 14 }} />
                Enregistrer les modifications
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StudentDashboard({ onLogout }: { onLogout: () => void }) {
  const [active, setActive] = useState<DashboardTab>("accueil");

  return (
    <div style={{ minHeight: "100vh", display: "flex", background: BG, fontFamily: SANS }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .so-sidebar {
          display: none;
          flex-direction: column;
          width: 252px;
          flex-shrink: 0;
          background: ${NAVY};
        }
        .so-sidebar-header {
          padding: 20px 18px 16px;
        }
        .so-seal {
          width: 34px; height: 34px; border-radius: 6px;
          background: ${NAVY_SOFT}; border: 1px solid rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .so-sidebar-id {
          display: flex; align-items: center; gap: 11px;
          padding: 14px 18px; margin: 0 10px 6px;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .so-sidebar-avatar {
          width: 36px; height: 36px; border-radius: 6px;
          background: ${NAVY_SOFT}; border: 1px solid rgba(201,165,90,0.4);
          display: flex; align-items: center; justify-content: center;
          font-weight: 600; color: ${GOLD_SOFT}; font-size: 12.5px; font-family: ${SERIF};
          flex-shrink: 0;
        }
        .so-nav-btn {
          width: 100%; display: flex; align-items: center; gap: 11px;
          padding: 10px 12px; border-radius: 6px; font-size: 13.5px; font-weight: 500;
          border: none; cursor: pointer; text-align: left; font-family: ${SANS};
          transition: background 0.15s, color 0.15s;
          color: #a9b0bd; background: transparent;
          border-left: 2px solid transparent;
        }
        .so-nav-btn:hover { background: rgba(255,255,255,0.05); color: #fff; }
        .so-nav-btn-active {
          background: rgba(201,165,90,0.1); color: #fff;
          border-left: 2px solid ${GOLD_SOFT};
        }
        .so-nav-btn-active:hover { background: rgba(201,165,90,0.14); }
        .so-logout-btn { color: #c4867e; }
        .so-logout-btn:hover { background: rgba(165,56,44,0.14); color: #e8a49c; }

        .so-mobile-nav {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 40;
          border-top: 1px solid ${BORDER_LIGHT}; background: #fff;
        }

        .so-topbar { position: sticky; top: 0; z-index: 30; border-bottom: 1px solid ${BORDER}; background: ${SURFACE}; }
        .so-icon-btn {
          position: relative; width: 36px; height: 36px; border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          background: none; border: none; cursor: pointer;
        }
        .so-icon-btn:hover { background: ${BORDER_LIGHT}; }
        .so-topbar-profile {
          display: none; align-items: center; gap: 10px; padding-left: 12px; margin-left: 4px;
          border-left: 1px solid ${BORDER};
        }
        .so-topbar-avatar {
          width: 32px; height: 32px; border-radius: 6px;
          background: ${NAVY}; display: flex; align-items: center; justify-content: center;
          font-weight: 600; color: ${GOLD_SOFT}; font-size: 12px; font-family: ${SERIF};
        }

        .so-card {
          background: ${SURFACE}; border: 1px solid ${BORDER}; border-radius: 8px; overflow: hidden;
        }
        .so-card-header {
          padding: 15px 22px 13px; border-bottom: 1px solid ${BORDER_LIGHT};
          display: flex; align-items: center; gap: 11px;
        }
        .so-card-title { font-size: 14.5px; font-weight: 600; color: ${INK}; font-family: ${SERIF}; flex: 1; }
        .so-rule { width: 3px; height: 15px; background: ${GOLD}; border-radius: 1px; flex-shrink: 0; }

        .so-tab-btn {
          font-size: 12px; font-weight: 500; padding: 5px 14px; cursor: pointer;
          color: ${MUTED}; border-bottom: 2px solid transparent;
          background: none; border-top: none; border-left: none; border-right: none;
          font-family: ${SANS};
        }
        .so-tab-btn-active { color: ${GOLD}; border-bottom: 2px solid ${GOLD}; font-weight: 600; }

        .so-item-row {
          display: flex; align-items: center; gap: 14px; padding: 15px 14px;
          border-bottom: 1px solid ${BORDER_LIGHT};
        }
        .so-item-row:last-child { border-bottom: none; }
        .so-item-icon {
          width: 40px; height: 40px; border-radius: 6px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: ${NAVY};
        }
        .so-badge {
          font-size: 10.5px; font-weight: 600; padding: 3px 9px; border-radius: 4px;
          white-space: nowrap; display: inline-block;
        }
        .so-action-btn {
          font-size: 11.5px; font-weight: 600; color: #4a5163;
          background: #f6f6f8; border: 1px solid ${BORDER}; border-radius: 6px;
          padding: 8px 12px; text-align: center; cursor: pointer; font-family: ${SANS};
        }
        .so-action-btn:hover { background: #eeeef1; }
        .so-action-btn-row { display: flex; gap: 8px; margin-top: 4px; }

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

        .so-livefeed-body { display: flex; }
        .so-livefeed-left { flex: 1; min-width: 0; }
        .so-livefeed-right {
          width: 210px; border-left: 1px solid ${BORDER_LIGHT};
          padding: 18px 22px; display: flex; flex-direction: column; justify-content: space-between;
        }
        .so-prog-label { display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 5px; }
        .so-prog-name { color: #4a5163; font-weight: 500; }
        .so-prog-track { height: 4px; background: ${BORDER_LIGHT}; border-radius: 2px; overflow: hidden; margin-bottom: 14px; }
        .so-prog-fill { height: 4px; border-radius: 2px; background: ${GOLD}; }

        .so-gauge-cell {
          display: flex; align-items: center; gap: 10px; padding: 15px 14px;
          border-right: 1px solid ${BORDER_LIGHT}; min-width: 0; overflow: hidden;
        }
        .so-gauge-cell:last-child { border-right: none; }
        .so-gauge-wrap { position: relative; width: 58px; height: 58px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
        .so-gauge-num { position: absolute; font-size: 12.5px; font-weight: 600; font-family: ${SERIF}; }
        .so-gauge-info { flex: 1; min-width: 0; }
        .so-gauge-label {
          font-size: 11px; font-weight: 600; color: ${INK};
          margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .so-gauge-sublabel { font-size: 10.5px; color: ${MUTED_SOFT}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .so-gauge-badges { display: flex; gap: 4px; margin-top: 5px; flex-wrap: wrap; }
        .so-gauge-spark { flex-shrink: 0; width: 66px; height: 32px; }

        .so-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }

        .so-health-track { height: 5px; background: ${BORDER_LIGHT}; border-radius: 3px; margin-top: 6px; overflow: hidden; }
        .so-health-fill { height: 5px; border-radius: 3px; }

        .so-stat-grid { display: flex; border-top: 1px solid ${BORDER_LIGHT}; }
        .so-stat-cell { flex: 1; padding: 14px 16px; border-right: 1px solid ${BORDER_LIGHT}; }
        .so-stat-cell:last-child { border-right: none; }
        .so-stat-label { font-size: 10px; font-weight: 600; color: ${MUTED_SOFT}; margin-bottom: 4px; }
        .so-stat-val { font-size: 19px; font-weight: 600; font-family: ${SERIF}; }

        .so-act-row { display: flex; align-items: center; gap: 12px; padding: 13px 22px; border-bottom: 1px solid #f8f8f9; }
        .so-act-row:last-child { border-bottom: none; }
        .so-act-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .so-act-action { font-size: 13px; font-weight: 500; color: ${INK}; }
        .so-act-actor { font-size: 11px; color: ${MUTED}; margin-top: 2px; }
        .so-act-right { margin-left: auto; text-align: right; flex-shrink: 0; }
        .so-act-time { font-size: 11px; color: ${MUTED_SOFT}; }
        .so-act-badge {
          font-size: 9.5px; font-weight: 600; padding: 3px 8px;
          display: inline-block; margin-top: 4px; border-radius: 4px; border: 1px solid currentColor;
        }

        .so-profile-banner {
          height: 118px; position: relative;
          background: linear-gradient(135deg, ${NAVY} 0%, ${NAVY_SOFT} 100%);
        }
        .so-profile-avatar {
          position: absolute; bottom: -36px; left: 24px;
          width: 72px; height: 72px; border-radius: 10px;
          border: 4px solid #fff; background: ${NAVY};
          display: flex; align-items: center; justify-content: center;
          font-weight: 600; font-size: 22px; color: ${GOLD_SOFT}; font-family: ${SERIF};
        }
        .so-profile-lock {
          position: absolute; top: 16px; right: 16px;
          background: rgba(255,255,255,0.1); color: #fff;
          display: flex; align-items: center; gap: 6px; padding: 7px 12px;
        }

        .so-key-icon {
          width: 32px; height: 32px; border-radius: 6px;
          background: ${BORDER_LIGHT}; color: ${INK};
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }

        .so-input {
          width: 100%; padding: 11px 14px; border-radius: 6px; border: 1px solid ${BORDER};
          font-size: 14px; font-family: ${SANS}; outline: none; color: ${INK};
        }
        .so-input:focus { border-color: ${GOLD}; box-shadow: 0 0 0 3px rgba(156,122,46,0.12); }
        .so-input-static {
          padding: 11px 14px; border-radius: 6px; border: 1px solid ${BORDER_LIGHT};
          background: #fafafb; font-size: 14px; color: ${INK};
        }

        @media (min-width: 1024px) {
          .so-sidebar { display: flex; }
          .so-mobile-nav { display: none; }
          .so-topbar-profile { display: flex; }
        }
        @media (max-width: 1024px) {
          .so-bottom { grid-template-columns: 1fr; }
          .so-livefeed-body { flex-direction: column; }
          .so-livefeed-right { width: 100%; border-left: none; border-top: 1px solid ${BORDER_LIGHT}; }
        }
        @media (max-width: 768px) {
          .so-gauge-cell { min-width: 100%; border-right: none !important; border-bottom: 1px solid ${BORDER_LIGHT}; }
          .so-gauge-cell:last-child { border-bottom: none; }
        }
      `}</style>

      <Sidebar active={active} onChange={setActive} onLogout={onLogout} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0, paddingBottom: 80 }}>
        <DashboardHeader onLogout={onLogout} />
        <main style={{ flex: 1, padding: "26px 22px", maxWidth: 1280, width: "100%", margin: "0 auto" }}>
          <TabContent tab={active} />
        </main>
      </div>

      <MobileNav active={active} onChange={setActive} />
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