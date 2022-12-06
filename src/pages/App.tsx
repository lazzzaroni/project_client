import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Landing } from "./Landing";
import { Login } from "./Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
