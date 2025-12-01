// ============================================
// FILE: src/App.tsx
// ============================================

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { UsersPage } from "./pages/UsersPage";
import { AddUserPage } from "./pages/AddUserPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5" }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/add" element={<AddUserPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
