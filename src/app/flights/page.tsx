"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, CreditCard, CheckCircle, AlertCircle, Loader2, Search } from "lucide-react";

function FlightsContent() {
  const sp = useSearchParams();
  const abandoned = sp.get("abandoned");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dep, setDep] = useState("");
  const [ret, setRet] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const openDuffel = async () => {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const r = await fetch("/api/duffel/create-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reference: `milehigh_${Date.now()}` }),
      });
      const d = await r.json();
      if (!r.ok || !d.url) {
        setError(d.error || "Failed to open booking. Please try again.");
        setLoading(false);
        return;
      }
      window.location.href = d.url;
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-20">

        {/* Hero */}
        <section className="relative bg-primary text-white py-16 overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide7_n8uvln.jpg"
            alt="Flights hero"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Search Flights</h1>
            <p className="text-xl text-white/80">Find the best deals across 500+ airlines</p>
          </div>
        </section>

        {/* Search card */}
        <section className="py-12 -mt-8 relative z-20">
          <div className="container mx-auto px-4">

            {abandoned && (
              <div className="mb-6 flex items-center gap-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl p-4 max-w-2xl mx-auto text-sm font-medium">
                <AlertCircle className="h-5 w-5 shrink-0" />
                Session was cancelled. Click anywhere below to start a new booking.
              </div>
            )}

            {/* Relative wrapper for the overlay */}
            <div className="relative">

              {/* Invisible click-anywhere overlay */}
              <div
                onClick={openDuffel}
                className="absolute inset-0 z-10 cursor-pointer rounded-[5%]"
                aria-label="Open flight booking"
              />

              {/* Loading overlay */}
              {loading && (
                <div className="absolute inset-0 z-20 flex items-center justify-center rounded-[5%] bg-black/20 backdrop-blur-sm">
                  <div className="flex items-center gap-3 bg-white border border-border rounded-2xl px-5 py-3 shadow-lg text-primary font-semibold text-sm">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Opening secure booking…
                  </div>
                </div>
              )}

              <Card className="luxury-card rounded-[5%] shadow-2xl">
                <CardContent className="p-6">

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">From</label>
                      <Input
                        placeholder="ACC (Accra)"
                        className="h-12 rounded-[5%]"
                        value={from}
                        onChange={e => setFrom(e.target.value)}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">To</label>
                      <Input
                        placeholder="LHR (London)"
                        className="h-12 rounded-[5%]"
                        value={to}
                        onChange={e => setTo(e.target.value)}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Departure</label>
                      <Input
                        type="date"
                        className="h-12 rounded-[5%]"
                        value={dep}
                        onChange={e => setDep(e.target.value)}
                        readOnly
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Return (Optional)</label>
                      <Input
                        type="date"
                        className="h-12 rounded-[5%]"
                        value={ret}
                        onChange={e => setRet(e.target.value)}
                        readOnly
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="mb-4 flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl p-3 text-sm">
                      <AlertCircle className="h-4 w-4 shrink-0" />{error}
                    </div>
                  )}

                  <Button
                    onClick={openDuffel}
                    disabled={loading}
                    className="w-full h-12 rounded-[5%] font-semibold text-base relative z-30"
                  >
                    {loading
                      ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Opening Booking…</>
                      : <><Search className="mr-2 h-4 w-4" />Search &amp; Book Flights</>
                    }
                  </Button>

                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Secure booking powered by Duffel · Real-time airline pricing
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust cards */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Plane className="h-6 w-6 text-primary" />, t: "500+ Airlines", d: "Access to major global carriers" },
                { icon: <CreditCard className="h-6 w-6 text-primary" />, t: "Best Prices", d: "We match any lower price" },
                { icon: <CheckCircle className="h-6 w-6 text-primary" />, t: "Instant Booking", d: "Confirmed in seconds" },
              ].map(({ icon, t, d }) => (
                <Card key={t} className="luxury-card rounded-[5%]">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 bg-primary/10 rounded-[5%] flex items-center justify-center mx-auto mb-4">{icon}</div>
                    <h3 className="font-bold mb-2">{t}</h3>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default function FlightsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <FlightsContent />
    </Suspense>
  );
}
