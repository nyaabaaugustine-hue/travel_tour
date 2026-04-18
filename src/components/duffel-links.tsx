"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

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
  onSuccess?: (data: any) => void;
  onFailure?: (data: any) => void;
}

export function DuffelLinks({ 
  config = {}, 
  onSuccess, 
  onFailure 
}: DuffelLinksProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const defaultConfig: DuffelLinksConfig = {
    reference: "voyagesync_" + Date.now(),
    logoUrl: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776535724/aaaaaaa_xu7z9a.png",
    primaryColor: "#1a4731",
    secondaryColor: "#e09c0b",
    markupAmount: 20,
    successUrl: "http://localhost:9002/confirmation/duffel-success",
    failureUrl: "https://example.com/failure",
    abandonmentUrl: "https://example.com/abandon",
  };

  const finalConfig = { ...defaultConfig, ...config };

  useEffect(() => {
    // Load Duffel Links script
    const script = document.createElement("script");
    script.src = "https://cdn.duffel.com/links/v1/duffel-links.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if ((window as any).DuffelLinks) {
        (window as any).DuffelLinks({
          container: containerRef.current,
          ...finalConfig,
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleOpen = () => {
    // Trigger Duffel modal if using button
    const container = containerRef.current;
    if (container && container.querySelector('iframe')) {
      // Already initialized
    } else {
      // Load with event
      const event = new CustomEvent('duffel-links-open');
      window.dispatchEvent(event);
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      <div id="duffel-links-container" />
    </div>
  );
}

// Standalone button to open Duffel modal
export function DuffelBookingButton({ 
  config = {},
  label = "Book Flights" 
}: { 
  config?: DuffelLinksConfig; 
  label?: string;
}) {
  const defaultConfig: DuffelLinksConfig = {
    reference: "voyagesync_" + Date.now(),
    logoUrl: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776535724/aaaaaaa_xu7z9a.png",
    primaryColor: "#1a4731",
    secondaryColor: "#e09c0b",
    markupAmount: 20,
    successUrl: "http://localhost:9002/confirmation/duffel-success",
    failureUrl: "https://example.com/failure",
    abandonmentUrl: "https://example.com/abandon",
  };

  const handleBooking = () => {
    // Create Duffel link on the fly
    const container = document.getElementById("duffel-link-container");
    if (container && (window as any).DuffelLinks) {
      (window as any).DuffelLinks({
        container: container,
        ...defaultConfig,
        ...config,
      });
    }
  };

  return (
    <>
      <div id="duffel-link-container" style={{ display: 'none' }} />
      <Button 
        onClick={handleBooking}
        className="rounded-[5%]"
      >
        {label}
      </Button>
    </>
  );
}

// Hook to initialize Duffel with custom config
export function useDuffelLinks(config?: DuffelLinksConfig) {
  const defaultConfig: DuffelLinksConfig = {
    reference: "voyagesync_" + Date.now(),
    logoUrl: "https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776535724/aaaaaaa_xu7z9a.png",
    primaryColor: "#1a4731",
    secondaryColor: "#e09c0b",
    markupAmount: 20,
    successUrl: "http://localhost:9002/confirmation/duffel-success",
    failureUrl: "https://example.com/failure",
    abandonmentUrl: "https://example.com/abandon",
  };

  const initDuffel = (containerId: string) => {
    const container = document.getElementById(containerId);
    if (container && (window as any).DuffelLinks) {
      (window as any).DuffelLinks({
        container: container,
        ...defaultConfig,
        ...config,
      });
    }
  };

  return { initDuffel, config: { ...defaultConfig, ...config } };
}