// ============================================
// FILE: src/components/UserTable.tsx
// ============================================

import React from "react";
import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";
import { Box, Button, Paper } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useUserStore } from "../stores/userStore";

export const UserTable: React.FC = () => {
  const { data, removeUser } = useUserStore();
  const users = data.step1;
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const columns: GridColDef[] = [
    { field: "firstName", headerName: "نام", flex: 1, minWidth: 120 },
    { field: "lastName", headerName: "نام خانوادگی", flex: 1, minWidth: 130 },
    { field: "email", headerName: "ایمیل", flex: 1, minWidth: 180 },
    { field: "age", headerName: "سن", width: 80 },
    { field: "phone", headerName: "تلفن", flex: 1, minWidth: 130 },
    { field: "city", headerName: "شهر", flex: 1, minWidth: 110 },
    { field: "position", headerName: "موقعیت شغلی", flex: 1, minWidth: 150 },
    {
      field: "createdAt",
      headerName: "تاریخ ایجاد",
      flex: 1,
      minWidth: 130,
      valueFormatter: (value) => new Date(value).toLocaleDateString("fa-IR"),
    },
    {
      field: "actions",
      headerName: "عملیات",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => removeUser(params.row.id, "step1")}
        >
          حذف
        </Button>
      ),
    },
  ];

  const rows: GridRowsProp = users.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    age: user.age,
    phone: user.phone,
    city: user.city,
    position: user.position,
    createdAt: user.createdAt,
  }));

  const handleDeleteSelected = () => {
    selectedIds.forEach((id) => removeUser(id, "step1"));
    setSelectedIds([]);
  };

  return (
    <Box>
      <Box sx={{ mb: 2, display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={handleDeleteSelected}
          disabled={selectedIds.length === 0}
        >
          حذف انتخاب شده ({selectedIds.length})
        </Button>
      </Box>

      <Paper sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(newSelection) => {
            setSelectedIds(newSelection as string[]);
          }}
          pageSizeOptions={[5, 10, 25, 50]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
        />
      </Paper>
    </Box>
  );
};
