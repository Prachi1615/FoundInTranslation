"use client";

import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { useTranslation } from '@/app/lib/providers/translation';

const PlayTranscription = () => {
  const { destinationTranscription } = useTranslation();

  const handlePlay = () => {
    const utterance = new SpeechSynthesisUtterance(destinationTranscription);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      onClick={handlePlay}
      className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5"
    >
      <FaPlayCircle className="text-4xl" />
    </button>
  );
};

export default PlayTranscription;
