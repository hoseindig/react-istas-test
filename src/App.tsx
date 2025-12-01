// ============================================
// FILE: src/App.tsx
// ============================================
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { UserTablePage } from "./pages/UserTablePage";
import { AddUserPage } from "./pages/AddUserPage";
import { SellerTablePage } from "./pages/SellerTablePage";
import { AdminTablePage } from "./pages/AdminTablePage";

import { NotFoundPage } from "./pages/NotFoundPage";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

const cacheRtl = createCache({
  key: "mui-rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",
});

export default function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UserTablePage />} />
              <Route path="/sellers" element={<SellerTablePage />} />
              <Route path="/admins" element={<AdminTablePage />} />
              {/* <Route path="/users/add" element={<AddUserPage />} /> */}

              {/* Reusable Add Page */}
              <Route path="/:step/add" element={<AddUserPage />} />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </CacheProvider>
  );
}
