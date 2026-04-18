"use client";

import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const AFRICAN_TOURS = [
  {
    id: 1,
    country: "Ghana",
    title: "Discover Ghana in 8 Days",
    description: "Explore Accra, Kumasi & Cape Coast",
    price: 899,
    originalPrice: 1099,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533944/accra_h28u9u.jpg",
    highlights: ["8 Days", "5+ Cities", "All Incl.", "$200 Off"],
  },
  {
    id: 2,
    country: "Kenya",
    title: "Safari Adventure in Kenya",
    description: "Masai Mara, Nairobi & Mombasa",
    price: 1299,
    originalPrice: 1599,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/4559fb8b_hyckig.jpg",
    highlights: ["10 Days", "Safari", "All Incl.", "$300 Off"],
  },
  {
    id: 3,
    country: "South Africa",
    title: "Explore South Africa",
    description: "Cape Town, Johannesburg & Kruger",
    price: 1499,
    originalPrice: 1799,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/safrica_nu5kez.jpg",
    highlights: ["12 Days", "6 Cities", "All Incl.", "$300 Off"],
  },
  {
    id: 4,
    country: "Morocco",
    title: "Magic of Morocco",
    description: "Marrakech, Casablanca & Fes",
    price: 999,
    originalPrice: 1299,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/13ed0bd8_tx2gog.jpg",
    highlights: ["7 Days", "4 Cities", "All Incl.", "$300 Off"],
  },
  {
    id: 5,
    country: "Nigeria",
    title: "Nigeria Discovery",
    description: "Lagos, Abuja & Jos",
    price: 849,
    originalPrice: 1099,
    image: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533943/lk_zd9scy.jpg",
    highlights: ["8 Days", "5 Cities", "All Incl.", "$250 Off"],
  },
];

interface TourPopupProps {
  onClose?: () => void;
}

export function TourPopup({ onClose }: TourPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTour, setCurrentTour] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);

  const showNextTour = useCallback(() => {
    if (userInteracted) return;
    setCurrentTour((prev) => (prev + 1) % AFRICAN_TOURS.length);
  }, [userInteracted]);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setIsVisible(true), 50);
    }, 3000);

    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!isOpen || userInteracted) return;
    const cycleTimer = setInterval(showNextTour, 7000);
    return () => clearInterval(cycleTimer);
  }, [isOpen, userInteracted, showNextTour]);

  useEffect(() => {
    if (!isOpen) return;
    const closeTimer = setTimeout(() => {
      if (!userInteracted) {
        setIsVisible(false);
        setTimeout(() => setIsOpen(false), 500);
      }
    }, 7000);

    return () => clearTimeout(closeTimer);
  }, [isOpen, currentTour, userInteracted]);

  const handleClose = () => {
    setUserInteracted(true);
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 500);
    onClose?.();
  };

  if (!isOpen) return null;

  const tour = AFRICAN_TOURS[currentTour];

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        onClick={handleClose}
      />
      <div 
        className={`fixed left-0 top-0 h-full w-full md:w-[480px] bg-white z-50 shadow-2xl transform transition-transform duration-500 ${isVisible ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg z-10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-full overflow-y-auto">
          <div className="relative h-56">
            <Image
              src={tour.image}
              alt={tour.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
            <div className="absolute top-6 left-6">
              <span className="bg-secondary text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Limited Offer
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="text-white font-display text-2xl font-bold mt-2">
                {tour.title}
              </h2>
              <p className="text-white/80 text-sm mt-1">{tour.description}</p>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-3">
              {tour.highlights.map((item, i) => (
                <div key={i} className="bg-primary/5 rounded-xl p-3 text-center">
                  <p className="font-display text-lg font-bold text-primary">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground line-through">Was ${tour.originalPrice}</p>
              <p className="font-display text-3xl font-bold text-primary">${tour.price}</p>
              <p className="text-sm text-green-600 font-medium">Save ${tour.originalPrice - tour.price}</p>
            </div>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="John Doe" className="h-12 rounded-xl" required />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" className="h-12 rounded-xl" required />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Phone</label>
                <Input type="tel" placeholder="+233 XX XXX XXXX" className="h-12 rounded-xl" required />
              </div>

              <Button type="submit" className="w-full h-12 rounded-xl font-semibold text-lg">
                Register Now
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Limited to 20 spots per tour • No commitment
              </p>
            </form>

            <div className="flex justify-center gap-2">
              {AFRICAN_TOURS.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all ${
                    i === currentTour ? "w-6 bg-primary" : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}