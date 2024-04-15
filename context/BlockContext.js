import React, { useState } from "react";

export const BlockContext1 = React.createContext(); // Export BlockContext

export const Blockprovider = ({ children }) => {
   const [blogPosts, setBlogPosts] = useState([]);
   const addBlogPost = ()=>{
      setBlogPosts ([
         ...blogPosts,{title:`Blog Post#${blogPosts.length +1}`}
      ]);
   }
  return <BlockContext1.Provider value={{data:blogPosts,addBlogPost}}>{children}</BlockContext1.Provider>; // Add return statement
};