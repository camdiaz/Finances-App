import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [saludo, setSaludo] = useState("Aun no hay saludo");
  return (
    <AuthContext.Provider
      value={{
        saludo,
        setSaludo
      }}
    >
      {children}
    </AuthContext.Provider >
  )
};