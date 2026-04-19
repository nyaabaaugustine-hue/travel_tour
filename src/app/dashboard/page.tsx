"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Plane, Calendar, MapPin, User, Settings, LogOut,
  Ticket, ChevronRight, Bell, TrendingUp, Globe,
  Shield, Star, Plus, Clock, AlertTriangle, Info,
  CheckCircle2, XCircle, Tag, Zap, CreditCard,
  RefreshCw, ChevronDown, BellOff, Eye, Luggage,
  TrendingDown, Gift, ArrowUpRight, X, AlertCircle,
  FileText, Timer, Smartphone
} from "lucide-react";

/* ─── DEMO DATA ─── */

const USER = {
  name: "Kwame Mensah",
  email: "kwame.mensah@gmail.com",
  phone: "+233 50 123 4567",
  tier: "Gold",
  miles: 45200,
  joinDate: "Jan 2022",
  avatar: null,
  passportExpiry: "Dec 2025",   // intentionally near
  nextTierMiles: 55000,
};

const BOOKINGS = [
  {
    id: "B-88392", ref: "VS-2049",
    route: "ACC → LHR", origin: "Accra (ACC)", dest: "London (LHR)",
    depart: "Nov 15, 2025 08:30", arrive: "Nov 15, 2025 14:45",
    returnDate: "Nov 22, 2025",
    status: "Confirmed", type: "Upcoming",
    airline: "Oceanic Air", flight: "OA 204", gate: "B12",
    price: 345, class: "Economy", seat: "24A",
    stops: "Non-stop", duration: "6h 15m",
    canCancel: true, checkInOpen: false, checkedIn: false,
  },
  {
    id: "B-99501", ref: "GL-3910",
    route: "ACC → DXB", origin: "Accra (ACC)", dest: "Dubai (DXB)",
    depart: "Dec 22, 2025 23:45", arrive: "Dec 23, 2025 08:30",
    returnDate: "Jan 5, 2026",
    status: "Confirmed", type: "Upcoming",
    airline: "Global Jet", flight: "GJ 511", gate: "—",
    price: 610, class: "Business", seat: "3C",
    stops: "Non-stop", duration: "7h 45m",
    canCancel: true, checkInOpen: false, checkedIn: false,
  },
  {
    id: "B-77210", ref: "NRT-0032",
    route: "NRT → SFO", origin: "Tokyo (NRT)", dest: "San Francisco (SFO)",
    depart: "Sep 12, 2025 10:00", arrive: "Sep 12, 2025 08:45",
    returnDate: "Sep 19, 2025",
    status: "Completed", type: "Past",
    airline: "Global Jet", flight: "GJ 88", gate: "—",
    price: 890, class: "Premium Economy", seat: "14B",
    stops: "1 stop", duration: "11h 45m",
    canCancel: false, checkInOpen: false, checkedIn: true,
  },
  {
    id: "B-55431", ref: "AF-7723",
    route: "LHR → CDG", origin: "London (LHR)", dest: "Paris (CDG)",
    depart: "May 20, 2025 07:15", arrive: "May 20, 2025 09:50",
    returnDate: "May 25, 2025",
    status: "Completed", type: "Past",
    airline: "Air France", flight: "AF 1680", gate: "—",
    price: 210, class: "Economy", seat: "31F",
    stops: "Non-stop", duration: "1h 35m",
    canCancel: false, checkInOpen: false, checkedIn: true,
  },
  {
    id: "B-44009", ref: "ET-2201",
    route: "ACC → NBO", origin: "Accra (ACC)", dest: "Nairobi (NBO)",
    depart: "Feb 10, 2025 06:00", arrive: "Feb 10, 2025 11:20",
    returnDate: "Feb 17, 2025",
    status: "Cancelled", type: "Past",
    airline: "Ethiopian Air", flight: "ET 909", gate: "—",
    price: 280, class: "Economy", seat: "—",
    stops: "1 stop", duration: "5h 20m",
    canCancel: false, checkInOpen: false, checkedIn: false,
  },
];

