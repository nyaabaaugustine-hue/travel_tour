"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Plane, Calendar, MapPin, User, Settings, LogOut,
  Ticket, ChevronRight, Bell, TrendingUp, Globe,
  Shield, Star, Plus, Clock
} from "lucide-react";
import Link from "next/link";

const MOCK_BOOKINGS = [
  {
    id: "B-88392",
    route: "ACC → LHR",
    origin: "Accra",
    dest: "London",
    date: "Nov 15, 2024",
    returnDate: "Nov 22, 2024",
    status: "Confirmed",
    airline: "Oceanic Air",
    type: "Upcoming",
    price: 345,
    class: "Economy",
  },
  {
    id: "B-77210",
    route: "NRT → SFO",
    origin: "Tokyo",
    dest: "San Francisco",
    date: "Sep 12, 2024",
    returnDate: "Sep 19, 2024",
    status: "Completed",
    airline: "Global Jet",
    type: "Past",
    price: 890,
    class: "Premium Economy",
  },
  {
    id: "B-55431",
    route: "LHR → CDG",
    origin: "London",
    dest: "Paris",
    date: "May 20, 2024",
    returnDate: "May 25, 2024",
    status: "Completed",
    airline: "Air Nomad",
    type: "Past",
    price: 210,
    class: "Economy",
  },
];

const NAV_ITEMS = [
  { icon: <Ticket className="h-4 w-4" />, label: "My Bookings", active: true },
  { icon: <Bell className="h-4 w-4" />, label: "Notifications" },
  { icon: <Globe className="h-4 w-4" />, label: "Travel Preferences" },
  { icon: <Shield className="h-4 w-4" />, label: "Documents" },
  { icon: <User className="h-4 w-4" />, label: "Profile" },
  { icon: <Settings className="h-4 w-4" />, label: "Settings" },
];

