"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = (role: "client" | "admin") => {
    setLoading(true);
    setTimeout(() => {
      router.push("/dashboard");
    }, 500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-20 relative">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776529027/kj_sbx4rd.jpg"
            alt="Login background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32">
          <div className="max-w-md mx-auto">
            <Card className="bg-white/95 backdrop-blur-xl rounded-[5%] shadow-2xl">
              <CardContent className="p-8">
                <h1 className="font-display text-3xl font-bold text-center mb-2">Welcome Back</h1>
                <p className="text-muted-foreground text-center mb-8">Select login type to continue</p>

                <div className="grid gap-4">
                  <Card className="luxury-card rounded-[5%] cursor-pointer hover:border-primary transition-colors border-2" onClick={() => handleLogin("client")}>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="h-14 w-14 rounded-[5%] bg-primary/10 flex items-center justify-center">
                        <User className="h-7 w-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">Client Login</h3>
                        <p className="text-sm text-muted-foreground">Book flights and manage bookings</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </CardContent>
                  </Card>

                  <Card className="luxury-card rounded-[5%] cursor-pointer hover:border-primary transition-colors border-2" onClick={() => handleLogin("admin")}>
                    <CardContent className="p-6 flex items-center gap-4">
                      <div className="h-14 w-14 rounded-[5%] bg-secondary/10 flex items-center justify-center">
                        <Lock className="h-7 w-7 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">Admin Login</h3>
                        <p className="text-sm text-muted-foreground">Manage all bookings and settings</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-8">
                  Don&apos;t have an account? <Link href="/signup" className="text-primary font-semibold">Sign up</Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}