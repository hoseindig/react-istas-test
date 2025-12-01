// ============================================
// FILE: src/pages/NotFoundPage.tsx
// ============================================

import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const NotFoundPage = () => (
  <Container maxWidth="lg" sx={{ py: 4, textAlign: "center" }}>
    <Typography variant="h2" gutterBottom>
      404
    </Typography>
    <Typography variant="h5" gutterBottom>
      صفحه مورد نظر یافت نشد
    </Typography>
    <Button variant="contained" component={Link} to="/">
      بازگشت به صفحه اصلی
    </Button>
  </Container>
);