export default function DashboardPage() {
  const totalSpend = MOCK_BOOKINGS.reduce((a, b) => a + b.price, 0);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* ─ Sidebar ─ */}
          <aside className="lg:col-span-1 space-y-5">
            {/* Profile card */}
            <Card className="luxury-card rounded-3xl overflow-hidden border-border">
              {/* Profile header */}
              <div className="relative bg-primary h-28">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary rounded-full blur-2xl" />
                </div>
              </div>
              <div className="-mt-10 px-5 pb-5">
                <div className="h-20 w-20 bg-white rounded-2xl border-4 border-white shadow-luxury flex items-center justify-center mb-3">
                  <User className="h-9 w-9 text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold">Kwame Mensah</h2>
                <p className="text-muted-foreground text-xs mt-0.5">kwame@example.com</p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge className="bg-secondary/20 text-primary border-secondary/30 font-bold text-[10px] px-3 py-0.5">
                    <Star className="h-3 w-3 fill-secondary text-secondary mr-1" />
                    Gold Member
                  </Badge>
                </div>
              </div>

              <Separator />

              {/* Nav items */}
              <div className="px-3 py-3 space-y-0.5">
                {NAV_ITEMS.map(({ icon, label, active }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    className={`w-full justify-start gap-3 h-10 rounded-xl text-sm font-medium ${
                      active
                        ? "bg-primary/8 text-primary font-semibold"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {icon} {label}
                  </Button>
                ))}
                <div className="py-1.5">
                  <Separator />
                </div>
                <Button variant="ghost" className="w-full justify-start gap-3 h-10 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5">
                  <LogOut className="h-4 w-4" /> Log Out
                </Button>
              </div>
            </Card>

            {/* Upgrade card */}
            <Card className="rounded-3xl overflow-hidden border-none shadow-gold bg-gradient-to-br from-[hsl(var(--navy))] to-[hsl(var(--navy-deep))]">
              <CardContent className="p-6 space-y-4">
                <div className="h-10 w-10 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <Star className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg leading-snug">Upgrade to Premium</h3>
                  <p className="text-white/50 text-xs mt-1.5 leading-relaxed">
                    Zero cancel fees, seat upgrades, and priority lounge access on every flight.
                  </p>
                </div>
                <Button className="w-full btn-gold rounded-xl font-bold text-sm h-10">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* ─ Main ─ */}
          <div className="lg:col-span-3 space-y-7">
            {/* Page header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="font-display text-3xl font-bold">Travel Dashboard</h1>
                <p className="text-muted-foreground text-sm mt-0.5">
                  Welcome back, Kwame. Here&apos;s your travel overview.
                </p>
              </div>
              <Button asChild className="btn-gold rounded-full px-6 h-11 font-bold gap-2 shadow-gold">
                <Link href="/">
                  <Plus className="h-4 w-4" /> Book New Flight
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Total Bookings", value: "12", icon: <Ticket className="h-5 w-5" />, color: "text-primary bg-primary/10" },
                { label: "Miles Accrued",  value: "45,200", icon: <Plane className="h-5 w-5" />, color: "text-blue-600 bg-blue-50" },
                { label: "Countries",      value: "8", icon: <MapPin className="h-5 w-5" />, color: "text-green-600 bg-green-50" },
                { label: "Total Spent",    value: `$${totalSpend.toLocaleString()}`, icon: <TrendingUp className="h-5 w-5" />, color: "text-secondary bg-secondary/10" },
              ].map(({ label, value, icon, color }) => (
                <Card key={label} className="luxury-card rounded-2xl border-border">
                  <CardContent className="p-5 space-y-3">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${color}`}>
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</p>
                      <p className="font-display text-2xl font-bold mt-0.5">{value}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Next flight banner */}
            {MOCK_BOOKINGS.filter(b => b.type === "Upcoming").map(booking => (
              <Card key={booking.id} className="rounded-2xl bg-primary text-white border-none overflow-hidden shadow-navy-lg">
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <Plane className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Next Flight</span>
                          <Badge className="bg-green-500 text-white border-none text-[9px] font-bold">Confirmed</Badge>
                        </div>
                        <p className="font-display text-lg font-bold">{booking.origin} → {booking.dest}</p>
                        <p className="text-white/60 text-xs mt-0.5">{booking.airline} · {booking.date} · {booking.class}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 text-white/60 text-xs">
                        <Calendar className="h-3.5 w-3.5" /> {booking.returnDate}
                      </div>
                      <Button size="sm" className="btn-gold rounded-xl font-bold h-9 px-4 text-xs">
                        View Ticket
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Bookings table */}
            <Card className="luxury-card rounded-2xl border-border overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between bg-muted/20 border-b border-border py-4 px-6">
                <div>
                  <CardTitle className="text-base font-display font-bold">Flight History</CardTitle>
                  <CardDescription className="text-xs mt-0.5">Your complete booking record</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="upcoming">
                  <div className="px-6 pt-4 border-b border-border">
                    <TabsList className="bg-muted/50 rounded-xl h-9 gap-1 p-1">
                      <TabsTrigger value="upcoming" className="rounded-lg text-xs font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary">
                        Upcoming
                      </TabsTrigger>
                      <TabsTrigger value="past" className="rounded-lg text-xs font-semibold data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-primary">
                        Past Trips
                      </TabsTrigger>
                    </TabsList>
                  </div>

                  <TabsContent value="upcoming" className="focus-visible:ring-0">
                    <div className="divide-y divide-border">
                      {MOCK_BOOKINGS.filter(b => b.type === "Upcoming").length === 0 ? (
                        <div className="p-10 text-center">
                          <Plane className="h-10 w-10 text-muted-foreground/20 mx-auto mb-3" />
                          <p className="text-muted-foreground font-medium text-sm">No upcoming trips</p>
                          <Button asChild size="sm" className="mt-3 btn-gold rounded-full font-semibold">
                            <Link href="/">Book a Flight</Link>
                          </Button>
                        </div>
                      ) : (
                        MOCK_BOOKINGS.filter(b => b.type === "Upcoming").map(b => <BookingRow key={b.id} booking={b} />)
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="past" className="focus-visible:ring-0">
                    <div className="divide-y divide-border">
                      {MOCK_BOOKINGS.filter(b => b.type === "Past").map(b => <BookingRow key={b.id} booking={b} />)}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

function BookingRow({ booking }: { booking: typeof MOCK_BOOKINGS[0] }) {
  return (
    <div className="flex items-center justify-between px-6 py-4 hover:bg-muted/20 transition-colors group">
      <div className="flex items-center gap-4">
        <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${
          booking.type === "Upcoming"
            ? "bg-green-50 text-green-600"
            : "bg-muted text-muted-foreground"
        }`}>
          <Plane className="h-4 w-4" />
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm">{booking.route}</span>
            <Badge variant="outline" className={`text-[9px] font-bold rounded-full ${
              booking.status === "Confirmed"
                ? "border-green-200 text-green-700 bg-green-50"
                : "border-muted text-muted-foreground"
            }`}>
              {booking.status}
            </Badge>
          </div>
          <div className="flex items-center gap-3 mt-0.5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" />{booking.date}</span>
            <span className="opacity-30">·</span>
            <span>{booking.airline}</span>
            <span className="opacity-30">·</span>
            <span className="text-primary font-semibold">${booking.price}</span>
          </div>
        </div>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </div>
  );
}
