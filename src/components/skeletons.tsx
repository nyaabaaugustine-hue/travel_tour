"use client";

import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn("animate-pulse bg-muted rounded-[5%]", className)} />
  );
}

export function FlightCardSkeleton() {
  return (
    <div className="luxury-card rounded-[5%] p-4">
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-10 rounded-[5%]" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
        <div className="text-right space-y-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
      <div className="mt-4 pt-4 border-t flex items-center justify-between">
        <Skeleton className="h-3 w-20" />
        <Skeleton className="h-8 w-24 rounded-[5%]" />
      </div>
    </div>
  );
}

export function HotelCardSkeleton() {
  return (
    <div className="luxury-card rounded-[5%] overflow-hidden">
      <Skeleton className="h-48 w-full" />
      <div className="p-4 space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
        <div className="flex justify-between">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  );
}

export function DestinationCardSkeleton() {
  return (
    <div className="relative h-72 rounded-[5%] overflow-hidden">
      <Skeleton className="absolute inset-0" />
      <div className="absolute bottom-4 left-4 right-4 space-y-2">
        <Skeleton className="h-6 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
    </div>
  );
}

export function DealCardSkeleton() {
  return (
    <div className="luxury-card rounded-[5%] overflow-hidden">
      <div className="flex">
        <Skeleton className="w-20 h-full" />
        <div className="p-4 flex-1 space-y-3">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-5 w-16" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div>
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
}