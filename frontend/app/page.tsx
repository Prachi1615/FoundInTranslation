"use client";

import SelectLanguage from "@/components/select-language";
import TranslationView from "@/components/translation-view";
import { DynamicWidget, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { useLanguage } from "./lib/providers/language";
// import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
// import { isEthereumWallet } from "@dynamic-labs/ethereum";
// import { useEffect } from "react";
// import abi from "./abi/abi.json";

const App = () => {
  const isLoggedIn = useIsLoggedIn();
  const { targetLanguage, destinationLanguage } = useLanguage();
  // const { primaryWallet } = useDynamicContext();

  // useEffect(() => {
  //   const fetchBalance = async () => {
  //     if (!primaryWallet || !isEthereumWallet(primaryWallet)) return null;

  //     const publicClient = await primaryWallet.getPublicClient();
  //     // const walletClient = await primaryWallet.getWalletClient();
  //     const balance = await publicClient.readContract({
  //       address: primaryWallet.address as `0x${ string }`,
  //       abi, // TODO: abi length mismatch
  //       functionName: "balanceOf",
  //     });

  //     console.log({ balance });
  //   };

  //   if (primaryWallet && isEthereumWallet(primaryWallet)) {
  //     fetchBalance();
  //   }
  // }, [primaryWallet]);

  return <div className={`widget-wrapper ${ isLoggedIn ? "" : "justify-center" }`}>
    <DynamicWidget />
    <h2 className="text-2xl font-bold mb-4">{isLoggedIn ? "Choose your languages" : "Welcome to Found In Translation"}</h2>
    {isLoggedIn && <SelectLanguage />}
    {isLoggedIn && !!targetLanguage && !!destinationLanguage && <TranslationView />}
  </div>;
};

export default App;

