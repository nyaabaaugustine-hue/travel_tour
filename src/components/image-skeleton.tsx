"use client";

import { cn } from "@/lib/utils";

interface ImageSkeletonProps {
  className?: string;
  aspectRatio?: "square" | "video" | "portrait" | "landscape";
}

export function ImageSkeleton({ className, aspectRatio = "video" }: ImageSkeletonProps) {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[16/9]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted animate-pulse",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-muted via-muted/50 to-muted" />
    </div>
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl bg-muted animate-pulse", className)}>
      <div className="h-full w-full" />
    </div>
  );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-4 rounded-full bg-muted animate-pulse",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
}