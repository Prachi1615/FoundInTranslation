"use client";

import { useState } from "react";
import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";

const App = () => (
  <DynamicContextProvider
    settings={{
      environmentId: '4ffa98ef-1ebf-4f68-9a03-b1cdb3f55a7e',
      walletConnectors: [ EthereumWalletConnectors ],
    }}>
    <DynamicWidget />
  </DynamicContextProvider>
);

export default App;

