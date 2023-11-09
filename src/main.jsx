import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider.jsx";
import route from "./Route/Route";
import "./index.css";
import { AnimatePresence } from "framer-motion";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={route} />
        </QueryClientProvider>
      </AuthProvider>
    </AnimatePresence>
  </React.StrictMode>
);
