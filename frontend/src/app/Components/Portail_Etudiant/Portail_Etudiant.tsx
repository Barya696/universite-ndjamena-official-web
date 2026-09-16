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
  Users,
  Lock,
  Key,
  Eye,
  EyeOff,
} from "lucide-react";

/* ── Design tokens — same system as the SmartWaste admin dashboard ── */
const INK = "#1a1e25";
const MUTED = "#8a9099";
const BORDER = "#e8eaed";
const BORDER_LIGHT = "#f0f1f3";
const PURPLE = "#7c6be8";
const TEAL = "#1cb97a";
const AMBER = "#f59e0b";
const RED = "#ef4444";
const BLUE = "#1a5fa8";
const PINK = "#ff6b9d";
const BG = "#f5f6f8";

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
  sc: string;
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
  color: string;
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
  color: string;
  bars: number[];
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

interface MiniBarChartProps {
  values: number[];
  color: string;
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
  { label: "Cours actifs", value: "5", color: PURPLE, bars: [3, 4, 4, 5, 4, 5, 5] },
  { label: "Échéances", value: "2", color: PINK, bars: [1, 2, 1, 2, 3, 2, 2] },
];

const GAUGES: GaugeItem[] = [
  {
    label: "Moyenne générale",
    sub: "Sur 20 points",
    val: 67,
    color: PURPLE,
    badges: [
      { t: "13,42/20", c: TEAL },
      { t: "+0,8", c: MUTED },
    ],
    spark: sparkMoyenne,
    sc: PURPLE,
  },
  {
    label: "Crédits validés",
    sub: "Progression du diplôme",
    val: 80,
    color: TEAL,
    badges: [
      { t: "96/120", c: TEAL },
      { t: "+6 ce sem.", c: MUTED },
    ],
    spark: sparkCredits,
    sc: TEAL,
  },
  {
    label: "Taux de présence",
    sub: "Ce semestre",
    val: 89,
    color: BLUE,
    badges: [
      { t: "89%", c: BLUE },
      { t: "-2%", c: AMBER },
    ],
    spark: sparkPresence,
    sc: BLUE,
  },
  {
    label: "Classement",
    sub: "Sur 45 étudiants",
    val: 73,
    color: PINK,
    badges: [
      { t: "12e/45", c: PINK },
      { t: "+3", c: TEAL },
    ],
    spark: sparkRang,
    sc: PINK,
  },
];

const HEALTH: HealthItem[] = [
  { label: "Crédits validés", value: 80, color: TEAL },
  { label: "Taux de présence", value: 89, color: BLUE },
  { label: "Objectif moyenne (≥12/20)", value: 67, color: PURPLE },
];

const STAT_CELLS: StatCell[] = [
  { label: "UE validées", val: "3/5", color: TEAL },
  { label: "En attente", val: "1", color: AMBER },
  { label: "Absences", val: "4", color: RED },
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
    color: PURPLE,
  },
  {
    code: "GE3-L3-02",
    name: "Gestion financière",
    teacher: "Pr. Fatimé Ngarbaye",
    room: "Salle 214 · Campus Toukra",
    credits: 5,
    grade: "12,8",
    status: "En cours",
    color: TEAL,
  },
  {
    code: "GE3-L3-03",
    name: "Droit des affaires",
    teacher: "Dr. Brahim Koiballa",
    room: "Amphi A · Campus Toukra",
    credits: 4,
    grade: "15,0",
    status: "En cours",
    color: BLUE,
  },
  {
    code: "GE3-L3-04",
    name: "Marketing stratégique",
    teacher: "Dr. Aïcha Djimet",
    room: "Salle 307 · Campus Toukra",
    credits: 5,
    grade: "—",
    status: "À rattraper",
    color: RED,
  },
  {
    code: "GE3-L3-05",
    name: "Anglais des affaires",
    teacher: "M. Jean-Pierre Ngueyam",
    room: "Salle 112 · Campus Toukra",
    credits: 3,
    grade: "13,8",
    status: "Validé",
    color: PINK,
  },
];

