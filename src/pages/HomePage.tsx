// ============================================
// FILE: src/pages/HomePage.tsx
// ============================================

import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" gutterBottom>
        خوش آمدید
      </Typography>
      <Typography variant="body1" paragraph>
        این یک نمونه کامل از React با Router، Zustand Store و MUI Data Grid است.
        داده‌ها در step1 ذخیره می‌شوند و 8 ستون دارند.
      </Typography>
      <Button variant="contained" onClick={() => navigate("/users")}>
        مشاهده لیست کاربران
      </Button>
    </Container>
  );
};
