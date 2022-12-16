import { TokenContext } from "@/context/tokenContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

interface IUser {
  _id: string;
  email: string;
}

export const User = () => {
  const token = useContext(TokenContext);
  const [userData, setUserData] = useState<IUser>();

  const getUserData = async () => {
    if (token) {
      axios
        .get(`${import.meta.env.VITE_API_URL}api/user`, {
          headers: {
            Authorization: `Basic ${token}`,
          },
        })
        .then((res) => {
          setUserData(res.data);
        });
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <p>id: {userData?._id}</p>
      <p>email: {userData?.email}</p>
    </>
  );
};

export default User;
