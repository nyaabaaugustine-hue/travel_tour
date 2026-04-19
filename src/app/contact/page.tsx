"use client";

import { useState } from "react";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="relative bg-primary text-white py-20 overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dwsl2ktt2/image/upload/v1776533940/4559fb8b_hyckig.jpg"
            alt="Contact hero"
            fill
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              We&apos;re here to help. Reach out to our friendly team for any questions or support.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h2 className="font-display text-2xl font-bold">Get in Touch</h2>
                <p className="text-muted-foreground">
                  Have a question about bookings, flights, or need help with your travel plans? 
                  Our team is available 24/7 to assist you.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="luxury-card">
                    <CardContent className="p-6">
                      <Phone className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-sm text-muted-foreground">+233 30 250 0000</p>
                      <p className="text-sm text-muted-foreground">24/7 Support</p>
                    </CardContent>
                  </Card>
                  <Card className="luxury-card">
                    <CardContent className="p-6">
                      <Mail className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-sm text-muted-foreground">support@voyagesync.com</p>
                      <p className="text-sm text-muted-foreground">info@voyagesync.com</p>
                    </CardContent>
                  </Card>
                </div>

                <Card className="luxury-card">
                  <CardContent className="p-6">
                    <MapPin className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold">Headquarters</h3>
                    <p className="text-sm text-muted-foreground">
                      Accra Digital Centre<br />
                      Liberation Road, Accra<br />
                      Ghana
                    </p>
                  </CardContent>
                </Card>

                <Card className="luxury-card">
                  <CardContent className="p-6">
                    <Clock className="h-8 w-8 text-primary mb-3" />
                    <h3 className="font-semibold">Office Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: 10:00 AM - 2:00 PM
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="luxury-card">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <MessageCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="font-display text-xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <h3 className="font-display text-xl font-bold">Send us a Message</h3>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">Name</label>
                          <Input
                            id="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email</label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                        <Input
                          id="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <Textarea
                          id="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}