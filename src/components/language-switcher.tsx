"use client";

import { useLanguage } from "@/contexts/language-context";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
      className="flex items-center gap-2 text-sm font-medium"
    >
      <Globe className="h-4 w-4" />
      <span>{lang === "en" ? "EN" : "FR"}</span>
    </Button>
  );
}