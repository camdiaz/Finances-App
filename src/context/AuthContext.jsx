import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [saludo, setSaludo] = useState("Aun no hay saludo");
  const [ momentoDia, setMomentoDia ] = useState ("No se sabe momento del dia")
  return (
    <AuthContext.Provider
      value={{
        saludo,
        setSaludo, 
        momentoDia, 
        setMomentoDia
      }}
    >
      {children}
    </AuthContext.Provider >
  )
};