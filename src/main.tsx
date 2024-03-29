import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { APIProvider } from "./api/index.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <APIProvider>
      <App />
    </APIProvider>
  </React.StrictMode>
);