const PROGRESS: ProgItem[] = [
  { name: "Comptabilité", val: "14,5/20", pct: 72.5, color: PURPLE },
  { name: "Gestion fin.", val: "12,8/20", pct: 64, color: TEAL },
  { name: "Droit affaires", val: "15,0/20", pct: 75, color: BLUE },
  { name: "Anglais aff.", val: "13,8/20", pct: 69, color: PINK },
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
  info: { color: BLUE, label: "Info" },
  warning: { color: AMBER, label: "À préparer" },
  success: { color: TEAL, label: "Opportunité" },
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
function Gauge({ value, color, size = 60 }: GaugeProps) {
  const r = (size - 10) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (value / 100) * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={BORDER_LIGHT} strokeWidth={7} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={7}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="butt"
      />
    </svg>
  );
}

function Spark({ data, color }: SparkProps) {
  const d = toSparkData(data);
  return (
    <ResponsiveContainer width="100%" height={36}>
      <LineChart data={d} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
        <Line type="monotone" dataKey="v" stroke={color} strokeWidth={1.5} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

function MiniBarChart({ values, color }: MiniBarChartProps) {
  const max = Math.max(...values);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 28 }}>
      {values.map((v, i) => (
        <div
          key={i}
          style={{
            width: 4,
            height: Math.round((v / max) * 22),
            background: color,
            opacity: 0.4 + 0.6 * (v / max),
            borderRadius: 1,
          }}
        />
      ))}
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
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: MUTED,
              marginBottom: 6,
            }}
          >
            {label}
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
            <span style={{ fontSize: 26, fontWeight: 800, color, letterSpacing: "-0.02em" }}>{value}</span>
            {suffix && <span style={{ fontSize: 12, color: MUTED }}>{suffix}</span>}
          </div>
        </div>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 9,
            background: color + "14",
            color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon style={{ width: 18, height: 18 }} />
        </div>
      </div>
    </div>
  );
}

function CourseRow({ course }: { course: (typeof COURSES)[number] }) {
  const meta =
    course.status === "Validé"
      ? { color: TEAL, bg: TEAL + "14" }
      : course.status === "À rattraper"
      ? { color: RED, bg: RED + "14" }
      : { color: BLUE, bg: BLUE + "14" };

  return (
    <div className="so-item-row">
      <div className="so-item-icon" style={{ background: course.color }}>
        <BookOpen style={{ width: 18, height: 18, color: "#fff" }} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginBottom: 2 }}>
          <span style={{ fontSize: 11, fontFamily: "monospace", color: MUTED }}>{course.code}</span>
          <span
            className="so-badge"
            style={{ background: meta.bg, color: meta.color }}
          >
            {course.status}
          </span>
          <span style={{ fontSize: 11, color: MUTED }}>{course.credits} ECTS</span>
        </div>
        <h4 style={{ fontSize: 14.5, fontWeight: 700, color: INK, margin: 0 }}>{course.name}</h4>
        <p style={{ fontSize: 12.5, color: MUTED, margin: "2px 0 0" }}>
          {course.teacher} · {course.room}
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: 9, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Note
          </p>
          <p
            style={{
              fontSize: 17,
              fontWeight: 800,
              margin: 0,
              color: course.grade === "—" ? MUTED : parseFloat(course.grade.replace(",", ".")) >= 10 ? TEAL : RED,
            }}
          >
            {course.grade}
          </p>
        </div>
        <button className="so-action-btn" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          Détails <ChevronRight style={{ width: 14, height: 14 }} />
        </button>
      </div>
    </div>
  );
}

