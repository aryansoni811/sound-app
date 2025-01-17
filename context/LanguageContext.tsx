import { useState, createContext, ReactNode, useEffect } from "react";
import i18n from "@/constants/i18n";

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  i18n: typeof i18n;
}

export const LanguageContext = createContext<LanguageContextProps>({
  language: "en",
  setLanguage: () => {},
  i18n,
});

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    i18n.locale = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, i18n }}>
      {children}
    </LanguageContext.Provider>
  );
}
