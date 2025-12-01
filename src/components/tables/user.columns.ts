import { DataGrid, type GridColDef, type GridRowsProp } from "@mui/x-data-grid";

export const userColumns: GridColDef[] = [
  {
    field: "id",
    headerName: "شناسه",
    width: 340,
    sortable: true,
    filterable: true,
  },
  { field: "firstName", headerName: "نام", flex: 1 },
  { field: "lastName", headerName: "نام خانوادگی", flex: 1 },
  { field: "email", headerName: "ایمیل", flex: 1 },
  { field: "age", headerName: "سن", width: 80 },
  {
    field: "createdAt",
    headerName: "تاریخ ایجاد",
    flex: 1,
    valueFormatter: (value) => new Date(value).toLocaleDateString("fa-IR"),
  },
];
