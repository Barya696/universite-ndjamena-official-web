import { useState } from "react";
import StudentLogin from "../Student/StudentLogin";
import { BRAND } from "../Utils/brand";
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

const NAVY = BRAND.navy;
const GOLD = BRAND.gold;
const NAVY_DEEP = BRAND.navyDeep;

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

const STATS = [
  {
    label: "Moyenne générale",
    value: "13,42",
    suffix: "/ 20",
    icon: Award,
    tone: "good",
  },
  {
    label: "Crédits validés",
    value: "96",
    suffix: "/ 120",
    icon: CheckCircle2,
    tone: "neutral",
  },
  {
    label: "Taux de présence",
    value: "89",
    suffix: "%",
    icon: Users,
    tone: "good",
  },
  {
    label: "Rang",
    value: "12",
    suffix: "/ 45",
    icon: TrendingUp,
    tone: "neutral",
  },
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
    color: "#1a3a5c",
  },
  {
    code: "GE3-L3-02",
    name: "Gestion financière",
    teacher: "Pr. Fatimé Ngarbaye",
    room: "Salle 214 · Campus Toukra",
    credits: 5,
    grade: "12,8",
    status: "En cours",
    color: "#c8a84b",
  },
  {
    code: "GE3-L3-03",
    name: "Droit des affaires",
    teacher: "Dr. Brahim Koiballa",
    room: "Amphi A · Campus Toukra",
    credits: 4,
    grade: "15,0",
    status: "En cours",
    color: "#306998",
  },
  {
    code: "GE3-L3-04",
    name: "Marketing stratégique",
    teacher: "Dr. Aïcha Djimet",
    room: "Salle 307 · Campus Toukra",
    credits: 5,
    grade: "—",
    status: "À rattraper",
    color: "#dc2626",
  },
  {
    code: "GE3-L3-05",
    name: "Anglais des affaires",
    teacher: "M. Jean-Pierre Ngueyam",
    room: "Salle 112 · Campus Toukra",
    credits: 3,
    grade: "13,8",
    status: "Validé",
    color: "#16a34a",
  },
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

const NOTICES = [
  {
    id: 1,
    title: "Inscription pédagogique Semestre 6",
    date: "10 sept. 2024",
    category: "Administration",
    text: "Les inscriptions pédagogiques pour le S6 ouvrent le 23 septembre. Pensez à régler vos frais avant le 30 septembre.",
    tone: "info",
  },
  {
    id: 2,
    title: "Contrôle continu — Comptabilité",
    date: "9 sept. 2024",
    category: "Évaluation",
    text: "Premier contrôle continu le vendredi 20 septembre en salle 214. Révisez les chapitres 1 à 4.",
    tone: "warning",
  },
  {
    id: 3,
    title: "Stage de fin d'études — Appel à candidatures",
    date: "5 sept. 2024",
    category: "Stage",
    text: "Offres de stage disponibles auprès de nos partenaires : Ecobank, Bolloré, ONU Tchad. Dossier à déposer avant le 15 oct.",
    tone: "success",
  },
  {
    id: 4,
    title: "Maintenance portail — Samedi 14",
    date: "4 sept. 2024",
    category: "Technique",
    text: "Le portail sera inaccessible de 14h à 18h pour mise à jour. Merci de votre compréhension.",
    tone: "neutral",
  },
];

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

