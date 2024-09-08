import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrolltoTop from "./ScrolltoTop";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ToastContainer
        theme="light"
        position="bottom-center"
        autoClose={3000}
        closeOnClick
        pauseOnHover={true}
      />
      <ScrolltoTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
