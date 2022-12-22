import { Header } from "@/components";
import { TokenContext } from "@/context/tokenContext";
import jwtDecode, { JwtPayload } from "jwt-decode";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

interface TokenData extends JwtPayload {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export const Landing = () => {
  const token = useContext(TokenContext);
  const decoded = jwtDecode<TokenData>(token as string);

  return (
    <>
      <Header />
      <Outlet />
      {decoded.name ? (
        <p>{`Hello, ${decoded.name}!`}</p>
      ) : (
        <p>Hello, stranger!</p>
      )}
      {decoded.isAdmin ? <p>You're an Admin, btw 😉</p> : null}
    </>
  );
};
