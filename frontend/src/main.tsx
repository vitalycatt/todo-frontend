import { createRoot } from "react-dom/client";
import { QueryProvider } from "./app/index.ts";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <QueryProvider>
    <App />
  </QueryProvider>,
);
