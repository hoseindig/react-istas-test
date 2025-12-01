// src/components/tables/GenericTable.tsx
import React from "react";
import { DataGrid, GridToolbar, type GridColDef } from "@mui/x-data-grid";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";

// درست: لوکال فارسی برای MUI core
import { faIR as muiFaIR } from "@mui/material/locale";

// درست: لوکال فارسی برای DataGrid (نسخه 7 و 8+)
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

  const themeWithLocale = React.useMemo(
    () =>
      createTheme(
        {
          ...theme,
          direction: "rtl",
          palette: {
            mode: theme.palette.mode, // حفظ تم تاریک/روشن
          },
        },
        muiFaIR, // ترجمه کامپوننت‌های اصلی MUI
        dataGridFaIR // ترجمه کامل DataGrid (Toolbar, Pagination, Filters, ...)
      ),
    [theme]
  );

  return (
    <Paper sx={{ height: 600, width: "100%", direction: "rtl" }}>
      <ThemeProvider theme={themeWithLocale}>
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          onRowSelectionModelChange={(ids) =>
            onSelectionChange?.(ids as string[])
          }
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: { printOptions: { disableToolbarButton: true } },
          }}
          // دیگر نیازی به localeText دستی نیست! dataGridFaIR همه چیز رو پوشش می‌ده
        />
      </ThemeProvider>
    </Paper>
  );
}