function ScheduleRow({ s }: { s: (typeof SCHEDULE)[number] }) {
  return (
    <div className="so-item-row">
      <div style={{ textAlign: "center", flexShrink: 0, width: 52 }}>
        <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: PURPLE, margin: 0 }}>
          {s.day.split(" ")[0]}
        </p>
        <p style={{ fontSize: 19, fontWeight: 800, color: INK, margin: 0 }}>{s.day.split(" ")[1]}</p>
      </div>
      <div style={{ width: 1, background: BORDER_LIGHT, alignSelf: "stretch" }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11.5, color: MUTED, marginBottom: 4, flexWrap: "wrap" }}>
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
        <h4 style={{ fontSize: 14.5, fontWeight: 700, color: INK, margin: 0 }}>{s.subject}</h4>
        <p style={{ fontSize: 12.5, color: MUTED, margin: "2px 0 0" }}>{s.teacher}</p>
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
        style={{ background: isPaid ? TEAL : BORDER_LIGHT, color: isPaid ? "#fff" : INK }}
      >
        {isPaid ? <CheckCircle2 style={{ width: 18, height: 18 }} /> : <AlertCircle style={{ width: 18, height: 18, color: AMBER }} />}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h4 style={{ fontSize: 14.5, fontWeight: 700, color: INK, margin: 0 }}>{p.label}</h4>
        <p style={{ fontSize: 12.5, color: MUTED, margin: "2px 0 0" }}>{p.date}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontSize: 9, color: MUTED, margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Montant
          </p>
          <p style={{ fontSize: 15, fontWeight: 800, color: INK, margin: 0 }}>{p.amount}</p>
        </div>
        <span
          className="so-badge"
          style={{ background: isPaid ? TEAL + "14" : AMBER + "14", color: isPaid ? TEAL : AMBER }}
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
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 10,
              background: PURPLE,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              color: "#fff",
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            {STUDENT.avatar}
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 13.5, fontWeight: 700, color: INK, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {STUDENT.firstName} {STUDENT.lastName}
            </p>
            <p style={{ fontSize: 11.5, color: MUTED, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {STUDENT.studentId}
            </p>
          </div>
        </div>
      </div>

      <nav style={{ flex: 1, padding: 10, display: "flex", flexDirection: "column", gap: 3 }}>
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className="so-nav-btn"
              style={
                isActive
                  ? { background: PURPLE, color: "#fff" }
                  : { color: "#555570", background: "transparent" }
              }
            >
              <Icon style={{ width: 17, height: 17, flexShrink: 0 }} />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <div style={{ padding: 10, borderTop: `1px solid ${BORDER_LIGHT}` }}>
        <button onClick={onLogout} className="so-nav-btn so-logout-btn">
          <LogOut style={{ width: 17, height: 17, flexShrink: 0 }} />
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
                color: isActive ? PURPLE : MUTED,
                background: "none",
                border: "none",
                fontFamily: "inherit",
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: 64, gap: 12 }}>
        <div>
          <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: PURPLE, margin: 0 }}>
            {STUDENT.year} · {STUDENT.semester}
          </p>
          <h1 style={{ fontSize: 17, fontWeight: 800, color: INK, margin: 0, letterSpacing: "-0.01em" }}>
            Bonjour, {STUDENT.firstName}
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button className="so-icon-btn" aria-label="Notifications">
            <Bell style={{ width: 18, height: 18, color: INK }} />
            <span style={{ position: "absolute", top: 8, right: 9, width: 7, height: 7, borderRadius: "50%", background: RED }} />
          </button>
          <div className="so-topbar-profile">
            <div
              style={{
                width: 34,
                height: 34,
                borderRadius: "50%",
                background: PURPLE,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                color: "#fff",
                fontSize: 12.5,
              }}
            >
              {STUDENT.avatar}
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 12.5, fontWeight: 700, color: INK, margin: 0, lineHeight: 1.2 }}>
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
        {/* Top header row with mini bar charts */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 24, flexWrap: "wrap" }}>
          {HEADER_STATS.map((s) => (
            <div key={s.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: MUTED }}>
                  {s.label}
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: s.color, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                  {s.value}
                </div>
              </div>
              <MiniBarChart values={s.bars} color={s.color} />
            </div>
          ))}
        </div>

        {/* Academic progress card (like Live Operations) */}
        <div className="so-card">
          <div className="so-card-header">
            <span className="so-dot" style={{ background: TEAL }} />
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
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "4px 14px",
                    cursor: "pointer",
                    color: liveFeedTab === t.id ? PURPLE : "#9a9ab0",
                    borderBottom: liveFeedTab === t.id ? `2px solid ${PURPLE}` : "2px solid transparent",
                    background: "none",
                    borderTop: "none",
                    borderLeft: "none",
                    borderRight: "none",
                    fontFamily: "inherit",
                  }}
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
                  <div style={{ padding: "14px 20px 0", display: "flex", gap: 32 }}>
                    {[
                      { label: "Moyenne actuelle", val: "13,42/20", color: PURPLE },
                      { label: "Crédits", val: "96/120", color: TEAL },
                      { label: "Présence", val: "89%", color: BLUE },
                    ].map((s) => (
                      <div key={s.label}>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: MUTED, marginBottom: 3 }}>
                          {s.label}
                        </div>
                        <div style={{ fontSize: 24, fontWeight: 800, color: s.color, letterSpacing: "-0.02em" }}>{s.val}</div>
                      </div>
                    ))}
                  </div>
                  <ResponsiveContainer width="100%" height={160}>
                    <AreaChart data={moyenneTrend} margin={{ top: 16, right: 0, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="moyGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={PURPLE} stopOpacity={0.35} />
                          <stop offset="100%" stopColor={PURPLE} stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <Tooltip
                        contentStyle={{ background: INK, border: "none", borderRadius: 6, fontSize: 11 }}
                        itemStyle={{ color: "#fff" }}
                        labelStyle={{ display: "none" }}
                        formatter={(v: number) => [v, "Moyenne"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke={PURPLE}
                        strokeWidth={2}
                        fill="url(#moyGrad)"
                        dot={false}
                        activeDot={{ r: 4, fill: PURPLE, strokeWidth: 0 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </>
              ) : (
                <div style={{ padding: "12px 16px" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                    Notes par matière
                  </div>
                  {PROGRESS.map((d) => (
                    <div key={d.name} style={{ marginBottom: 14 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 700, marginBottom: 6 }}>
                        <span>{d.name}</span>
                        <span>{d.val}</span>
                      </div>
                      <div style={{ height: 6, background: BORDER_LIGHT, borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ width: `${d.pct}%`, height: "100%", background: d.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="so-livefeed-right">
              <div>
                {PROGRESS.map((p) => (
                  <div key={p.name}>
                    <div className="so-prog-label">
                      <span className="so-prog-name">{p.name}</span>
                      <span style={{ fontWeight: 700, fontSize: 12, color: INK }}>{p.val}</span>
                    </div>
                    <div className="so-prog-track">
                      <div className="so-prog-fill" style={{ width: `${p.pct}%`, background: p.color }} />
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

          {/* Gauge row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", borderTop: `1px solid ${BORDER_LIGHT}` }}>
            {GAUGES.map((g) => (
              <div key={g.label} className="so-gauge-cell">
                <div className="so-gauge-wrap">
                  <Gauge value={g.val} color={g.color} size={60} />
                  <span className="so-gauge-num">{g.val}</span>
                </div>
                <div className="so-gauge-info">
                  <div className="so-gauge-label">{g.label}</div>
                  <div className="so-gauge-sublabel">{g.sub}</div>
                  <div className="so-gauge-badges">
                    {g.badges.map((b) => (
                      <span key={b.t} className="so-badge" style={{ background: b.c + "18", color: b.c }}>
                        {b.t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="so-gauge-spark">
                  <Spark data={g.spark} color={g.sc} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: État académique + Actualités */}
        <div className="so-bottom">
          <div className="so-card">
            <div className="so-card-header">
              <span className="so-dot" style={{ background: TEAL }} />
              <span className="so-dot" style={{ background: AMBER }} />
              <span className="so-dot" style={{ background: RED }} />
              <span className="so-card-title">État académique</span>
            </div>
            <div style={{ padding: "20px 20px 0" }}>
              {HEALTH.map((h) => (
                <div key={h.label} style={{ marginBottom: 20 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: "#4a5568", fontWeight: 500 }}>{h.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 800, color: h.color }}>{h.value}%</span>
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
              <span className="so-dot" style={{ background: BLUE }} />
              <span className="so-dot" style={{ background: TEAL }} />
              <span className="so-card-title">Actualités</span>
              <span style={{ fontSize: 10, color: MUTED }}>Cette semaine</span>
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
                      style={{ color: meta.color, borderColor: meta.color + "55", background: meta.color + "10" }}
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
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <h2 style={{ fontSize: 19, fontWeight: 800, color: INK, margin: 0, letterSpacing: "-0.01em" }}>Mes cours</h2>
          <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>
            {COURSES.length} unités d'enseignement · {STUDENT.semester}
          </p>
        </div>
        <div className="so-card" style={{ padding: 8 }}>
          {COURSES.map((c) => (
            <CourseRow key={c.code} course={c} />
          ))}
        </div>
      </div>
    );
  }

  if (tab === "emploi") {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div>
          <h2 style={{ fontSize: 19, fontWeight: 800, color: INK, margin: 0, letterSpacing: "-0.01em" }}>Emploi du temps</h2>
          <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>Semaine du 9 au 15 septembre 2024</p>
        </div>
        <div className="so-card" style={{ padding: 8 }}>
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
          <h2 style={{ fontSize: 19, fontWeight: 800, color: INK, margin: 0, letterSpacing: "-0.01em" }}>Notes & résultats</h2>
          <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>Relevé provisoire — {STUDENT.semester}</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
          <MetricCard label="Moyenne générale" value="13,42" suffix="/ 20" color={PURPLE} icon={Award} />
          <MetricCard label="Crédits validés" value="96" suffix="/ 120" color={TEAL} icon={CheckCircle2} />
          <MetricCard label="Rang" value="12" suffix="/ 45" color={PINK} icon={TrendingUp} />
        </div>

        <div className="so-card">
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
              <thead style={{ background: BORDER_LIGHT }}>
                <tr>
                  {["UE", "Intitulé", "Crédits", "CC", "Examen", "Note finale", "Décision"].map((h, i) => (
                    <th
                      key={h}
                      style={{
                        textAlign: i === 3 || i === 4 || i === 5 || i === 6 ? "center" : "left",
                        padding: "12px 18px",
                        fontWeight: 700,
                        color: INK,
                        fontSize: 11.5,
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
                    <td style={{ padding: "12px 18px", fontFamily: "monospace", fontSize: 12, color: MUTED }}>{row.code}</td>
                    <td style={{ padding: "12px 18px", fontWeight: 600, color: INK }}>{row.name}</td>
                    <td style={{ padding: "12px 18px", color: "#475569" }}>{row.credits}</td>
                    <td style={{ padding: "12px 18px", textAlign: "center", fontFamily: "monospace" }}>{row.cc}</td>
                    <td style={{ padding: "12px 18px", textAlign: "center", fontFamily: "monospace" }}>{row.ex}</td>
                    <td
                      style={{
                        padding: "12px 18px",
                        textAlign: "center",
                        fontWeight: 800,
                        color: row.note === "—" ? MUTED : INK,
                      }}
                    >
                      {row.note}
                    </td>
                    <td style={{ padding: "12px 18px", textAlign: "center" }}>
                      <span
                        className="so-badge"
                        style={{
                          background: row.decision === "ACQ" ? TEAL + "14" : row.decision === "—" ? BORDER_LIGHT : RED + "14",
                          color: row.decision === "ACQ" ? TEAL : row.decision === "—" ? MUTED : RED,
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
            <h2 style={{ fontSize: 19, fontWeight: 800, color: INK, margin: 0, letterSpacing: "-0.01em" }}>Paiements & factures</h2>
            <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>Année académique {STUDENT.year}</p>
          </div>
          <button
            style={{
              padding: "10px 18px",
              borderRadius: 8,
              fontWeight: 700,
              fontSize: 13,
              color: "#fff",
              background: PURPLE,
              border: "none",
              display: "flex",
              alignItems: "center",
              gap: 6,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Payer en ligne <ChevronRight style={{ width: 15, height: 15 }} />
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 14 }}>
          <MetricCard label="Total payé" value="75 000" suffix="FCFA" color={TEAL} icon={CheckCircle2} />
          <MetricCard label="Restant dû" value="72 500" suffix="FCFA" color={AMBER} icon={AlertCircle} />
        </div>

        <div className="so-card" style={{ padding: 8 }}>
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
          <h2 style={{ fontSize: 19, fontWeight: 800, color: INK, margin: 0, letterSpacing: "-0.01em" }}>Mon profil</h2>
          <p style={{ fontSize: 13, color: MUTED, margin: "4px 0 0" }}>Informations personnelles & parcours académique</p>
        </div>
        {saved && (
          <span
            className="so-badge"
            style={{ background: TEAL + "14", color: TEAL, display: "flex", alignItems: "center", gap: 6, fontSize: 12, padding: "6px 12px" }}
          >
            <CheckCircle2 style={{ width: 14, height: 14 }} />
            Modifications enregistrées
          </span>
        )}
      </div>

      {/* Academic info (read-only) */}
      <div className="so-card">
        <div
          style={{
            height: 128,
            position: "relative",
            background: `linear-gradient(135deg, ${INK} 0%, ${PURPLE} 100%)`,
          }}
        >
          <div style={{ position: "absolute", bottom: -40, left: 24 }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 18,
                border: "4px solid #fff",
                background: PINK,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 26,
                color: "#fff",
              }}
            >
              {STUDENT.avatar}
            </div>
          </div>
          <span
            className="so-badge"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              background: "rgba(255,255,255,0.14)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 6,
              padding: "7px 12px",
            }}
          >
            <Lock style={{ width: 13, height: 13 }} />
            Informations académiques — Lecture seule
          </span>
        </div>

        <div style={{ padding: "48px 24px 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
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
              <p style={{ fontSize: 10, color: MUTED, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 4px" }}>
                {k}
              </p>
              <p style={{ fontSize: 14.5, color: INK, margin: 0 }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Editable credentials */}
      <div className="so-card">
        <div className="so-card-header" style={{ background: "#fafafd" }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 8,
              background: BORDER_LIGHT,
              color: INK,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Key style={{ width: 16, height: 16 }} />
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: 14, fontWeight: 800, color: INK, margin: 0 }}>Identifiants de connexion</h3>
            <p style={{ fontSize: 11.5, color: MUTED, margin: "2px 0 0" }}>
              Les seules informations modifiables : email et mot de passe
            </p>
          </div>
          {!editing && (
            <button
              onClick={() => setEditing(true)}
              style={{
                fontSize: 12.5,
                fontWeight: 700,
                padding: "9px 16px",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                gap: 6,
                color: "#fff",
                background: PURPLE,
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              <User style={{ width: 14, height: 14 }} />
              Modifier identifiants
            </button>
          )}
        </div>

        <div style={{ padding: 24, display: "flex", flexDirection: "column", gap: 20 }}>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>
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
              <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>
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
                <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>
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
                  <p style={{ marginTop: 6, fontSize: 12, fontWeight: 600, color: RED, display: "flex", alignItems: "center", gap: 4 }}>
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
              <button
                onClick={handleCancel}
                style={{
                  padding: "10px 18px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 13,
                  border: `1px solid ${BORDER}`,
                  color: "#475569",
                  background: "#fff",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Annuler
              </button>
              <button
                onClick={handleSave}
                style={{
                  padding: "10px 20px",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "#fff",
                  background: PURPLE,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                <CheckCircle2 style={{ width: 15, height: 15 }} />
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
    <div style={{ minHeight: "100vh", display: "flex", background: BG, fontFamily: "'Nunito Sans', 'DM Sans', -apple-system, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&display=swap');

        .so-sidebar {
          display: none;
          flex-direction: column;
          width: 256px;
          flex-shrink: 0;
          border-right: 1px solid ${BORDER_LIGHT};
          background: #fafafd;
        }
        .so-sidebar-header {
          padding: 20px; border-bottom: 1px solid ${BORDER_LIGHT}; background: #fff;
        }
        .so-nav-btn {
          width: 100%; display: flex; align-items: center; gap: 12px;
          padding: 10px 12px; border-radius: 8px; font-size: 13.5px; font-weight: 600;
          border: none; cursor: pointer; text-align: left; font-family: inherit;
          transition: background 0.15s;
        }
        .so-nav-btn:hover { background: ${BORDER_LIGHT}; }
        .so-logout-btn { color: #c0392b; }
        .so-logout-btn:hover { background: #fdecea; }

        .so-mobile-nav {
          position: fixed; bottom: 0; left: 0; right: 0; z-index: 40;
          border-top: 1px solid ${BORDER_LIGHT}; background: #fff;
        }

        .so-topbar { position: sticky; top: 0; z-index: 30; border-bottom: 1px solid ${BORDER_LIGHT}; background: #fff; }
        .so-icon-btn {
          position: relative; width: 38px; height: 38px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          background: none; border: none; cursor: pointer;
        }
        .so-icon-btn:hover { background: ${BORDER_LIGHT}; }
        .so-topbar-profile {
          display: none; align-items: center; gap: 10px; padding-left: 10px; margin-left: 4px;
          border-left: 1px solid ${BORDER_LIGHT};
        }

        .so-card {
          background: #fff; border: 1px solid ${BORDER}; border-radius: 12px; overflow: hidden;
        }
        .so-card-header {
          padding: 14px 20px 12px; border-bottom: 1px solid ${BORDER_LIGHT};
          display: flex; align-items: center; gap: 10px;
        }
        .so-card-title { font-size: 14px; font-weight: 700; color: ${INK}; letter-spacing: -0.01em; flex: 1; }
        .so-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }

        .so-item-row {
          display: flex; align-items: center; gap: 14px; padding: 14px 12px;
          border-bottom: 1px solid ${BORDER_LIGHT};
        }
        .so-item-row:last-child { border-bottom: none; }
        .so-item-icon {
          width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }
        .so-badge {
          font-size: 10.5px; font-weight: 700; padding: 3px 8px; border-radius: 5px;
          white-space: nowrap; display: inline-block;
        }
        .so-action-btn {
          font-size: 11.5px; font-weight: 700; color: #555570;
          background: #f4f4f9; border: 1px solid #e8e8f4; border-radius: 7px;
          padding: 8px 12px; text-align: center; cursor: pointer; font-family: inherit;
        }
        .so-action-btn:hover { background: #ededf8; }
        .so-action-btn-row { display: flex; gap: 8px; margin-top: 4px; }

        .so-livefeed-body { display: flex; }
        .so-livefeed-left { flex: 1; min-width: 0; }
        .so-livefeed-right {
          width: 210px; border-left: 1px solid ${BORDER_LIGHT};
          padding: 18px 20px; display: flex; flex-direction: column; justify-content: space-between;
        }
        .so-prog-label { display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 5px; }
        .so-prog-name { color: #555570; font-weight: 500; }
        .so-prog-track { height: 5px; background: #f0f0f8; border-radius: 3px; overflow: hidden; margin-bottom: 14px; }
        .so-prog-fill { height: 5px; border-radius: 3px; }

        .so-gauge-cell {
          display: flex; align-items: center; gap: 10px; padding: 14px 12px;
          border-right: 1px solid ${BORDER_LIGHT}; min-width: 0; overflow: hidden;
        }
        .so-gauge-cell:last-child { border-right: none; }
        .so-gauge-wrap { position: relative; width: 60px; height: 60px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
        .so-gauge-num { position: absolute; font-size: 13px; font-weight: 800; color: ${INK}; letter-spacing: -0.02em; }
        .so-gauge-info { flex: 1; min-width: 0; }
        .so-gauge-label {
          font-size: 9px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase;
          color: ${MUTED}; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .so-gauge-sublabel { font-size: 10.5px; color: ${MUTED}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .so-gauge-badges { display: flex; gap: 4px; margin-top: 5px; flex-wrap: wrap; }
        .so-gauge-spark { flex-shrink: 0; width: 68px; height: 36px; }

        .so-bottom { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

        .so-health-track { height: 6px; background: ${BORDER_LIGHT}; border-radius: 3px; margin-top: 6px; overflow: hidden; }
        .so-health-fill { height: 6px; border-radius: 3px; }

        .so-stat-grid { display: flex; border-top: 1px solid ${BORDER_LIGHT}; }
        .so-stat-cell { flex: 1; padding: 14px 16px; border-right: 1px solid ${BORDER_LIGHT}; }
        .so-stat-cell:last-child { border-right: none; }
        .so-stat-label { font-size: 9px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: ${MUTED}; margin-bottom: 4px; }
        .so-stat-val { font-size: 20px; font-weight: 800; letter-spacing: -0.02em; }

        .so-act-row { display: flex; align-items: center; gap: 12px; padding: 12px 20px; border-bottom: 1px solid #f8f9fa; }
        .so-act-row:last-child { border-bottom: none; }
        .so-act-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
        .so-act-action { font-size: 13px; font-weight: 600; color: ${INK}; }
        .so-act-actor { font-size: 11px; color: ${MUTED}; margin-top: 2px; }
        .so-act-right { margin-left: auto; text-align: right; flex-shrink: 0; }
        .so-act-time { font-size: 11px; color: #b0b5bc; }
        .so-act-badge {
          font-size: 9px; font-weight: 700; letter-spacing: 0.06em; padding: 3px 8px;
          display: inline-block; margin-top: 4px; text-transform: uppercase; border-radius: 4px; border: 1px solid currentColor;
        }

        .so-input {
          width: 100%; padding: 11px 14px; border-radius: 8px; border: 1px solid ${BORDER};
          font-size: 14px; font-family: inherit; outline: none; color: ${INK};
        }
        .so-input:focus { border-color: ${PURPLE}; box-shadow: 0 0 0 3px ${PURPLE}1a; }
        .so-input-static {
          padding: 11px 14px; border-radius: 8px; border: 1px solid ${BORDER_LIGHT};
          background: #fafafd; font-size: 14px; color: ${INK};
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
        <main style={{ flex: 1, padding: "24px 20px", maxWidth: 1280, width: "100%", margin: "0 auto" }}>
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
            style={{ textDecoration: "underline", fontWeight: 700, color: PURPLE, background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
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