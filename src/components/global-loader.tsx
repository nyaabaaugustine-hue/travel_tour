"use client";
import { useEffect, useState } from "react";

export function GlobalLoader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Start fade-out after 2.4s, fully remove at 2.9s
    const fadeTimer = setTimeout(() => setFading(true), 2400);
    const hideTimer = setTimeout(() => setVisible(false), 2900);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="global-loader-overlay"
      style={{ opacity: fading ? 0 : 1 }}
      aria-hidden="true"
    >
      {/* Globe SVG */}
      <div className="globe-wrap">
        <svg viewBox="0 0 200 200" className="globe-svg" xmlns="http://www.w3.org/2000/svg">
          {/* Outer circle */}
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          {/* Latitude lines */}
          {[30, 60, 90, 120, 150].map((cy, i) => {
            const dy = cy - 100;
            const r = Math.sqrt(Math.max(0, 80 * 80 - dy * dy));
            return r > 2 ? (
              <ellipse key={i} cx="100" cy={cy} rx={r} ry={r * 0.38}
                fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            ) : null;
          })}
          {/* Longitude lines */}
          {[0, 45, 90, 135].map((angle, i) => (
            <ellipse key={i} cx="100" cy="100" rx="80" ry="30"
              fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"
              transform={`rotate(${angle} 100 100)`} />
          ))}
          {/* Equator highlight */}
          <ellipse cx="100" cy="100" rx="80" ry="30"
            fill="none" stroke="rgba(224,156,11,0.35)" strokeWidth="1.5" />
        </svg>

        {/* Flight path — dashed arc around the globe equator */}
        <svg viewBox="0 0 200 200" className="flight-path-svg" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="100" rx="80" ry="30"
            fill="none" stroke="rgba(224,156,11,0.5)" strokeWidth="1.5"
            strokeDasharray="12 6" strokeLinecap="round" />
        </svg>

        {/* Plane icon orbiting the globe */}
        <div className="plane-orbit">
          <svg viewBox="0 0 24 24" className="plane-icon" fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16v-2l-8-5V3.5A1.5 1.5 0 0 0 11.5 2 1.5 1.5 0 0 0 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z"/>
          </svg>
        </div>
      </div>

      {/* Brand text */}
      <div className="loader-brand">
        <span className="loader-brand-name">MileHigh</span>
        <span className="loader-brand-sub">5280 Travels</span>
      </div>

      {/* Loading dots */}
      <div className="loader-dots">
        <span /><span /><span />
      </div>
    </div>
  );
}
