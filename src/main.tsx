import { ErrorBoundary } from "@/components/ErrorBoundary";
import loadable from "@loadable/component";
import { lazy, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = loadable(() => import("./pages/App"));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
