// ============================================
// FILE: src/main.tsx
// ============================================
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const theme = createTheme({
  direction: "rtl",
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
