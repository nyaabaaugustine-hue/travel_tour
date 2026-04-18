"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: string;
  src: string;
  hint: string;
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlay?: boolean;
  interval?: number;
}

export function HeroSlider({ slides, autoPlay = true, interval = 5000 }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  return (
    <div className="absolute inset-0">
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.hint}
            fill
            className="object-cover brightness-[0.45]"
            priority={idx === 0}
            data-ai-hint={slide.hint}
          />
        </div>
      ))}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent" />

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === current ? "bg-white w-8" : "bg-white/40 w-3 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}