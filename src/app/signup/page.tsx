"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
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
            alt="Signup background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-32">
          <div className="max-w-md mx-auto">
            <Card className="bg-white/95 backdrop-blur-xl rounded-[5%] shadow-2xl">
              <CardContent className="p-8">
                <h1 className="font-display text-3xl font-bold text-center mb-2">Create Account</h1>
                <p className="text-muted-foreground text-center mb-8">Join our travel community</p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input placeholder="John Doe" className="h-12 rounded-[5%]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="john@example.com" className="h-12 rounded-[5%]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Password</label>
                    <Input type="password" placeholder="••••••••" className="h-12 rounded-[5%]" />
                  </div>
                  <Button onClick={handleSignup} className="w-full h-12 rounded-[5%] font-semibold" disabled={loading}>
                    {loading ? "Creating account..." : "Create Account"}
                  </Button>
                </div>

                <p className="text-center text-sm text-muted-foreground mt-8">
                  Already have an account? <Link href="/login" className="text-primary font-semibold">Login</Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}