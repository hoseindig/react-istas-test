// src/pages/AddUserPage.tsx

import { Container, Typography, Paper } from "@mui/material";
import { UserForm } from "../components/forms/UserForm";
import { UserSchema } from "../types/user.types";
import { useUserStore } from "../stores/userStore";
import { useNavigate, useParams } from "react-router-dom";

export const AddUserPage = () => {
  const navigate = useNavigate();
  const { step = "users" } = useParams(); // ← users | admins | sellers
  const { addUser } = useUserStore();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    phone: "",
    city: "",
    position: "",
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4">افزودن عضو در {step}</Typography>

      <Paper sx={{ p: 3, mt: 3 }}>
        <UserForm
          initialValues={initialValues}
          schema={UserSchema.omit({ id: true, createdAt: true })}
          onSubmit={(data) => {
            debugger;
            addUser(data, step);
            navigate(`/${step}`);
          }}
        />
      </Paper>
    </Container>
  );
};
