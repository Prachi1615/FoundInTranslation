"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type TranslationContextType = {
  targetTranscription: string;
  destinationTranscription: string;
  setTargetTranscription: (text: string) => void;
  setDestinationTranscription: (text: string) => void;
};

export const loremIpsumTarget = "text and translation in the UI";
export const loremIpsumDestination = "texto y traduccin en la interfaz de usuario";

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export const TranslationProvider: React.FC<{ children: ReactNode; }> = ({ children }) => {
  const [targetTranscription, setTargetTranscription] = useState('');
  const [destinationTranscription, setDestinationTranscription] = useState('');

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
