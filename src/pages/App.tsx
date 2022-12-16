import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Landing } from "./Landing";
import { Login } from "./Login";
import { User } from "./User";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
