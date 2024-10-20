"use client";

import React from 'react';
import { Language, useLanguage } from '@/app/lib/providers/language';

const SelectLanguage = () => {
  const { targetLanguage, destinationLanguage, setTargetLanguage, setDestinationLanguage } = useLanguage();

  const handleTargetLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetLanguage(event.target.value as Language);
  };

  const handleDestinationLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDestinationLanguage(event.target.value as Language);
  };

  return (
    <div className="flex flex-row gap-4">
      <div className="flex flex-col">
        <label htmlFor="targetLanguage" className="text-sm mb-1">Target Language</label>
        <select id="targetLanguage" value={targetLanguage} onChange={handleTargetLanguageChange}>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="destinationLanguage" className="text-sm mb-1">Destination Language</label>
        <select id="destinationLanguage" value={destinationLanguage} onChange={handleDestinationLanguageChange}>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select>
      </div>
    </div>
  );
};

export default SelectLanguage;
