import axios from "axios";
import "./App.css";

function App() {
  async function handleCreateUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { name, email, password } = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };

    await axios
      .post(`${import.meta.env.VITE_API_URL}/signup`, {
        name: name.value,
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="App">
      <h1>Create an account</h1>
      <form onSubmit={handleCreateUser}>
        <label htmlFor="user-name">Name</label>
        <input type="text" name="name" id="user-name" />
        <label htmlFor="user-email">Email</label>
        <input type="email" name="email" id="user-email" required />
        <label htmlFor="user-password">Password</label>
        <input type="password" name="password" id="user-password" required />
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default App;
