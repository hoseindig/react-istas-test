// ============================================
// FILE: src/pages/AddUserPage.tsx
// ============================================

import React from "react";
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useUserStore } from "../stores/userStore";
import { UserSchema } from "../types/user.types";

export const AddUserPage = () => {
  const navigate = useNavigate();
  const { addUser } = useUserStore();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    phone: "",
    city: "",
    position: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleChange = (field: string, value: string | number) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validated = UserSchema.omit({
        id: true,
        createdAt: true,
      }).parse(formData);
      addUser(validated, "step1");
      navigate("/users");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        افزودن کاربر جدید به Step 1
      </Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="نام"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="نام خانوادگی"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="ایمیل"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="تلفن"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="سن"
                type="number"
                value={formData.age}
                onChange={(e) =>
                  handleChange("age", parseInt(e.target.value) || 0)
                }
                error={!!errors.age}
                helperText={errors.age}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="شهر"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                error={!!errors.city}
                helperText={errors.city}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="موقعیت شغلی"
                value={formData.position}
                onChange={(e) => handleChange("position", e.target.value)}
                error={!!errors.position}
                helperText={errors.position}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                <Button variant="outlined" onClick={() => navigate("/users")}>
                  انصراف
                </Button>
                <Button type="submit" variant="contained">
                  ذخیره کاربر
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};
