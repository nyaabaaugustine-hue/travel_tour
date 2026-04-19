"use client";

import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Shield, CheckCircle, Phone, Plane, Hotel, Calendar } from "lucide-react";

const INSURANCE_PLANS = [
  {
    id: "basic",
    name: "Basic Cover",
    price: 25,
    description: "Essential protection for your trip",
    features: [
      "Trip cancellation up to $1,000",
      "Medical emergencies 50K",
      "Baggage loss $500",
      "Flight delay compensation",
    ],
    popular: false,
  },
  {
    id: "standard",
    name: "Standard Cover",
    price: 49,
    description: "Comprehensive travel protection",
    features: [
      "Trip cancellation up to $3,000",
      "Medical emergencies $100K",
      "Baggage loss $1,000",
      "Flight delay compensation",
      "Adventure sports cover",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium Cover",
    price: 89,
    description: "Maximum protection for peace of mind",
    features: [
      "Trip cancellation unlimited",
      "Medical emergencies $250K",
      "Baggage loss $2,500",
      "Flight delay compensation",
      "Adventure sports cover",
      "Rental car damage",
      "Home burglary protection",
    ],
    popular: false,
  },
];

export default function InsurancePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="relative bg-primary text-white py-20 overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776590152/faces_ukqrpa.jpg"
            alt="Insurance hero"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <Badge className="bg-secondary/20 text-secondary mb-4">Travel Insurance</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Protect Your Journey
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Comprehensive travel insurance from trusted partners. Travel with peace of mind knowing you're covered.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {INSURANCE_PLANS.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`luxury-card rounded-[5%] overflow-hidden ${plan.popular ? 'border-2 border-secondary' : ''}`}
                >
                  {plan.popular && (
                    <div className="bg-secondary text-primary text-center py-1 text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-display text-xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display text-3xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/trip</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full rounded-[5%]">Get Quote</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-[5%] flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Trusted Partners</h3>
                <p className="text-sm text-muted-foreground">Leading insurance providers</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-[5%] flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">24/7 Assistance</h3>
                <p className="text-sm text-muted-foreground">Always here when you need us</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-[5%] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Instant Claims</h3>
                <p className="text-sm text-muted-foreground">Quick and easy process</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}