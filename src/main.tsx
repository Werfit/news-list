import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.tsx";
import { ThemeProvider } from "@mui/material";
import { theme } from "./lib/mui/theme.tsx";
import { Provider } from "react-redux";
import { store } from "./lib/redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
