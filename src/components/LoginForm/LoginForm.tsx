import axios from "axios";
import "./LoginForm.css";

interface LoginFormProps {
  setToken: Function;
}

export const LoginForm = ({ setToken }: LoginFormProps) => {
  async function handleCreateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;

    const formData = new FormData(target);
    const dataObject = Object.fromEntries(formData);

    await axios
      .post(`${import.meta.env.VITE_API_URL}/signup`, dataObject)
      .then((res) => {
        console.log(res.data);
        if (res.data.token.length > 0) {
          sessionStorage.setItem("token", res.data.token);
          setToken(res.data.token);
        }
      })
      .catch((e) => {
        console.log(e);
      });

    target.reset();
  }

  return (
    <section className="container">
      <h1>Login or create an account</h1>
      <form onSubmit={handleCreateUser}>
        <label htmlFor="user-email">Email</label>
        <input type="email" name="email" id="user-email" required />
        <label htmlFor="user-password">Password</label>
        <input type="password" name="password" id="user-password" required />
        <button>Submit</button>
      </form>
    </section>
  );
};
