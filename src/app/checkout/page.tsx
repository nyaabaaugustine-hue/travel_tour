
"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, CreditCard, Lock, Plane, Info } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const flightId = searchParams.get('flightId') || 'fl_1';
  const price = searchParams.get('price') || '345';

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate payment and booking creation
    setTimeout(() => {
      setLoading(false);
      router.push(`/confirmation/${Math.random().toString(36).substring(7).toUpperCase()}`);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Checkout Form */}
          <div className="flex-1 space-y-8">
            <section className="space-y-4">
              <h1 className="text-3xl font-extrabold flex items-center gap-3">
                <ShieldCheck className="h-8 w-8 text-primary" /> Secure Checkout
              </h1>
              <p className="text-muted-foreground">Please enter the details exactly as they appear on the passenger's passport.</p>
            </section>

            <form onSubmit={handlePayment} className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Passenger Details</CardTitle>
                  <CardDescription>Primary traveler information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passport">Passport Number</Label>
                    <Input id="passport" placeholder="A12345678" required />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Payment Information</CardTitle>
                  <CardDescription>All transactions are secure and encrypted</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                   <div className="bg-primary/5 p-4 rounded-lg flex items-start gap-3 mb-6">
                      <Lock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-bold text-primary">Synchronized Security</p>
                        <p className="text-xs text-muted-foreground">Your payment details are processed through Stripe with AES-256 encryption.</p>
                      </div>
                   </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="card">Card Number</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="card" placeholder="0000 0000 0000 0000" className="pl-10" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" required />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-muted/30 pt-6">
                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg font-extrabold bg-secondary hover:bg-secondary/90 shadow-xl shadow-secondary/20"
                    disabled={loading}
                  >
                    {loading ? "Processing..." : `Pay $${price} & Book Flight`}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </div>

          {/* Sidebar Summary */}
          <aside className="w-full md:w-80 lg:w-96">
            <Card className="sticky top-24 border-2 border-primary/10">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Plane className="h-5 w-5" /> Trip Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-sm">NYC to London</p>
                      <p className="text-xs text-muted-foreground">Oceanic Air • Non-stop</p>
                    </div>
                    <Badge variant="secondary">Economy</Badge>
                  </div>
                  
                  <div className="flex justify-between items-center text-sm border-y py-3">
                    <div className="text-center">
                      <p className="font-bold">08:30 AM</p>
                      <p className="text-[10px] text-muted-foreground uppercase">JFK</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    <div className="text-center">
                      <p className="font-bold">11:45 AM</p>
                      <p className="text-[10px] text-muted-foreground uppercase">LHR</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">1 Passenger</span>
                    <span>${price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Taxes & Fees</span>
                    <span>$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold">Total Amount</span>
                    <span className="text-2xl font-extrabold text-primary">${price}</span>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg flex items-start gap-2">
                  <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-amber-800">
                    Prices are synchronized in real-time. This offer is held for another <strong>09:45</strong> minutes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
