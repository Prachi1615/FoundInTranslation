"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type TranslationContextType = {
  targetTranscription: string;
  destinationTranscription: string;
  setTargetTranscription: (text: string) => void;
  setDestinationTranscription: (text: string) => void;
};

const loremIpsumTarget = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const loremIpsumDestination = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<{ children: ReactNode; }> = ({ children }) => {
  const [targetTranscription, setTargetTranscription] = useState(loremIpsumTarget);
  const [destinationTranscription, setDestinationTranscription] = useState(loremIpsumDestination);

  return (
    <TranslationContext.Provider
      value={{
        targetTranscription,
        destinationTranscription,
        setTargetTranscription,
        setDestinationTranscription,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
