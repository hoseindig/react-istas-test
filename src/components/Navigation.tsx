// ============================================
// FILE: src/components/Navigation.tsx
// ============================================

import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Navigation = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        مدیریت کاربران - Step 1
      </Typography>
      <Button color="inherit" component={Link} to="/">
        خانه
      </Button>
      <Button color="inherit" component={Link} to="/users">
        کاربران
      </Button>
    </Toolbar>
  </AppBar>
);
