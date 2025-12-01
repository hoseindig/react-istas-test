// src/components/common/ConfirmDeleteDialog.tsx
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface ConfirmDeleteDialogProps {
  open: boolean;
  title?: string;
  entityName: string; // مثلاً "علی احمدی" یا "فروشنده رضا"
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({
  open,
  title = "آیا از حذف مطمئن هستید؟",
  entityName,
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby="confirm-dialog-title"
    >
      <DialogTitle
        id="confirm-dialog-title"
        sx={{ direction: "rtl", textAlign: "center" }}
      >
        {title}
      </DialogTitle>
      <DialogContent sx={{ direction: "rtl" }}>
        <DialogContentText sx={{ textAlign: "center", fontSize: "1.1rem" }}>
          {entityName} به طور کامل حذف خواهد شد و این عمل{" "}
          <strong>قابل بازگشت نیست</strong>.
        </DialogContentText>
      </DialogContent>
      <DialogActions
        sx={{ direction: "rtl", justifyContent: "center", pb: 3, gap: 2 }}
      >
        <Button onClick={onCancel} variant="outlined" size="large">
          لغو
        </Button>
        <Button
          onClick={onConfirm}
          color="error"
          variant="contained"
          size="large"
          autoFocus
        >
          بله، حذف کن
        </Button>
      </DialogActions>
    </Dialog>
  );
};
