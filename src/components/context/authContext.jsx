import { createContext, useContext } from "react";

const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <authContext.Provider value={{handleSubmit}}>{children}</authContext.Provider>
  );
};
export default AuthProvider;

export const useAuth = () => {
  return useContext(authContext);
};
