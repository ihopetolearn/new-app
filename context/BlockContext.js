import React from "react";

export const BlockContext1 = React.createContext(); // Export BlockContext

export const Blockprovider = ({ children }) => {
  return <BlockContext1.Provider value={'5'}>{children}</BlockContext1.Provider>; // Add return statement
};