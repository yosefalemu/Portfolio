import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./app.scss";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Toaster
      toastOptions={{
        style: {
          background: "rgb(51 65 85)",
          color: "#fff",
          fontSize: "14px",
        },
        success: { duration: 4000 },
      }}
    />
    <App />
  </>
);
