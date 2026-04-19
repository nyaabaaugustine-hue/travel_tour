"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { X, MapPin, Clock, Users, Star, ChevronLeft, ChevronRight, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ADS = [
  {
    id: 1,
    badge: "🔥 Flash Deal",
    country: "Ghana",
    title: "Discover Ghana",
    subtitle: "8 Days · Accra, Kumasi & Cape Coast",
    price: 899,
    originalPrice: 1099,
    rating: 4.9,
    reviews: 214,
    spots: 4,
    duration: "8 Days",
    travelers: "All Levels",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533944/accra_h28u9u.jpg",
    color: "from-emerald-900/90",
    tags: ["All Inclusive", "5 Cities", "Guide Included"],
  },
  {
    id: 2,
    badge: "🦁 Safari Pick",
    country: "Kenya",
    title: "Kenya Safari",
    subtitle: "10 Days · Masai Mara & Mombasa",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 187,
    spots: 6,
    duration: "10 Days",
    travelers: "Families",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/4559fb8b_hyckig.jpg",
    color: "from-amber-900/90",
    tags: ["Safari Drives", "Luxury Camp", "Transfers"],
  },
  {
    id: 3,
    badge: "🏔️ Best Seller",
    country: "South Africa",
    title: "Cape Town & Beyond",
    subtitle: "12 Days · Cape Town, Kruger & Joburg",
    price: 1499,
    originalPrice: 1799,
    rating: 4.9,
    reviews: 302,
    spots: 3,
    duration: "12 Days",
    travelers: "Couples",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/safrica_nu5kez.jpg",
    color: "from-slate-900/90",
    tags: ["Wine Tours", "Wildlife", "All Incl."],
  },
  {
    id: 4,
    badge: "✨ Staff Pick",
    country: "Morocco",
    title: "Magic of Morocco",
    subtitle: "7 Days · Marrakech, Fes & Casablanca",
    price: 999,
    originalPrice: 1299,
    rating: 4.7,
    reviews: 156,
    spots: 8,
    duration: "7 Days",
    travelers: "Solo & Pairs",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/13ed0bd8_tx2gog.jpg",
    color: "from-orange-900/90",
    tags: ["Medinas", "Desert Camp", "Riad Stay"],
  },
  {
    id: 5,
    badge: "🌊 New Route",
    country: "Nigeria",
    title: "Lagos Discovery",
    subtitle: "8 Days · Lagos, Abuja & Jos",
    price: 849,
    originalPrice: 1099,
    rating: 4.6,
    reviews: 98,
    spots: 10,
    duration: "8 Days",
    travelers: "All Levels",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/lk_zd9scy.jpg",
    color: "from-green-900/90",
    tags: ["City Tour", "Art Scene", "Food Trail"],
  },
  {
    id: 6,
    badge: "🏖️ Coastal Gem",
    country: "Senegal",
    title: "Dakar & Senegambia",
    subtitle: "6 Days · Dakar, Ile de Gorée & Saly",
    price: 749,
    originalPrice: 950,
    rating: 4.7,
    reviews: 112,
    spots: 7,
    duration: "6 Days",
    travelers: "All Levels",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533937/74f9a640_aytjpj.jpg",
    color: "from-blue-900/90",
    tags: ["Beach", "History", "Cuisine"],
  },
  {
    id: 7,
    badge: "🌺 Island Escape",
    country: "Sierra Leone",
    title: "Freetown Paradise",
    subtitle: "5 Days · Freetown & Turtle Islands",
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviews: 74,
    spots: 5,
    duration: "5 Days",
    travelers: "Couples",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533935/a32e040e-98f8-4322-aa10-770d06e97a6f_fbneta.jpg",
    color: "from-teal-900/90",
    tags: ["Beach", "Diving", "Rainforest"],
  },
  {
    id: 8,
    badge: "🎭 Cultural Tour",
    country: "Egypt",
    title: "Nile & Pyramids",
    subtitle: "9 Days · Cairo, Luxor & Aswan",
    price: 1149,
    originalPrice: 1399,
    rating: 4.9,
    reviews: 445,
    spots: 2,
    duration: "9 Days",
    travelers: "History Lovers",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/45086c8e_zwtrkb.jpg",
    color: "from-yellow-900/90",
    tags: ["Pyramids", "Nile Cruise", "Guided"],
  },
  {
    id: 9,
    badge: "🦒 Wild Africa",
    country: "Tanzania",
    title: "Serengeti & Zanzibar",
    subtitle: "11 Days · Arusha, Serengeti & Zanzibar",
    price: 1599,
    originalPrice: 1999,
    rating: 5.0,
    reviews: 267,
    spots: 3,
    duration: "11 Days",
    travelers: "Adventure",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533938/e21881a3_vb8pcu.jpg",
    color: "from-lime-900/90",
    tags: ["Great Migration", "Spice Island", "Big Five"],
  },
  {
    id: 10,
    badge: "💎 Luxury Pick",
    country: "Ivory Coast",
    title: "Abidjan Luxe",
    subtitle: "6 Days · Abidjan, Yamoussoukro & Grand-Bassam",
    price: 879,
    originalPrice: 1099,
    rating: 4.6,
    reviews: 89,
    spots: 6,
    duration: "6 Days",
    travelers: "Business",
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533939/ab942b64_f6uozz.jpg",
    color: "from-purple-900/90",
    tags: ["Luxury Hotel", "Cultural Sites", "Cuisine"],
  },
];

