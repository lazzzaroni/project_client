import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleCreateUser(e: React.FormEvent) {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="App">
      <h1>Create an account</h1>
      <form onSubmit={handleCreateUser}>
        <label htmlFor="user-name">Name</label>
        <input
          type="text"
          name="user-name"
          id="user-name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <label htmlFor="user-email">Email</label>
        <input
          type="email"
          name="user-email"
          id="user-email"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
          }}
          value={email}
          required
        />
        <label htmlFor="user-password">Password</label>
        <input
          type="password"
          name="user-password"
          id="user-password"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          value={password}
          required
        />
        <button>Create Account</button>
      </form>
    </div>
  );
}

export default App;
