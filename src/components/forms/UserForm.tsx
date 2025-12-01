// src/components/forms/UserForm.tsx

import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import { z } from "zod";

type Props<T> = {
  initialValues: T;
  schema: z.ZodSchema<T>;
  onSubmit: (data: T) => void;
};

export function UserForm<T extends Record<string, any>>({
  initialValues,
  schema,
  onSubmit,
}: Props<T>) {
  const [formData, setFormData] = React.useState(initialValues);
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  const handleChange = (field: string, value: any) => {
    let parsed = value;

    if (field === "age") {
      // Remove non-numeric characters
      const onlyNumbers = value.replace(/\D/g, "");

      parsed = onlyNumbers === "" ? 0 : Number(onlyNumbers);
    }

    setFormData({ ...formData, [field]: parsed });

    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validated = schema.parse(formData);
      onSubmit(validated);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.issues.forEach((zr) => {
          const key = zr.path[0];
          if (key) fieldErrors[key.toString()] = zr.message;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={3}>
        {Object.keys(initialValues).map((key) => (
          <Grid item xs={12} sm={6} key={key}>
            <TextField
              fullWidth
              label={key}
              value={formData[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              error={!!errors[key]}
              helperText={errors[key]}
            />
          </Grid>
        ))}

        <Grid item xs={12}>
          <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained">
              ذخیره
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
