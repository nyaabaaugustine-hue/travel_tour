"use client";

import { useEffect, useRef } from "react";

interface DuffelLinksConfig {
  reference?: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  markupAmount?: number;
  successUrl?: string;
  failureUrl?: string;
  abandonmentUrl?: string;
}

interface DuffelLinksProps {
  config?: DuffelLinksConfig;
}

export function DuffelLinks({ config = {} }: DuffelLinksProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const origin = window.location.origin;

    const baseConfig: DuffelLinksConfig = {
      reference: "traveltour_" + Date.now(),
      logoUrl:
        "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776535724/aaaaaaa_xu7z9a.png",
      primaryColor: "#1a4731",
      secondaryColor: "#e09c0b",
      markupAmount: 20,
      successUrl: `${origin}/confirmation/duffel-success`,
      failureUrl: `${origin}/`,
      abandonmentUrl: `${origin}/`,
    };

    const finalConfig = { ...baseConfig, ...config };

    const existing = document.getElementById("duffel-links-script");
    if (existing) {
      // Script already loaded — just initialise
      initWidget(finalConfig);
      return;
    }

    const script = document.createElement("script");
    script.id = "duffel-links-script";
    script.src = "https://cdn.duffel.com/links/v1/duffel-links.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => initWidget(finalConfig);

    function initWidget(cfg: DuffelLinksConfig) {
      if (containerRef.current && (window as any).DuffelLinks) {
        (window as any).DuffelLinks({
          container: containerRef.current,
          ...cfg,
        });
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ minHeight: "320px" }}
    />
  );
}
