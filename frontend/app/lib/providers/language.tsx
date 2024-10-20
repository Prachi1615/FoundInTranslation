"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'english' | 'spanish' | 'french';

interface LanguageContextType {
  targetLanguage: Language;
  destinationLanguage: Language;
  setTargetLanguage: (lang: Language) => void;
  setDestinationLanguage: (lang: Language) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode; }) => {
  const [targetLanguage, setTargetLanguage] = useState<Language>('english');
  const [destinationLanguage, setDestinationLanguage] = useState<Language>('spanish');

  return (
    <LanguageContext.Provider value={{
      targetLanguage,
      destinationLanguage,
      setTargetLanguage,
      setDestinationLanguage,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