export function TourPopup() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState<"in" | "out">("in");
  const [dismissed, setDismissed] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const ad = ADS[idx];
  const savings = ad.originalPrice - ad.price;
  const discount = Math.round((savings / ad.originalPrice) * 100);

  const slideIn = useCallback(() => {
    setSlideDir("in");
    setSliding(false);
    setVisible(true);
  }, []);

  const slideOut = useCallback((then?: () => void) => {
    setSlideDir("out");
    setSliding(true);
    setTimeout(() => {
      setVisible(false);
      setSliding(false);
      then?.();
    }, 600);
  }, []);

  const goToNext = useCallback((dir: 1 | -1 = 1) => {
    slideOut(() => {
      setIdx(i => (i + dir + ADS.length) % ADS.length);
      setTimeout(slideIn, 80);
    });
  }, [slideOut, slideIn]);

  // Initial open after 3s
  useEffect(() => {
    const t = setTimeout(() => {
      setShow(true);
      setTimeout(slideIn, 60);
    }, 3000);
    return () => clearTimeout(t);
  }, [slideIn]);

  // Auto-cycle every 7s: slide out → change → slide in
  useEffect(() => {
    if (!show || dismissed) return;
    intervalRef.current = setInterval(() => goToNext(1), 7000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [show, dismissed, goToNext]);

  const handleClose = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDismissed(true);
    slideOut(() => setShow(false));
  };

  if (!show) return null;

  // Compute transform
  const transform = !visible
    ? "translateX(-110%)"
    : sliding && slideDir === "out"
      ? "translateX(-110%)"
      : "translateX(0%)";

  return (
    <>
      {/* Soft backdrop — only shows when panel is open */}
      <div
        className="fixed inset-0 z-40 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 55%)",
          opacity: visible && !sliding ? 1 : 0,
          transition: "opacity 0.6s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {/* Panel */}
      <div
        className="fixed left-0 top-0 h-full z-50 flex flex-col"
        style={{
          width: "clamp(300px, 90vw, 380px)",
          transform,
          transition: "transform 0.65s cubic-bezier(0.22,1,0.36,1)",
          willChange: "transform",
          boxShadow: "8px 0 40px rgba(0,0,0,0.35)",
          background: "hsl(218,60%,8%)",
        }}
      >
        {/* Hero image */}
        <div className="relative flex-shrink-0" style={{ height: "42%" }}>
          <Image src={ad.image} alt={ad.title} fill className="object-cover" priority />
          <div className={`absolute inset-0 bg-gradient-to-t ${ad.color} via-transparent to-transparent`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218,60%,8%)] via-transparent to-black/20" />

          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <X className="h-4 w-4 text-white" />
          </button>

          {/* Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[11px] font-bold px-2.5 py-1 rounded-full"
              style={{ background: "hsl(43,85%,52%)", color: "hsl(218,60%,8%)", letterSpacing: "0.03em" }}>
              {ad.badge}
            </span>
          </div>

          {/* Discount pill */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
            <span className="text-[11px] font-black px-2 py-0.5 rounded-full bg-red-500 text-white">
              -{discount}% OFF
            </span>
          </div>

          {/* Country + title */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 mb-0.5">{ad.country}</p>
            <h2 className="font-display text-2xl font-bold text-white leading-tight">{ad.title}</h2>
            <p className="text-white/70 text-xs mt-0.5 flex items-center gap-1">
              <MapPin className="h-3 w-3 text-secondary shrink-0" />{ad.subtitle}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto flex flex-col" style={{ color: "#fff" }}>
          <div className="px-4 pt-3 pb-2 space-y-3">

            {/* Rating + spots */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="h-3 w-3"
                    style={{ fill: s <= Math.round(ad.rating) ? "hsl(43,85%,52%)" : "transparent",
                             color: "hsl(43,85%,52%)" }} />
                ))}
                <span className="text-xs font-bold text-white/70 ml-1">{ad.rating} ({ad.reviews})</span>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                style={{ background: ad.spots <= 3 ? "rgba(239,68,68,0.2)" : "rgba(255,255,255,0.08)",
                         color: ad.spots <= 3 ? "#f87171" : "rgba(255,255,255,0.6)",
                         border: `1px solid ${ad.spots <= 3 ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.1)"}` }}>
                {ad.spots <= 3 ? `🔴 Only ${ad.spots} left!` : `${ad.spots} spots left`}
              </span>
            </div>

            {/* Info chips */}
            <div className="flex gap-2 flex-wrap">
              {[
                { icon: <Clock className="h-3 w-3" />, label: ad.duration },
                { icon: <Users className="h-3 w-3" />, label: ad.travelers },
              ].map(({ icon, label }) => (
                <span key={label} className="flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  {icon}{label}
                </span>
              ))}
              {ad.tags.map(t => (
                <span key={t} className="text-[11px] font-semibold px-2.5 py-1 rounded-full"
                  style={{ background: "rgba(224,156,11,0.12)", color: "hsl(43,85%,65%)", border: "1px solid rgba(224,156,11,0.2)" }}>
                  {t}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-end justify-between py-1 border-y"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <div>
                <p className="text-[11px] line-through" style={{ color: "rgba(255,255,255,0.35)" }}>${ad.originalPrice.toLocaleString()}</p>
                <p className="font-display text-3xl font-bold" style={{ color: "hsl(43,85%,58%)" }}>
                  ${ad.price.toLocaleString()}
                </p>
                <p className="text-[11px] font-bold" style={{ color: "#4ade80" }}>You save ${savings}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>per person</p>
                <p className="text-[11px] font-semibold" style={{ color: "rgba(255,255,255,0.5)" }}>all inclusive</p>
              </div>
            </div>

            {/* CTA */}
            <Button
              className="w-full font-bold text-sm h-11 rounded-xl"
              style={{
                background: "linear-gradient(135deg, hsl(43,85%,52%), hsl(43,100%,65%), hsl(43,85%,52%))",
                backgroundSize: "200%",
                color: "hsl(218,60%,8%)",
                boxShadow: "0 4px 20px rgba(224,156,11,0.4)",
              }}
              onClick={handleClose}
            >
              Reserve My Spot →
            </Button>

            <p className="text-center text-[10px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              No commitment · Free cancellation within 48h
            </p>
          </div>
        </div>

        {/* Footer nav */}
        <div className="flex-shrink-0 px-4 py-3 flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "rgba(0,0,0,0.3)" }}>
          {/* Prev */}
          <button onClick={() => { if(intervalRef.current) clearInterval(intervalRef.current); goToNext(-1); }}
            className="h-8 w-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <ChevronLeft className="h-4 w-4 text-white/70" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {ADS.map((_, i) => (
              <button key={i} onClick={() => { if(intervalRef.current) clearInterval(intervalRef.current); slideOut(() => { setIdx(i); setTimeout(slideIn, 80); }); }}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === idx ? "20px" : "6px",
                  height: "6px",
                  background: i === idx ? "hsl(43,85%,52%)" : "rgba(255,255,255,0.2)",
                }} />
            ))}
          </div>

          {/* Next */}
          <button onClick={() => { if(intervalRef.current) clearInterval(intervalRef.current); goToNext(1); }}
            className="h-8 w-8 rounded-full flex items-center justify-center transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <ChevronRight className="h-4 w-4 text-white/70" />
          </button>
        </div>
      </div>
    </>
  );
}