type NotifType = "alert" | "warning" | "info" | "success" | "promo";
interface Notification {
  id: string;
  type: NotifType;
  title: string;
  message: string;
  time: string;
  read: boolean;
  actionLabel?: string;
  actionHref?: string;
}

const NOTIFICATIONS: Notification[] = [
  {
    id: "n1", type: "alert", read: false,
    title: "Flight Delay — OA 204",
    message: "Your Accra → London flight (Nov 15) is delayed by 2h 15m. New departure: 10:45 AM. Gate unchanged: B12.",
    time: "2 min ago",
    actionLabel: "View Details", actionHref: "/flights",
  },
  {
    id: "n2", type: "warning", read: false,
    title: "Check-in Opens in 24h",
    message: "Online check-in for OA 204 (ACC → LHR) opens tomorrow at 08:30 AM. Select your seat early for best availability.",
    time: "1 hr ago",
    actionLabel: "Check In", actionHref: "/dashboard",
  },
  {
    id: "n3", type: "warning", read: false,
    title: "Passport Expiry Warning",
    message: "Your passport expires Dec 2025. Most destinations require 6 months validity. Renew before your Dubai trip.",
    time: "3 hrs ago",
    actionLabel: "Learn More", actionHref: "/insurance",
  },
  {
    id: "n4", type: "promo", read: true,
    title: "🔥 Price Drop — ACC → NBO",
    message: "Nairobi flights dropped 34% this week! From $183 return. You searched this route last month.",
    time: "5 hrs ago",
    actionLabel: "Book Now", actionHref: "/flights",
  },
  {
    id: "n5", type: "success", read: true,
    title: "Booking Confirmed — GJ 511",
    message: "Your Dubai flight (Dec 22, Business Class) is confirmed. Ref: GL-3910. Check your email for the e-ticket.",
    time: "2 days ago",
    actionLabel: "View Ticket", actionHref: "/dashboard",
  },
  {
    id: "n6", type: "info", read: true,
    title: "Seat Upgrade Available",
    message: "A Business Class seat is now available on your London flight for $89 extra. Upgrade window closes 48h before departure.",
    time: "2 days ago",
    actionLabel: "Upgrade", actionHref: "/flights",
  },
  {
    id: "n7", type: "promo", read: true,
    title: "🎁 500 Bonus Miles",
    message: "You earned 500 bonus miles for completing your profile! Current balance: 45,200 miles.",
    time: "3 days ago",
  },
];

type AlertType = "danger" | "warning" | "info";
interface AlertItem {
  id: string;
  type: AlertType;
  icon: React.ReactNode;
  title: string;
  desc: string;
  actionLabel?: string;
  dismissible: boolean;
}

const ALERTS: AlertItem[] = [
  {
    id: "a1", type: "danger", dismissible: true,
    icon: <AlertTriangle className="h-4 w-4" />,
    title: "Flight OA 204 Delayed — 2h 15m",
    desc: "Your Accra → London flight is delayed. New departure 10:45 AM. Arrive early; gate B12 is at Terminal 3.",
    actionLabel: "View Flight Status",
  },
  {
    id: "a2", type: "warning", dismissible: true,
    icon: <FileText className="h-4 w-4" />,
    title: "Passport Expires Dec 2025",
    desc: "Dubai requires 6 months passport validity. Your passport expires Dec 2025 — renew before your Dec 22 trip.",
    actionLabel: "Get Travel Insurance",
  },
  {
    id: "a3", type: "info", dismissible: true,
    icon: <Smartphone className="h-4 w-4" />,
    title: "Download Our Mobile App",
    desc: "Get real-time gate updates, mobile boarding passes, and exclusive app-only deals.",
    actionLabel: "Learn More",
  },
];

