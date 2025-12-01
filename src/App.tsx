// ============================================
// FILE: src/App.tsx
// ============================================
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { UserTablePage } from "./pages/UserTablePage";
import { AddUserPage } from "./pages/AddUserPage";
import { SellerTablePage } from "./pages/SellerTablePage";
import { AdminTablePage } from "./pages/AdminTablePage";

import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
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
  );
}
