
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Plane, Clock, ArrowRight, Filter, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

// Mock data generator for results
const MOCK_FLIGHTS = [
  {
    id: "fl_1",
    airline: "Oceanic Air",
    logo: "https://picsum.photos/seed/airline1/40/40",
    departure: "08:30 AM",
    arrival: "11:45 AM",
    duration: "3h 15m",
    price: 345,
    stops: "Non-stop",
    type: "Economy",
  },
  {
    id: "fl_2",
    airline: "Global Jet",
    logo: "https://picsum.photos/seed/airline2/40/40",
    departure: "01:20 PM",
    arrival: "06:10 PM",
    duration: "4h 50m",
    price: 289,
    stops: "1 stop",
    type: "Economy",
  },
  {
    id: "fl_3",
    airline: "Sky High",
    logo: "https://picsum.photos/seed/airline3/40/40",
    departure: "06:00 PM",
    arrival: "09:30 PM",
    duration: "3h 30m",
    price: 412,
    stops: "Non-stop",
    type: "Business",
  },
  {
    id: "fl_4",
    airline: "Air Nomad",
    logo: "https://picsum.photos/seed/airline4/40/40",
    departure: "11:15 PM",
    arrival: "05:00 AM",
    duration: "5h 45m",
    price: 195,
    stops: "Non-stop",
    type: "Economy",
  }
];

export default function FlightsPage({ searchParams }: { searchParams: any }) {
  const { origin = "NYC", destination = "LON" } = searchParams;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-primary/10 rounded-lg">
                <Plane className="h-5 w-5 text-primary" />
             </div>
             <div>
                <h1 className="text-lg font-bold flex items-center gap-2">
                  {origin.toUpperCase()} <ArrowRight className="h-4 w-4 text-muted-foreground" /> {destination.toUpperCase()}
                </h1>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-tight">Round Trip • 1 Passenger • Economy</p>
             </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" /> Edit Search
          </Button>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className="hidden lg:block space-y-6">
           <div className="bg-white p-6 rounded-xl border space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold flex items-center gap-2"><Filter className="h-4 w-4" /> Filters</h3>
                <Button variant="link" size="sm" className="h-auto p-0 text-xs">Clear all</Button>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-sm font-bold">Stops</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" className="rounded border-muted h-4 w-4" defaultChecked /> Non-stop
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" className="rounded border-muted h-4 w-4" /> 1 Stop
                  </label>
                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" className="rounded border-muted h-4 w-4" /> 2+ Stops
                  </label>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-bold">Price Range</h4>
                <div className="px-2">
                  <div className="h-1 w-full bg-muted rounded-full relative">
                    <div className="absolute h-full bg-primary w-2/3 left-0 rounded-full" />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>$100</span>
                    <span>$800</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h4 className="text-sm font-bold">Airlines</h4>
                <div className="space-y-2">
                  {MOCK_FLIGHTS.map(f => (
                    <label key={f.airline} className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="rounded border-muted h-4 w-4" defaultChecked /> {f.airline}
                    </label>
                  ))}
                </div>
              </div>
           </div>
        </aside>

        {/* Flight Cards */}
        <div className="lg:col-span-3 space-y-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-muted-foreground">Showing <strong>{MOCK_FLIGHTS.length}</strong> flight offers</p>
            <Select defaultValue="cheapest">
               <SelectTrigger className="w-[180px] h-9 bg-white">
                 <SelectValue placeholder="Sort by" />
               </SelectTrigger>
               <SelectContent>
                 <SelectItem value="cheapest">Cheapest first</SelectItem>
                 <SelectItem value="fastest">Fastest first</SelectItem>
                 <SelectItem value="early">Earliest departure</SelectItem>
               </SelectContent>
            </Select>
          </div>

          {MOCK_FLIGHTS.map((flight) => (
            <Card key={flight.id} className="overflow-hidden hover:shadow-md transition-all border-l-4 border-l-primary">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4 items-center">
                  <div className="p-6 flex flex-col items-center md:items-start gap-4">
                    <img src={flight.logo} alt={flight.airline} className="rounded-md w-10 h-10 object-cover shadow-sm" />
                    <span className="font-bold text-sm">{flight.airline}</span>
                  </div>
                  
                  <div className="p-6 md:col-span-2 flex justify-between items-center gap-4">
                    <div className="text-center md:text-left">
                      <p className="text-2xl font-bold">{flight.departure}</p>
                      <p className="text-sm text-muted-foreground font-medium uppercase">{origin}</p>
                    </div>
                    
                    <div className="flex flex-col items-center flex-1 max-w-[120px]">
                      <span className="text-xs text-muted-foreground mb-1">{flight.duration}</span>
                      <div className="w-full flex items-center gap-2">
                        <div className="h-[2px] bg-muted-foreground/30 flex-1 relative">
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <Plane className="h-4 w-4 text-primary rotate-90" />
                      </div>
                      <span className="text-xs font-bold text-primary mt-1">{flight.stops}</span>
                    </div>

                    <div className="text-center md:text-right">
                      <p className="text-2xl font-bold">{flight.arrival}</p>
                      <p className="text-sm text-muted-foreground font-medium uppercase">{destination}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-muted/20 border-l flex flex-col justify-center items-center md:items-end gap-3">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Total Price</p>
                      <p className="text-3xl font-extrabold text-primary">${flight.price}</p>
                    </div>
                    <Button asChild className="w-full md:w-auto font-bold bg-primary hover:bg-primary/90">
                      <Link href={`/checkout?flightId=${flight.id}&price=${flight.price}`}>Select Flight</Link>
                    </Button>
                    <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest">{flight.type}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="bg-primary/5 border-dashed border-2">
            <CardContent className="p-6 text-center space-y-2">
              <Clock className="h-8 w-8 text-primary mx-auto" />
              <p className="font-bold">Need more options?</p>
              <p className="text-sm text-muted-foreground">We search across 500+ airlines to find you the best synchronicity for your travel.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

// Simple Helper for Shadcn Select within this file since it's a demo
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
