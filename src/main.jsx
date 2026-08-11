import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { RouterProvider } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { router } from "./App.jsx";
import { markSlice } from "./store/markSlice.js";

const queryClient = new QueryClient();

export const store = configureStore({
  reducer: { mark: markSlice.reducer },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
