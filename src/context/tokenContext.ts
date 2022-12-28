import { createContext, useContext } from "react";

const TokenContext = createContext<string | null>(null);

const useTokenContext = () => {
  return useContext(TokenContext);
};

export { TokenContext, useTokenContext };
