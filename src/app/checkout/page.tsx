"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck, CreditCard, Lock, Plane, Info, ArrowRight,
  User, Phone, Mail, Hash, Clock, CheckCircle
} from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);

  const flightId = searchParams.get("flightId") || "fl_1";
  const price = searchParams.get("price") || "345";

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) { setStep(2); return; }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/confirmation/${Math.random().toString(36).substring(7).toUpperCase()}`);
    }, 2200);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Progress bar */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center gap-3 max-w-md">
            {[
              { n: 1, label: "Passenger Details" },
              { n: 2, label: "Payment" },
              { n: 3, label: "Confirmation" },
            ].map(({ n, label }, i) => (
              <div key={n} className="flex items-center gap-2 flex-1">
                <div className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                  n < step ? "bg-green-500 text-white" :
                  n === step ? "bg-primary text-white" :
                  "bg-muted text-muted-foreground"
                }`}>
                  {n < step ? <CheckCircle className="h-4 w-4" /> : n}
                </div>
                <span className={`text-xs font-medium hidden sm:block ${n === step ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                  {label}
                </span>
                {i < 2 && <div className={`h-px flex-1 ${n < step ? "bg-green-400" : "bg-border"}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 lg:px-8 py-10 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ─ Left: form ─ */}
          <div className="flex-1 space-y-7">
            <div>
              <h1 className="font-display text-3xl font-bold flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-primary" />
                {step === 1 ? "Passenger Details" : "Secure Payment"}
              </h1>
              <p className="text-muted-foreground mt-1 text-sm">
                {step === 1
                  ? "Enter details exactly as they appear on the passport."
                  : "Your payment is processed with bank-grade AES-256 encryption."}
              </p>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              {step === 1 && (
                <Card className="luxury-card rounded-2xl border-border">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" /> Primary Traveler
                    </CardTitle>
                    <CardDescription>Details must match your travel document exactly</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field id="firstName" label="First Name" placeholder="John" icon={<User className="h-4 w-4" />} />
                      <Field id="lastName" label="Last Name" placeholder="Mensah" icon={<User className="h-4 w-4" />} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Field id="email" label="Email Address" placeholder="john@example.com" type="email" icon={<Mail className="h-4 w-4" />} />
                      <Field id="phone" label="Phone Number" placeholder="+233 50 000 0000" type="tel" icon={<Phone className="h-4 w-4" />} />
                    </div>
                    <Field id="passport" label="Passport Number" placeholder="A12345678" icon={<Hash className="h-4 w-4" />} />
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Button type="submit" className="w-full h-12 btn-gold font-bold text-base rounded-xl gap-2">
                      Continue to Payment <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}

              {step === 2 && (
                <Card className="luxury-card rounded-2xl border-border">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-base flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-primary" /> Card Details
                    </CardTitle>
                    <CardDescription>Visa, Mastercard, AMEX · Mobile Money accepted</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    {/* Security notice */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                      <Lock className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-green-800">256-bit SSL Encrypted</p>
                        <p className="text-xs text-green-700 mt-0.5">Your card details are never stored and fully secured by Stripe.</p>
                      </div>
                    </div>

                    {/* Card number */}
                    <div className="space-y-1.5">
                      <Label htmlFor="card" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Card Number</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="card" placeholder="0000  0000  0000  0000" className="pl-10 h-12 rounded-xl border-border" required />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                          {["VISA", "MC"].map(b => (
                            <span key={b} className="text-[9px] font-black bg-muted px-1.5 py-0.5 rounded text-muted-foreground">{b}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <Label htmlFor="expiry" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Expiry</Label>
                        <Input id="expiry" placeholder="MM / YY" className="h-12 rounded-xl border-border" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="cvv" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">CVV</Label>
                        <div className="relative">
                          <Input id="cvv" placeholder="•••" className="h-12 rounded-xl border-border" required />
                          <Lock className="absolute right-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground/40" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="cardName" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cardholder Name</Label>
                      <Input id="cardName" placeholder="John Mensah" className="h-12 rounded-xl border-border" required />
                    </div>
                  </CardContent>
                  <CardFooter className="flex-col gap-3 pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-13 btn-gold font-bold text-base rounded-xl gap-2 h-[52px]"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Processing Payment…
                        </span>
                      ) : (
                        <>
                          <Lock className="h-4 w-4" />
                          Pay ${price} & Confirm Booking
                        </>
                      )}
                    </Button>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      ← Back to passenger details
                    </button>
                  </CardFooter>
                </Card>
              )}
            </form>
          </div>

          {/* ─ Right: summary ─ */}
          <aside className="w-full lg:w-[340px] xl:w-[380px]">
            <div className="sticky top-24 space-y-4">
              <Card className="luxury-card rounded-2xl border-border overflow-hidden">
                <div className="bg-primary p-5 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Plane className="h-4 w-4 text-secondary" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/60">Trip Summary</span>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div>
                      <p className="font-display text-2xl font-bold">NYC</p>
                      <p className="text-white/60 text-xs">New York (JFK)</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-secondary mx-3" />
                    <div className="text-right">
                      <p className="font-display text-2xl font-bold">LON</p>
                      <p className="text-white/60 text-xs">London (LHR)</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-5 space-y-5">
                  <div className="space-y-2.5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Airline</span>
                      <span className="font-semibold">Oceanic Air</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date</span>
                      <span className="font-semibold">Nov 15, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Departs</span>
                      <span className="font-semibold">08:30 AM → 11:45 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Class</span>
                      <Badge variant="outline" className="font-semibold text-[10px]">Economy</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Passengers</span>
                      <span className="font-semibold">1 Adult</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Base fare</span>
                      <span>${price}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Taxes & fees</span>
                      <span>Included</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center pt-1">
                      <span className="font-bold">Total</span>
                      <span className="font-display text-2xl font-bold text-primary">${price}</span>
                    </div>
                  </div>

                  {/* Countdown */}
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                    <Clock className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-amber-800">
                      Price held for <strong>09:42</strong> more minutes. Complete your booking to lock this rate.
                    </p>
                  </div>

                  {/* Trust badges */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {[
                      { icon: <Lock className="h-3.5 w-3.5" />, label: "SSL Secure" },
                      { icon: <ShieldCheck className="h-3.5 w-3.5" />, label: "PCI DSS" },
                      { icon: <CheckCircle className="h-3.5 w-3.5" />, label: "Verified" },
                    ].map(({ icon, label }) => (
                      <div key={label} className="flex flex-col items-center gap-1 bg-muted/40 rounded-xl py-2">
                        <span className="text-primary">{icon}</span>
                        <span className="text-[9px] font-bold text-muted-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center justify-center gap-2 text-muted-foreground/50 text-[11px]">
                <Info className="h-3 w-3" />
                <span className="text-secondary font-semibold">Need help? Call +233 30 260 0000</span>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function Field({
  id, label, placeholder, type = "text", icon
}: {
  id: string; label: string; placeholder: string; type?: string; icon?: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50">{icon}</span>
        )}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`h-12 rounded-xl border-border ${icon ? "pl-10" : ""}`}
          required
        />
      </div>
    </div>
  );
}
