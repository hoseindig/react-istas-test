// ============================================
// FILE: src/pages/AddUserPage.tsx
// ============================================

import React from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useUserStore } from "../stores/userStore";
import { UserSchema } from "../types/user.types";

export const AddUserPage = () => {
  const navigate = useNavigate();
  const { addUser } = useUserStore();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    age: 0,
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validated = UserSchema.omit({ id: true, createdAt: true }).parse(
        formData
      );
      addUser(validated);
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
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        افزودن کاربر جدید
      </Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 3 }}
        >
          <Box>
            <input
              type="text"
              placeholder="نام"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            {errors.name && (
              <Typography color="error" variant="caption">
                {errors.name}
              </Typography>
            )}
          </Box>

          <Box>
            <input
              type="email"
              placeholder="ایمیل"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            {errors.email && (
              <Typography color="error" variant="caption">
                {errors.email}
              </Typography>
            )}
          </Box>

          <Box>
            <input
              type="number"
              placeholder="سن"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: parseInt(e.target.value) || 0 })
              }
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
            {errors.age && (
              <Typography color="error" variant="caption">
                {errors.age}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button type="submit" variant="contained" fullWidth>
              ذخیره
            </Button>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate("/users")}
            >
              انصراف
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};
