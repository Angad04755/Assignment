import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import Navbar from "./layout/Navbar";
import { Store } from "./redux/store";
import { Toaster } from "sonner";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
      <Toaster position="top-center"/>
        <Navbar />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);