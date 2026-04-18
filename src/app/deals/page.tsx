
"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Timer, Zap, Flame, Percent, PlaneTakeoff, ArrowRight } from "lucide-react";
import Link from "next/link";

const MOCK_DEALS = [
  {
    id: "d1",
    title: "Weekend in London",
    description: "Round trip economy with Oceanic Air. Non-stop from JFK.",
    price: 349,
    originalPrice: 620,
    expiresIn: "14h 22m",
    tag: "Flash Deal",
    color: "bg-red-500"
  },
  {
    id: "d2",
    title: "Tokyo Spring Getaway",
    description: "Premium economy flight + 3 nights hotel package included.",
    price: 1299,
    originalPrice: 1850,
    expiresIn: "02d 08h",
    tag: "Best Value",
    color: "bg-blue-500"
  },
  {
    id: "d3",
    title: "Paris Last Minute",
    description: "Direct flight with Air France. Exclusive lounge access.",
    price: 410,
    originalPrice: 780,
    expiresIn: "05h 45m",
    tag: "Last Minute",
    color: "bg-orange-500"
  },
  {
    id: "d4",
    title: "Sydney Business Class",
    description: "Ultimate luxury for long-haul travel. All-flat beds.",
    price: 2450,
    originalPrice: 3800,
    expiresIn: "03d 12h",
    tag: "Premium",
    color: "bg-purple-500"
  }
];

export default function DealsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Flame className="h-64 w-64 text-orange-500" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl space-y-6">
              <Badge className="bg-orange-500 text-white border-none px-4 py-1">
                <Zap className="h-3 w-3 mr-2 fill-current" /> Limited Time Offers
              </Badge>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter">Synchronized Deals</h1>
              <p className="text-slate-300 text-xl font-medium">
                We've synchronized the best prices from across the web. These offers are valid for a limited time only.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto py-16 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MOCK_DEALS.map((deal) => (
              <Card key={deal.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all">
                <div className="flex flex-col sm:flex-row">
                  <div className={`sm:w-1/3 p-8 flex flex-col items-center justify-center text-white ${deal.color}`}>
                    <Percent className="h-8 w-8 mb-4 opacity-50" />
                    <span className="text-4xl font-black">-{Math.round((1 - deal.price / deal.originalPrice) * 100)}%</span>
                    <span className="text-xs uppercase font-bold tracking-widest opacity-80 mt-2">Discount</span>
                  </div>
                  <div className="sm:w-2/3 p-8 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <Badge variant="outline" className="text-[10px] font-black uppercase tracking-tighter">
                          {deal.tag}
                        </Badge>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                          <Timer className="h-3 w-3 text-orange-500" />
                          {deal.expiresIn}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold">{deal.title}</h3>
                      <p className="text-sm text-muted-foreground">{deal.description}</p>
                    </div>
                    
                    <div className="flex items-end justify-between pt-4">
                      <div>
                        <p className="text-xs text-muted-foreground line-through">${deal.originalPrice}</p>
                        <p className="text-3xl font-black text-primary">${deal.price}</p>
                      </div>
                      <Button asChild className="font-bold gap-2">
                        <Link href="/flights">
                          Book Now <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-16 bg-primary/5 border-dashed border-2">
            <CardContent className="p-12 text-center space-y-4">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <PlaneTakeoff className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Don't see what you're looking for?</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Our AI-driven synchronization engine searches 500+ airlines in real-time. Try a custom search for the most up-to-date pricing.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-4 border-primary text-primary hover:bg-primary/10 font-bold">
                <Link href="/">Back to Search</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
