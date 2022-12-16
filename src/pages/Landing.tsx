import { Header } from "@/components";
import { TokenContext } from "@/context/tokenContext";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

export const Landing = () => {
  const token = useContext(TokenContext);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
