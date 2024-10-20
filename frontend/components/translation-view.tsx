"use client";

import React from 'react';
import { useLanguage } from '@/app/lib/providers/language';
import { useTranslation } from '@/app/lib/providers/translation';
import PlayTranscription from './play-transcription';

const TranslationView = () => {
  const { targetLanguage, destinationLanguage } = useLanguage();
  const { targetTranscription, destinationTranscription } = useTranslation();
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full gap-4 mt-4">
        <div className="flex-1">
          <label htmlFor="targetTextArea" className="block mb-1 text-sm font-medium">
            {targetLanguage.charAt(0).toUpperCase() + targetLanguage.slice(1)}
          </label>
          <textarea
            id="targetTextArea"
            className="w-full p-2 border rounded-md resize-none bg-gray-100"
            rows={5}
            value={targetTranscription}
            readOnly
          />
        </div>
        <div className="flex-1">
          <label htmlFor="destinationTextArea" className="block mb-1 text-sm font-medium">
            {destinationLanguage.charAt(0).toUpperCase() + destinationLanguage.slice(1)}
          </label>
          <textarea
            id="destinationTextArea"
            className="w-full p-2 border rounded-md resize-none bg-gray-100"
            rows={5}
            value={destinationTranscription}
            readOnly
          />
        </div>
      </div>
      <PlayTranscription />
    </div>
  );
};

export default TranslationView;

