import React from "react";
import ReactDOM from "react-dom/client";

import "aos/dist/aos.css";
import "./index.css";
import { RouterProvider, ScrollRestoration } from "react-router-dom";
import router from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./context/AuthProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </AuthProvider>
  </div>
);
