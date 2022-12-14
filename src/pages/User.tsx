import { TokenContext } from "@/context/tokenContext";
import axios from "axios";
import { useContext, useEffect } from "react";

export const User = () => {
  const token = useContext(TokenContext);
  const getUserData = async () => {
    if (token) {
      await axios
        .get(`${import.meta.env.VITE_API_URL}api/user`, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((data) => {
          console.log(data);
          JSON.stringify(data);
        });
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return <p>Hello</p>;
};

export default User;
