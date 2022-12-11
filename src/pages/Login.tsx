import { LoginForm } from "@/components";
import { createContext, ReactElement, useEffect, useState } from "react";
import { Landing } from "./Landing";

export const TokenContext = createContext<string | null>(null);

export const Login = () => {
  const [token, setToken] = useState<string | null>(null);
  const [startPage, setStartPage] = useState<ReactElement>(
    <LoginForm setToken={setToken} />
  );

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
    if (token) {
      setStartPage(
        <TokenContext.Provider value={token}>
          <Landing />
        </TokenContext.Provider>
      );
    }
  }, [token]);

  return <>{startPage}</>;
};

export default Login;
