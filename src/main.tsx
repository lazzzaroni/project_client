import { lazy, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = lazy(() => import("./pages/App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
