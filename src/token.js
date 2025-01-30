import React, { createContext, useContext } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children, token }) => (
  <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
);

export const useToken = () => useContext(TokenContext);
