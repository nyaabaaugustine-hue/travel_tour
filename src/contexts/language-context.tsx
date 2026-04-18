"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type TranslationKey = string;
type Translations = Record<TranslationKey, string>;

const en: Translations = {
  "nav.findFlights": "Find Flights",
  "nav.destinations": "Destinations",
  "nav.deals": "Special Deals",
  "nav.corporate": "Corporate Travel",
  "nav.about": "About Us",
  "nav.contact": "Contact Us",
  "nav.login": "Login",
  "hero.title": "Fly with Precision. Travel with Purpose.",
  "hero.subtitle": "Real-time pricing across 500+ global airlines.",
  "hero.noFees": "No hidden fees",
  "hero.instant": "Instant confirmation",
  "hero.support": "24/7 support",
  "search.from": "From",
  "search.to": "To",
  "search.departure": "Departure",
  "search.return": "Return",
  "search.travelers": "Travelers",
  "search.class": "Cabin Class",
  "search.search": "Search Flights",
  "deals.title": "Minimum 20% off!",
  "deals.seeAll": "See all deals",
  "destinations.title": "Trending Destinations",
  "destinations.viewAll": "View All",
  "footer.copyright": "© 2025 Africa Travel Platform Inc.",
};

const fr: Translations = {
  "nav.findFlights": "Trouver des vols",
  "nav.destinations": "Destinations",
  "nav.deals": "Offres Spéciales",
  "nav.corporate": "Voyages d'affaires",
  "nav.about": "À propos",
  "nav.contact": "Contact",
  "nav.login": "Connexion",
  "hero.title": "Voler avec Précision. Voyager avec Purpose.",
  "hero.subtitle": "Tarification en temps réel sur plus de 500 compagnies aériennes.",
  "hero.noFees": "Pas de frais cachés",
  "hero.instant": "Confirmationinstantanée",
  "hero.support": "Assistance 24/7",
  "search.from": "De",
  "search.to": "À",
  "search.departure": "Départ",
  "search.return": "Retour",
  "search.travelers": "Voyageurs",
  "search.class": "Classe",
  "search.search": "Rechercher",
  "deals.title": "Minimum 20% de réduction!",
  "deals.seeAll": "Voir toutes les offres",
  "destinations.title": "Destinations Tendances",
  "destinations.viewAll": "Voir tout",
  "footer.copyright": "© 2025 Africa Travel Platform Inc.",
};

type Language = "en" | "fr";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  const t = (key: TranslationKey): string => {
    return lang === "fr" ? (fr[key] || en[key] || key) : (en[key] || key);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}