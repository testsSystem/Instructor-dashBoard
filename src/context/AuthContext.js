import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  token: window.localStorage.getItem("token") || null,
  login: (token) => {},
  logout: () => {},
});

export const AuthProvider = (props) => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);

  const login = (token) => {
    setToken(token);
    window.localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };
  const logout = () => {
    setToken(null);
    window.localStorage.removeItem("token");
    setIsAuthenticated(false);
    console.log("fkldasjfl;kja;kj", token);
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        token,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
