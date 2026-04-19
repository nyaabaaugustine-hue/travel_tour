"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, Users, Heart, Shield, Zap, Star } from "lucide-react";

const TEAM = [
  {
    name: "Kwame Asante",
    role: "CEO & Founder",
    bio: "20+ years in travel technology, former Google Travel team.",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide5_jz621t.jpg",
  },
  {
    name: "Sarah Mensah",
    role: "Chief Operations Officer",
    bio: "Expert in airline partnerships and operations.",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide6_lic8kj.jpg",
  },
  {
    name: "David Opoku",
    role: "Head of Technology",
    bio: "Building scalable booking systems for 10+ years.",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776528497/slide4_qsza8w.jpg",
  },
  {
    name: "Amara Diallo",
    role: "Head of Customer Experience",
    bio: "Passionate about creating memorable journeys.",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide3_tdjtnv.jpg",
  },
];

const VALUES = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make puts our travelers at the center.",
  },
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Secure bookings with PCI DSS certified payments.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Cutting-edge technology for seamless booking.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "500+ airlines to destinations worldwide.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="relative bg-primary text-white py-20 overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776507277/bv_vbwdgt.jpg"
            alt="About hero"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Badge className="bg-secondary/20 text-secondary mb-4">About Us</Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Redefining Travel from West Africa
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              We&apos;re on a mission to make world-class travel accessible, affordable, and enjoyable 
              for every African traveler.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  VoyageSync was founded in 2020 with a simple vision: to transform how 
                  Africans book travel. We saw that travelers from our region faced hidden fees, 
                  complicated bookings, and poor support.
                </p>
                <p className="text-muted-foreground mb-4">
                  Today, we serve over 500,000 travelers annually, offering real-time access 
                  to 500+ airlines with transparent pricing and 24/7 support.
                </p>
                <p className="text-muted-foreground">
                  We&apos;re proud to be Ghana&apos;s homegrown travel platform, now expanding across Africa.
                </p>
              </div>
              <div className="relative h-80 rounded-3xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776527855/slide1_fracqs.jpg"
                  alt="Our team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((value) => (
                <Card key={value.title} className="luxury-card">
                  <CardContent className="p-6 text-center">
                    <div className="h-12 w-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-3xl font-bold text-center mb-4">Leadership Team</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Meet the passionate people behind VoyageSync, dedicated to transforming your travel experience.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM.map((member) => (
                <Card key={member.name} className="luxury-card">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-display font-bold">{member.name}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <Award className="h-16 w-16 mx-auto mb-6 text-secondary" />
            <h2 className="font-display text-3xl font-bold mb-4">Recognition</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We&apos;re honored to be recognized by industry leaders for our innovation and impact.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-secondary">2024</div>
                <div className="text-sm text-white/70">Best Travel App</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-secondary">4.9</div>
                <div className="text-sm text-white/70">App Rating</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-secondary">500K+</div>
                <div className="text-sm text-white/70">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-white/70">Countries</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}