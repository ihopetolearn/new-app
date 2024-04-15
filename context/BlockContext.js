import React from "react";

export const BlockContext1 = React.createContext(); // Export BlockContext

export const Blockprovider = ({ children }) => {
   const blogPosts = [{title:'post#2'},{ title:'post#1'}]
  return <BlockContext1.Provider value={blogPosts}>{children}</BlockContext1.Provider>; // Add return statement
};