/* ─── HELPERS ─── */
function useCountdown(targetDate: string) {
  const [diff, setDiff] = useState(0);
  useEffect(() => {
    const target = new Date(targetDate).getTime();
    const update = () => setDiff(Math.max(0, target - Date.now()));
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, [targetDate]);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  if (diff <= 0) return null;
  if (d > 30) return `${d} days away`;
  if (d > 0) return `${d}d ${h}h ${m}m`;
  return `${h}h ${m}m ${s}s`;
}

const notifColors: Record<NotifType, string> = {
  alert:   "bg-red-50 border-red-200 text-red-700",
  warning: "bg-amber-50 border-amber-200 text-amber-700",
  info:    "bg-blue-50 border-blue-200 text-blue-700",
  success: "bg-green-50 border-green-200 text-green-700",
  promo:   "bg-purple-50 border-purple-200 text-purple-700",
};
const notifIcons: Record<NotifType, React.ReactNode> = {
  alert:   <XCircle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />,
  warning: <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />,
  info:    <Info className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />,
  success: <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />,
  promo:   <Tag className="h-4 w-4 text-purple-500 shrink-0 mt-0.5" />,
};

/* ─── COMPONENTS ─── */

function CountdownPill({ date }: { date: string }) {
  const t = useCountdown(date);
  if (!t) return null;
  return (
    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2 py-0.5">
      <Timer className="h-3 w-3" /> {t}
    </span>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Confirmed: "bg-green-50 text-green-700 border-green-200",
    Completed: "bg-muted text-muted-foreground border-border",
    Cancelled:  "bg-red-50 text-red-600 border-red-200",
    Delayed:    "bg-amber-50 text-amber-700 border-amber-200",
  };
  return (
    <Badge variant="outline" className={`text-[9px] font-bold rounded-full ${map[status] ?? ""}`}>
      {status}
    </Badge>
  );
}

/* ─── PAGE ─── */

export default function DashboardPage() {
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);
  const [notifications, setNotifications]     = useState(NOTIFICATIONS);
  const [notifOpen, setNotifOpen]             = useState(false);
  const [activeTab, setActiveTab]             = useState("overview");

  const unread = notifications.filter(n => !n.read).length;
  const visibleAlerts = ALERTS.filter(a => !dismissedAlerts.includes(a.id));

  const markAllRead = () => setNotifications(ns => ns.map(n => ({ ...n, read: true })));
  const markRead = (id: string) => setNotifications(ns => ns.map(n => n.id === id ? { ...n, read: true } : n));

  const upcoming = BOOKINGS.filter(b => b.type === "Upcoming");
  const past     = BOOKINGS.filter(b => b.type === "Past");
  const totalSpent = BOOKINGS.filter(b => b.status !== "Cancelled").reduce((s, b) => s + b.price, 0);
  const nextFlight = upcoming[0];

  const milesProgress = Math.round((USER.miles / USER.nextTierMiles) * 100);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* ── Alert banner strip ── */}
      {visibleAlerts.filter(a => a.type === "danger").map(alert => (
        <div key={alert.id} className="bg-red-600 text-white px-4 py-2.5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <AlertTriangle className="h-4 w-4 shrink-0" />
            <span className="text-sm font-semibold truncate">{alert.title} — {alert.desc}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {alert.actionLabel && (
              <button className="text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors whitespace-nowrap">
                {alert.actionLabel}
              </button>
            )}
            <button onClick={() => setDismissedAlerts(d => [...d, alert.id])}>
              <X className="h-4 w-4 opacity-70 hover:opacity-100" />
            </button>
          </div>
        </div>
      ))}

      <main className="container mx-auto px-4 lg:px-8 py-6 max-w-7xl">

        {/* ── Mobile: profile bar ── */}
        <div className="lg:hidden flex items-center gap-3 bg-white border border-border rounded-2xl p-3 mb-5 shadow-sm">
          <div className="h-11 w-11 bg-primary rounded-xl flex items-center justify-center shrink-0">
            <User className="h-5 w-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm truncate">{USER.name}</p>
            <div className="flex items-center gap-2">
              <Badge className="bg-secondary/20 text-primary border-none text-[9px] font-bold px-2 py-0">
                <Star className="h-2.5 w-2.5 fill-secondary text-secondary mr-0.5" />{USER.tier}
              </Badge>
              <span className="text-xs text-muted-foreground">{USER.miles.toLocaleString()} mi</span>
            </div>
          </div>
          <button onClick={() => setNotifOpen(true)} className="relative p-2 rounded-xl bg-muted hover:bg-muted/70 transition-colors">
            <Bell className="h-5 w-5 text-foreground" />
            {unread > 0 && (
              <span className="absolute -top-0.5 -right-0.5 h-4 w-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">
                {unread}
              </span>
            )}
          </button>
          <Link href="/" className="p-2 rounded-xl bg-primary hover:bg-primary/90 transition-colors">
            <Plus className="h-5 w-5 text-white" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* ── Sidebar (desktop only) ── */}
          <aside className="hidden lg:flex lg:col-span-1 flex-col gap-4">
            {/* Profile card */}
            <Card className="luxury-card rounded-3xl overflow-hidden border-border">
              <div className="relative bg-gradient-to-br from-primary to-[hsl(215,55%,30%)] h-24">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-secondary rounded-full blur-2xl" />
                </div>
              </div>
              <div className="-mt-9 px-5 pb-4">
                <div className="h-18 w-18 bg-white rounded-2xl border-4 border-white shadow-luxury flex items-center justify-center mb-3 h-[72px] w-[72px]">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <p className="font-display text-lg font-bold">{USER.name}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{USER.email}</p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <Badge className="bg-secondary/20 text-primary border-secondary/30 font-bold text-[9px] px-2 py-0.5">
                    <Star className="h-2.5 w-2.5 fill-secondary text-secondary mr-0.5" />{USER.tier} Member
                  </Badge>
                </div>
                {/* Miles progress */}
                <div className="mt-3 space-y-1">
                  <div className="flex justify-between text-[10px] text-muted-foreground">
                    <span>{USER.miles.toLocaleString()} miles</span>
                    <span>Platinum at {USER.nextTierMiles.toLocaleString()}</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-secondary to-amber-400 rounded-full transition-all duration-1000"
                      style={{ width: `${milesProgress}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-muted-foreground">{USER.nextTierMiles - USER.miles} miles to Platinum</p>
                </div>
              </div>

              <Separator />

              {/* Sidebar nav */}
              <div className="px-3 py-3 space-y-0.5">
                {[
                  { icon: <Ticket className="h-4 w-4" />, label: "My Bookings", tab: "bookings" },
                  { icon: <Bell className="h-4 w-4" />, label: "Notifications", tab: "notifications", badge: unread },
                  { icon: <Globe className="h-4 w-4" />, label: "Preferences", tab: "settings" },
                  { icon: <Shield className="h-4 w-4" />, label: "Documents", tab: "documents" },
                  { icon: <CreditCard className="h-4 w-4" />, label: "Payment", tab: "payment" },
                  { icon: <Gift className="h-4 w-4" />, label: "Rewards", tab: "rewards" },
                  { icon: <User className="h-4 w-4" />, label: "Profile", tab: "profile" },
                  { icon: <Settings className="h-4 w-4" />, label: "Settings", tab: "settings" },
                ].map(({ icon, label, tab, badge }) => (
                  <button
                    key={label}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full flex items-center justify-between gap-3 h-10 rounded-xl px-3 text-sm font-medium transition-all ${
                      activeTab === tab
                        ? "bg-primary/8 text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <span className="flex items-center gap-3">{icon}{label}</span>
                    {badge ? <span className="h-5 min-w-5 px-1 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">{badge}</span> : null}
                  </button>
                ))}
                <div className="py-1.5"><Separator /></div>
                <button className="w-full flex items-center gap-3 h-10 rounded-xl px-3 text-sm font-medium text-destructive hover:bg-destructive/5">
                  <LogOut className="h-4 w-4" /> Log Out
                </button>
              </div>
            </Card>

            {/* Upgrade card */}
            <Card className="rounded-3xl overflow-hidden border-none shadow-gold bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy-deep))]">
              <CardContent className="p-5 space-y-3">
                <div className="h-9 w-9 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Star className="h-4 w-4 text-secondary" />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-base leading-snug">Upgrade to Premium</p>
                  <p className="text-white/50 text-xs mt-1 leading-relaxed">Zero cancel fees, lounge access, priority boarding.</p>
                </div>
                <Button className="w-full btn-gold rounded-xl font-bold text-sm h-9">Learn More</Button>
              </CardContent>
            </Card>
          </aside>

          {/* ── Main content ── */}
          <div className="lg:col-span-3 space-y-5">

            {/* Desktop page header */}
            <div className="hidden lg:flex justify-between items-center">
              <div>
                <h1 className="font-display text-2xl xl:text-3xl font-bold">Travel Dashboard</h1>
                <p className="text-muted-foreground text-sm mt-0.5">Welcome back, {USER.name.split(" ")[0]}. Here&apos;s your travel overview.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setNotifOpen(true)}
                  className="relative h-10 w-10 rounded-xl border border-border bg-white hover:bg-muted/40 flex items-center justify-center transition-colors shadow-sm"
                >
                  <Bell className="h-4.5 w-4.5 text-foreground" />
                  {unread > 0 && (
                    <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">{unread}</span>
                  )}
                </button>
                <Button asChild className="btn-gold rounded-xl px-5 h-10 font-bold gap-2 shadow-gold text-sm">
                  <Link href="/"><Plus className="h-4 w-4" /> Book Flight</Link>
                </Button>
              </div>
            </div>

            {/* ─ Inline Alerts ─ */}
            {visibleAlerts.filter(a => a.type !== "danger").map(alert => {
              const cfg = {
                warning: { bg: "bg-amber-50 border-amber-200", icon: <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0" />, btn: "text-amber-700 bg-amber-100 hover:bg-amber-200" },
                info:    { bg: "bg-blue-50 border-blue-200",   icon: <Info className="h-4 w-4 text-blue-500 shrink-0" />,           btn: "text-blue-700 bg-blue-100 hover:bg-blue-200" },
                danger:  { bg: "bg-red-50 border-red-200",     icon: <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />,     btn: "text-red-700 bg-red-100 hover:bg-red-200" },
              }[alert.type];
              return (
                <div key={alert.id} className={`flex items-start gap-3 p-3.5 rounded-2xl border ${cfg.bg}`}>
                  {cfg.icon}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-foreground">{alert.title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{alert.desc}</p>
                    {alert.actionLabel && (
                      <button className={`mt-2 text-xs font-bold px-3 py-1 rounded-full transition-colors ${cfg.btn}`}>
                        {alert.actionLabel}
                      </button>
                    )}
                  </div>
                  {alert.dismissible && (
                    <button onClick={() => setDismissedAlerts(d => [...d, alert.id])} className="text-muted-foreground/50 hover:text-muted-foreground shrink-0">
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              );
            })}

            {/* ─ Stats grid ─ */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
              {[
                { label: "Total Bookings", value: BOOKINGS.length.toString(),           icon: <Ticket className="h-4 w-4" />,     color: "text-primary bg-primary/10" },
                { label: "Miles Earned",   value: USER.miles.toLocaleString(),           icon: <Zap className="h-4 w-4" />,        color: "text-amber-600 bg-amber-50" },
                { label: "Countries",      value: "9",                                   icon: <MapPin className="h-4 w-4" />,     color: "text-green-600 bg-green-50" },
                { label: "Total Spent",    value: `$${totalSpent.toLocaleString()}`,     icon: <TrendingUp className="h-4 w-4" />, color: "text-secondary bg-secondary/10" },
              ].map(({ label, value, icon, color }) => (
                <Card key={label} className="luxury-card rounded-2xl border-border">
                  <CardContent className="p-4 space-y-2">
                    <div className={`h-8 w-8 rounded-xl flex items-center justify-center ${color}`}>{icon}</div>
                    <div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{label}</p>
                      <p className="font-display text-xl font-bold mt-0.5">{value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* ─ Next flight countdown card ─ */}
            {nextFlight && (
              <Card className="rounded-2xl bg-gradient-to-br from-primary to-[hsl(215,55%,28%)] text-white border-none shadow-navy-lg overflow-hidden">
                <CardContent className="p-4 md:p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Next Flight</span>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        <p className="font-display text-lg font-bold">{nextFlight.origin.split("(")[0].trim()} → {nextFlight.dest.split("(")[0].trim()}</p>
                        <StatusBadge status={nextFlight.status} />
                        {nextFlight.id === "B-88392" && (
                          <Badge className="bg-red-500 text-white border-none text-[9px] font-black">DELAYED</Badge>
                        )}
                      </div>
                      <p className="text-white/60 text-xs mt-0.5">{nextFlight.airline} · {nextFlight.flight} · {nextFlight.class} · Seat {nextFlight.seat}</p>
                    </div>
                    <CountdownPill date="2025-11-15T10:45:00" />
                  </div>
                  <div className="flex items-center gap-4 bg-white/10 rounded-xl px-4 py-3 mb-3">
                    <div className="text-center">
                      <p className="font-display text-2xl font-bold">ACC</p>
                      <p className="text-white/60 text-[10px]">10:45 AM</p>
                    </div>
                    <div className="flex-1 flex flex-col items-center">
                      <p className="text-white/50 text-[10px] mb-1">{nextFlight.duration}</p>
                      <div className="w-full flex items-center">
                        <div className="h-px flex-1 bg-white/30" />
                        <Plane className="h-3.5 w-3.5 text-secondary mx-1" />
                        <div className="h-px flex-1 bg-white/30" />
                      </div>
                      <p className="text-[10px] text-secondary font-bold mt-1">{nextFlight.stops}</p>
                    </div>
                    <div className="text-center">
                      <p className="font-display text-2xl font-bold">LHR</p>
                      <p className="text-white/60 text-[10px]">17:00 PM</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm" className="btn-gold rounded-xl font-bold h-8 px-4 text-xs gap-1.5">
                      <Ticket className="h-3 w-3" /> View Ticket
                    </Button>
                    <Button size="sm" variant="ghost" className="rounded-xl font-bold h-8 px-4 text-xs text-white/80 hover:text-white hover:bg-white/10 gap-1.5">
                      <RefreshCw className="h-3 w-3" /> Manage
                    </Button>
                    {nextFlight.canCancel && (
                      <Button size="sm" variant="ghost" className="rounded-xl font-bold h-8 px-4 text-xs text-red-300 hover:text-red-200 hover:bg-red-500/20">
                        Cancel
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* ─ Booking tabs ─ */}
            <Card className="luxury-card rounded-2xl border-border overflow-hidden">
              <Tabs defaultValue="upcoming">
                <div className="flex items-center justify-between px-4 md:px-6 pt-4 pb-0 border-b border-border">
                  <TabsList className="bg-muted/50 rounded-xl h-8 gap-1 p-1">
                    <TabsTrigger value="upcoming" className="rounded-lg text-xs font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary h-6 px-3">
                      Upcoming <span className="ml-1 bg-primary/10 text-primary text-[9px] font-bold rounded-full px-1.5">{upcoming.length}</span>
                    </TabsTrigger>
                    <TabsTrigger value="past" className="rounded-lg text-xs font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary h-6 px-3">
                      Past Trips
                    </TabsTrigger>
                  </TabsList>
                  <Button asChild size="sm" className="btn-gold rounded-xl h-7 px-3 text-xs font-bold gap-1 mb-1">
                    <Link href="/"><Plus className="h-3 w-3" />Book</Link>
                  </Button>
                </div>

                <TabsContent value="upcoming" className="focus-visible:ring-0 m-0">
                  <div className="divide-y divide-border">
                    {upcoming.length === 0 ? (
                      <div className="p-10 text-center">
                        <Plane className="h-10 w-10 text-muted-foreground/20 mx-auto mb-3" />
                        <p className="text-muted-foreground font-medium text-sm">No upcoming trips</p>
                        <Button asChild size="sm" className="mt-3 btn-gold rounded-full font-semibold">
                          <Link href="/">Book a Flight</Link>
                        </Button>
                      </div>
                    ) : upcoming.map(b => <BookingRow key={b.id} booking={b} />)}
                  </div>
                </TabsContent>

                <TabsContent value="past" className="focus-visible:ring-0 m-0">
                  <div className="divide-y divide-border">
                    {past.map(b => <BookingRow key={b.id} booking={b} />)}
                  </div>
                </TabsContent>
              </Tabs>
            </Card>

            {/* ─ Notifications panel (mobile) ─ */}
            <Card className="luxury-card rounded-2xl border-border overflow-hidden lg:hidden">
              <CardHeader className="py-3 px-4 border-b">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-display font-bold flex items-center gap-2">
                    <Bell className="h-4 w-4 text-primary" /> Notifications
                    {unread > 0 && <span className="h-5 w-5 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">{unread}</span>}
                  </CardTitle>
                  {unread > 0 && (
                    <button onClick={markAllRead} className="text-[10px] text-primary font-bold hover:underline">Mark all read</button>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {notifications.slice(0, 4).map(n => (
                  <NotifRow key={n.id} notif={n} onRead={markRead} />
                ))}
                <div className="p-3 border-t">
                  <button className="w-full text-xs text-primary font-semibold hover:underline">View all {notifications.length} notifications</button>
                </div>
              </CardContent>
            </Card>

            {/* ─ Promo / price alerts ─ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="luxury-card rounded-2xl border-border overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 bg-green-50 rounded-xl flex items-center justify-center">
                      <TrendingDown className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Price Drop Alert</p>
                      <p className="text-[10px] text-muted-foreground">ACC → NBO</p>
                    </div>
                    <Badge className="ml-auto bg-green-100 text-green-700 border-none text-[9px] font-black">-34%</Badge>
                  </div>
                  <p className="text-2xl font-display font-bold text-green-600">$183 <span className="text-sm font-normal text-muted-foreground line-through">$277</span></p>
                  <p className="text-xs text-muted-foreground mt-1">Round trip · 3 seats left</p>
                  <Button asChild size="sm" className="w-full mt-3 btn-gold rounded-xl h-8 text-xs font-bold">
                    <Link href="/flights">Book Now <ArrowUpRight className="h-3 w-3 ml-1" /></Link>
                  </Button>
                </CardContent>
              </Card>
              <Card className="luxury-card rounded-2xl border-border overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-8 w-8 bg-purple-50 rounded-xl flex items-center justify-center">
                      <Gift className="h-4 w-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Rewards Balance</p>
                      <p className="text-[10px] text-muted-foreground">{USER.tier} Tier</p>
                    </div>
                    <Badge className="ml-auto bg-secondary/20 text-primary border-none text-[9px] font-black">GOLD</Badge>
                  </div>
                  <p className="text-2xl font-display font-bold text-primary">{USER.miles.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">miles</span></p>
                  <p className="text-xs text-muted-foreground mt-1">≈ $226 in flight credits</p>
                  <Button asChild size="sm" variant="outline" className="w-full mt-3 rounded-xl h-8 text-xs font-bold border-primary text-primary hover:bg-primary/5">
                    <Link href="/loyalty">Redeem Miles</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>

      {/* ── Notification slide-in panel ── */}
      {notifOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setNotifOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b bg-primary text-white">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <p className="font-bold">Notifications</p>
                {unread > 0 && <span className="h-5 px-1.5 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">{unread} new</span>}
              </div>
              <div className="flex items-center gap-2">
                {unread > 0 && <button onClick={markAllRead} className="text-xs text-white/70 hover:text-white font-semibold">Mark all read</button>}
                <button onClick={() => setNotifOpen(false)} className="h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto divide-y divide-border">
              {notifications.map(n => (
                <NotifRow key={n.id} notif={n} onRead={markRead} />
              ))}
            </div>
            <div className="p-4 border-t">
              <button onClick={() => setNotifOpen(false)} className="w-full text-xs font-semibold text-primary hover:underline">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── BookingRow ─── */
function BookingRow({ booking }: { booking: typeof BOOKINGS[0] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-4 py-3.5 hover:bg-muted/20 transition-colors text-left group"
      >
        <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 ${
          booking.status === "Confirmed" ? "bg-green-50 text-green-600" :
          booking.status === "Cancelled" ? "bg-red-50 text-red-500" :
          "bg-muted text-muted-foreground"
        }`}>
          <Plane className="h-4 w-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm">{booking.route}</span>
            <StatusBadge status={booking.status} />
            {booking.id === "B-88392" && <Badge className="bg-red-500 text-white border-none text-[9px] font-black">DELAYED</Badge>}
          </div>
          <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground flex-wrap">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{booking.depart.split(" ").slice(0,3).join(" ")}</span>
            <span className="opacity-30">·</span>
            <span>{booking.airline}</span>
            <span className="opacity-30">·</span>
            <span className="text-primary font-semibold">${booking.price}</span>
            <span className="opacity-30">·</span>
            <span>{booking.class}</span>
          </div>
        </div>
        <ChevronDown className={`h-4 w-4 text-muted-foreground shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>

      {expanded && (
        <div className="px-4 pb-4 bg-muted/20 border-t border-border/50 space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-2 pt-3">
            {[
              { l: "Booking Ref", v: booking.ref },
              { l: "Flight",      v: booking.flight },
              { l: "Seat",        v: booking.seat },
              { l: "Gate",        v: booking.gate },
              { l: "Duration",    v: booking.duration },
              { l: "Stops",       v: booking.stops },
            ].map(({ l, v }) => (
              <div key={l}>
                <p className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{l}</p>
                <p className="font-semibold text-sm">{v}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            <Button size="sm" className="btn-gold rounded-xl h-7 px-3 text-[11px] font-bold gap-1">
              <Eye className="h-3 w-3" /> View Ticket
            </Button>
            {booking.status === "Confirmed" && booking.id === "B-88392" && (
              <Button size="sm" variant="outline" className="rounded-xl h-7 px-3 text-[11px] font-bold border-blue-200 text-blue-600 hover:bg-blue-50 gap-1">
                <Luggage className="h-3 w-3" /> Add Bags
              </Button>
            )}
            {booking.canCancel && (
              <Button size="sm" variant="outline" className="rounded-xl h-7 px-3 text-[11px] font-bold border-red-200 text-red-500 hover:bg-red-50">
                Cancel Booking
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── NotifRow ─── */
function NotifRow({ notif, onRead }: { notif: Notification; onRead: (id: string) => void }) {
  return (
    <div
      className={`flex gap-3 px-4 py-3.5 transition-colors cursor-pointer hover:bg-muted/20 ${notif.read ? "" : "bg-primary/3"}`}
      onClick={() => onRead(notif.id)}
    >
      <div className={`flex-shrink-0 mt-0.5 h-7 w-7 rounded-full flex items-center justify-center border ${notifColors[notif.type]}`}>
        {notifIcons[notif.type]}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <p className={`text-sm font-semibold leading-snug ${notif.read ? "text-foreground/80" : "text-foreground"}`}>{notif.title}</p>
          {!notif.read && <span className="h-2 w-2 bg-red-500 rounded-full shrink-0 mt-1" />}
        </div>
        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed line-clamp-2">{notif.message}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[10px] text-muted-foreground/60">{notif.time}</span>
          {notif.actionLabel && notif.actionHref && (
            <Link
              href={notif.actionHref}
              className="text-[10px] font-bold text-primary hover:underline"
              onClick={e => e.stopPropagation()}
            >
              {notif.actionLabel} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
