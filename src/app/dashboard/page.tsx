
"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plane, Calendar, MapPin, User, Settings, LogOut, Ticket, ChevronRight, Bell } from "lucide-react";
import Link from "next/link";

const MOCK_BOOKINGS = [
  {
    id: "B-88392",
    route: "NYC → LON",
    date: "Nov 15, 2024",
    status: "Confirmed",
    airline: "Oceanic Air",
    type: "Upcoming"
  },
  {
    id: "B-77210",
    route: "TYO → SFO",
    date: "Sep 12, 2024",
    status: "Completed",
    airline: "Global Jet",
    type: "Past"
  },
  {
    id: "B-55431",
    route: "LON → CDG",
    date: "May 20, 2024",
    status: "Completed",
    airline: "Air Nomad",
    type: "Past"
  }
];

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-sm overflow-hidden">
              <div className="bg-primary p-8 text-center text-white">
                <div className="h-24 w-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white/30">
                  <User className="h-12 w-12" />
                </div>
                <h2 className="text-xl font-bold">John Doe</h2>
                <p className="text-white/60 text-sm">Member since 2023</p>
                <div className="mt-4 flex justify-center gap-2">
                  <Badge className="bg-white/20 text-white border-none hover:bg-white/30">Gold Member</Badge>
                </div>
              </div>
              <CardContent className="p-4 pt-6 space-y-1">
                <Button variant="ghost" className="w-full justify-start gap-3 font-bold text-primary bg-primary/5">
                  <Ticket className="h-4 w-4" /> My Bookings
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-primary hover:bg-primary/5">
                  <Bell className="h-4 w-4" /> Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-primary hover:bg-primary/5">
                  <User className="h-4 w-4" /> Profile Details
                </Button>
                <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-primary hover:bg-primary/5">
                  <Settings className="h-4 w-4" /> Account Settings
                </Button>
                <div className="py-2"><hr /></div>
                <Button variant="ghost" className="w-full justify-start gap-3 text-destructive hover:bg-destructive/5">
                  <LogOut className="h-4 w-4" /> Log Out
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-secondary p-6 text-white border-none shadow-xl">
               <div className="space-y-4">
                  <h3 className="font-black text-xl leading-tight">Sync Pro Member</h3>
                  <p className="text-sm text-white/70">Enjoy zero cancellation fees and complimentary seat upgrades on all Oceanic Air flights.</p>
                  <Button className="w-full bg-white text-secondary hover:bg-white/90 font-bold">Learn More</Button>
               </div>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl font-black tracking-tight">Travel Dashboard</h1>
                <p className="text-muted-foreground">Manage your synchronized journeys and bookings.</p>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 font-bold">
                <Link href="/">Book New Flight</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard label="Total Bookings" value="12" icon={<Ticket className="h-5 w-5" />} />
              <StatCard label="Miles Accrued" value="45,200" icon={<Plane className="h-5 w-5" />} />
              <StatCard label="Countries Visited" value="8" icon={<MapPin className="h-5 w-5" />} />
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between border-b bg-muted/30">
                <div className="space-y-1">
                  <CardTitle className="text-lg">Your Flights</CardTitle>
                  <CardDescription>View your upcoming and past travel history.</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs defaultValue="upcoming" className="w-full">
                  <div className="px-6 pt-4">
                    <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
                      <TabsTrigger value="upcoming" className="font-bold">Upcoming</TabsTrigger>
                      <TabsTrigger value="past" className="font-bold">Past Trips</TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value="upcoming" className="p-6 focus-visible:ring-0">
                    <div className="space-y-4">
                      {MOCK_BOOKINGS.filter(b => b.type === 'Upcoming').map(booking => (
                        <BookingItem key={booking.id} booking={booking} />
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="past" className="p-6 focus-visible:ring-0">
                    <div className="space-y-4">
                      {MOCK_BOOKINGS.filter(b => b.type === 'Past').map(booking => (
                        <BookingItem key={booking.id} booking={booking} />
                      ))}
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

function StatCard({ label, value, icon }: { label: string, value: string, icon: React.ReactNode }) {
  return (
    <Card className="border-none shadow-sm bg-white">
      <CardContent className="p-6 flex items-center gap-4">
        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{label}</p>
          <p className="text-2xl font-black">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function BookingItem({ booking }: { booking: any }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border hover:border-primary/30 transition-all group">
      <div className="flex items-center gap-4">
        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${booking.type === 'Upcoming' ? 'bg-green-100 text-green-600' : 'bg-muted text-muted-foreground'}`}>
          <Plane className="h-5 w-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold">{booking.route}</h4>
            <Badge variant="outline" className={`text-[10px] ${booking.type === 'Upcoming' ? 'text-green-600 border-green-200' : ''}`}>
              {booking.status}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground">{booking.airline} • {booking.date} • ID: {booking.id}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" className="group-hover:translate-x-1 transition-transform">
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
