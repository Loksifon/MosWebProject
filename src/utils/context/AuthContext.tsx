import React, { createContext, useState } from "react";

interface AuthContextProps {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
  setIsAuth: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};
