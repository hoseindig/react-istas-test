// src/components/tables/GenericTable.tsx
import React from "react";
import { DataGrid, GridToolbar, type GridColDef } from "@mui/x-data-grid";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { faIR as muiFaIR } from "@mui/material/locale";
import { faIR as dataGridFaIR } from "@mui/x-data-grid/locales";

interface GenericTableProps<T> {
  rows: T[];
  columns: GridColDef[];
  onSelectionChange?: (ids: string[]) => void;
}

export function GenericTable<T extends { id: string }>({
  rows,
  columns,
  onSelectionChange,
}: GenericTableProps<T>) {
  const theme = useTheme();

  const rtlTheme = React.useMemo(
    () =>
      createTheme(
        {
          direction: "rtl",
          // typography: {
          //   fontFamily: "IRANSans, Roboto, Arial, sans-serif",
          // },
        },
        muiFaIR,
        dataGridFaIR
      ),
    []
  );

  return (
    <Paper sx={{ height: 600, width: "100%" }}>
      <div
        dir="rtl"
        style={{ direction: "rtl", width: "100%", height: "100%" }}
      >
        <ThemeProvider theme={rtlTheme}>
          <DataGrid
            rows={rows}
            columns={columns}
            // checkboxSelection
            disableRowSelectionOnClick
            onRowSelectionModelChange={(ids) =>
              onSelectionChange?.(ids as string[])
            }
            pageSizeOptions={[5, 10, 25, 50, 100]}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } },
            }}
            slots={{ toolbar: GridToolbar }}
            sx={{
              "& .MuiDataGrid-withBorderColor": {
                borderColor: "divider",
              },
              ".MuiDataGrid-cell": { justifyContent: "flex-end" },
              ".MuiDataGrid-columnHeaderTitle": { fontWeight: "bold" },
            }}
            componentsProps={{
              basePopper: { style: { direction: "rtl" } },
            }}
          />
        </ThemeProvider>
      </div>
    </Paper>
  );
}
