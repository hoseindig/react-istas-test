// ============================================
// FILE: src/pages/UsersPage.tsx
// ============================================

import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Add as AddIcon } from "@mui/icons-material";
import { UserTable } from "../components/UserTable";
import { useUserStore } from "../stores/userStore";

export const AdminPage = () => {
  const navigate = useNavigate();
  const { data } = useUserStore();
  const users = data.step1;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">لیست مدیران ({users.length})</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/admins/add")}
        >
          افزودن مدیر
        </Button>
      </Box>
      <UserTable />
    </Container>
  );
};
