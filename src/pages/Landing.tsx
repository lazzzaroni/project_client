import { Header } from "@/components";
import { TokenContext } from "@/context/tokenContext";
import { useContext } from "react";

export const Landing = () => {
  const token = useContext(TokenContext);

  return (
    <>
      <Header />
      <h1>Home page</h1>
      {token ? <p>Token has been saved</p> : null}
    </>
  );
};
