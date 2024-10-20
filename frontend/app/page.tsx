"use client";

import SelectLanguage from "@/components/select-language";
import TranslationView from "@/components/translation-view";
import { DynamicWidget, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { useLanguage } from "./lib/providers/language";


const App = () => {
  const isLoggedIn = useIsLoggedIn();
  const { targetLanguage, destinationLanguage } = useLanguage();

  return <div className="pt-4">
    <DynamicWidget />
    <h2 className="text-2xl font-bold mb-4">{isLoggedIn ? "Choose your languages to begin translation" : "Please login to use Found In Translation"}</h2>
    {isLoggedIn && <SelectLanguage />}
    {isLoggedIn && !!targetLanguage && !!destinationLanguage && <TranslationView />}
  </div>;
};

export default App;

