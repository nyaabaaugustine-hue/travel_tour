"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Star, Gift, Plane, Hotel, CreditCard, ArrowRight } from "lucide-react";
import Link from "next/link";

const TIER_INFO = [
  {
    tier: "silver",
    name: "Silver",
    minPoints: 0,
    color: "bg-gray-400",
    benefits: ["5% bonus points on bookings", "Birthday reward", "Priority support"],
  },
  {
    tier: "gold",
    name: "Gold",
    minPoints: 10000,
    color: "bg-yellow-500",
    benefits: ["10% bonus points", "Free flight upgrades", "Lounge access", "Priority support"],
  },
  {
    tier: "platinum",
    name: "Platinum",
    minPoints: 25000,
    color: "bg-purple-600",
    benefits: ["15% bonus points", "Free flights", "VIP lounge", "Dedicated agent", "Free upgrades"],
  },
  {
    tier: "diamond",
    name: "Diamond",
    minPoints: 50000,
    color: "bg-cyan-500",
    benefits: ["20% bonus points", "Unlimited rewards", "Black card benefits", "Concierge service"],
  },
];

const REWARDS = [
  { name: "Flight discount", points: 5000, value: "$50 off" },
  { name: "Free baggage", points: 3000, value: "1 free bag" },
  { name: "Lounge access", points: 7500, value: "Day pass" },
  { name: "Hotel night", points: 15000, value: "1 night free" },
  { name: "Upgrade voucher", points: 10000, value: "Class upgrade" },
];

export default function LoyaltyPage() {
  const [points] = useState(12500);
  const currentTier = "gold";

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="relative bg-primary text-white py-16 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-secondary/20 text-secondary mb-4">Rewards Program</Badge>
                <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                  Earn Points, Travel Free
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  Join our loyalty program and earn points on every booking. Redeem for free flights, upgrades, and exclusive rewards.
                </p>
                <Link href="/login">
                  <Button className="bg-secondary text-primary hover:bg-secondary/90 rounded-[5%]">
                    Join Program
                  </Button>
                </Link>
              </div>
              <Card className="bg-white/10 backdrop-blur-xl border-0 rounded-[5%] p-8 text-center">
                <div className="text-white/60 mb-2">Your Points Balance</div>
                <div className="font-display text-5xl font-bold mb-2">{points.toLocaleString()}</div>
                <Badge className="bg-yellow-500 text-black">Gold Member</Badge>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-center mb-8">Membership Tiers</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TIER_INFO.map((tier) => (
                <Card 
                  key={tier.tier} 
                  className={`luxury-card rounded-[5%] ${currentTier === tier.tier ? 'border-2 border-secondary' : ''}`}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`h-12 w-12 ${tier.color} rounded-full mx-auto mb-3`} />
                    <h3 className="font-bold">{tier.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{tier.minPoints.toLocaleString()}+ points</p>
                    <ul className="text-xs space-y-1 text-left">
                      {tier.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-1">
                          <Star className="h-3 w-3 text-secondary shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold text-center mb-8">Redeem Your Points</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {REWARDS.map((reward) => (
                <Card key={reward.name} className="luxury-card rounded-[5%]">
                  <CardContent className="p-4 text-center">
                    <Gift className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <h3 className="font-bold text-sm">{reward.name}</h3>
                    <p className="text-xs text-muted-foreground">{reward.value}</p>
                    <p className="text-xs font-bold text-primary mt-2">{reward.points.toLocaleString()} pts</p>
                    <Button size="sm" className="w-full mt-2 rounded-[5%]" variant="outline">
                      Redeem
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Plane className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Earn on Flights</h3>
                <p className="text-sm text-muted-foreground">1 point per $1 spent</p>
              </div>
              <div className="text-center">
                <Hotel className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Earn on Hotels</h3>
                <p className="text-sm text-muted-foreground">2 points per $1 spent</p>
              </div>
              <div className="text-center">
                <CreditCard className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Partner Earnings</h3>
                <p className="text-sm text-muted-foreground">Up to 5x points</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}