function StatCard({
  stat,
}: {
  stat: (typeof STATS)[number];
}) {
  const { label, value, suffix, icon: Icon, tone } = stat;
  const toneColor =
    tone === "good" ? "#16a34a" : tone === "warn" ? "#d97706" : NAVY;
  return (
    <div
      className="rounded-xl border p-5 bg-white"
      style={{ borderColor: "#e2e8f0" }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-[#64748b] mb-1">{label}</p>
          <div className="flex items-baseline gap-1">
            <span
              className="text-3xl font-bold"
              style={{ color: toneColor, fontFamily: "Georgia, serif" }}
            >
              {value}
            </span>
            <span className="text-sm text-[#94a3b8]">{suffix}</span>
          </div>
        </div>
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: "#f1f5f9", color: NAVY }}
        >
          <Icon className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

function CourseRow({ course }: { course: (typeof COURSES)[number] }) {
  const statusColor =
    course.status === "Validé"
      ? "#16a34a"
      : course.status === "À rattraper"
      ? "#dc2626"
      : "#2563eb";
  const statusBg =
    course.status === "Validé"
      ? "#f0fdf4"
      : course.status === "À rattraper"
      ? "#fef2f2"
      : "#eff6ff";

  return (
    <div
      className="flex flex-col md:flex-row md:items-center gap-4 p-4 rounded-lg border hover:shadow-sm transition-shadow bg-white"
      style={{ borderColor: "#e2e8f0" }}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 text-white font-bold"
        style={{ background: course.color }}
      >
        <BookOpen className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <span className="text-xs font-mono text-[#64748b]">
            {course.code}
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: statusBg, color: statusColor }}
          >
            {course.status}
          </span>
          <span className="text-xs text-[#94a3b8]">{course.credits} ECTS</span>
        </div>
        <h4 className="font-semibold text-[15px]" style={{ color: NAVY }}>
          {course.name}
        </h4>
        <p className="text-sm text-[#64748b] mt-0.5">
          {course.teacher} · {course.room}
        </p>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <div className="text-right">
          <p className="text-xs text-[#94a3b8]">Note</p>
          <p
            className="text-lg font-bold"
            style={{
              color:
                course.grade === "—"
                  ? "#94a3b8"
                  : parseFloat(course.grade) >= 10
                  ? "#16a34a"
                  : "#dc2626",
              fontFamily: "Georgia, serif",
            }}
          >
            {course.grade}
          </p>
        </div>
        <button
          className="text-sm font-semibold px-3 py-1.5 rounded-lg border hover:bg-[#f8fafc] transition-colors flex items-center gap-1"
          style={{ borderColor: "#cbd5e1", color: NAVY }}
        >
          Détails <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function ScheduleRow({ s }: { s: (typeof SCHEDULE)[number] }) {
  return (
    <div
      className="flex gap-4 p-4 rounded-lg border bg-white"
      style={{ borderColor: "#e2e8f0" }}
    >
      <div className="text-center shrink-0 w-14">
        <p
          className="text-xs font-semibold uppercase tracking-wide"
          style={{ color: GOLD }}
        >
          {s.day.split(" ")[0]}
        </p>
        <p className="text-xl font-bold" style={{ color: NAVY }}>
          {s.day.split(" ")[1]}
        </p>
      </div>
      <div className="w-px bg-[#e2e8f0]" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-xs text-[#64748b] mb-1 flex-wrap">
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {s.time}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> {s.room}
          </span>
          <span
            className="px-2 py-0.5 rounded-full text-[11px]"
            style={{ background: "#f1f5f9", color: NAVY }}
          >
            {s.type}
          </span>
        </div>
        <h4 className="font-semibold text-[15px]" style={{ color: NAVY }}>
          {s.subject}
        </h4>
        <p className="text-sm text-[#64748b]">{s.teacher}</p>
      </div>
    </div>
  );
}

function NoticeCard({ n }: { n: (typeof NOTICES)[number] }) {
  const toneDot =
    n.tone === "success"
      ? "#16a34a"
      : n.tone === "warning"
      ? "#d97706"
      : n.tone === "info"
      ? "#2563eb"
      : "#64748b";
  return (
    <div
      className="p-5 rounded-xl border bg-white"
      style={{ borderColor: "#e2e8f0" }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ background: "#f1f5f9", color: NAVY }}
        >
          {n.category}
        </span>
        <span className="text-xs text-[#94a3b8]">{n.date}</span>
      </div>
      <h4
        className="font-semibold text-[15px] mb-2 flex items-start gap-2"
        style={{ color: NAVY }}
      >
        <span
          className="w-2 h-2 rounded-full mt-2 shrink-0"
          style={{ background: toneDot }}
        />
        {n.title}
      </h4>
      <p className="text-sm text-[#64748b] leading-relaxed">{n.text}</p>
    </div>
  );
}

function PaymentRow({ p }: { p: (typeof PAYMENTS)[number] }) {
  const isPaid = p.tone === "paid";
  return (
    <div
      className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 rounded-lg border bg-white"
      style={{ borderColor: "#e2e8f0" }}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
          isPaid ? "text-white" : ""
        }`}
        style={{
          background: isPaid ? "#16a34a" : "#f1f5f9",
          color: isPaid ? "#fff" : NAVY,
        }}
      >
        {isPaid ? (
          <CheckCircle2 className="w-5 h-5" />
        ) : (
          <AlertCircle className="w-5 h-5" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-[15px]" style={{ color: NAVY }}>
          {p.label}
        </h4>
        <p className="text-sm text-[#64748b]">{p.date}</p>
      </div>
      <div className="flex items-center gap-4 sm:gap-6">
        <div className="text-right">
          <p className="text-xs text-[#94a3b8]">Montant</p>
          <p
            className="text-lg font-bold"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            {p.amount}
          </p>
        </div>
        <span
          className="text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap"
          style={{
            background: isPaid ? "#f0fdf4" : "#fffbeb",
            color: isPaid ? "#16a34a" : "#b45309",
          }}
        >
          {p.status}
        </span>
      </div>
    </div>
  );
}

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
    <aside
      className="hidden lg:flex flex-col w-64 shrink-0 border-r"
      style={{ background: "#f8fafc", borderColor: "#e2e8f0" }}
    >
      <div
        className="p-5 border-b"
        style={{ borderColor: "#e2e8f0", background: "#fff" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-white"
            style={{ background: NAVY }}
          >
            {STUDENT.avatar}
          </div>
          <div className="min-w-0">
            <p
              className="font-semibold text-[15px] truncate"
              style={{ color: NAVY }}
            >
              {STUDENT.firstName} {STUDENT.lastName}
            </p>
            <p className="text-xs text-[#64748b] truncate">
              {STUDENT.studentId}
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
              style={
                isActive
                  ? { background: NAVY, color: "#fff" }
                  : { color: "#475569" }
              }
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = "#e2e8f0";
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = "transparent";
              }}
            >
              <Icon className="w-4.5 h-4.5 shrink-0" />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t" style={{ borderColor: "#e2e8f0" }}>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-[#fee2e2]"
          style={{ color: "#b91c1c" }}
        >
          <LogOut className="w-4.5 h-4.5 shrink-0" />
          <span>Se déconnecter</span>
        </button>
      </div>
    </aside>
  );
}

function MobileNav({
  active,
  onChange,
  onLogout,
}: {
  active: DashboardTab;
  onChange: (t: DashboardTab) => void;
  onLogout: () => void;
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
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t bg-white"
      style={{ borderColor: "#e2e8f0" }}
    >
      <div className="grid grid-cols-6 max-w-xl mx-auto">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className="flex flex-col items-center justify-center gap-0.5 py-2 text-[11px] font-medium"
              style={{ color: isActive ? NAVY : "#94a3b8" }}
            >
              <Icon className="w-5 h-5" />
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
    <header
      className="sticky top-0 z-30 border-b bg-white"
      style={{ borderColor: "#e2e8f0" }}
    >
      <div className="flex items-center justify-between px-4 md:px-6 h-16 gap-3">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color: GOLD }}
          >
            {STUDENT.year} · {STUDENT.semester}
          </p>
          <h1
            className="text-lg font-bold"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            Bonjour, {STUDENT.firstName}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="relative w-10 h-10 rounded-lg flex items-center justify-center hover:bg-[#f1f5f9] transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" style={{ color: NAVY }} />
            <span
              className="absolute top-2 right-2.5 w-2 h-2 rounded-full"
              style={{ background: "#dc2626" }}
            />
          </button>
          <div className="hidden md:flex items-center gap-2 pl-2 ml-1 border-l" style={{ borderColor: "#e2e8f0" }}>
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm"
              style={{ background: NAVY }}
            >
              {STUDENT.avatar}
            </div>
            <div className="text-right">
              <p
                className="text-sm font-semibold leading-tight"
                style={{ color: NAVY }}
              >
                {STUDENT.firstName} {STUDENT.lastName}
              </p>
              <button
                onClick={onLogout}
                className="text-xs hover:underline"
                style={{ color: "#94a3b8" }}
              >
                Se déconnecter
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function TabContent({ tab }: { tab: DashboardTab }) {
  if (tab === "accueil") {
    return (
      <div className="space-y-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <StatCard key={s.label} stat={s} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center justify-between">
              <h2
                className="text-lg font-bold"
                style={{ color: NAVY, fontFamily: "Georgia, serif" }}
              >
                Mes cours — {STUDENT.semester}
              </h2>
              <button
                className="text-sm font-semibold flex items-center gap-1"
                style={{ color: NAVY }}
              >
                Voir tout <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            {COURSES.slice(0, 4).map((c) => (
              <CourseRow key={c.code} course={c} />
            ))}
          </div>

          <div className="space-y-3">
            <h2
              className="text-lg font-bold"
              style={{ color: NAVY, fontFamily: "Georgia, serif" }}
            >
              Emploi de la semaine
            </h2>
            <div className="space-y-3">
              {SCHEDULE.slice(0, 4).map((s, i) => (
                <ScheduleRow key={i} s={s} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2
              className="text-lg font-bold"
              style={{ color: NAVY, fontFamily: "Georgia, serif" }}
            >
              Dernières nouvelles
            </h2>
            <button
              className="text-sm font-semibold flex items-center gap-1"
              style={{ color: NAVY }}
            >
              Voir tout <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {NOTICES.slice(0, 4).map((n) => (
              <NoticeCard key={n.id} n={n} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (tab === "cours") {
    return (
      <div className="space-y-4">
        <div>
          <h2
            className="text-xl font-bold"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            Mes cours
          </h2>
          <p className="text-sm text-[#64748b] mt-1">
            {COURSES.length} unités d'enseignement · {STUDENT.semester}
          </p>
        </div>
        <div className="space-y-3">
          {COURSES.map((c) => (
            <CourseRow key={c.code} course={c} />
          ))}
        </div>
      </div>
    );
  }

  if (tab === "emploi") {
    return (
      <div className="space-y-4">
        <div>
          <h2
            className="text-xl font-bold"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            Emploi du temps
          </h2>
          <p className="text-sm text-[#64748b] mt-1">
            Semaine du 9 au 15 septembre 2024
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {SCHEDULE.map((s, i) => (
            <ScheduleRow key={i} s={s} />
          ))}
        </div>
      </div>
    );
  }

  if (tab === "notes") {
    return (
      <div className="space-y-6">
        <div>
          <h2
            className="text-xl font-bold"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            Notes & résultats
          </h2>
          <p className="text-sm text-[#64748b] mt-1">
            Relevé provisoire — {STUDENT.semester}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <StatCard stat={STATS[0]} />
          <StatCard stat={STATS[1]} />
          <StatCard stat={STATS[3]} />
        </div>

        <div
          className="rounded-xl border overflow-hidden bg-white"
          style={{ borderColor: "#e2e8f0" }}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead style={{ background: "#f8fafc" }}>
                <tr>
                  <th className="text-left px-5 py-3 font-semibold" style={{ color: NAVY }}>
                    UE
                  </th>
                  <th className="text-left px-5 py-3 font-semibold" style={{ color: NAVY }}>
                    Intitulé
                  </th>
                  <th className="text-left px-5 py-3 font-semibold" style={{ color: NAVY }}>
                    Crédits
                  </th>
                  <th className="text-center px-5 py-3 font-semibold" style={{ color: NAVY }}>
                    CC
                  </th>
                  <th className="text-center px-5 py-3 font-semibold" style={{ color: NAVY }}>
                    Examen
                  </th>
                  <th className="text-center px-5 py-3 font-semibold" style={{ color: NAVY }}>
                    Note finale
                  </th>
                  <th className="text-center px-5 py-3 font-semibold" style={{ color: NAVY }}>
                    Décision
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { code: "CA", name: "Comptabilité approfondie", credits: 6, cc: "14,0", ex: "14,8", note: "14,5", decision: "ACQ" },
                  { code: "GF", name: "Gestion financière", credits: 5, cc: "12,5", ex: "13,0", note: "12,8", decision: "ACQ" },
                  { code: "DA", name: "Droit des affaires", credits: 4, cc: "15,2", ex: "14,9", note: "15,0", decision: "ACQ" },
                  { code: "MS", name: "Marketing stratégique", credits: 5, cc: "—", ex: "—", note: "—", decision: "—" },
                  { code: "AA", name: "Anglais des affaires", credits: 3, cc: "14,0", ex: "13,6", note: "13,8", decision: "ACQ" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid #e2e8f0" }}>
                    <td className="px-5 py-3 font-mono text-[13px] text-[#64748b]">{row.code}</td>
                    <td className="px-5 py-3 font-medium" style={{ color: NAVY }}>{row.name}</td>
                    <td className="px-5 py-3 text-[#475569]">{row.credits}</td>
                    <td className="px-5 py-3 text-center font-mono">{row.cc}</td>
                    <td className="px-5 py-3 text-center font-mono">{row.ex}</td>
                    <td className="px-5 py-3 text-center font-bold" style={{ color: row.note === "—" ? "#94a3b8" : NAVY }}>
                      {row.note}
                    </td>
                    <td className="px-5 py-3 text-center">
                      <span
                        className="px-2 py-1 rounded text-xs font-bold"
                        style={{
                          background: row.decision === "ACQ" ? "#f0fdf4" : row.decision === "—" ? "#f1f5f9" : "#fef2f2",
                          color: row.decision === "ACQ" ? "#16a34a" : row.decision === "—" ? "#64748b" : "#dc2626",
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
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2
              className="text-xl font-bold"
              style={{ color: NAVY, fontFamily: "Georgia, serif" }}
            >
              Paiements & factures
            </h2>
            <p className="text-sm text-[#64748b] mt-1">
              Année académique {STUDENT.year}
            </p>
          </div>
          <button
            className="px-4 py-2 rounded-lg font-semibold text-sm text-white flex items-center justify-center gap-2"
            style={{ background: NAVY }}
          >
            Payer en ligne <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <StatCard
            stat={{
              label: "Total payé",
              value: "75 000",
              suffix: "FCFA",
              icon: CheckCircle2,
              tone: "good",
            }}
          />
          <StatCard
            stat={{
              label: "Restant dû",
              value: "72 500",
              suffix: "FCFA",
              icon: AlertCircle,
              tone: "warn",
            }}
          />
        </div>

        <div className="space-y-3">
          {PAYMENTS.map((p, i) => (
            <PaymentRow key={i} p={p} />
          ))}
        </div>
      </div>
    );
  }

  // Profil
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
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2
            className="text-xl font-bold"
            style={{ color: NAVY, fontFamily: "Georgia, serif" }}
          >
            Mon profil
          </h2>
          <p className="text-sm text-[#64748b] mt-1">
            Informations personnelles & parcours académique
          </p>
        </div>
        {saved && (
          <span
            className="text-sm font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
            style={{ background: "#f0fdf4", color: "#16a34a" }}
          >
            <CheckCircle2 className="w-4 h-4" />
            Modifications enregistrées
          </span>
        )}
      </div>

      {/* Static card - Academic info (read-only) */}
      <div
        className="rounded-xl border overflow-hidden bg-white"
        style={{ borderColor: "#e2e8f0" }}
      >
        <div
          className="h-32 relative"
          style={{
            background: `linear-gradient(135deg, ${NAVY_DEEP} 0%, ${NAVY} 100%)`,
          }}
        >
          <div className="absolute -bottom-10 left-6">
            <div
              className="w-20 h-20 rounded-2xl border-4 flex items-center justify-center font-bold text-2xl text-white"
              style={{ background: GOLD, borderColor: "#fff" }}
            >
              {STUDENT.avatar}
            </div>
          </div>
          <span
            className="absolute top-4 right-4 text-xs font-semibold px-3 py-1.5 rounded-lg inline-flex items-center gap-1.5"
            style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}
          >
            <Lock className="w-3.5 h-3.5" />
            Informations académiques — Lecture seule
          </span>
        </div>

        <div className="pt-12 px-6 pb-6 grid md:grid-cols-2 gap-x-8 gap-y-5">
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
              <p className="text-xs text-[#94a3b8] font-semibold uppercase tracking-wide mb-1">
                {k}
              </p>
              <p className="text-[15px]" style={{ color: NAVY }}>
                {v}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Editable card - Credentials */}
      <div
        className="rounded-xl border overflow-hidden bg-white"
        style={{ borderColor: "#e2e8f0" }}
      >
        <div
          className="px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderColor: "#e2e8f0", background: "#f8fafc" }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "#e2e8f0", color: NAVY }}
            >
              <Key className="w-4.5 h-4.5" />
            </div>
            <div>
              <h3 className="font-bold text-[15px]" style={{ color: NAVY }}>
                Identifiants de connexion
              </h3>
              <p className="text-xs text-[#64748b]">
                Les seules informations modifiables : email et mot de passe
              </p>
            </div>
          </div>
          {!editing && (
            <button
              onClick={() => setEditing(true)}
              className="text-sm font-semibold px-4 py-2 rounded-lg flex items-center justify-center gap-1.5 text-white"
              style={{ background: NAVY }}
            >
              <User className="w-4 h-4" />
              Modifier identifiants
            </button>
          )}
        </div>

        <div className="p-6 space-y-5">
          <div>
            <label
              className="block text-sm font-semibold mb-1.5"
              style={{ color: NAVY }}
            >
              Adresse email universitaire
            </label>
            {editing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border text-[15px] focus:outline-none focus:ring-2"
                style={{
                  borderColor: "#cbd5e1",
                  boxShadow: "none",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = NAVY;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "#cbd5e1";
                }}
              />
            ) : (
              <div
                className="px-4 py-2.5 rounded-lg border flex items-center justify-between"
                style={{ borderColor: "#e2e8f0", background: "#f8fafc" }}
              >
                <span className="text-[15px]" style={{ color: NAVY }}>
                  {email}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <label
                className="block text-sm font-semibold mb-1.5"
                style={{ color: NAVY }}
              >
                {editing ? "Nouveau mot de passe" : "Mot de passe"}
              </label>
              {editing ? (
                <div className="relative">
                  <input
                    type={showPwd ? "text" : "password"}
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                    placeholder="Laissez vide pour conserver le mot de passe actuel"
                    className="w-full px-4 py-2.5 pr-11 rounded-lg border text-[15px] focus:outline-none"
                    style={{ borderColor: "#cbd5e1" }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = NAVY;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "#cbd5e1";
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPwd((s) => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#1e293b]"
                    tabIndex={-1}
                    aria-label={showPwd ? "Masquer" : "Afficher"}
                  >
                    {showPwd ? (
                      <EyeOff className="w-4.5 h-4.5" />
                    ) : (
                      <Eye className="w-4.5 h-4.5" />
                    )}
                  </button>
                </div>
              ) : (
                <div
                  className="px-4 py-2.5 rounded-lg border flex items-center justify-between"
                  style={{ borderColor: "#e2e8f0", background: "#f8fafc" }}
                >
                  <span
                    className="text-[15px] tracking-[0.35em]"
                    style={{ color: "#475569" }}
                  >
                    ••••••••
                  </span>
                  <span
                    className="text-xs font-semibold px-2 py-1 rounded"
                    style={{ background: "#f1f5f9", color: "#64748b" }}
                  >
                    Modifié le 14 août 2024
                  </span>
                </div>
              )}
            </div>

            {editing && (
              <div>
                <label
                  className="block text-sm font-semibold mb-1.5"
                  style={{ color: NAVY }}
                >
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type={showPwd ? "text" : "password"}
                  value={pwdConfirm}
                  onChange={(e) => setPwdConfirm(e.target.value)}
                  placeholder="Retapez le nouveau mot de passe"
                  className="w-full px-4 py-2.5 rounded-lg border text-[15px] focus:outline-none"
                  style={{ borderColor: "#cbd5e1" }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = NAVY;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#cbd5e1";
                  }}
                />
                {pwd && pwdConfirm && pwd !== pwdConfirm && (
                  <p
                    className="mt-1.5 text-xs font-medium flex items-center gap-1"
                    style={{ color: "#dc2626" }}
                  >
                    <AlertCircle className="w-3.5 h-3.5" />
                    Les mots de passe ne correspondent pas
                  </p>
                )}
                <p className="mt-1.5 text-xs text-[#64748b]">
                  Astuce : minimum 8 caractères, une majuscule et un chiffre
                  recommandés.
                </p>
              </div>
            )}
          </div>

          {editing && (
            <div
              className="flex flex-col sm:flex-row sm:justify-end gap-2.5 pt-2 border-t"
              style={{ borderColor: "#e2e8f0" }}
            >
              <button
                onClick={handleCancel}
                className="px-4 py-2.5 rounded-lg font-semibold text-sm border hover:bg-[#f8fafc] transition-colors"
                style={{ borderColor: "#cbd5e1", color: "#475569" }}
              >
                Annuler
              </button>
              <button
                onClick={handleSave}
                className="px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center justify-center gap-1.5 text-white"
                style={{ background: NAVY }}
              >
                <CheckCircle2 className="w-4 h-4" />
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
    <div className="min-h-screen flex bg-[#f5f7fb]">
      <Sidebar active={active} onChange={setActive} onLogout={onLogout} />

      <div className="flex-1 flex flex-col min-w-0 lg:pb-0 pb-20">
        <DashboardHeader onLogout={onLogout} />
        <main className="flex-1 px-4 md:px-6 py-6 max-w-7xl w-full mx-auto">
          <TabContent tab={active} />
        </main>
      </div>

      <MobileNav active={active} onChange={setActive} onLogout={onLogout} />
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
      <div className="p-4 bg-white border-b text-center" style={{ borderColor: "#e2e8f0" }}>
        <p className="text-xs text-[#64748b]">
          Démonstration : cliquez sur{" "}
          <button
            onClick={() => setView("dashboard")}
            className="underline font-semibold"
            style={{ color: NAVY }}
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
