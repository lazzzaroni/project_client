import { TokenContext } from "@/context/tokenContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Form } from "react-router-dom";

interface IUser {
  _id: string;
  email: string;
  name?: string;
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
      <Form method="post">
        <label htmlFor="name">
          <span>Name</span>
          <input type="text" name="name" defaultValue={userData?.name} />
        </label>
        <label htmlFor="email">
          <span>Email</span>
          <input
            type="text"
            name="email"
            defaultValue={userData?.email}
            disabled
          />
        </label>
        <button type="submit">Save</button>
      </Form>
    </>
  );
};

export default User;
